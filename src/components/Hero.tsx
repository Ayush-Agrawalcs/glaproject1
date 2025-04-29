import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import EmotionBrain from './EmotionBrain';

const Hero: React.FC = () => {
  return (
    <section className="relative py-20 overflow-hidden bg-gradient-to-b from-gray-50 to-gray-100">
      <div className="container-custom">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center lg:text-left"
          >
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight mb-6">
              Learn Smarter with{' '}
              <span className="text-primary-500">Emotion-Aware</span>{' '}
              AI Tutoring
            </h1>
            
            <p className="text-xl text-gray-700 mb-8 max-w-lg mx-auto lg:mx-0">
              Our revolutionary platform adapts to your emotional state in real-time, 
              providing personalized learning experiences that enhance engagement and 
              improve knowledge retention.
            </p>
            
            <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4 justify-center lg:justify-start">
              <Link 
                to="/demo" 
                className="btn btn-primary text-lg group"
              >
                Try Demo
                <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
              </Link>
              
              <Link 
                to="/features" 
                className="btn btn-outline text-lg"
              >
                Learn More
              </Link>
            </div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex justify-center"
          >
            <div className="relative w-full max-w-md">
              <div className="absolute inset-0 bg-gradient-to-r from-primary-500/20 to-secondary-500/20 rounded-full filter blur-3xl opacity-70"></div>
              <div className="relative">
                <EmotionBrain />
              </div>
            </div>
          </motion.div>
        </div>
      </div>
      
      {/* Decorative elements */}
      <div className="absolute top-20 right-0 w-64 h-64 bg-accent-500/10 rounded-full filter blur-3xl"></div>
      <div className="absolute bottom-10 left-10 w-40 h-40 bg-primary-500/10 rounded-full filter blur-3xl"></div>
    </section>
  );
};

export default Hero;