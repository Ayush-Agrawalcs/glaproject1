import React from 'react';
import { motion } from 'framer-motion';
import { 
  Users, 
  LightbulbIcon, 
  Compass, 
  Medal,
  BookOpen,
  GraduationCap,
  School
} from 'lucide-react';
import CTA from '../components/CTA';

const AboutPage: React.FC = () => {
  const team = [
    {
      name: "Dr. Emma Wilson",
      role: "Chief AI Officer",
      image: "https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=300",
      bio: "PhD in Machine Learning with a focus on emotion recognition algorithms. Previously led AI research at Stanford's Learning Lab."
    },
    {
      name: "Michael Chen",
      role: "Chief Technology Officer",
      image: "https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=300",
      bio: "20+ years experience in EdTech. Pioneer in adaptive learning systems. Former CTO at LearningScope."
    },
    {
      name: "Aisha Patel",
      role: "Head of Learning Science",
      image: "https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=300",
      bio: "Educational psychologist specializing in emotional intelligence and its impact on learning outcomes."
    },
    {
      name: "David Rodriguez",
      role: "Chief Product Officer",
      image: "https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=300",
      bio: "Former educator with 15 years experience designing user-centered educational products."
    }
  ];

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
              Our <span className="text-primary-500">Mission</span> and <span className="text-primary-500">Story</span>
            </h1>
            <p className="text-xl text-gray-600 mb-8">
              We're on a mission to revolutionize online education by creating learning 
              experiences that adapt to the human emotional experience.
            </p>
          </motion.div>
        </div>
      </section>
      
      {/* Our Story Section */}
      <section className="py-16 bg-white">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-3xl font-bold mb-6">Our Story</h2>
              <div className="space-y-4 text-gray-700">
                <p>
                  EmotionLearn began in 2023 when a team of educators, AI researchers, and 
                  learning scientists came together with a shared frustration: online learning 
                  platforms were failing to address the emotional component of learning.
                </p>
                <p>
                  We recognized that emotions play a crucial role in how effectively people learn, 
                  yet existing platforms treated all learners the same way regardless of their
                  emotional state.
                </p>
                <p>
                  Our founders set out to create a system that could detect subtle emotional cues 
                  and adapt learning content in real-time, providing support when learners were 
                  frustrated and optimizing the experience when they were engaged.
                </p>
                <p>
                  After two years of research and development, we've created a revolutionary 
                  platform that combines cutting-edge emotion recognition AI with adaptive learning 
                  techniques to create truly personalized educational experiences.
                </p>
              </div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="relative"
            >
              <div className="aspect-video bg-gray-200 rounded-2xl overflow-hidden shadow-xl">
                <img 
                  src="https://images.pexels.com/photos/3184339/pexels-photo-3184339.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" 
                  alt="Team collaboration" 
                  className="w-full h-full object-cover"
                />
              </div>
              
              <div className="absolute -bottom-8 -right-8 bg-white p-4 rounded-lg shadow-lg max-w-xs">
                <p className="text-primary-600 font-medium">
                  "We believe education should adapt to the learner, not the other way around."
                </p>
                <p className="text-sm text-gray-500 mt-2">— Dr. Emma Wilson, Co-founder</p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
      
      {/* Mission and Values */}
      <section className="py-20 bg-gray-50">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-center max-w-3xl mx-auto mb-16"
          >
            <h2 className="text-3xl font-bold mb-6">Our Values</h2>
            <p className="text-xl text-gray-600">
              These core principles guide everything we do at EmotionLearn.
            </p>
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="bg-white p-8 rounded-xl shadow-lg"
            >
              <Users className="h-10 w-10 text-primary-500 mb-4" />
              <h3 className="text-xl font-semibold mb-3">Human-Centered Learning</h3>
              <p className="text-gray-600">
                We believe technology should adapt to human needs, not the other way around. 
                Our platform respects the full spectrum of human emotion in the learning process.
              </p>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="bg-white p-8 rounded-xl shadow-lg"
            >
              <LightbulbIcon className="h-10 w-10 text-secondary-500 mb-4" />
              <h3 className="text-xl font-semibold mb-3">Innovation with Purpose</h3>
              <p className="text-gray-600">
                We push technological boundaries not for their own sake, but to create 
                meaningful improvements in how people learn and grow.
              </p>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="bg-white p-8 rounded-xl shadow-lg"
            >
              <Compass className="h-10 w-10 text-accent-500 mb-4" />
              <h3 className="text-xl font-semibold mb-3">Ethical AI</h3>
              <p className="text-gray-600">
                We're committed to developing AI that respects privacy, promotes well-being, 
                and avoids perpetuating biases or harmful practices.
              </p>
            </motion.div>
          </div>
        </div>
      </section>
      
      {/* Team Section */}
      <section className="py-20 bg-white">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-center max-w-3xl mx-auto mb-16"
          >
            <h2 className="text-3xl font-bold mb-6">Meet Our Team</h2>
            <p className="text-xl text-gray-600">
              We've assembled a world-class team of experts in AI, education, 
              and emotional intelligence.
            </p>
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {team.map((member, index) => (
              <motion.div
                key={member.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-gray-50 rounded-xl overflow-hidden shadow-lg"
              >
                <div className="aspect-square overflow-hidden">
                  <img 
                    src={member.image} 
                    alt={member.name}
                    className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-lg font-semibold mb-1">{member.name}</h3>
                  <p className="text-primary-500 font-medium text-sm mb-3">{member.role}</p>
                  <p className="text-gray-600 text-sm">{member.bio}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
      
      {/* Partners and Recognition */}
      <section className="py-20 bg-gray-50">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-center max-w-3xl mx-auto mb-16"
          >
            <h2 className="text-3xl font-bold mb-6">Partners & Recognition</h2>
            <p className="text-xl text-gray-600">
              We're proud to work with leading educational institutions and have received
              recognition for our innovative approach.
            </p>
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="flex items-center justify-center p-6 bg-white rounded-lg shadow-md"
            >
              <BookOpen className="h-10 w-10 text-primary-500 mr-4" />
              <div>
                <h3 className="font-semibold">National Education Alliance</h3>
                <p className="text-sm text-gray-500">Research Partner</p>
              </div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="flex items-center justify-center p-6 bg-white rounded-lg shadow-md"
            >
              <GraduationCap className="h-10 w-10 text-secondary-500 mr-4" />
              <div>
                <h3 className="font-semibold">Global Learning Institute</h3>
                <p className="text-sm text-gray-500">Implementation Partner</p>
              </div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="flex items-center justify-center p-6 bg-white rounded-lg shadow-md"
            >
              <School className="h-10 w-10 text-accent-500 mr-4" />
              <div>
                <h3 className="font-semibold">Future of Education Foundation</h3>
                <p className="text-sm text-gray-500">Strategic Partner</p>
              </div>
            </motion.div>
          </div>
          
          <div className="bg-white p-8 rounded-xl shadow-lg">
            <h3 className="text-xl font-semibold mb-6 text-center">Awards & Recognition</h3>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="flex">
                <div className="mr-4">
                  <Medal className="h-6 w-6 text-amber-500" />
                </div>
                <div>
                  <h4 className="font-medium">2024 EdTech Breakthrough Award</h4>
                  <p className="text-sm text-gray-600">Most Innovative Learning Platform</p>
                </div>
              </div>
              
              <div className="flex">
                <div className="mr-4">
                  <Medal className="h-6 w-6 text-primary-500" />
                </div>
                <div>
                  <h4 className="font-medium">AI Excellence Award</h4>
                  <p className="text-sm text-gray-600">Best Application in Education</p>
                </div>
              </div>
              
              <div className="flex">
                <div className="mr-4">
                  <Medal className="h-6 w-6 text-secondary-500" />
                </div>
                <div>
                  <h4 className="font-medium">Learning Impact Award</h4>
                  <p className="text-sm text-gray-600">Gold Medal for Innovation</p>
                </div>
              </div>
              
              <div className="flex">
                <div className="mr-4">
                  <Medal className="h-6 w-6 text-accent-500" />
                </div>
                <div>
                  <h4 className="font-medium">Global EdTech Startup Award</h4>
                  <p className="text-sm text-gray-600">Most Promising New Technology</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      <CTA />
    </div>
  );
};

export default AboutPage;