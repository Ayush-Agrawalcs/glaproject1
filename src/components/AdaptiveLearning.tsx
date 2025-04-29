import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { Brain, Lightbulb, AlertCircle } from 'lucide-react';

interface AdaptiveLearningProps {
  facialEmotion: string;
  voiceSentiment: string;
  onAdaptationChange: (adaptation: string) => void;
}

const AdaptiveLearning: React.FC<AdaptiveLearningProps> = ({
  facialEmotion,
  voiceSentiment,
  onAdaptationChange
}) => {
  const [currentState, setCurrentState] = useState<string>('neutral');
  const [adaptation, setAdaptation] = useState<string>('');
  const [reward, setReward] = useState<number>(0);
  
  // Simple Q-learning implementation
  const qTable = new Map<string, Map<string, number>>();
  const learningRate = 0.1;
  const discountFactor = 0.9;
  
  const actions = [
    'simplify_content',
    'provide_examples',
    'interactive_exercise',
    'take_break',
    'continue_current'
  ];
  
  useEffect(() => {
    // Initialize Q-table
    const emotionStates = ['neutral', 'positive', 'negative', 'confused', 'frustrated'];
    emotionStates.forEach(state => {
      qTable.set(state, new Map());
      actions.forEach(action => {
        qTable.get(state)?.set(action, 0);
      });
    });
  }, []);
  
  useEffect(() => {
    // Combine facial and voice emotions for state determination
    const newState = determineEmotionalState(facialEmotion, voiceSentiment);
    setCurrentState(newState);
    
    // Select action using epsilon-greedy policy
    const selectedAction = selectAction(newState);
    setAdaptation(selectedAction);
    onAdaptationChange(selectedAction);
    
    // Update Q-values based on reward
    updateQValues(currentState, selectedAction, newState, reward);
  }, [facialEmotion, voiceSentiment]);
  
  const determineEmotionalState = (facial: string, voice: string): string => {
    // Combine facial and voice emotions using a weighted approach
    // This is a simplified version - real implementation would be more sophisticated
    if (facial === 'Frustrated' || voice === 'Frustrated') return 'frustrated';
    if (facial === 'Confused' || voice === 'Confused') return 'confused';
    if (facial === 'Happy' || voice === 'Positive') return 'positive';
    if (facial === 'Sad' || voice === 'Negative') return 'negative';
    return 'neutral';
  };
  
  const selectAction = (state: string): string => {
    // Epsilon-greedy action selection
    const epsilon = 0.1;
    
    if (Math.random() < epsilon) {
      // Explore: choose random action
      return actions[Math.floor(Math.random() * actions.length)];
    } else {
      // Exploit: choose best action
      const stateActions = qTable.get(state);
      if (!stateActions) return 'continue_current';
      
      let bestAction = 'continue_current';
      let bestValue = -Infinity;
      
      stateActions.forEach((value, action) => {
        if (value > bestValue) {
          bestValue = value;
          bestAction = action;
        }
      });
      
      return bestAction;
    }
  };
  
  const updateQValues = (
    state: string,
    action: string,
    nextState: string,
    reward: number
  ) => {
    const currentQ = qTable.get(state)?.get(action) || 0;
    const nextStateActions = qTable.get(nextState);
    
    if (!nextStateActions) return;
    
    const maxNextQ = Math.max(...Array.from(nextStateActions.values()));
    
    const newQ = currentQ + learningRate * (
      reward + discountFactor * maxNextQ - currentQ
    );
    
    qTable.get(state)?.set(action, newQ);
  };
  
  return (
    <div className="bg-white rounded-xl shadow-lg p-6">
      <div className="flex items-center mb-4">
        <Brain className="h-6 w-6 text-primary-500 mr-2" />
        <h3 className="text-lg font-semibold">Adaptive Learning System</h3>
      </div>
      
      <div className="space-y-4">
        <div className="flex items-center justify-between">
          <span className="text-gray-600">Current State:</span>
          <span className="font-medium capitalize">{currentState}</span>
        </div>
        
        <div className="border-t border-gray-100 pt-4">
          <div className="flex items-start">
            <Lightbulb className="h-5 w-5 text-primary-500 mt-1 mr-2" />
            <div>
              <h4 className="font-medium mb-2">Recommended Adaptation:</h4>
              <motion.div
                key={adaptation}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                className="p-3 bg-primary-50 rounded-lg"
              >
                <p className="text-primary-700">
                  {adaptation === 'simplify_content' && 'Simplifying content for better understanding'}
                  {adaptation === 'provide_examples' && 'Providing relevant examples'}
                  {adaptation === 'interactive_exercise' && 'Switching to interactive exercises'}
                  {adaptation === 'take_break' && 'Suggesting a short break'}
                  {adaptation === 'continue_current' && 'Continuing with current approach'}
                </p>
              </motion.div>
            </div>
          </div>
        </div>
        
        {currentState === 'frustrated' && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="flex items-start mt-4 p-3 bg-amber-50 rounded-lg"
          >
            <AlertCircle className="h-5 w-5 text-amber-500 mt-1 mr-2" />
            <p className="text-amber-700">
              Taking a short break might help refresh your mind and improve learning effectiveness.
            </p>
          </motion.div>
        )}
      </div>
    </div>
  );
};

export default AdaptiveLearning;