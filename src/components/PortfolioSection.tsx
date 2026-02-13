import React from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, Github, BookOpen } from 'lucide-react';
export function PortfolioSection() {
  return (
    <section id="portfolio" className="py-20 relative bg-white/[0.02]">
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
            Featured Projects
          </h2>
          <p className="text-gray-300 max-w-2xl">
            Real-world applications demonstrating full-stack capabilities and
            attention to detail.
          </p>
        </motion.div>

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
          className="group relative overflow-hidden rounded-2xl border border-white/10 bg-[#0B1121] transition-all hover:border-white/20">

          <div className="grid md:grid-cols-2 gap-8 p-8">
            <div className="space-y-6">
              <div className="flex items-center gap-3">
                <div className="p-2 rounded-lg bg-cyan-500/10">
                  <BookOpen className="text-cyan-400" size={24} />
                </div>
                <h3 className="text-2xl font-bold text-white">
                  React Book Catalog
                </h3>
              </div>

              <p className="text-gray-300 leading-relaxed">
                A full-stack web application for managing personal book
                collections. Features include complete CRUD operations, RESTful
                API integration, and efficient data handling. The architecture
                emphasizes scalability and clean code practices.
              </p>

              <div className="flex flex-wrap gap-2">
                {[
                'React',
                'Node.js',
                'Express',
                'Vercel',
                'API Integration'].
                map((tag) =>
                <span
                  key={tag}
                  className="px-3 py-1 text-sm text-cyan-300 bg-cyan-500/10 rounded-full border border-cyan-500/20">

                    {tag}
                  </span>
                )}
              </div>

              <div className="flex gap-4 pt-4">
                <a
                  href="#"
                  className="flex items-center gap-2 px-6 py-2.5 bg-cyan-500 hover:bg-cyan-400 text-black font-semibold rounded-lg transition-colors"
                  aria-label="View Live Demo">

                  <ExternalLink size={18} />
                  Live Demo
                </a>
                <a
                  href="#"
                  className="flex items-center gap-2 px-6 py-2.5 border border-white/20 hover:bg-white/5 text-white font-medium rounded-lg transition-colors"
                  aria-label="View Source Code">

                  <Github size={18} />
                  GitHub Code
                </a>
              </div>
            </div>

            <div className="relative h-full min-h-[200px] rounded-xl bg-gradient-to-br from-gray-800 to-gray-900 border border-white/5 flex items-center justify-center overflow-hidden group-hover:border-white/10 transition-colors">
              {/* Abstract representation of the app interface */}
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(34,211,238,0.1),transparent_70%)]" />
              <div className="text-center p-6">
                <BookOpen size={64} className="mx-auto text-white/20 mb-4" />
                <p className="text-sm text-gray-500 font-mono">
                  Application Preview Placeholder
                </p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>);

}