import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ChevronLeft, ChevronRight, Quote } from 'lucide-react';

const testimonials = [
  {
    id: 1,
    quote: "The emotion recognition feature helped me identify when I was getting frustrated with complex topics, and the adaptive content made learning calculus much more manageable.",
    name: "Ayush Agrawal",
    role: "University Student",
    image: "https://as2.ftcdn.net/jpg/02/97/17/03/220_F_297170390_FqLV6jaNz8fxpofkL42pfhMbCGUlR1OX.jpg"
  },
  {
    id: 2,
    quote: "The emotion recognition feature helped me identify when I was getting frustrated with complex topics, and the adaptive content made learning calculus much more manageable.",
    name: "Priyanshu Bhardwaj",
    role: "University Student",
    image: "https://as2.ftcdn.net/jpg/02/97/17/03/220_F_297170390_FqLV6jaNz8fxpofkL42pfhMbCGUlR1OX.jpg"
  },
  {
    id: 3,
    quote: "The emotion recognition feature helped me identify when I was getting frustrated with complex topics, and the adaptive content made learning calculus much more manageable.",
    name: "Sachin Kumar",
    role: "University Student",
    image: "https://as2.ftcdn.net/jpg/02/97/17/03/220_F_297170390_FqLV6jaNz8fxpofkL42pfhMbCGUlR1OX.jpg"
  }
];

const Testimonials: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextTestimonial = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1
    );
  };

  const prevTestimonial = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1
    );
  };

  return (
    <section className="py-24 bg-gradient-to-br from-primary-50 to-secondary-50">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <h2 className="text-3xl font-bold mb-6">What Our Users Say</h2>
          <p className="text-xl text-gray-600">
            Discover how EmotionLearn is transforming education for students and educators alike.
          </p>
        </motion.div>

        <div className="max-w-4xl mx-auto relative">
          <div className="overflow-hidden">
            <motion.div
              key={currentIndex}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.5 }}
              className="bg-white p-8 md:p-12 rounded-2xl shadow-xl"
            >
              <div className="flex flex-col md:flex-row gap-8 items-center">
                <div className="shrink-0">
                  <div className="relative">
                    <div className="w-24 h-24 rounded-full overflow-hidden ring-4 ring-primary-100">
                      <img 
                        src={testimonials[currentIndex].image} 
                        alt={testimonials[currentIndex].name}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div className="absolute -bottom-3 -right-3 bg-primary-500 p-2 rounded-full text-white">
                      <Quote size={16} />
                    </div>
                  </div>
                </div>
                
                <div>
                  <p className="text-lg text-gray-600 italic mb-6">
                    "{testimonials[currentIndex].quote}"
                  </p>
                  
                  <div>
                    <h4 className="text-xl font-semibold text-gray-900">
                      {testimonials[currentIndex].name}
                    </h4>
                    <p className="text-gray-500">
                      {testimonials[currentIndex].role}
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
          
          {/* Navigation buttons */}
          <div className="flex justify-center mt-8 space-x-4">
            <button
              onClick={prevTestimonial}
              className="p-2 rounded-full bg-white shadow-md text-gray-700 hover:text-primary-500 transition-colors"
              aria-label="Previous testimonial"
            >
              <ChevronLeft size={24} />
            </button>
            
            <div className="flex items-center space-x-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentIndex(index)}
                  className={`w-3 h-3 rounded-full transition-colors ${
                    index === currentIndex ? 'bg-primary-500' : 'bg-gray-300'
                  }`}
                  aria-label={`Go to testimonial ${index + 1}`}
                />
              ))}
            </div>
            
            <button
              onClick={nextTestimonial}
              className="p-2 rounded-full bg-white shadow-md text-gray-700 hover:text-primary-500 transition-colors"
              aria-label="Next testimonial"
            >
              <ChevronRight size={24} />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;