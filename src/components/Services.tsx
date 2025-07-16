'use client'

import React, { useState } from 'react'
import Image from 'next/image'

export default function Services() {
  const [activeTab, setActiveTab] = useState('transformation')

  const services = {
    transformation: {
      title: "Transformation & Management Consulting",
      subtitle: "For Organizations navigating system changes or reorganization:",
      description: "When outdated systems or inefficiencies are holding your organization back, we guide you through transitions that overcome complexity and build resilient structures. Our proven change management approach helps you amplify your impact.",
      image: "/images/transformation.jpg",
      imageCaption: "Turning Complexity Into Clarity"
    },
    design: {
      title: "Organization Design",
      subtitle: "For Organizations seeking structural alignment:",
      description: "We help align your people, processes, and systems to achieve your strategic goals. Our design approach ensures your organizational structure supports your mission and enables sustainable growth.",
      image: "/images/design.jpg",
      imageCaption: "Aligning People & Systems"
    },
    coaching: {
      title: "Leadership Coaching",
      subtitle: "For Leaders navigating transitions or growth:",
      description: "Develop the leadership capabilities needed to drive transformation and inspire your team. Our coaching approach builds confidence, clarity, and the skills to lead through change effectively.",
      image: "/images/coaching.jpg",
      imageCaption: "Building Leadership Excellence"
    },
    training: {
      title: "Training & Facilitation",
      subtitle: "For Teams needing skill development:",
      description: "Build capacity through proven methodologies and interactive training sessions. Our facilitation approach ensures learning sticks and teams can apply new skills immediately to drive results.",
      image: "/images/training.jpg",
      imageCaption: "Building Team Capacity"
    }
  }

  const currentService = services[activeTab as keyof typeof services]

  return (
    <section id="transformation" className="bg-[#262160] text-white py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">
            Our Approach to Co-Designing for Lasting Transformation
          </h2>
          <p className="text-center mb-12 opacity-90 max-w-3xl mx-auto text-lg">
            We help mission-aligned leaders move from insight to implementation by using diagnostic tools, data mapping, and strategic facilitation that activates people—not just processes.
          </p>
        </div>

        {/* Service Tabs */}
        <div className="text-center mb-12">
          <h3 className="text-[#F9981C] text-xl font-semibold mb-6">Choose Your Service</h3>
          <div className="flex flex-wrap justify-center gap-4">
            {Object.keys(services).map((serviceKey) => (
              <button
                key={serviceKey}
                onClick={() => setActiveTab(serviceKey)}
                className={`px-6 py-3 rounded-full font-semibold transition-all duration-300 ${
                  activeTab === serviceKey
                    ? 'bg-[#1a1a4a] text-white'
                    : 'bg-[#3a3a7a] text-white hover:bg-[#4a4a8a]'
                }`}
              >
                {serviceKey.charAt(0).toUpperCase() + serviceKey.slice(1)}
                {serviceKey === 'training' && ' & Facilitation'}
              </button>
            ))}
          </div>
        </div>

        {/* Service Content */}
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left - Image */}
          <div className="relative">
            <div className="bg-gradient-to-br from-gray-200 to-gray-300 h-96 rounded-2xl relative flex items-center justify-center shadow-lg">
              <div className="absolute top-6 right-6 bg-[#262160] text-white px-4 py-2 rounded-lg text-sm font-medium shadow-lg">
                {currentService.imageCaption}
              </div>
              <div className="text-gray-500 text-center">
                <svg className="w-16 h-16 mx-auto mb-4" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M13 6a3 3 0 11-6 0 3 3 0 016 0zM18 8a2 2 0 11-4 0 2 2 0 014 0zM14 15a4 4 0 00-8 0v3h8v-3z"/>
                </svg>
                <span className="text-sm font-medium">Service Image</span>
              </div>
            </div>
          </div>

          {/* Right - Content */}
          <div className="space-y-6">
            <h3 className="text-[#F9981C] text-2xl font-bold">
              {currentService.title}
            </h3>
            <p className="text-white font-semibold text-lg">
              {currentService.subtitle}
            </p>
            <p className="text-white opacity-90 leading-relaxed text-lg">
              {currentService.description}
            </p>
            <button className="bg-[#F9981C] text-white px-8 py-4 rounded-xl font-semibold text-lg shadow-xl hover:shadow-2xl transform hover:-translate-y-1 transition-all duration-300">
              Start your co-design session
            </button>
          </div>
        </div>

        {/* Pagination Dots */}
        <div className="flex justify-center mt-12">
          <div className="flex space-x-2">
            {Object.keys(services).map((_, index) => (
              <div
                key={index}
                className={`w-3 h-3 rounded-full ${
                  index === Object.keys(services).indexOf(activeTab)
                    ? 'bg-[#F9981C]'
                    : 'bg-white opacity-50'
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
} 