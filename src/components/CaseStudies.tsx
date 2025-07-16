'use client'

import React, { useState } from 'react'

export default function CaseStudies() {
  const [currentIndex, setCurrentIndex] = useState(0)

  const caseStudies = [
    {
      title: "Advancing Transformation In State Department Of Education",
      description: "Systemic Inequities Magnified By The Pandemic Required Stronger Leadership And A Redesign Of The Educational Experience For Marginalized Students.",
      image: "/images/case-study-1.jpg",
      category: "PreK-12 & Higher Education"
    },
    {
      title: "Renewing A State's Food System Plan For 2030",
      description: "Comprehensive stakeholder engagement and strategic planning to create a sustainable, equitable food system that serves all communities.",
      image: "/images/case-study-2.jpg",
      category: "State & Local Government"
    },
    {
      title: "Talent Strategy Rehaul For A $4 Million Interior Design Firm",
      description: "High Turnover And Misaligned Recruitment Practices Amid Growing Market Competition.",
      image: "/images/case-study-3.jpg",
      category: "Creative & Professional Services"
    },
    {
      title: "Data-Driven Impact Measurement Framework",
      description: "Designed comprehensive measurement frameworks and implemented data-driven reporting to track initiative effectiveness.",
      image: "/images/case-study-4.jpg",
      category: "Social Impact Sector"
    }
  ]

  const nextCase = () => {
    setCurrentIndex((prev) => (prev + 1) % caseStudies.length)
  }

  const prevCase = () => {
    setCurrentIndex((prev) => (prev - 1 + caseStudies.length) % caseStudies.length)
  }

  const currentCase = caseStudies[currentIndex]

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-[#262160] mb-8">
            See How We've Helped Sector Leaders Drive Transformation
          </h2>
          <p className="text-center text-gray-600 mb-12 max-w-3xl mx-auto text-lg">
            From social impact leaders to government agencies and design firms, we've supported mission-aligned organizations in achieving measurable results—without compromising the people at the heart of the work.
          </p>
        </div>

        {/* Orange Separator Line */}
        <div className="w-full h-px bg-[#F9981C] mb-16"></div>

        {/* Case Studies Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          <div className="text-center">
            <h3 className="text-[#262160] font-bold text-lg mb-2">PreK-12 & Higher Education</h3>
            <p className="text-gray-600 text-sm">Advanced statewide transformation initiatives and designed culturally responsive leadership programs.</p>
          </div>
          <div className="text-center">
            <h3 className="text-[#262160] font-bold text-lg mb-2">State & Local Government</h3>
            <p className="text-gray-600 text-sm">Supported community engagement, stakeholder management, and leadership development training and facilitation for public sector initiatives.</p>
          </div>
          <div className="text-center">
            <h3 className="text-[#262160] font-bold text-lg mb-2">Creative & Professional Services</h3>
            <p className="text-gray-600 text-sm">Provided executive coaching and team development for national design firms.</p>
          </div>
          <div className="text-center">
            <h3 className="text-[#262160] font-bold text-lg mb-2">Social Impact Sector</h3>
            <p className="text-gray-600 text-sm">Designed comprehensive measurement frameworks and implemented data-driven reporting to track initiative effectiveness.</p>
          </div>
        </div>

        {/* Main Case Study Display */}
        <div className="relative">
          {/* Navigation Arrows */}
          <div className="flex justify-between items-center mb-8">
            <button
              onClick={prevCase}
              className="w-12 h-12 rounded-full bg-[#262160] text-white flex items-center justify-center hover:bg-[#1a1a4a] transition-colors"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </button>
            <h3 className="text-2xl font-bold text-[#262160]">Case Studies</h3>
            <button
              onClick={nextCase}
              className="w-12 h-12 rounded-full bg-[#262160] text-white flex items-center justify-center hover:bg-[#1a1a4a] transition-colors"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </div>

          {/* Case Study Cards */}
          <div className="grid md:grid-cols-3 gap-8">
            {caseStudies.map((study, index) => (
              <div
                key={index}
                className={`bg-white rounded-2xl shadow-lg overflow-hidden transition-all duration-500 ${
                  index === currentIndex ? 'ring-2 ring-[#F9981C] scale-105' : 'opacity-75 scale-95'
                }`}
              >
                <div className="h-48 bg-gradient-to-br from-gray-200 to-gray-300 relative">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="text-gray-500 text-center">
                      <svg className="w-12 h-12 mx-auto mb-2" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M4 3a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V5a2 2 0 00-2-2H4zm12 12H4l4-8 3 6 2-4 3 6z"/>
                      </svg>
                      <span className="text-sm">Case Study Image</span>
                    </div>
                  </div>
                </div>
                <div className="p-6">
                  <h4 className="text-[#F9981C] font-bold text-lg mb-3">
                    {study.title}
                  </h4>
                  <p className="text-gray-700 text-sm leading-relaxed mb-4">
                    {study.description}
                  </p>
                  <button className="w-full bg-[#262160] text-white py-2 px-4 rounded-lg text-sm font-semibold hover:bg-[#1a1a4a] transition-colors">
                    Read More
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
} 