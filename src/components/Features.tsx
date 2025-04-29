import React from 'react';
import { motion } from 'framer-motion';
import { 
  Brain, 
  LineChart, 
  Sparkles, 
  UserCircle, 
  BarChart3, 
  Lightbulb 
} from 'lucide-react';
import FeatureCard from './FeatureCard';

const Features: React.FC = () => {
  return (
    <section className="py-24 bg-white" id="features">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <h2 className="text-3xl font-bold mb-6">
            Powerful Features for an Enhanced Learning Experience
          </h2>
          <p className="text-xl text-gray-600">
            Our platform combines cutting-edge emotion recognition technology with 
            adaptive learning paths to create a truly personalized educational experience.
          </p>
        </motion.div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <FeatureCard
            icon={Brain}
            title="Emotion Recognition"
            description="Our system detects subtle emotional cues through facial expressions, voice tone, and text sentiment analysis."
            color="bg-primary-500"
            delay={0.1}
          />
          
          <FeatureCard
            icon={Sparkles}
            title="Adaptive Content"
            description="Learning materials automatically adjust based on your emotional state to maximize engagement and retention."
            color="bg-secondary-500"
            delay={0.2}
          />
          
          <FeatureCard
            icon={UserCircle}
            title="Personalized Learning"
            description="Custom learning paths that adapt not just to your knowledge level, but also to your emotional preferences."
            color="bg-accent-500"
            delay={0.3}
          />
          
          <FeatureCard
            icon={LineChart}
            title="Progress Tracking"
            description="Comprehensive analytics that show your learning progress alongside emotional engagement patterns."
            color="bg-primary-600"
            delay={0.4}
          />
          
          <FeatureCard
            icon={BarChart3}
            title="Engagement Analytics"
            description="Detailed insights into how emotions affect your learning performance and knowledge retention."
            color="bg-secondary-600"
            delay={0.5}
          />
          
          <FeatureCard
            icon={Lightbulb}
            title="Smart Recommendations"
            description="AI-powered suggestions for learning content that best matches your emotional learning style."
            color="bg-accent-600"
            delay={0.6}
          />
        </div>
      </div>
    </section>
  );
};

export default Features;