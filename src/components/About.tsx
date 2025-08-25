import React from 'react';
import { Award, Target, Heart, Lightbulb } from 'lucide-react';

const About = () => {
  const values = [
    {
      icon: Award,
      title: 'Excellence',
      description: 'Committed to maintaining the highest standards in education and student achievement.'
    },
    {
      icon: Target,
      title: 'Goal-Oriented',
      description: 'Focused approach to help students achieve their academic and career objectives.'
    },
    {
      icon: Heart,
      title: 'Caring Environment',
      description: 'Nurturing and supportive atmosphere that encourages growth and learning.'
    },
    {
      icon: Lightbulb,
      title: 'Innovation',
      description: 'Modern teaching methods and technology-enhanced learning experiences.'
    }
  ];

  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Content */}
          <div className="space-y-8">
            <div className="space-y-4">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
                About Gurgaon Academy
              </h2>
              <p className="text-lg text-gray-600 leading-relaxed">
                For over 15 years, Gurgaon Academy has been a beacon of educational excellence, 
                nurturing young minds and shaping future leaders. Our commitment to quality 
                education and holistic development has made us one of the most trusted 
                educational institutions in the region.
              </p>
              <p className="text-lg text-gray-600 leading-relaxed">
                We believe in creating an environment where students can explore their potential, 
                develop critical thinking skills, and prepare for the challenges of tomorrow. 
                Our experienced faculty and modern infrastructure provide the perfect foundation 
                for academic success.
              </p>
            </div>

            {/* Mission Statement */}
            <div className="bg-blue-50 p-6 rounded-xl border-l-4 border-blue-600">
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Our Mission</h3>
              <p className="text-gray-700">
                To provide world-class education that empowers students with knowledge, 
                skills, and values necessary to excel in their chosen fields and contribute 
                meaningfully to society.
              </p>
            </div>
          </div>

          {/* Values Grid */}
          <div className="grid sm:grid-cols-2 gap-6">
            {values.map((value, index) => (
              <div key={index} className="bg-gray-50 p-6 rounded-xl hover:shadow-lg transition-shadow duration-300">
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                  <value.icon className="h-6 w-6 text-blue-600" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">{value.title}</h3>
                <p className="text-gray-600">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;