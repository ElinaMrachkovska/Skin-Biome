import React from 'react';
import { motion } from 'framer-motion';
import {
  Code2,
  MapPin,
  Mail,
  Github,
  Linkedin,
  Phone,
  Download } from
'lucide-react';
export function HeroSection() {
  return (
    <section className="relative z-10 flex flex-col items-center justify-center min-h-[90vh] py-20 text-center">
      {/* Profile Image */}
      <motion.div
        initial={{
          scale: 0.8,
          opacity: 0
        }}
        animate={{
          scale: 1,
          opacity: 1
        }}
        transition={{
          duration: 0.5
        }}
        className="relative mb-8 h-48 w-48 md:h-56 md:w-56">

        <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-cyan-500 to-purple-500 blur-lg opacity-50 animate-pulse" />
        <img
          src="/\u044F.jpg"
          alt="Elina Mrachkovska"
          className="relative h-full w-full rounded-full object-cover border-4 border-[#0B1121] shadow-2xl" />

      </motion.div>

      {/* Name & Title */}
      <motion.div
        initial={{
          opacity: 0,
          y: 20
        }}
        animate={{
          opacity: 1,
          y: 0
        }}
        transition={{
          delay: 0.2,
          duration: 0.5
        }}
        className="mb-6">

        <h1 className="mb-3 text-4xl font-bold tracking-tight text-white md:text-6xl lg:text-7xl">
          Elina Mrachkovska
        </h1>
        <div className="flex items-center justify-center gap-3 text-[#22d3ee]">
          <Code2 size={28} className="hidden sm:block" />
          <span className="text-2xl font-bold md:text-3xl tracking-wide">
            Frontend Developer
          </span>
          <Code2 size={28} className="hidden sm:block" />
        </div>
      </motion.div>

      {/* Bio */}
      <motion.p
        initial={{
          opacity: 0
        }}
        animate={{
          opacity: 1
        }}
        transition={{
          delay: 0.4,
          duration: 0.5
        }}
        className="mb-8 max-w-2xl text-lg text-gray-300 px-4 leading-relaxed">

        Building interactive and scalable user interfaces with React,
        TypeScript, and modern CSS. Passionate about pixel-perfect
        implementation and clean code.
      </motion.p>

      {/* Contact Info Row */}
      <motion.div
        initial={{
          opacity: 0,
          y: 10
        }}
        animate={{
          opacity: 1,
          y: 0
        }}
        transition={{
          delay: 0.5,
          duration: 0.5
        }}
        className="flex flex-wrap justify-center gap-4 text-sm text-gray-400 mb-8">

        <div className="flex items-center gap-2 px-3 py-1 rounded-full bg-white/5">
          <MapPin size={16} className="text-cyan-400" />
          <span>Kyiv, Ukraine</span>
        </div>
        <a
          href="mailto:elinamrachkovska@gmail.com"
          className="flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 hover:bg-white/10 transition-colors">

          <Mail size={16} className="text-cyan-400" />
          <span>elinamrachkovska@gmail.com</span>
        </a>
        <a
          href="tel:+380961095864"
          className="flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 hover:bg-white/10 transition-colors">

          <Phone size={16} className="text-cyan-400" />
          <span>+38096-109-58-64</span>
        </a>
      </motion.div>

      {/* CTA Buttons */}
      <motion.div
        initial={{
          opacity: 0,
          y: 10
        }}
        animate={{
          opacity: 1,
          y: 0
        }}
        transition={{
          delay: 0.6,
          duration: 0.5
        }}
        className="flex flex-col sm:flex-row gap-4 mb-12">

        <a
          href="mailto:elinamrachkovska@gmail.com"
          className="flex items-center justify-center gap-2 px-8 py-3 bg-[#22d3ee] hover:bg-[#06b6d4] text-[#0B1121] font-bold rounded-lg transition-all transform hover:scale-105 shadow-lg shadow-cyan-500/20">

          <Mail size={20} />
          Hire Me
        </a>
        <a
          href="#"
          className="flex items-center justify-center gap-2 px-8 py-3 border-2 border-[#22d3ee] text-[#22d3ee] hover:bg-[#22d3ee]/10 font-bold rounded-lg transition-all">

          <Download size={20} />
          Download CV
        </a>
      </motion.div>

      {/* Social Links */}
      <motion.div
        initial={{
          opacity: 0
        }}
        animate={{
          opacity: 1
        }}
        transition={{
          delay: 0.7,
          duration: 0.5
        }}
        className="flex gap-6">

        <a
          href="https://github.com"
          target="_blank"
          rel="noopener noreferrer"
          className="text-gray-400 hover:text-white transition-colors p-2"
          aria-label="GitHub">

          <Github size={24} />
        </a>
        <a
          href="https://linkedin.com"
          target="_blank"
          rel="noopener noreferrer"
          className="text-gray-400 hover:text-white transition-colors p-2"
          aria-label="LinkedIn">

          <Linkedin size={24} />
        </a>
      </motion.div>
    </section>);

}