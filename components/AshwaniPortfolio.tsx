"use client"

import React from 'react'
import Image from 'next/image'
import { motion } from 'framer-motion'

const AshwaniPortfolio = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 to-black text-white overflow-hidden relative">
      {/* Floating Background Elements */}
      <div className="absolute top-0 left-0 w-full h-full pointer-events-none overflow-hidden z-0">
        <motion.div
          className="absolute top-20 left-10 opacity-20"
          animate={{
            y: [0, -20, 0],
            rotate: [0, 15, 0],
          }}
          transition={{
            duration: 5,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        >
          <Image src="/cricket-bat.svg" alt="Cricket Bat" width={250} height={250} />
        </motion.div>

        <motion.div
          className="absolute bottom-20 right-20 opacity-30"
          animate={{
            y: [0, -30, 0],
            rotate: [0, -15, 0],
          }}
          transition={{
            duration: 6,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        >
          <Image src="/cricket-ball.svg" alt="Cricket Ball" width={200} height={200} />
        </motion.div>

        <motion.div
          className="absolute top-1/3 left-1/4 opacity-20"
          animate={{
            y: [0, -25, 0],
            rotate: [0, 10, 0],
          }}
          transition={{
            duration: 7,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        >
          <Image src="/wicket.svg" alt="Wicket" width={150} height={250} />
        </motion.div>

        <motion.div
          className="absolute top-2/3 right-1/4 opacity-25"
          animate={{
            y: [0, -20, 0],
            rotate: [0, -5, 0],
          }}
          transition={{
            duration: 5.5,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        >
          <Image src="/gloves.svg" alt="Cricket Gloves" width={180} height={180} />
        </motion.div>
      </div>

      {/* Main Content */}
      <div className="container mx-auto px-4 py-16 relative z-10">
        <div className="max-w-4xl mx-auto space-y-8">
          {/* Circular Image Section */}
          <motion.div
            className="flex justify-center mb-8"
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.5 }}
          >
            <div className="relative w-48 h-48 rounded-full overflow-hidden border-4 border-blue-400 shadow-lg">
              <Image
                src="/ashwani-profile.jpg"
                alt="Ashwani Kumari"
                layout="fill"
                objectFit="cover"
              />
            </div>
          </motion.div>

          {/* Header with Floating Effect */}
          <motion.header
            className="text-center mb-12"
            initial={{ y: -50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-2 drop-shadow-[0_5px_5px_rgba(0,0,0,0.5)]">
              Ashwani Kumari
            </h1>
            <h2 className="text-2xl md:text-3xl text-blue-300 drop-shadow-[0_3px_3px_rgba(0,0,0,0.3)]">
              Professional Cricketer
            </h2>
          </motion.header>

          {/* Profile Section */}
          <motion.section
            className="bg-gray-800 bg-opacity-80 rounded-2xl p-6 md:p-8 shadow-2xl"
            initial={{ x: -100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            whileHover={{ scale: 1.02 }}
          >
            <h3 className="text-2xl md:text-3xl font-semibold mb-4 md:mb-6 text-blue-400">Profile</h3>
            <p className="text-gray-300 leading-relaxed">
              A professional cricketer recently selected for the Women's Premier League (WPL). 
              Currently playing for Delhi Capitals (2024) and previously selected by Gujarat Giants (2023). 
              Experienced player with notable achievements in various national tournaments.
            </p>
          </motion.section>

          {/* Statistics Section */}
          <motion.section
            className="bg-gray-800 bg-opacity-80 rounded-2xl p-6 md:p-8 shadow-2xl"
            initial={{ x: 100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.6 }}
            whileHover={{ scale: 1.02 }}
          >
            <h3 className="text-2xl md:text-3xl font-semibold mb-4 md:mb-6 text-blue-400">Statistics</h3>
            <div className="grid md:grid-cols-2 gap-4">
              <motion.a 
                href="https://www.espncricinfo.com/player/ashwani-kumari-player-name" 
                target="_blank" 
                rel="noopener noreferrer"
                className="bg-blue-900 bg-opacity-50 p-4 rounded-xl hover:bg-opacity-70 transition-all"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <h4 className="font-bold text-xl text-blue-300">ESPN Cricinfo Profile</h4>
                <p className="text-gray-400">View Detailed Player Statistics</p>
              </motion.a>
              <motion.a 
                href="#" 
                target="_blank" 
                rel="noopener noreferrer"
                className="bg-blue-900 bg-opacity-50 p-4 rounded-xl hover:bg-opacity-70 transition-all"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <h4 className="font-bold text-xl text-blue-300">My Personal Stats</h4>
                <p className="text-gray-400">Comprehensive Performance Metrics</p>
              </motion.a>
            </div>
          </motion.section>

          {/* Contact Section with Direct Links */}
          <motion.section
            className="bg-gray-800 bg-opacity-80 rounded-2xl p-6 md:p-8 shadow-2xl"
            initial={{ y: 100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.8 }}
            whileHover={{ scale: 1.02 }}
          >
            <h3 className="text-2xl md:text-3xl font-semibold mb-4 md:mb-6 text-blue-400">Contact</h3>
            <div className="grid md:grid-cols-2 gap-4">
              <motion.a 
                href="tel:9507777274" 
                className="flex items-center space-x-4 bg-blue-900 bg-opacity-30 p-3 rounded-xl hover:bg-opacity-50 transition-all"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="text-blue-400">
                  <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/>
                </svg>
                <span>9507777274</span>
              </motion.a>

              <motion.a 
                href="mailto:ashwisingh2k18@gmail.com" 
                className="flex items-center space-x-4 bg-blue-900 bg-opacity-30 p-3 rounded-xl hover:bg-opacity-50 transition-all"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="text-blue-400">
                  <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/>
                  <polyline points="22,6 12,13 2,6"/>
                </svg>
                <span>ashwisingh2k18@gmail.com</span>
              </motion.a>

              <motion.a 
                href="https://maps.google.com/?q=Jamshedpur,Jharkhand" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center space-x-4 bg-blue-900 bg-opacity-30 p-3 rounded-xl hover:bg-opacity-50 transition-all"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="text-blue-400">
                  <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/>
                  <circle cx="12" cy="7" r="4"/>
                </svg>
                <span>Jamshedpur, Jharkhand</span>
              </motion.a>

              <motion.a 
                href="https://instagram.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center space-x-4 bg-blue-900 bg-opacity-30 p-3 rounded-xl hover:bg-opacity-50 transition-all"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="text-blue-400">
                  <rect x="2" y="2" width="20" height="20" rx="5" ry="5"/>
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/>
                  <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/>
                </svg>
                <span>Instagram Profile</span>
              </motion.a>
            </div>
          </motion.section>

          {/* Copyright Section */}
          <footer className="text-center text-gray-500 pt-12 mt-8 border-t border-gray-700">
            <p className="text-sm">
              © 2024 Ashwani Kumari. All Rights Reserved. 
              <br />
              Designed with ❤️ for Cricket Enthusiasts
            </p>
          </footer>
        </div>
      </div>
    </div>
  )
}

export default AshwaniPortfolio

