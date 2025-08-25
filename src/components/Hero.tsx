import React from 'react';
import { ArrowRight, Star, Users, BookOpen } from 'lucide-react';

const Hero = () => {
  return (
    <section id="home" className="pt-16 bg-gradient-to-br from-blue-50 via-white to-indigo-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="space-y-8">
            <div className="space-y-4">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
                Excellence in
                <span className="text-blue-600 block">Education</span>
              </h1>
              <p className="text-xl text-gray-600 leading-relaxed">
                Empowering students with quality education, innovative teaching methods, 
                and comprehensive support to achieve their academic and career goals.
              </p>
            </div>

            {/* Stats */}
            <div className="flex flex-wrap gap-6">
              <div className="flex items-center space-x-2">
                <div className="p-2 bg-blue-100 rounded-lg">
                  <Users className="h-5 w-5 text-blue-600" />
                </div>
                <div>
                  <div className="font-bold text-gray-900">5000+</div>
                  <div className="text-sm text-gray-600">Students</div>
                </div>
              </div>
              <div className="flex items-center space-x-2">
                <div className="p-2 bg-green-100 rounded-lg">
                  <BookOpen className="h-5 w-5 text-green-600" />
                </div>
                <div>
                  <div className="font-bold text-gray-900">50+</div>
                  <div className="text-sm text-gray-600">Courses</div>
                </div>
              </div>
              <div className="flex items-center space-x-2">
                <div className="p-2 bg-yellow-100 rounded-lg">
                  <Star className="h-5 w-5 text-yellow-600" />
                </div>
                <div>
                  <div className="font-bold text-gray-900">15+</div>
                  <div className="text-sm text-gray-600">Years</div>
                </div>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <button className="bg-blue-600 text-white px-8 py-4 rounded-lg font-semibold hover:bg-blue-700 transition-colors duration-200 flex items-center justify-center space-x-2 group">
                <span>Explore Courses</span>
                <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform duration-200" />
              </button>
              <button className="border-2 border-gray-300 text-gray-700 px-8 py-4 rounded-lg font-semibold hover:border-blue-600 hover:text-blue-600 transition-colors duration-200">
                Schedule Visit
              </button>
            </div>
          </div>

          {/* Image */}
          <div className="relative">
            <div className="aspect-square bg-gradient-to-br from-blue-400 to-indigo-600 rounded-2xl overflow-hidden shadow-2xl">
              <img
                src="https://images.pexels.com/photos/5212345/pexels-photo-5212345.jpeg?auto=compress&cs=tinysrgb&w=800"
                alt="Students studying"
                className="w-full h-full object-cover"
              />
            </div>
            {/* Floating elements */}
            <div className="absolute -top-4 -right-4 bg-white p-4 rounded-xl shadow-lg">
              <div className="flex items-center space-x-2">
                <Star className="h-5 w-5 text-yellow-500 fill-current" />
                <span className="font-semibold text-gray-900">4.9/5</span>
              </div>
              <div className="text-sm text-gray-600">Student Rating</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;