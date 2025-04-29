import React from 'react';
import { motion } from 'framer-motion';

const steps = [
  {
    number: '01',
    title: 'Emotion Detection',
    description: 'Our AI analyzes facial expressions, voice tone, and text sentiment to identify your emotional state during learning.',
    color: 'bg-primary-500',
  },
  {
    number: '02',
    title: 'Pattern Recognition',
    description: 'The system identifies patterns in how your emotions correlate with learning efficiency and knowledge retention.',
    color: 'bg-secondary-500',
  },
  {
    number: '03',
    title: 'Content Adaptation',
    description: 'Learning materials dynamically adjust based on your emotional state to maintain optimal engagement.',
    color: 'bg-accent-500',
  },
  {
    number: '04',
    title: 'Continuous Improvement',
    description: 'The AI tutor learns from your responses and evolves its teaching approach over time.',
    color: 'bg-primary-600',
  },
];

const HowItWorks: React.FC = () => {
  return (
    <section className="py-24 bg-gray-50">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <h2 className="text-3xl font-bold mb-6">How It Works</h2>
          <p className="text-xl text-gray-600">
            Our innovative system combines advanced emotion recognition with 
            adaptive learning techniques to create a uniquely personalized experience.
          </p>
        </motion.div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {steps.map((step, index) => (
            <motion.div
              key={step.number}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white p-8 rounded-xl shadow-lg relative overflow-hidden"
            >
              {/* Step number */}
              <div className="absolute -top-6 -left-6 w-24 h-24 flex items-center justify-center">
                <div className={`${step.color} w-full h-full rounded-full opacity-10`}></div>
                <span className="relative text-3xl font-bold text-gray-300">
                  {step.number}
                </span>
              </div>
              
              {/* Content */}
              <div className="relative ml-6 pt-6">
                <h3 className={`text-xl font-semibold mb-3`}>{step.title}</h3>
                <p className="text-gray-600">{step.description}</p>
              </div>
              
              {/* Decorative accent */}
              <div 
                className={`absolute bottom-0 right-0 w-24 h-1 ${step.color}`}
              ></div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;