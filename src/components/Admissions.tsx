import React from 'react';
import { Calendar, FileText, CreditCard, CheckCircle, ArrowRight } from 'lucide-react';

const Admissions = () => {
  const admissionSteps = [
    {
      icon: FileText,
      title: 'Application Form',
      description: 'Fill out the online application form with required details and documents.',
      timeline: 'Step 1'
    },
    {
      icon: Calendar,
      title: 'Entrance Test',
      description: 'Appear for the entrance examination or interview as per course requirements.',
      timeline: 'Step 2'
    },
    {
      icon: CheckCircle,
      title: 'Merit List',
      description: 'Check your name in the merit list published on our website.',
      timeline: 'Step 3'
    },
    {
      icon: CreditCard,
      title: 'Fee Payment',
      description: 'Complete the admission by paying the required fees and submitting documents.',
      timeline: 'Step 4'
    }
  ];

  const requirements = [
    'Previous academic transcripts and certificates',
    'Transfer certificate from previous institution',
    'Character certificate from previous school',
    'Medical fitness certificate',
    'Passport size photographs (6 copies)',
    'Aadhar card and birth certificate copies',
    'Caste certificate (if applicable)',
    'Income certificate (for scholarship eligibility)'
  ];

  const feeStructure = [
    { course: 'Foundation (Class 6-10)', fee: '₹25,000', duration: 'Per Year' },
    { course: 'Science Stream (11-12)', fee: '₹35,000', duration: 'Per Year' },
    { course: 'Commerce Stream (11-12)', fee: '₹30,000', duration: 'Per Year' },
    { course: 'Arts Stream (11-12)', fee: '₹28,000', duration: 'Per Year' },
    { course: 'Competitive Exam Prep', fee: '₹40,000', duration: 'Per Year' },
    { course: 'Skill Development', fee: '₹15,000', duration: 'Per Course' }
  ];

  return (
    <section id="admissions" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Admissions
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Join our community of learners and embark on a journey of academic excellence. 
            Follow our simple admission process to secure your seat.
          </p>
        </div>

        {/* Admission Process */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold text-gray-900 text-center mb-12">Admission Process</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {admissionSteps.map((step, index) => (
              <div key={index} className="relative">
                <div className="bg-white p-6 rounded-xl shadow-lg text-center hover:shadow-xl transition-shadow duration-300">
                  <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <step.icon className="h-8 w-8 text-blue-600" />
                  </div>
                  <div className="text-sm font-semibold text-blue-600 mb-2">{step.timeline}</div>
                  <h4 className="text-lg font-semibold text-gray-900 mb-2">{step.title}</h4>
                  <p className="text-gray-600 text-sm">{step.description}</p>
                </div>
                {index < admissionSteps.length - 1 && (
                  <div className="hidden lg:block absolute top-1/2 -right-4 transform -translate-y-1/2">
                    <ArrowRight className="h-6 w-6 text-gray-400" />
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Requirements */}
          <div className="bg-white p-8 rounded-xl shadow-lg">
            <h3 className="text-2xl font-bold text-gray-900 mb-6">Required Documents</h3>
            <ul className="space-y-3">
              {requirements.map((requirement, index) => (
                <li key={index} className="flex items-start space-x-3">
                  <CheckCircle className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-700">{requirement}</span>
                </li>
              ))}
            </ul>
            <div className="mt-8 p-4 bg-blue-50 rounded-lg border-l-4 border-blue-600">
              <p className="text-blue-800 font-medium">Important Note:</p>
              <p className="text-blue-700 text-sm mt-1">
                All documents should be original with attested photocopies. 
                Incomplete applications will not be processed.
              </p>
            </div>
          </div>

          {/* Fee Structure */}
          <div className="bg-white p-8 rounded-xl shadow-lg">
            <h3 className="text-2xl font-bold text-gray-900 mb-6">Fee Structure</h3>
            <div className="space-y-4">
              {feeStructure.map((item, index) => (
                <div key={index} className="flex justify-between items-center p-4 bg-gray-50 rounded-lg">
                  <div>
                    <div className="font-semibold text-gray-900">{item.course}</div>
                    <div className="text-sm text-gray-600">{item.duration}</div>
                  </div>
                  <div className="text-xl font-bold text-blue-600">{item.fee}</div>
                </div>
              ))}
            </div>
            <div className="mt-6 p-4 bg-green-50 rounded-lg border-l-4 border-green-600">
              <p className="text-green-800 font-medium">Scholarship Available:</p>
              <p className="text-green-700 text-sm mt-1">
                Merit-based scholarships up to 50% fee waiver for deserving students. 
                Financial assistance available for economically weaker sections.
              </p>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="mt-16 text-center">
          <div className="bg-blue-600 text-white p-8 rounded-2xl">
            <h3 className="text-2xl font-bold mb-4">Ready to Apply?</h3>
            <p className="text-blue-100 mb-6 max-w-2xl mx-auto">
              Don't miss the opportunity to be part of our academic excellence. 
              Admissions are open for the new academic session.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors duration-200">
                Download Application Form
              </button>
              <button className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition-colors duration-200">
                Schedule Campus Visit
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Admissions;