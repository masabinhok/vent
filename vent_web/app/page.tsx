'use client'
import { useEffect, useState } from 'react'
import { motion } from 'motion/react'
import Link from 'next/link'

export default function Home() {
  const [isLoaded, setIsLoaded] = useState(false)

  useEffect(() => {
    setIsLoaded(true)
  }, [])

  return (
    <main className="min-h-screen bg-gradient-to-br from-indigo-950 via-purple-950 to-slate-900 relative overflow-hidden">


      {/* Top Pill Badge */}
      <div className="absolute top-20 left-1/2 transform -translate-x-1/2 z-20">
        <div className="flex items-center gap-2 px-6 py-3 bg-white/10 backdrop-blur-lg rounded-full border border-white/20">
          <div className="w-6 h-6 border border-purple-300  rounded-full flex items-center justify-center">
            <span className="text-white text-xs">🎭</span>
          </div>
          <span className="text-white/90 font-medium">Anonymous connections that matter</span>
        </div>
      </div>

      {/* Floating Geometric Elements */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Purple Circle - Top Left */}
        <motion.div
          className="absolute top-20 left-20 w-32 h-32 rounded-full opacity-80"
          style={{
            background: 'linear-gradient(135deg, #8b5cf6, #a855f7)'
          }}
          animate={{
            y: [0, -20, 0]
          }}
          transition={{
            duration: 6,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />

        {/* Green Diamond - Left Side */}
        <motion.div
          className="absolute top-1/3 left-1/4 w-16 h-16 opacity-70 transform rotate-45"
          style={{
            background: 'linear-gradient(135deg, #10b981, #059669)'
          }}
          animate={{
            y: [0, -20, 0],
            rotate: [45, 135, 225, 315, 45]
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />

        {/* Blue Diamond - Top Right */}
        <motion.div
          className="absolute top-32 right-32 w-20 h-20 opacity-75 transform rotate-45"
          style={{
            background: 'linear-gradient(135deg, #3b82f6, #1d4ed8)'
          }}
          animate={{
            y: [0, -20, 0],
            rotate: [45, 135, 225, 315, 45]
          }}
          transition={{
            duration: 7,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />

        {/* Small Pink Circle - Right Side */}
        <motion.div
          className="absolute top-2/3 right-1/4 w-12 h-12 rounded-full opacity-80"
          style={{
            background: 'linear-gradient(135deg, #ec4899, #be185d)'
          }}
          animate={{
            y: [0, -20, 0]
          }}
          transition={{
            duration: 5,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />

        {/* Medium Purple Circle - Bottom Right */}
        <motion.div
          className="absolute bottom-32 right-20 w-24 h-24 rounded-full opacity-60"
          style={{
            background: 'linear-gradient(135deg, #8b5cf6, #6366f1)'
          }}
          animate={{
            y: [0, -20, 0]
          }}
          transition={{
            duration: 9,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
      </div>

      {/* Main Content */}
      <div className="flex items-center justify-center min-h-screen px-8">
        <div className="text-center max-w-4xl mx-auto relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 32 }}
            animate={{
              opacity: isLoaded ? 1 : 0,
              y: isLoaded ? 0 : 32
            }}
            transition={{ duration: 1, ease: "easeOut" }}
          >
            <h1 className="text-7xl md:text-8xl lg:text-9xl font-black leading-none tracking-tight">
              <div className="text-white mb-4">
                Connect.
              </div>
              <Link href='/dashboard'>
                <div
                  className="mb-4 bg-clip-text text-transparent"
                  style={{
                    background: 'linear-gradient(135deg, #f472b6, #ec4899, #db2777)',
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent'
                  }}
                >
                  Vent.
                </div>
              </Link>
              <div className="text-white">
                Transcend.
              </div>
            </h1>
          </motion.div>
        </div>
      </div>

      {/* Background Glow Effects */}
      <div className="absolute inset-0 pointer-events-none">
        {/* Central Glow */}
        <div
          className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 rounded-full opacity-20 blur-3xl"
          style={{
            background: 'radial-gradient(circle, #ec4899, #8b5cf6, transparent 70%)'
          }}
        />

        {/* Side Glows */}
        <div
          className="absolute top-1/4 left-1/4 w-64 h-64 rounded-full opacity-15 blur-3xl"
          style={{
            background: 'radial-gradient(circle, #8b5cf6, transparent 70%)'
          }}
        />

        <div
          className="absolute bottom-1/4 right-1/4 w-64 h-64 rounded-full opacity-15 blur-3xl"
          style={{
            background: 'radial-gradient(circle, #3b82f6, transparent 70%)'
          }}
        />
      </div>
    </main>
  )
}