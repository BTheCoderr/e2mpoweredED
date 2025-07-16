'use client'

import React, { useState } from 'react'

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    organization: '',
    role: '',
    budget: '',
    support: '',
    message: ''
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle form submission here
    console.log('Form submitted:', formData)
  }

  return (
    <section id="contact" className="py-20 bg-[#262160] text-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">
            Let's Start with you
          </h2>
          <p className="text-center mb-12 opacity-90 max-w-3xl mx-auto text-lg">
            We offer diagnostic consultations for teams seeking people-centered transformation. Share where your organization stands—and where you'd like to go.
          </p>
        </div>

        {/* Contact Form */}
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="grid md:grid-cols-2 gap-6">
            {/* Name */}
            <div>
              <label htmlFor="name" className="block text-sm font-semibold mb-2">
                Name *
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 rounded-lg border border-gray-300 text-gray-900 focus:ring-2 focus:ring-[#F9981C] focus:border-transparent"
                placeholder="Your full name"
              />
            </div>

            {/* Email */}
            <div>
              <label htmlFor="email" className="block text-sm font-semibold mb-2">
                Email *
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 rounded-lg border border-gray-300 text-gray-900 focus:ring-2 focus:ring-[#F9981C] focus:border-transparent"
                placeholder="your.email@organization.com"
              />
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {/* Organization */}
            <div>
              <label htmlFor="organization" className="block text-sm font-semibold mb-2">
                Organization Name
              </label>
              <input
                type="text"
                id="organization"
                name="organization"
                value={formData.organization}
                onChange={handleChange}
                className="w-full px-4 py-3 rounded-lg border border-gray-300 text-gray-900 focus:ring-2 focus:ring-[#F9981C] focus:border-transparent"
                placeholder="Your organization"
              />
            </div>

            {/* Role */}
            <div>
              <label htmlFor="role" className="block text-sm font-semibold mb-2">
                Your Role or Title
              </label>
              <input
                type="text"
                id="role"
                name="role"
                value={formData.role}
                onChange={handleChange}
                className="w-full px-4 py-3 rounded-lg border border-gray-300 text-gray-900 focus:ring-2 focus:ring-[#F9981C] focus:border-transparent"
                placeholder="Your position"
              />
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {/* Budget */}
            <div>
              <label htmlFor="budget" className="block text-sm font-semibold mb-2">
                Choose a Budget (USD)
              </label>
              <select
                id="budget"
                name="budget"
                value={formData.budget}
                onChange={handleChange}
                className="w-full px-4 py-3 rounded-lg border border-gray-300 text-gray-900 focus:ring-2 focus:ring-[#F9981C] focus:border-transparent"
              >
                <option value="">Select budget range</option>
                <option value="under-25k">Under $25,000</option>
                <option value="25k-50k">$25,000 - $50,000</option>
                <option value="50k-100k">$50,000 - $100,000</option>
                <option value="100k-250k">$100,000 - $250,000</option>
                <option value="over-250k">Over $250,000</option>
              </select>
            </div>

            {/* Support Type */}
            <div>
              <label htmlFor="support" className="block text-sm font-semibold mb-2">
                What support are you looking for?
              </label>
              <select
                id="support"
                name="support"
                value={formData.support}
                onChange={handleChange}
                className="w-full px-4 py-3 rounded-lg border border-gray-300 text-gray-900 focus:ring-2 focus:ring-[#F9981C] focus:border-transparent"
              >
                <option value="">Select service type</option>
                <option value="transformation">Transformation & Management Consulting</option>
                <option value="design">Organization Design</option>
                <option value="coaching">Leadership Coaching</option>
                <option value="training">Training & Facilitation</option>
                <option value="assessment">Impact Assessment</option>
                <option value="other">Other</option>
              </select>
            </div>
          </div>

          {/* Message */}
          <div>
            <label htmlFor="message" className="block text-sm font-semibold mb-2">
              Message *
            </label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              required
              rows={6}
              className="w-full px-4 py-3 rounded-lg border border-gray-300 text-gray-900 focus:ring-2 focus:ring-[#F9981C] focus:border-transparent resize-none"
              placeholder="Tell us about your organization's challenges and goals..."
            />
          </div>

          {/* Submit Button */}
          <div className="text-center">
            <button
              type="submit"
              className="bg-[#F9981C] text-white px-8 py-4 rounded-xl font-semibold text-lg shadow-xl hover:shadow-2xl transform hover:-translate-y-1 transition-all duration-300"
            >
              Start a Diagnostic Conversation
            </button>
          </div>

          {/* Alternative Option */}
          <div className="text-center mt-6">
            <p className="text-white opacity-90">
              Or <strong>Start Now</strong> – <strong>Schedule a Call</strong> to book your free consultation directly on our calendar
            </p>
          </div>
        </form>
      </div>
    </section>
  )
} 