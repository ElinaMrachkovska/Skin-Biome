import React from 'react';
import { motion } from 'framer-motion';
import { GraduationCap, Award } from 'lucide-react';
const education = [
{
  degree: 'Ph.D. of Theory and Methodology of Professional Education',
  institution: 'Podilskyi State Agrarian and Technical University',
  period: '2011 - 2014',
  type: 'academic'
},
{
  degree: "Master's Degree, Engineering Pedagogue",
  institution: 'Podilskyi State Agrarian and Technical University',
  period: '2009 - 2011',
  type: 'academic'
},
{
  degree: "Bachelor's Degree, Mechanical Engineer",
  institution: 'Podilskyi State Agrarian and Technical University',
  period: '2005 - 2009',
  type: 'academic'
},
{
  degree: 'Frontend Course (Git, HTML, CSS, JS, TS, React)',
  institution: 'Mate Academy',
  period: 'Completed',
  type: 'certificate'
},
{
  degree: 'Manual QA',
  institution: 'Self-study / Coursework',
  period: 'Completed',
  type: 'certificate'
}];

export function EducationSection() {
  return (
    <section id="education" className="py-20 relative bg-white/[0.02]">
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
            Education & Certifications
          </h2>
          <p className="text-gray-300 max-w-2xl">
            Strong academic foundation complemented by specialized technical
            training.
          </p>
        </motion.div>

        <div className="grid gap-6 md:grid-cols-2">
          {education.map((item, index) =>
          <motion.div
            key={index}
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
              duration: 0.5,
              delay: index * 0.1
            }}
            className="flex gap-4 p-6 rounded-xl bg-white/5 border border-white/10 hover:border-white/20 transition-colors">

              <div
              className={`p-3 h-fit rounded-lg ${item.type === 'academic' ? 'bg-amber-500/10 text-amber-400' : 'bg-emerald-500/10 text-emerald-400'}`}>

                {item.type === 'academic' ?
              <GraduationCap size={24} /> :

              <Award size={24} />
              }
              </div>

              <div>
                <h3 className="font-bold text-white mb-1">{item.degree}</h3>
                <div className="text-gray-400 text-sm mb-2">
                  {item.institution}
                </div>
                <div className="text-xs text-gray-500 font-mono uppercase tracking-wider">
                  {item.period}
                </div>
              </div>
            </motion.div>
          )}
        </div>
      </div>
    </section>);

}