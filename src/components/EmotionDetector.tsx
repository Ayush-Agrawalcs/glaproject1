import React, { useRef, useEffect, useState } from 'react';
import Webcam from 'react-webcam';
import * as tf from '@tensorflow/tfjs';
import { FaceDetector, FilesetResolver } from '@mediapipe/face_detection';
import { motion } from 'framer-motion';
import { AlertCircle, Camera, CameraOff } from 'lucide-react';
import VoiceSentimentAnalyzer from './VoiceSentimentAnalyzer';
import AdaptiveLearning from './AdaptiveLearning';

const emotions = ['Angry', 'Disgust', 'Fear', 'Happy', 'Sad', 'Surprise', 'Neutral'];

const EmotionDetector: React.FC = () => {
  const webcamRef = useRef<Webcam>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [isModelLoading, setIsModelLoading] = useState(true);
  const [cameraEnabled, setCameraEnabled] = useState(false);
  const [currentEmotion, setCurrentEmotion] = useState<string>('');
  const [error, setError] = useState<string>('');
  const [voiceSentiment, setVoiceSentiment] = useState<string>('');

  // Initialize models
  useEffect(() => {
    const loadModels = async () => {
      try {
        await tf.ready();
        
        // Load face detection model
        const filesetResolver = await FilesetResolver.forVisionTasks(
          'https://cdn.jsdelivr.net/npm/@mediapipe/tasks-vision@latest/wasm'
        );
        const faceDetector = await FaceDetector.createFromOptions(filesetResolver, {
          baseOptions: {
            modelAssetPath: 'https://storage.googleapis.com/mediapipe-models/face_detector/blaze_face_short_range/float16/1/blaze_face_short_range.tflite',
            delegate: 'GPU'
          },
          runningMode: 'VIDEO'
        });

        // Load emotion detection model
        const emotionModel = await tf.loadLayersModel('/models/emotion_model/model.json');
        
        setIsModelLoading(false);
      } catch (err) {
        setError('Failed to load detection models');
        console.error('Error loading models:', err);
      }
    };

    loadModels();
  }, []);

  // Process video frame
  const detectEmotions = async () => {
    if (!webcamRef.current || !canvasRef.current || !cameraEnabled) return;

    const video = webcamRef.current.video;
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');

    if (!video || !ctx) return;

    // Get video frame
    const frame = tf.browser.fromPixels(video);
    
    try {
      // Detect face
      const faces = await detectFaces(frame);
      
      if (faces.length > 0) {
        // Extract face region
        const [x, y, width, height] = faces[0];
        const faceImage = tf.image.cropAndResize(
          frame.expandDims(),
          [[y, x, y + height, x + width]],
          [0],
          [48, 48]
        );

        // Preprocess for emotion detection
        const grayscale = tf.image.rgbToGrayscale(faceImage);
        const normalized = grayscale.div(255.0);
        
        // Predict emotion
        const prediction = await predictEmotion(normalized);
        const emotionIndex = prediction.argMax().dataSync()[0];
        setCurrentEmotion(emotions[emotionIndex]);

        // Draw face rectangle
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        ctx.strokeStyle = '#4361EE';
        ctx.lineWidth = 2;
        ctx.strokeRect(x, y, width, height);
        
        // Draw emotion label
        ctx.fillStyle = '#4361EE';
        ctx.font = '16px Inter';
        ctx.fillText(emotions[emotionIndex], x, y - 10);
      }

      // Cleanup
      frame.dispose();
    } catch (err) {
      console.error('Error in emotion detection:', err);
    }

    // Continue detection loop
    requestAnimationFrame(detectEmotions);
  };

  const toggleCamera = async () => {
    if (cameraEnabled) {
      setCameraEnabled(false);
    } else {
      try {
        const stream = await navigator.mediaDevices.getUserMedia({ video: true });
        setCameraEnabled(true);
        requestAnimationFrame(detectEmotions);
      } catch (err) {
        setError('Failed to access camera');
        console.error('Camera access error:', err);
      }
    }
  };

  const handleSentimentDetected = (sentiment: string, confidence: number) => {
    setVoiceSentiment(sentiment);
  };
  
  const handleAdaptationChange = (adaptation: string) => {
    // Handle the adaptation change
    console.log('Adaptation changed:', adaptation);
  };

  return (
    <div className="relative max-w-2xl mx-auto">
      {error && (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-4 p-4 bg-red-50 text-red-700 rounded-lg flex items-center"
        >
          <AlertCircle className="h-5 w-5 mr-2" />
          <span>{error}</span>
        </motion.div>
      )}

      <div className="relative aspect-video rounded-xl overflow-hidden bg-gray-900">
        {cameraEnabled && (
          <>
            <Webcam
              ref={webcamRef}
              mirrored
              className="w-full h-full object-cover"
            />
            <canvas
              ref={canvasRef}
              className="absolute inset-0 w-full h-full"
            />
          </>
        )}

        {!cameraEnabled && (
          <div className="absolute inset-0 flex items-center justify-center bg-gray-800">
            <p className="text-gray-400">Camera is disabled</p>
          </div>
        )}

        {/* Camera toggle button */}
        <button
          onClick={toggleCamera}
          disabled={isModelLoading}
          className={`absolute bottom-4 right-4 p-3 rounded-full ${
            cameraEnabled 
              ? 'bg-red-500 hover:bg-red-600' 
              : 'bg-primary-500 hover:bg-primary-600'
          } text-white transition-colors`}
        >
          {cameraEnabled ? (
            <CameraOff className="h-6 w-6" />
          ) : (
            <Camera className="h-6 w-6" />
          )}
        </button>

        {/* Loading overlay */}
        {isModelLoading && (
          <div className="absolute inset-0 bg-gray-900/50 backdrop-blur-sm flex items-center justify-center">
            <div className="text-white text-center">
              <div className="animate-spin rounded-full h-10 w-10 border-b-2 border-white mx-auto mb-4"></div>
              <p>Loading detection models...</p>
            </div>
          </div>
        )}
      </div>

      {/* Emotion display */}
      {currentEmotion && (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mt-4 p-4 bg-white rounded-lg shadow-lg"
        >
          <h3 className="text-lg font-semibold mb-2">Detected Emotion</h3>
          <p className="text-2xl font-bold text-primary-500">{currentEmotion}</p>
        </motion.div>
      )}

      {/* Add voice sentiment analyzer */}
      <div className="mt-8">
        <h3 className="text-lg font-semibold mb-4">Voice Sentiment Analysis</h3>
        <VoiceSentimentAnalyzer onSentimentDetected={handleSentimentDetected} />
      </div>
      
      {/* Add adaptive learning component */}
      <div className="mt-8">
        <AdaptiveLearning
          facialEmotion={currentEmotion}
          voiceSentiment={voiceSentiment}
          onAdaptationChange={handleAdaptationChange}
        />
      </div>
    </div>
  );
};

export default EmotionDetector;