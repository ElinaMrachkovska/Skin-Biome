import React from 'react';
import { motion } from 'framer-motion';
import { Code2, Database, Layout, Terminal, Wrench } from 'lucide-react';
const skills = [
{
  category: 'Frontend Core',
  icon: Layout,
  items: [
  'React',
  'TypeScript',
  'JavaScript (ES6+)',
  'HTML5',
  'CSS3',
  'Sass (SCSS)'],

  color: 'bg-blue-500/10 text-blue-300 border-blue-500/20'
},
{
  category: 'State & Styling',
  icon: Code2,
  items: ['Redux Toolkit', 'Tailwind CSS', 'Material UI', 'BEM Methodology'],
  color: 'bg-cyan-500/10 text-cyan-300 border-cyan-500/20'
},
{
  category: 'Testing & QA',
  icon: Wrench,
  items: [
  'Jest',
  'Cypress',
  'Manual QA',
  'Regression Testing',
  'Smoke Testing'],

  color: 'bg-green-500/10 text-green-300 border-green-500/20'
},
{
  category: 'Tools & DevOps',
  icon: Terminal,
  items: ['Git', 'Webpack', 'Vite', 'Docker', 'ESLint', 'Prettier'],
  color: 'bg-orange-500/10 text-orange-300 border-orange-500/20'
},
{
  category: 'Backend Basics',
  icon: Database,
  items: ['Node.js', 'Express', 'SQL', 'PostgreSQL', 'Sequelize'],
  color: 'bg-purple-500/10 text-purple-300 border-purple-500/20'
}];

export function SkillsSection() {
  return (
    <section id="skills" className="py-20 relative">
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
            Technical Skills
          </h2>
          <p className="text-gray-300 max-w-2xl">
            A comprehensive toolkit for building modern, scalable web
            applications. Focused on the React ecosystem with strong TypeScript
            foundations.
          </p>
        </motion.div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {skills.map((group, index) =>
          <motion.div
            key={group.category}
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
            className="bg-white/5 rounded-xl p-6 border border-white/10 hover:border-white/20 transition-colors">

              <div className="flex items-center gap-3 mb-4">
                <div className={`p-2 rounded-lg ${group.color.split(' ')[0]}`}>
                  <group.icon size={20} className={group.color.split(' ')[1]} />
                </div>
                <h3 className="font-semibold text-white">{group.category}</h3>
              </div>

              <div className="flex flex-wrap gap-2">
                {group.items.map((skill) =>
              <span
                key={skill}
                className={`px-3 py-1 text-sm rounded-full border ${group.color}`}>

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