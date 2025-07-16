'use client'

import React from 'react'
import Image from 'next/image'

export default function Team() {
  const teamMembers = [
    {
      name: "Mariama Kurbally",
      title: "M.ED.L. CEO",
      image: "/images/mariama-kurbally.jpg",
      description: "Leading strategic transformation initiatives with expertise in organizational design and leadership development."
    },
    {
      name: "Dr. Antoinette Pearson",
      title: "Consultant",
      image: "/images/antoinette-pearson.jpg",
      description: "Specializing in data-driven innovation and impact measurement for mission-aligned organizations."
    },
    {
      name: "Caroleena Vargos, M.A.",
      title: "Consultant",
      image: "/images/caroleena-vargos.jpg",
      description: "Expert in change management and capacity building for social impact organizations."
    },
    {
      name: "Dr. Maria Kicking Horse",
      title: "Consultant",
      image: "/images/maria-kicking-horse.jpg",
      description: "Focused on leadership transformations and executive coaching for mission-driven leaders."
    },
    {
      name: "Courtney Rodriguez Sales",
      title: "Consultant",
      image: "/images/courtney-rodriguez.jpg",
      description: "Specializing in talent retention and organizational culture development."
    },
    {
      name: "Stephen Pham",
      title: "Consultant",
      image: "/images/stephen-pham.jpg",
      description: "Expert in training & facilitation with proven methodologies for team capacity building."
    }
  ]

  return (
    <section id="team" className="py-20 bg-[#f5f5dc]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-16">
          <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between mb-8">
            <div className="lg:w-1/2">
              <h2 className="text-4xl font-bold text-[#262160] mb-4">
                Meet Our Team of Experts
              </h2>
              <div className="w-32 h-1 bg-[#F9981C] mb-6"></div>
              <p className="text-gray-600 text-lg leading-relaxed">
                Committed to improving the goals of mission-aligned organizations
              </p>
            </div>
            <div className="lg:w-1/2 lg:pl-12 mt-8 lg:mt-0">
              <p className="text-gray-600 text-lg leading-relaxed">
                From social impact leaders to government agencies and design firms, we've supported mission-aligned organizations in achieving measurable results—without compromising the people at the heart of the work.
              </p>
            </div>
          </div>
        </div>

        {/* Team Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {teamMembers.map((member, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 hover:-translate-y-2"
            >
              {/* Profile Image */}
              <div className="h-64 bg-gradient-to-br from-gray-200 to-gray-300 relative flex items-center justify-center">
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-gray-500 text-center">
                    <svg className="w-16 h-16 mx-auto mb-4" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clipRule="evenodd" />
                    </svg>
                    <span className="text-sm font-medium">Profile Photo</span>
                  </div>
                </div>
              </div>

              {/* Profile Info */}
              <div className="p-6 text-center">
                <h3 className="text-xl font-bold text-[#262160] mb-2">
                  {member.name}
                </h3>
                <p className="text-[#F9981C] font-semibold mb-4">
                  {member.title}
                </p>
                <p className="text-gray-600 text-sm leading-relaxed">
                  {member.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16">
          <p className="text-gray-600 mb-6 text-lg">
            Ready to work with our expert team?
          </p>
          <button 
            onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
            className="bg-[#F9981C] text-white px-8 py-4 rounded-xl font-semibold text-lg shadow-xl hover:shadow-2xl transform hover:-translate-y-1 transition-all duration-300"
          >
            Start Your Transformation Journey
          </button>
        </div>
      </div>
    </section>
  )
} 