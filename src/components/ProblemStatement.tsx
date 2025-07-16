import React from 'react'

export default function ProblemStatement() {
  const challenges = [
    {
      title: "Capacity Needs",
      question: "Is Your Growth Outpacing Impact, With Strategic Plans Failing To Meet Real-Time Capacity Needs?"
    },
    {
      title: "Talent Retention", 
      question: "Is Your Culture Losing Traction As Team Structures Fall Out Of Sync With Your Core Values And Strategic Goals?"
    },
    {
      title: "Change Management",
      question: "Are Your Transformation Initiatives Stalling Due To Poor Execution And Low Team Buy-In?"
    },
    {
      title: "Data-Driven Innovation",
      question: "Are You Leveraging Data To Its Full Potential—Or Is Untapped Insight Limiting Your Impact?"
    },
    {
      title: "Leadership Transformations",
      question: "Is Your Organization's Legacy At Risk Due To Poor Leadership Transitions Or A Lack Of Clear Transformation Pathways?"
    },
    {
      title: "Training & Facilitation",
      question: "Are You Wasting Time And Resources On Training Programs That Don't Deliver Results?"
    }
  ]

  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl font-bold text-[#262160] text-center mb-12">
          E2EmpowerED Supports Leaders to Address Mission-Critical Challenges with Efficiency and Impact in Uncertain Times
        </h2>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {challenges.map((challenge, index) => (
            <div 
              key={index}
              className="bg-gradient-to-br from-[#262160] to-[#1a1a4a] text-white p-8 rounded-lg text-center border-l-4 border-[#F9981C] hover:transform hover:-translate-y-1 transition-all duration-300"
            >
              <h3 className="text-xl font-semibold mb-4">{challenge.title}</h3>
              <p className="text-sm opacity-90 leading-relaxed">{challenge.question}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
} 