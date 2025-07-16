'use client'

import React from 'react'

export default function Footer() {
  return (
    <footer className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Certification Badges */}
        <div className="flex flex-col md:flex-row justify-center items-center gap-8 mb-16">
          {/* MBE Badge */}
          <div className="relative w-48 h-48">
            <div className="absolute inset-0 rounded-full border-8 border-[#262160] flex items-center justify-center">
              <div className="text-center">
                <div className="text-3xl font-bold text-[#262160] mb-1">MBE</div>
                <div className="text-sm font-semibold text-[#262160]">ENTERPRISE</div>
              </div>
            </div>
            <div className="absolute inset-0 rounded-full border-4 border-[#F9981C] flex items-center justify-center">
              <div className="text-center">
                <div className="text-lg font-bold text-[#F9981C] mb-1">MINORITY</div>
                <div className="text-lg font-bold text-[#F9981C]">BUSINESS</div>
              </div>
            </div>
            <div className="absolute inset-0 rounded-full border-2 border-white flex items-center justify-center">
              <div className="text-center text-xs text-[#262160] px-4">
                E2 EmpowerED is a Social Impact Strategy Firm Supporting Equity-focused Organizations.
              </div>
            </div>
          </div>

          {/* WBE Badge */}
          <div className="relative w-48 h-48">
            <div className="absolute inset-0 rounded-full border-8 border-[#262160] flex items-center justify-center">
              <div className="text-center">
                <div className="text-3xl font-bold text-[#262160] mb-1">WBE</div>
                <div className="text-sm font-semibold text-[#262160]">BUSINESS ENTERPRISE</div>
              </div>
            </div>
            <div className="absolute inset-0 rounded-full border-4 border-[#F9981C] flex items-center justify-center">
              <div className="text-center">
                <div className="text-lg font-bold text-[#F9981C] mb-1">WOMAN-OWNED</div>
                <div className="text-lg font-bold text-[#F9981C]">BUSINESS</div>
              </div>
            </div>
            <div className="absolute inset-0 rounded-full border-2 border-white flex items-center justify-center">
              <div className="text-center text-xs text-[#262160] px-4">
                E2 EmpowerED is a Social Impact Strategy Firm Supporting Equity-focused Organizations.
              </div>
            </div>
          </div>

          {/* SBE Badge */}
          <div className="relative w-48 h-48">
            <div className="absolute inset-0 rounded-full border-8 border-[#262160] flex items-center justify-center">
              <div className="text-center">
                <div className="text-3xl font-bold text-[#262160] mb-1">SBE</div>
                <div className="text-sm font-semibold text-[#262160]">ENTERPRISE</div>
              </div>
            </div>
            <div className="absolute inset-0 rounded-full border-4 border-[#F9981C] flex items-center justify-center">
              <div className="text-center">
                <div className="text-lg font-bold text-[#F9981C] mb-1">SMALL</div>
                <div className="text-lg font-bold text-[#F9981C]">BUSINESS</div>
              </div>
            </div>
            <div className="absolute inset-0 rounded-full border-2 border-white flex items-center justify-center">
              <div className="text-center text-xs text-[#262160] px-4">
                E2 EmpowerED is a Social Impact Strategy Firm Supporting Equity-focused Organizations.
              </div>
            </div>
          </div>
        </div>

        {/* Footer Content */}
        <div className="grid md:grid-cols-2 gap-12">
          {/* Left Column */}
          <div>
            <h2 className="text-3xl font-bold text-[#262160] mb-4">E2 EMPOWERED</h2>
            <p className="text-gray-600 mb-8 text-lg">
              Want to bring clarity and transformation to your team? We're just one message away.
            </p>
            <p className="text-gray-600 mb-6">
              Contact us at{' '}
              <a 
                href="mailto:admin@e2empowered.com" 
                className="text-[#262160] underline hover:text-[#F9981C] transition-colors"
              >
                admin@e2empowered.com
              </a>
            </p>
            
            {/* Navigation Links */}
            <div className="flex flex-wrap gap-6 text-gray-600">
              <a href="#transformation" className="hover:text-[#F9981C] transition-colors">Transformation</a>
              <a href="#design" className="hover:text-[#F9981C] transition-colors">Design</a>
              <a href="#coaching" className="hover:text-[#F9981C] transition-colors">Coaching</a>
              <a href="#training" className="hover:text-[#F9981C] transition-colors">Training & Facilitation</a>
              <a href="#team" className="hover:text-[#F9981C] transition-colors">Our Team</a>
              <a href="/privacy" className="hover:text-[#F9981C] transition-colors">Privacy Policy</a>
              <a href="/terms" className="hover:text-[#F9981C] transition-colors">Terms of Use</a>
            </div>
          </div>

          {/* Right Column */}
          <div className="text-right">
            <h3 className="text-xl font-bold text-[#262160] mb-6">Follow Us on Social Media Now</h3>
            
            {/* Social Media Icons */}
            <div className="flex justify-end gap-4 mb-8">
              <a 
                href="https://instagram.com/e2empowered" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-12 h-12 bg-[#262160] rounded-full flex items-center justify-center hover:bg-[#F9981C] transition-colors"
              >
                <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                </svg>
              </a>
              <a 
                href="https://linkedin.com/company/e2empowered" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-12 h-12 bg-[#262160] rounded-full flex items-center justify-center hover:bg-[#F9981C] transition-colors"
              >
                <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                </svg>
              </a>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-gray-200 mt-12 pt-8 text-center">
          <p className="text-sm text-gray-500">
            E2 EMPOWERED LLC ©2025. All Rights Reserved.
          </p>
        </div>
      </div>
    </footer>
  )
} 