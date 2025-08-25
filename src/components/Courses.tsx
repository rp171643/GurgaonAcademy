import React from 'react';
import { Clock, Users, BookOpen, ArrowRight } from 'lucide-react';

const Courses = () => {
  const courses = [
    {
      title: 'Science & Mathematics',
      description: 'Comprehensive programs covering Physics, Chemistry, Biology, and Advanced Mathematics for competitive exams.',
      duration: '2 Years',
      students: '500+',
      level: 'Class 11-12',
      image: 'https://images.pexels.com/photos/3862132/pexels-photo-3862132.jpeg?auto=compress&cs=tinysrgb&w=400',
      features: ['JEE/NEET Preparation', 'Board Exam Focus', 'Practical Labs']
    },
    {
      title: 'Commerce & Business',
      description: 'Business Studies, Economics, Accountancy, and Mathematics tailored for commerce students.',
      duration: '2 Years',
      students: '300+',
      level: 'Class 11-12',
      image: 'https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=400',
      features: ['CA Foundation', 'Board Excellence', 'Business Skills']
    },
    {
      title: 'Humanities & Arts',
      description: 'History, Geography, Political Science, Psychology, and Literature with creative expression.',
      duration: '2 Years',
      students: '200+',
      level: 'Class 11-12',
      image: 'https://images.pexels.com/photos/4145153/pexels-photo-4145153.jpeg?auto=compress&cs=tinysrgb&w=400',
      features: ['UPSC Foundation', 'Creative Writing', 'Research Skills']
    },
    {
      title: 'Foundation Courses',
      description: 'Strong foundation building for students in classes 6-10 across all subjects.',
      duration: '1 Year',
      students: '800+',
      level: 'Class 6-10',
      image: 'https://images.pexels.com/photos/5212317/pexels-photo-5212317.jpeg?auto=compress&cs=tinysrgb&w=400',
      features: ['Concept Building', 'Regular Assessment', 'Doubt Clearing']
    },
    {
      title: 'Competitive Exam Prep',
      description: 'Specialized coaching for JEE, NEET, UPSC, and other competitive examinations.',
      duration: '1-2 Years',
      students: '400+',
      level: 'All Levels',
      image: 'https://images.pexels.com/photos/5428836/pexels-photo-5428836.jpeg?auto=compress&cs=tinysrgb&w=400',
      features: ['Mock Tests', 'Expert Faculty', 'Success Tracking']
    },
    {
      title: 'Skill Development',
      description: 'Modern skills including coding, digital literacy, communication, and personality development.',
      duration: '6 Months',
      students: '250+',
      level: 'All Ages',
      image: 'https://images.pexels.com/photos/3861969/pexels-photo-3861969.jpeg?auto=compress&cs=tinysrgb&w=400',
      features: ['Practical Training', 'Industry Relevant', 'Certification']
    }
  ];

  return (
    <section id="courses" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Our Courses
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Comprehensive educational programs designed to nurture academic excellence 
            and prepare students for future success.
          </p>
        </div>

        {/* Courses Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {courses.map((course, index) => (
            <div key={index} className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300 group">
              {/* Image */}
              <div className="aspect-video overflow-hidden">
                <img
                  src={course.image}
                  alt={course.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>

              {/* Content */}
              <div className="p-6">
                <div className="mb-4">
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">{course.title}</h3>
                  <p className="text-gray-600">{course.description}</p>
                </div>

                {/* Course Info */}
                <div className="flex items-center justify-between text-sm text-gray-500 mb-4">
                  <div className="flex items-center space-x-1">
                    <Clock className="h-4 w-4" />
                    <span>{course.duration}</span>
                  </div>
                  <div className="flex items-center space-x-1">
                    <Users className="h-4 w-4" />
                    <span>{course.students}</span>
                  </div>
                  <div className="flex items-center space-x-1">
                    <BookOpen className="h-4 w-4" />
                    <span>{course.level}</span>
                  </div>
                </div>

                {/* Features */}
                <div className="mb-6">
                  <div className="flex flex-wrap gap-2">
                    {course.features.map((feature, idx) => (
                      <span key={idx} className="px-3 py-1 bg-blue-100 text-blue-700 text-sm rounded-full">
                        {feature}
                      </span>
                    ))}
                  </div>
                </div>

                {/* CTA */}
                <button className="w-full bg-blue-600 text-white py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors duration-200 flex items-center justify-center space-x-2 group">
                  <span>Learn More</span>
                  <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform duration-200" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Courses;