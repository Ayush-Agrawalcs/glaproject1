import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { Brain } from 'lucide-react';

// Emotion nodes that will pulse at different rates
const emotions = [
  { id: 1, name: 'Joy', color: '#FFD700', x: '20%', y: '30%', delay: 0 },
  { id: 2, name: 'Curiosity', color: '#4361EE', x: '70%', y: '25%', delay: 1.1 },
  { id: 3, name: 'Confusion', color: '#FF7F50', x: '80%', y: '60%', delay: 0.7 },
  { id: 4, name: 'Focus', color: '#2EC4B6', x: '30%', y: '75%', delay: 1.5 },
  { id: 5, name: 'Frustration', color: '#E53E3E', x: '60%', y: '85%', delay: 0.3 },
];

const EmotionBrain: React.FC = () => {
  const [activeEmotion, setActiveEmotion] = useState<string | null>(null);
  
  // Cycle through emotions for the demo
  useEffect(() => {
    const interval = setInterval(() => {
      const randomEmotion = emotions[Math.floor(Math.random() * emotions.length)];
      setActiveEmotion(randomEmotion.name);
      
      // Clear after 2 seconds
      setTimeout(() => setActiveEmotion(null), 2000);
    }, 4000);
    
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative h-[500px] w-full">
      {/* Brain container */}
      <motion.div
        initial={{ scale: 0.9, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 1 }}
        className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
      >
        <div className="relative h-64 w-64">
          <Brain className="h-full w-full text-primary-400" />
          
          {/* Pulsing circle behind brain */}
          <motion.div
            animate={{ 
              scale: [1, 1.1, 1],
              opacity: [0.7, 0.9, 0.7]
            }}
            transition={{ 
              repeat: Infinity,
              duration: 4,
              ease: "easeInOut"
            }}
            className="absolute inset-0 rounded-full bg-primary-500/20 -z-10"
          />
        </div>
      </motion.div>
      
      {/* Emotion nodes */}
      {emotions.map((emotion) => (
        <motion.div
          key={emotion.id}
          initial={{ scale: 0, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ delay: emotion.delay * 0.3, duration: 0.5 }}
          style={{ 
            left: emotion.x, 
            top: emotion.y, 
            backgroundColor: emotion.color 
          }}
          className={`absolute h-6 w-6 rounded-full flex items-center justify-center
                     cursor-pointer z-10 shadow-lg ${
                       activeEmotion === emotion.name ? 'ring-4 ring-white' : ''
                     }`}
        >
          <motion.div
            animate={{ 
              scale: [1, 1.2, 1],
              opacity: [0.7, 1, 0.7]
            }}
            transition={{ 
              repeat: Infinity,
              duration: 3 + emotion.delay,
              ease: "easeInOut"
            }}
            className="absolute inset-0 rounded-full"
            style={{ backgroundColor: emotion.color, opacity: 0.4 }}
          />
          
          {/* Connecting lines to brain */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.5 }}
            transition={{ delay: emotion.delay * 0.3 + 0.3, duration: 0.5 }}
            className="absolute top-1/2 left-1/2 w-[150px] h-[1px] origin-left"
            style={{ 
              backgroundColor: emotion.color,
              transform: `translate(-50%, -50%) rotate(${Math.atan2(
                50 - parseFloat(emotion.y), 
                50 - parseFloat(emotion.x)
              ) * (180 / Math.PI)}deg)`
            }}
          />
          
          {/* Emotion label */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: emotion.delay * 0.3 + 0.5 }}
            className={`absolute whitespace-nowrap text-xs font-medium px-2 py-1 rounded ${
              parseFloat(emotion.x) > 50 ? '-left-2 -translate-x-full' : 'left-8'
            } ${
              parseFloat(emotion.y) > 50 ? 'top-0 -translate-y-full' : 'top-0'
            }`}
            style={{ 
              backgroundColor: emotion.color,
              color: ['#FFD700', '#FF7F50'].includes(emotion.color) ? '#000' : '#fff'
            }}
          >
            {emotion.name}
          </motion.div>
        </motion.div>
      ))}
      
      {/* Floating status indicator */}
      {activeEmotion && (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0 }}
          className="absolute bottom-4 left-1/2 transform -translate-x-1/2 bg-white/90 backdrop-blur-sm px-4 py-2 rounded-full shadow-lg"
        >
          <p className="text-gray-800 font-medium">
            Detected: <span className="text-primary-500 font-semibold">{activeEmotion}</span>
          </p>
        </motion.div>
      )}
    </div>
  );
};

export default EmotionBrain;