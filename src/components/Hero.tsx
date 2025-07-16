'use client'

import React from 'react'
import Image from 'next/image'

export default function Hero() {
  return (
    <section id="home" className="bg-gradient-to-br from-[#f5f5dc] via-[#faf8f0] to-[#f5f5dc] py-20">
      <div className="max-w-6xl mx-auto px-6">
        {/* Hero Logo Section */}
        <div className="text-center mb-16">
          <div className="inline-block p-6 bg-white rounded-2xl shadow-xl mb-6">
            <Image
              src="/images/e2empowered.png"
              alt="E2 EmpowerED Logo"
              width={120}
              height={120}
              className="object-contain"
            />
          </div>
          <div className="text-center">
            <div className="font-serif text-4xl font-bold text-[#262160] leading-none mb-3">
              E2 • EMPOWERED
            </div>
            <div className="w-32 h-1 bg-gradient-to-r from-[#F9981C] to-[#e88a1a] mx-auto mb-3 rounded-full"></div>
            <div className="font-serif italic text-xl text-[#262160]">
              Equity x Excellence
            </div>
          </div>
        </div>

        {/* Hero Content */}
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Column - Text */}
          <div className="text-left space-y-6">
            <p className="text-lg text-gray-600 leading-relaxed font-medium">
              An Organization Design & Management Firm Empowering Purpose-Driven Leaders to Build Resilient Organizations at Scale
            </p>
            <h1 className="text-5xl font-bold text-[#262160] leading-tight">
              Solutions Aligning People & Systems for Measurable Impact
            </h1>
            <button 
              onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
              className="bg-gradient-to-r from-[#F9981C] to-[#e88a1a] text-white px-8 py-4 rounded-xl font-semibold text-lg shadow-xl hover:shadow-2xl transform hover:-translate-y-2 transition-all duration-300 border-0"
            >
              Let's Co-Design What's Next
            </button>
          </div>

          {/* Right Column - Image */}
          <div className="text-center">
            <div className="bg-gradient-to-br from-gray-200 to-gray-300 h-80 rounded-2xl mb-6 relative flex items-center justify-center shadow-lg">
              <div className="absolute top-6 right-6 bg-[#262160] text-white px-4 py-2 rounded-lg text-sm font-medium shadow-lg">
                Team Collaboration
              </div>
              <div className="text-gray-500">
                <svg className="w-16 h-16 mx-auto mb-4" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M13 6a3 3 0 11-6 0 3 3 0 016 0zM18 8a2 2 0 11-4 0 2 2 0 014 0zM14 15a4 4 0 00-8 0v3h8v-3z"/>
                </svg>
                <span className="text-sm font-medium">Team Collaboration Image</span>
              </div>
            </div>
            <p className="text-sm text-gray-600 leading-relaxed max-w-md mx-auto">
              E2 EMPOWERED partners with mission-aligned organizations to overcome performance challenges by aligning leadership, strategy, and capacity-building frameworks—delivering measurable public impact where efficiency and equity matter most.
            </p>
          </div>
        </div>

        {/* Service Areas */}
        <div className="flex justify-between items-center mt-16 pt-8 border-t-2 border-gray-200">
          <div className="text-center text-gray-700 font-semibold text-sm hover:text-[#F9981C] transition-colors cursor-pointer">Organization Restructuring</div>
          <div className="w-px h-6 bg-gradient-to-b from-[#F9981C] to-transparent"></div>
          <div className="text-center text-gray-700 font-semibold text-sm hover:text-[#F9981C] transition-colors cursor-pointer">Leadership Transitions</div>
          <div className="w-px h-6 bg-gradient-to-b from-[#F9981C] to-transparent"></div>
          <div className="text-center text-gray-700 font-semibold text-sm hover:text-[#F9981C] transition-colors cursor-pointer">Impact Assessments</div>
          <div className="w-px h-6 bg-gradient-to-b from-[#F9981C] to-transparent"></div>
          <div className="text-center text-gray-700 font-semibold text-sm hover:text-[#F9981C] transition-colors cursor-pointer">Funding Model Changes</div>
          <div className="w-px h-6 bg-gradient-to-b from-[#F9981C] to-transparent"></div>
          <div className="text-center text-gray-700 font-semibold text-sm hover:text-[#F9981C] transition-colors cursor-pointer">Program Transformation</div>
        </div>
      </div>
    </section>
  )
} 