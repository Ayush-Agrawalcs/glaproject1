import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

const CTA: React.FC = () => {
  return (
    <section className="py-24 bg-primary-500 relative overflow-hidden">
      {/* Decorative background elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <div className="absolute top-[10%] right-[5%] w-64 h-64 bg-primary-400 rounded-full mix-blend-lighten opacity-20"></div>
        <div className="absolute bottom-[15%] left-[10%] w-48 h-48 bg-accent-500 rounded-full mix-blend-lighten opacity-20"></div>
        <div className="absolute top-[40%] left-[25%] w-32 h-32 bg-secondary-500 rounded-full mix-blend-lighten opacity-10"></div>
      </div>
      
      <div className="container-custom relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="max-w-4xl mx-auto text-center text-white"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Ready to Transform Your Learning Experience?
          </h2>
          
          <p className="text-xl text-primary-100 mb-10 max-w-2xl mx-auto">
            Join thousands of students and educators already using EmotionLearn 
            to create more effective, personalized learning experiences.
          </p>
          
          <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-6">
            <Link
              to="/demo"
              className="btn bg-white text-primary-600 hover:bg-primary-50 group"
            >
              Try Free Demo
              <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
            </Link>
            
            <Link
              to="/about"
              className="btn border-2 border-white text-white hover:bg-primary-400"
            >
              Learn More
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default CTA;