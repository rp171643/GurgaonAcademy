import React from 'react';
import { Award, BookOpen, Users } from 'lucide-react';

const Faculty = () => {
  const facultyMembers = [
    {
      name: 'Dr. Rajesh Kumar',
      position: 'Principal & Mathematics Expert',
      experience: '20+ Years',
      specialization: 'Advanced Mathematics, JEE Preparation',
      image: 'https://images.pexels.com/photos/5212345/pexels-photo-5212345.jpeg?auto=compress&cs=tinysrgb&w=300',
      achievements: ['Ph.D. in Mathematics', 'IIT Alumni', '500+ JEE Selections']
    },
    {
      name: 'Prof. Priya Sharma',
      position: 'Physics Department Head',
      experience: '15+ Years',
      specialization: 'Physics, NEET Preparation',
      image: 'https://images.pexels.com/photos/3862132/pexels-photo-3862132.jpeg?auto=compress&cs=tinysrgb&w=300',
      achievements: ['M.Sc. Physics', 'Research Publications', 'NEET Specialist']
    },
    {
      name: 'Dr. Amit Verma',
      position: 'Chemistry Expert',
      experience: '18+ Years',
      specialization: 'Organic & Inorganic Chemistry',
      image: 'https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=300',
      achievements: ['Ph.D. Chemistry', 'Industry Experience', 'Author of 3 Books']
    },
    {
      name: 'Ms. Neha Gupta',
      position: 'English & Literature',
      experience: '12+ Years',
      specialization: 'English Literature, Communication Skills',
      image: 'https://images.pexels.com/photos/4145153/pexels-photo-4145153.jpeg?auto=compress&cs=tinysrgb&w=300',
      achievements: ['M.A. English', 'Published Author', 'Communication Expert']
    },
    {
      name: 'Prof. Suresh Patel',
      position: 'Commerce & Economics',
      experience: '16+ Years',
      specialization: 'Business Studies, Economics',
      image: 'https://images.pexels.com/photos/5212317/pexels-photo-5212317.jpeg?auto=compress&cs=tinysrgb&w=300',
      achievements: ['MBA Finance', 'CA Qualified', 'Industry Consultant']
    },
    {
      name: 'Dr. Kavita Singh',
      position: 'Biology Expert',
      experience: '14+ Years',
      specialization: 'Biology, Medical Entrance Prep',
      image: 'https://images.pexels.com/photos/5428836/pexels-photo-5428836.jpeg?auto=compress&cs=tinysrgb&w=300',
      achievements: ['Ph.D. Biology', 'Medical Background', 'NEET Success Rate 95%']
    }
  ];

  return (
    <section id="faculty" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Our Expert Faculty
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Learn from the best educators who bring years of experience, 
            expertise, and passion to help you achieve your academic goals.
          </p>
        </div>

        {/* Faculty Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {facultyMembers.map((member, index) => (
            <div key={index} className="bg-gray-50 rounded-xl overflow-hidden hover:shadow-lg transition-shadow duration-300 group">
              {/* Image */}
              <div className="aspect-square overflow-hidden">
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>

              {/* Content */}
              <div className="p-6">
                <div className="mb-4">
                  <h3 className="text-xl font-semibold text-gray-900 mb-1">{member.name}</h3>
                  <p className="text-blue-600 font-medium mb-2">{member.position}</p>
                  <p className="text-gray-600 text-sm">{member.specialization}</p>
                </div>

                {/* Experience */}
                <div className="flex items-center space-x-2 mb-4">
                  <div className="p-2 bg-blue-100 rounded-lg">
                    <Award className="h-4 w-4 text-blue-600" />
                  </div>
                  <span className="text-sm font-medium text-gray-700">{member.experience} Experience</span>
                </div>

                {/* Achievements */}
                <div className="space-y-2">
                  <h4 className="text-sm font-semibold text-gray-900">Key Achievements:</h4>
                  <ul className="space-y-1">
                    {member.achievements.map((achievement, idx) => (
                      <li key={idx} className="text-sm text-gray-600 flex items-start space-x-2">
                        <div className="w-1.5 h-1.5 bg-blue-600 rounded-full mt-2 flex-shrink-0"></div>
                        <span>{achievement}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Stats Section */}
        <div className="mt-16 bg-blue-600 rounded-2xl p-8 text-white">
          <div className="grid md:grid-cols-3 gap-8 text-center">
            <div>
              <div className="flex items-center justify-center mb-4">
                <Users className="h-8 w-8" />
              </div>
              <div className="text-3xl font-bold mb-2">50+</div>
              <div className="text-blue-100">Expert Faculty Members</div>
            </div>
            <div>
              <div className="flex items-center justify-center mb-4">
                <BookOpen className="h-8 w-8" />
              </div>
              <div className="text-3xl font-bold mb-2">15+</div>
              <div className="text-blue-100">Average Years Experience</div>
            </div>
            <div>
              <div className="flex items-center justify-center mb-4">
                <Award className="h-8 w-8" />
              </div>
              <div className="text-3xl font-bold mb-2">95%</div>
              <div className="text-blue-100">Student Success Rate</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Faculty;