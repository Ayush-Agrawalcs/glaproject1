// Previous DemoPage.tsx content remains the same, but add EmotionDetector
// at the beginning of the Demo Section, just after the hero:

import EmotionDetector from '../components/EmotionDetector';

// ... rest of the imports

const DemoPage: React.FC = () => {
  // ... existing code

  return (
    <div>
      {/* Hero Section */}
      <section className="pt-24 pb-16 bg-gradient-to-b from-gray-50 to-white">
        {/* ... existing hero code ... */}
      </section>
      
      {/* Emotion Detection Demo */}
      <section className="py-16 bg-white">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-8 text-center">
              Experience Real-time Emotion Detection
            </h2>
            <EmotionDetector />
            <p className="mt-8 text-center text-gray-600">
              This demo uses your camera to detect facial expressions in real-time. 
              All processing happens locally in your browser for privacy.
            </p>
          </div>
        </div>
      </section>
      
      {/* Rest of the existing demo page content */}
      {/* ... */}
    </div>
  );
};

export default DemoPage;