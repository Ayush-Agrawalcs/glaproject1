import React from 'react';
import { motion } from 'framer-motion';
import { 
  Brain, 
  LineChart, 
  Sparkles, 
  UserCircle, 
  BarChart3, 
  Lightbulb,
  ArrowUpRight,
  Shield,
  Gauge,
  Zap
} from 'lucide-react';
import Features from '../components/Features';
import CTA from '../components/CTA';

const FeatureDetailCard: React.FC<{
  title: string;
  description: string;
  icon: React.ReactNode;
  points: string[];
  reversed?: boolean;
  color: string;
}> = ({ title, description, icon, points, reversed = false, color }) => {
  return (
    <div className={`flex flex-col ${reversed ? 'lg:flex-row-reverse' : 'lg:flex-row'} gap-12 my-20`}>
      <motion.div
        initial={{ opacity: 0, x: reversed ? 20 : -20 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="lg:w-1/2"
      >
        <div className={`${color} w-16 h-16 rounded-xl flex items-center justify-center text-white mb-6`}>
          {icon}
        </div>
        <h3 className="text-3xl font-bold mb-4">{title}</h3>
        <p className="text-xl text-gray-600 mb-8">{description}</p>
        <ul className="space-y-4">
          {points.map((point, index) => (
            <li key={index} className="flex">
              <div className={`${color} rounded-full p-1 mr-3 mt-1`}>
                <ArrowUpRight size={14} className="text-white" />
              </div>
              <span className="text-gray-700">{point}</span>
            </li>
          ))}
        </ul>
      </motion.div>
      
      <motion.div
        initial={{ opacity: 0, x: reversed ? -20 : 20 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="lg:w-1/2 flex items-center justify-center"
      >
        <div className="relative w-full aspect-square max-w-md">
          <div className={`absolute inset-0 ${color.replace('bg-', 'bg-')} opacity-10 rounded-2xl blur-2xl`}></div>
          <div className="relative h-full w-full rounded-2xl bg-white shadow-xl overflow-hidden">
            {/* This would be a detailed feature image/illustration */}
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="text-8xl text-gray-200">{icon}</div>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

const FeaturesPage: React.FC = () => {
  return (
    <div>
      {/* Hero Section */}
      <section className="pt-24 pb-16 bg-gradient-to-b from-gray-50 to-white">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-4xl mx-auto"
          >
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Features Designed for <span className="text-primary-500">Better Learning</span>
            </h1>
            <p className="text-xl text-gray-600 mb-8">
              Explore how our emotion-aware platform enhances every aspect of the learning experience 
              through advanced AI and adaptive content delivery.
            </p>
          </motion.div>
        </div>
      </section>
      
      {/* Main Features Overview */}
      <section className="py-8">
        <div className="container-custom">
          <Features />
        </div>
      </section>
      
      {/* Detailed Feature Sections */}
      <section className="py-16 bg-white">
        <div className="container-custom">
          <FeatureDetailCard
            title="Emotion Recognition"
            description="Our advanced AI analyzes facial expressions, voice tone, and typing patterns to understand your emotional state while learning."
            icon={<Brain size={32} />}
            color="bg-primary-500"
            points={[
              "Real-time facial expression analysis to detect engagement, confusion, frustration, and more",
              "Voice tone analysis for verbal interactions and questions",
              "Keyboard usage patterns that indicate emotional states",
              "Privacy-focused processing with all data remaining on your device"
            ]}
          />
          
          <FeatureDetailCard
            title="Adaptive Learning Paths"
            description="Content that dynamically adjusts to your emotional state, learning pace, and comprehension level."
            icon={<Sparkles size={32} />}
            color="bg-secondary-500"
            reversed={true}
            points={[
              "Automatic content adjustment when frustration or confusion is detected",
              "Pace adjustments based on emotional engagement levels",
              "Alternative explanation methods when current approach isn't connecting",
              "Celebration and reinforcement when positive emotions are detected during breakthroughs"
            ]}
          />
          
          <FeatureDetailCard
            title="Comprehensive Analytics"
            description="Detailed insights into how emotions affect learning performance and knowledge retention."
            icon={<BarChart3 size={32} />}
            color="bg-accent-500"
            points={[
              "Emotional engagement tracking across different subjects and topics",
              "Correlation analysis between emotional states and test performance",
              "Identification of emotional blockers for specific learning concepts",
              "Long-term patterns and recommendations for optimal learning conditions"
            ]}
          />
          
          <FeatureDetailCard
            title="Performance Optimization"
            description="Tools and techniques to improve learning efficiency based on emotional intelligence."
            icon={<Gauge size={32} />}
            color="bg-primary-600"
            reversed={true}
            points={[
              "Personalized study schedules optimized for your emotional patterns",
              "Break recommendations when emotional fatigue is detected",
              "Subject sequencing based on emotional engagement history",
              "Motivation boosting interventions when engagement drops"
            ]}
          />
        </div>
      </section>
      
      {/* Technical Specifications */}
      <section className="py-20 bg-gray-50">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-center max-w-3xl mx-auto mb-16"
          >
            <h2 className="text-3xl font-bold mb-6">Technical Excellence</h2>
            <p className="text-xl text-gray-600">
              Built with cutting-edge technology to ensure reliability, security, and exceptional performance.
            </p>
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="bg-white p-6 rounded-xl shadow-lg"
            >
              <div className="bg-primary-500 w-12 h-12 rounded-full flex items-center justify-center text-white mb-4">
                <Shield size={24} />
              </div>
              <h3 className="text-xl font-semibold mb-3">Privacy-First Design</h3>
              <p className="text-gray-600">
                All emotion processing happens locally on your device, with strict data controls and encryption for any cloud-synced information.
              </p>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="bg-white p-6 rounded-xl shadow-lg"
            >
              <div className="bg-secondary-500 w-12 h-12 rounded-full flex items-center justify-center text-white mb-4">
                <Zap size={24} />
              </div>
              <h3 className="text-xl font-semibold mb-3">Lightning Fast</h3>
              <p className="text-gray-600">
                Optimized algorithms provide real-time emotion recognition and content adaptation with minimal latency, even on lower-powered devices.
              </p>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="bg-white p-6 rounded-xl shadow-lg"
            >
              <div className="bg-accent-500 w-12 h-12 rounded-full flex items-center justify-center text-white mb-4">
                <Brain size={24} />
              </div>
              <h3 className="text-xl font-semibold mb-3">AI Excellence</h3>
              <p className="text-gray-600">
                Our emotion recognition engine is trained on diverse datasets and continuously improves through federated learning techniques.
              </p>
            </motion.div>
          </div>
        </div>
      </section>
      
      <CTA />
    </div>
  );
};

export default FeaturesPage;