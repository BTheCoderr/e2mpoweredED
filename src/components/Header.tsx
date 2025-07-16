'use client'

import Image from 'next/image'
import Link from 'next/link'

export default function Header() {
  return (
    <header className="bg-white/95 backdrop-blur-sm shadow-xl fixed w-full top-0 z-50 border-b border-gray-100">
      <nav className="max-w-6xl mx-auto px-6 py-4">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <div className="flex items-center gap-3">
            <div className="p-2 bg-gradient-to-br from-[#f5f5dc] to-white rounded-xl shadow-md">
              <Image
                src="/images/e2empowered.png"
                alt="E2 EmpowerED Logo"
                width={32}
                height={32}
                className="object-contain"
              />
            </div>
            <div className="flex flex-col">
              <div className="font-serif text-xl font-bold text-[#262160] leading-none">
                E2 • EMPOWERED
              </div>
              <div className="w-full h-0.5 bg-gradient-to-r from-[#F9981C] to-[#e88a1a] mt-1 rounded-full"></div>
              <div className="font-serif italic text-xs text-[#262160] mt-1">
                Equity x Excellence
              </div>
            </div>
          </div>

          {/* Navigation */}
          <ul className="hidden lg:flex gap-8">
            <li><Link href="#home" className="text-gray-700 font-semibold hover:text-[#F9981C] transition-all duration-300 hover:scale-105">Home</Link></li>
            <li><Link href="#transformation" className="text-gray-700 font-semibold hover:text-[#F9981C] transition-all duration-300 hover:scale-105">Transformation</Link></li>
            <li><Link href="#design" className="text-gray-700 font-semibold hover:text-[#F9981C] transition-all duration-300 hover:scale-105">Design</Link></li>
            <li><Link href="#coaching" className="text-gray-700 font-semibold hover:text-[#F9981C] transition-all duration-300 hover:scale-105">Coaching</Link></li>
            <li><Link href="#training" className="text-gray-700 font-semibold hover:text-[#F9981C] transition-all duration-300 hover:scale-105">Training & Facilitation</Link></li>
            <li><Link href="#team" className="text-gray-700 font-semibold hover:text-[#F9981C] transition-all duration-300 hover:scale-105">Our Team</Link></li>
            <li><Link href="#contact" className="text-gray-700 font-semibold hover:text-[#F9981C] transition-all duration-300 hover:scale-105">Contact</Link></li>
          </ul>

          {/* Mobile menu button */}
          <button className="lg:hidden text-gray-700 p-2 rounded-lg hover:bg-gray-100 transition-colors">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>
      </nav>
    </header>
  )
} 