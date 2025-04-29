import React, { useEffect, useRef, useState } from 'react';
import * as tf from '@tensorflow/tfjs';
import { motion } from 'framer-motion';
import { Mic, MicOff, AudioWaveform as Waveform } from 'lucide-react';

interface VoiceSentimentAnalyzerProps {
  onSentimentDetected: (sentiment: string, confidence: number) => void;
}

const VoiceSentimentAnalyzer: React.FC<VoiceSentimentAnalyzerProps> = ({ onSentimentDetected }) => {
  const [isRecording, setIsRecording] = useState(false);
  const [model, setModel] = useState<tf.LayersModel | null>(null);
  const [isModelLoading, setIsModelLoading] = useState(true);
  const [error, setError] = useState<string>('');
  
  const audioContext = useRef<AudioContext | null>(null);
  const mediaRecorder = useRef<MediaRecorder | null>(null);
  const analyser = useRef<AnalyserNode | null>(null);
  const dataArray = useRef<Float32Array | null>(null);
  
  // Load LSTM model
  useEffect(() => {
    const loadModel = async () => {
      try {
        const loadedModel = await tf.loadLayersModel('/models/voice_sentiment/model.json');
        setModel(loadedModel);
        setIsModelLoading(false);
      } catch (err) {
        setError('Failed to load voice sentiment model');
        console.error('Model loading error:', err);
      }
    };
    
    loadModel();
  }, []);
  
  const startRecording = async () => {
    try {
      const stream = await navigator.mediaDevices.getUserMedia({ audio: true });
      
      audioContext.current = new AudioContext();
      const source = audioContext.current.createMediaStreamSource(stream);
      analyser.current = audioContext.current.createAnalyser();
      analyser.current.fftSize = 2048;
      
      source.connect(analyser.current);
      dataArray.current = new Float32Array(analyser.current.frequencyBinCount);
      
      mediaRecorder.current = new MediaRecorder(stream);
      mediaRecorder.current.start();
      
      setIsRecording(true);
      analyzeSentiment();
    } catch (err) {
      setError('Failed to access microphone');
      console.error('Microphone access error:', err);
    }
  };
  
  const stopRecording = () => {
    if (mediaRecorder.current && audioContext.current) {
      mediaRecorder.current.stop();
      audioContext.current.close();
      setIsRecording(false);
    }
  };
  
  const analyzeSentiment = async () => {
    if (!analyser.current || !dataArray.current || !model || !isRecording) return;
    
    // Get audio data
    analyser.current.getFloatTimeDomainData(dataArray.current);
    
    // Preprocess audio features
    const features = extractAudioFeatures(dataArray.current);
    
    // Predict sentiment
    const prediction = model.predict(features) as tf.Tensor;
    const [sentiment, confidence] = await getSentimentFromPrediction(prediction);
    
    onSentimentDetected(sentiment, confidence);
    
    if (isRecording) {
      requestAnimationFrame(analyzeSentiment);
    }
  };
  
  const extractAudioFeatures = (audioData: Float32Array) => {
    // Extract MFCC features from audio data
    const features = tf.tidy(() => {
      const signal = tf.tensor1d(audioData);
      // Apply preprocessing steps (windowing, FFT, etc.)
      // This is a simplified version - real implementation would include proper MFCC extraction
      return signal.expandDims(0);
    });
    
    return features;
  };
  
  const getSentimentFromPrediction = async (prediction: tf.Tensor): Promise<[string, number]> => {
    const probabilities = await prediction.data();
    const maxProb = Math.max(...probabilities);
    const sentimentIndex = probabilities.indexOf(maxProb);
    
    const sentiments = ['Neutral', 'Positive', 'Negative', 'Frustrated', 'Confused'];
    return [sentiments[sentimentIndex], maxProb];
  };
  
  return (
    <div className="relative">
      {error && (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-4 p-4 bg-red-50 text-red-700 rounded-lg flex items-center"
        >
          <span>{error}</span>
        </motion.div>
      )}
      
      <div className="flex items-center justify-center space-x-4">
        <button
          onClick={isRecording ? stopRecording : startRecording}
          disabled={isModelLoading}
          className={`p-4 rounded-full ${
            isRecording 
              ? 'bg-red-500 hover:bg-red-600' 
              : 'bg-primary-500 hover:bg-primary-600'
          } text-white transition-colors`}
        >
          {isRecording ? (
            <MicOff className="h-6 w-6" />
          ) : (
            <Mic className="h-6 w-6" />
          )}
        </button>
        
        {isRecording && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="flex items-center space-x-2"
          >
            <Waveform className="h-6 w-6 text-primary-500" />
            <span className="text-primary-500 font-medium">Listening...</span>
          </motion.div>
        )}
      </div>
      
      {isModelLoading && (
        <div className="absolute inset-0 bg-white/50 backdrop-blur-sm flex items-center justify-center">
          <div className="text-center">
            <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-primary-500 mx-auto mb-2"></div>
            <p className="text-gray-600">Loading voice model...</p>
          </div>
        </div>
      )}
    </div>
  );
};

export default VoiceSentimentAnalyzer;