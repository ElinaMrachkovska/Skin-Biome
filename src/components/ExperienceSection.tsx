import React from 'react';
import { motion } from 'framer-motion';
import { Briefcase, Calendar, MapPin } from 'lucide-react';
const experiences = [
{
  role: 'Frontend Developer',
  company: 'Freelance / Projects',
  period: 'Sept 2025 - Present',
  location: 'Remote',
  description:
  'Developing responsive user interfaces using React, TypeScript, and Tailwind CSS. Implementing pixel-perfect designs and ensuring cross-browser compatibility. Utilizing modern build tools like Vite for optimized performance.',
  skills: ['React', 'TypeScript', 'Tailwind', 'Vite', 'BEM']
},
{
  role: 'Administrator',
  company: 'Hotel in Kamianets-Podilskyi',
  period: '2022 - 2025',
  location: 'Kamianets-Podilskyi',
  description:
  'Managed daily operations and a team of 4-6 staff members. Ensured 24/7 seamless service and maintained a Booking.com rating of 9.0+. Implemented VIP service standards and effectively resolved conflicts. Managed financial discipline and Property Management System (PMS).',
  skills: ['Management', 'Communication', 'Problem Solving', 'PMS']
},
{
  role: 'Teacher, Curator',
  company: 'College of Podilsk State Agrarian and Technical University',
  period: '2011 - 2022',
  location: 'Kamianets-Podilskyi',
  description:
  'Lecturer and Student Group Curator. Focused on IT-focused pedagogical innovation. Increased productivity of professional skill acquisition through innovative learning materials. Organized scientific round tables and seminars.',
  skills: ['Teaching', 'Mentorship', 'Public Speaking', 'Research']
}];

export function ExperienceSection() {
  return (
    <section id="experience" className="py-20 relative">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{
            opacity: 0,
            y: 20
          }}
          whileInView={{
            opacity: 1,
            y: 0
          }}
          viewport={{
            once: true
          }}
          transition={{
            duration: 0.5
          }}
          className="mb-12">

          <h2 className="text-3xl font-bold text-white mb-4">
            Work Experience
          </h2>
          <p className="text-gray-300 max-w-2xl">
            A diverse background combining technical development, management,
            and education.
          </p>
        </motion.div>

        <div className="relative space-y-12">
          {/* Timeline Line */}
          <div className="absolute left-4 md:left-0 top-2 bottom-2 w-0.5 bg-white/10" />

          {experiences.map((exp, index) =>
          <motion.div
            key={index}
            initial={{
              opacity: 0,
              x: -20
            }}
            whileInView={{
              opacity: 1,
              x: 0
            }}
            viewport={{
              once: true
            }}
            transition={{
              duration: 0.5,
              delay: index * 0.1
            }}
            className="relative pl-12 md:pl-8">

              {/* Timeline Dot */}
              <div className="absolute left-[13px] md:left-[-3px] top-2 w-2.5 h-2.5 rounded-full bg-cyan-500 ring-4 ring-[#0B1121]" />

              <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-2">
                <div>
                  <h3 className="text-xl font-bold text-white">{exp.role}</h3>
                  <div className="text-cyan-400 font-medium">{exp.company}</div>
                </div>
                <div className="flex flex-col md:items-end text-sm text-gray-400 mt-1 md:mt-0">
                  <div className="flex items-center gap-1.5">
                    <Calendar size={14} />
                    <span>{exp.period}</span>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <MapPin size={14} />
                    <span>{exp.location}</span>
                  </div>
                </div>
              </div>

              <p className="text-gray-300 mb-4 leading-relaxed">
                {exp.description}
              </p>

              <div className="flex flex-wrap gap-2">
                {exp.skills.map((skill) =>
              <span
                key={skill}
                className="px-2.5 py-0.5 text-xs text-gray-300 bg-white/5 rounded-full border border-white/10">

                    {skill}
                  </span>
              )}
              </div>
            </motion.div>
          )}
        </div>
      </div>
    </section>);

}