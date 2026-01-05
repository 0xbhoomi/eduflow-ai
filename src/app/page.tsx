"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, CheckCircle, Zap, BarChart3, BookOpen, Users } from 'lucide-react';
import Link from 'next/link';

export default function Home() {
  const fadeInUp = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6 }
  };

  const staggerContainer = {
    animate: {
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  return (
    <div className="min-h-screen bg-slate-950 text-white font-sans selection:bg-indigo-500 selection:text-white overflow-x-hidden">
      {/* Navigation */}
      <nav className="fixed w-full z-50 bg-slate-950/80 backdrop-blur-md border-b border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center">
              <span className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-indigo-400 to-cyan-400">
                EduFlow AI
              </span>
            </div>
            <div className="hidden md:block">
              <div className="ml-10 flex items-baseline space-x-8">
                <Link href="#features" className="hover:text-indigo-400 transition-colors px-3 py-2 rounded-md text-sm font-medium">Features</Link>
                <Link href="#pricing" className="hover:text-indigo-400 transition-colors px-3 py-2 rounded-md text-sm font-medium">Pricing</Link>
                <Link href="#testimonials" className="hover:text-indigo-400 transition-colors px-3 py-2 rounded-md text-sm font-medium">Testimonials</Link>
              </div>
            </div>
            <div>
              <button className="bg-indigo-600 hover:bg-indigo-700 text-white px-5 py-2 rounded-full text-sm font-medium transition-all transform hover:scale-105 shadow-lg shadow-indigo-500/20">
                Get Started
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-indigo-900/20 via-slate-950 to-slate-950"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div
            initial="initial"
            animate="animate"
            variants={staggerContainer}
            className="text-center"
          >
            <motion.h1
              variants={fadeInUp}
              className="text-5xl md:text-7xl font-extrabold tracking-tight mb-8"
            >
              Master Your Learning with <br className="hidden md:block" />
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-indigo-400 via-purple-400 to-cyan-400">
                Intelligent Productivity
              </span>
            </motion.h1>
            <motion.p
              variants={fadeInUp}
              className="mt-4 max-w-2xl mx-auto text-xl text-slate-400 mb-10"
            >
              EduFlow AI uses advanced algorithms to personalize your study schedule, track your progress, and optimize your learning efficiency in real-time.
            </motion.p>
            <motion.div
              variants={fadeInUp}
              className="flex justify-center gap-4"
            >
              <button className="bg-indigo-600 hover:bg-indigo-700 text-white px-8 py-4 rounded-full text-lg font-semibold transition-all transform hover:scale-105 flex items-center gap-2 shadow-xl shadow-indigo-500/25">
                Start Learning Now <ArrowRight className="w-5 h-5" />
              </button>
              <button className="bg-slate-800 hover:bg-slate-700 text-slate-200 px-8 py-4 rounded-full text-lg font-semibold transition-all border border-slate-700">
                View Demo
              </button>
            </motion.div>
          </motion.div>

          {/* Hero Visual */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.8 }}
            className="mt-20 relative mx-auto max-w-5xl"
          >
            <div className="relative rounded-2xl bg-slate-900/50 border border-slate-800 p-2 shadow-2xl backdrop-blur-sm">
              <div className="absolute -inset-1 bg-gradient-to-r from-indigo-500 to-cyan-500 rounded-2xl blur opacity-20"></div>
              <div className="aspect-[16/9] rounded-xl bg-slate-950 overflow-hidden relative border border-slate-800/50 flex items-center justify-center">
                <div className="text-center p-10">
                  <BarChart3 className="w-20 h-20 text-indigo-500 mx-auto mb-4 opacity-50" />
                  <p className="text-slate-500 text-lg">Interactive Dashboard Preview</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-24 bg-slate-950 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Why Choose EduFlow AI?</h2>
            <p className="text-slate-400 max-w-2xl mx-auto">Everything you need to supercharge your academic performance into one powerful platform.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <FeatureCard
              icon={<Zap className="w-6 h-6 text-yellow-400" />}
              title="Smart Scheduling"
              description="AI-driven timetables that adapt to your energy levels and deadlines automatically."
            />
            <FeatureCard
              icon={<Users className="w-6 h-6 text-purple-400" />}
              title="Collaborative Study"
              description="Connect with peers, share resources, and study together in virtual focus rooms."
            />
            <FeatureCard
              icon={<BookOpen className="w-6 h-6 text-cyan-400" />}
              title="Resource Hub"
              description="Curated learning materials tailored to your specific curriculum and learning style."
            />
          </div>
        </div>
      </section>

      {/* Testimonials or Stats */}
      <section className="py-20 border-t border-slate-800 bg-slate-900/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <Stat number="10k+" label="Active Students" />
            <Stat number="500+" label="Universities" />
            <Stat number="98%" label="Satisfaction Rate" />
            <Stat number="2M+" label="Hours Studied" />
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-950 border-t border-slate-800 pt-16 pb-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="mb-4 md:mb-0">
              <span className="text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-indigo-400 to-cyan-400">EduFlow AI</span>
              <p className="text-slate-500 text-sm mt-2">© 2024 EduFlow AI. All rights reserved.</p>
            </div>
            <div className="flex space-x-6">
              <a href="#" className="text-slate-400 hover:text-white transition-colors">Privacy</a>
              <a href="#" className="text-slate-400 hover:text-white transition-colors">Terms</a>
              <a href="#" className="text-slate-400 hover:text-white transition-colors">Contact</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

function FeatureCard({ icon, title, description }: { icon: React.ReactNode, title: string, description: string }) {
  return (
    <div className="p-8 rounded-2xl bg-slate-900/50 border border-slate-800 hover:border-indigo-500/50 transition-all hover:bg-slate-900 group">
      <div className="w-12 h-12 rounded-lg bg-slate-800 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
        {icon}
      </div>
      <h3 className="text-xl font-semibold mb-3">{title}</h3>
      <p className="text-slate-400 leading-relaxed">{description}</p>
    </div>
  );
}

function Stat({ number, label }: { number: string, label: string }) {
  return (
    <div>
      <div className="text-4xl font-bold text-white mb-2">{number}</div>
      <div className="text-slate-500 uppercase tracking-wider text-sm">{label}</div>
    </div>
  );
}
