'use client'
import { useEffect, useState } from 'react'
import { motion } from 'motion/react'
import Link from 'next/link'

export default function Home() {
  const [isLoaded, setIsLoaded] = useState(false)
  const [bubbles, setBubbles] = useState<Array<{
    width: number;
    height: number;
    left: string;
    top: string;
    background: string;
    duration: number;
    delay: number;
  }>>([])

  useEffect(() => {
    setIsLoaded(true)

    // Generate bubble data on client side to avoid hydration mismatch
    const bubbleData = [...Array(3)].map((_, i) => ({
      width: Math.random() * 20 + 10,
      height: Math.random() * 20 + 10,
      left: `${Math.random() * 100}%`,
      top: `${Math.random() * 100}%`,
      background: `linear-gradient(135deg, ${['#8b5cf6', '#3b82f6', '#ec4899'][Math.floor(Math.random() * 3)]}, transparent)`,
      duration: Math.random() * 5 + 15,
      delay: Math.random() * 8
    }))
    setBubbles(bubbleData)
  }, [])

  return (
    <main className="min-h-screen bg-gradient-to-br from-indigo-950 via-purple-950 to-slate-900 relative overflow-hidden">


      {/* Top Pill Badge */}
      <div className="absolute top-20 left-1/2 transform -translate-x-1/2 z-20 opacity-60">
        <div className="flex items-center gap-2 px-4 py-2 bg-white/5 backdrop-blur-lg rounded-full border border-white/10">
          <div className="w-4 h-4 border border-purple-300/50 rounded-full flex items-center justify-center">
            <span className="text-white/70 text-xs">🎭</span>
          </div>
          <span className="text-white/60 font-light text-sm">Anonymous connections that matter</span>
        </div>
      </div>

      {/* Cool Arrows Pointing to VENT */}
      {/* Top Arrow */}
      <motion.div
        className="absolute top-32 left-1/2 transform -translate-x-1/2 z-10"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 0.4, y: 0 }}
        transition={{ delay: 1.5, duration: 1.2 }}
      >
        <motion.div
          animate={{
            y: [0, 8, 0],
            opacity: [0.4, 0.7, 0.4]
          }}
          transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
        >
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="url(#gradient1)" strokeWidth="2" opacity="0.6">
            <path d="M12 19V5M5 12l7-7 7 7" />
          </svg>
        </motion.div>
      </motion.div>

      {/* Top-Left Arrow */}
      <motion.div
        className="absolute top-40 left-1/3 transform -translate-x-1/2 z-10"
        initial={{ opacity: 0, x: -20, y: -20 }}
        animate={{ opacity: 0.3, x: 0, y: 0 }}
        transition={{ delay: 1.7, duration: 1.2 }}
      >
        <motion.div
          animate={{
            x: [0, 6, 0],
            y: [0, 6, 0],
            opacity: [0.3, 0.6, 0.3]
          }}
          transition={{ duration: 3.5, repeat: Infinity, ease: "easeInOut" }}
        >
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="url(#gradient2)" strokeWidth="2" opacity="0.5">
            <path d="M7 17L17 7M17 7H7M17 7V17" />
          </svg>
        </motion.div>
      </motion.div>

      {/* Top-Right Arrow */}
      <motion.div
        className="absolute top-40 right-1/3 transform translate-x-1/2 z-10"
        initial={{ opacity: 0, x: 20, y: -20 }}
        animate={{ opacity: 0.3, x: 0, y: 0 }}
        transition={{ delay: 1.9, duration: 1.2 }}
      >
        <motion.div
          animate={{
            x: [0, -6, 0],
            y: [0, 6, 0],
            opacity: [0.3, 0.6, 0.3]
          }}
          transition={{ duration: 3.8, repeat: Infinity, ease: "easeInOut" }}
        >
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="url(#gradient3)" strokeWidth="2" opacity="0.5">
            <path d="M17 17L7 7M7 7H17M7 7V17" />
          </svg>
        </motion.div>
      </motion.div>

      {/* Left Arrow */}
      <motion.div
        className="absolute top-1/2 left-32 transform -translate-y-1/2 z-10"
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 0.4, x: 0 }}
        transition={{ delay: 2.1, duration: 1.2 }}
      >
        <motion.div
          animate={{
            x: [0, 12, 0],
            opacity: [0.4, 0.7, 0.4]
          }}
          transition={{ duration: 2.8, repeat: Infinity, ease: "easeInOut" }}
        >
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="url(#gradient4)" strokeWidth="2" opacity="0.6">
            <path d="M19 12H5M12 19l-7-7 7-7" />
          </svg>
        </motion.div>
      </motion.div>

      {/* Right Arrow */}
      <motion.div
        className="absolute top-1/2 right-32 transform -translate-y-1/2 z-10"
        initial={{ opacity: 0, x: 20 }}
        animate={{ opacity: 0.4, x: 0 }}
        transition={{ delay: 2.3, duration: 1.2 }}
      >
        <motion.div
          animate={{
            x: [0, -12, 0],
            opacity: [0.4, 0.7, 0.4]
          }}
          transition={{ duration: 3.2, repeat: Infinity, ease: "easeInOut" }}
        >
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="url(#gradient5)" strokeWidth="2" opacity="0.6">
            <path d="M5 12h14M12 5l7 7-7 7" />
          </svg>
        </motion.div>
      </motion.div>

      {/* Bottom-Left Arrow */}
      <motion.div
        className="absolute bottom-40 left-1/3 transform -translate-x-1/2 z-10"
        initial={{ opacity: 0, x: -20, y: 20 }}
        animate={{ opacity: 0.3, x: 0, y: 0 }}
        transition={{ delay: 2.5, duration: 1.2 }}
      >
        <motion.div
          animate={{
            x: [0, 6, 0],
            y: [0, -6, 0],
            opacity: [0.3, 0.6, 0.3]
          }}
          transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
        >
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="url(#gradient6)" strokeWidth="2" opacity="0.5">
            <path d="M7 7L17 17M17 17H7M17 17V7" />
          </svg>
        </motion.div>
      </motion.div>

      {/* Bottom-Right Arrow */}
      <motion.div
        className="absolute bottom-40 right-1/3 transform translate-x-1/2 z-10"
        initial={{ opacity: 0, x: 20, y: 20 }}
        animate={{ opacity: 0.3, x: 0, y: 0 }}
        transition={{ delay: 2.7, duration: 1.2 }}
      >
        <motion.div
          animate={{
            x: [0, -6, 0],
            y: [0, -6, 0],
            opacity: [0.3, 0.6, 0.3]
          }}
          transition={{ duration: 3.6, repeat: Infinity, ease: "easeInOut" }}
        >
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="url(#gradient7)" strokeWidth="2" opacity="0.5">
            <path d="M17 7L7 17M7 17H17M7 17V7" />
          </svg>
        </motion.div>
      </motion.div>

      {/* Bottom Arrow */}
      <motion.div
        className="absolute bottom-32 left-1/2 transform -translate-x-1/2 z-10"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 0.4, y: 0 }}
        transition={{ delay: 2.9, duration: 1.2 }}
      >
        <motion.div
          animate={{
            y: [0, -8, 0],
            opacity: [0.4, 0.7, 0.4]
          }}
          transition={{ duration: 3.4, repeat: Infinity, ease: "easeInOut" }}
        >
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="url(#gradient8)" strokeWidth="2" opacity="0.6">
            <path d="M12 5v14M19 12l-7 7-7-7" />
          </svg>
        </motion.div>
      </motion.div>

      {/* SVG Gradients */}
      <svg width="0" height="0" className="absolute">
        <defs>
          <linearGradient id="gradient1" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#8b5cf6" />
            <stop offset="100%" stopColor="#ec4899" />
          </linearGradient>
          <linearGradient id="gradient2" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#3b82f6" />
            <stop offset="100%" stopColor="#8b5cf6" />
          </linearGradient>
          <linearGradient id="gradient3" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#ec4899" />
            <stop offset="100%" stopColor="#3b82f6" />
          </linearGradient>
          <linearGradient id="gradient4" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#8b5cf6" />
            <stop offset="100%" stopColor="#3b82f6" />
          </linearGradient>
          <linearGradient id="gradient5" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#3b82f6" />
            <stop offset="100%" stopColor="#ec4899" />
          </linearGradient>
          <linearGradient id="gradient6" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#ec4899" />
            <stop offset="100%" stopColor="#8b5cf6" />
          </linearGradient>
          <linearGradient id="gradient7" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#8b5cf6" />
            <stop offset="100%" stopColor="#ec4899" />
          </linearGradient>
          <linearGradient id="gradient8" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#3b82f6" />
            <stop offset="100%" stopColor="#8b5cf6" />
          </linearGradient>
        </defs>
      </svg>

      {/* Feature Props */}
      {/* Safe Space Icon - Top Left */}
      <motion.div
        className="absolute top-32 left-24 z-10 opacity-70"
        initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: 0.3, scale: 1 }}
        transition={{ delay: 2, duration: 1.2 }}
      >
        <div className="bg-white/5 backdrop-blur-sm rounded-full p-3 border border-white/10">
          <motion.div
            animate={{ rotate: [0, 5, -5, 0] }}
            transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
          >
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="1.5" opacity="0.6">
              <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
            </svg>
          </motion.div>
        </div>
      </motion.div>

      {/* Anonymous Chat Icon - Top Right */}
      <motion.div
        className="absolute top-40 right-28 z-10 opacity-70"
        initial={{ opacity: 0, x: 20 }}
        animate={{ opacity: 0.3, x: 0 }}
        transition={{ delay: 2.3, duration: 1.2 }}
      >
        <div className="bg-white/5 backdrop-blur-sm rounded-full p-3 border border-white/10">
          <motion.div
            animate={{ y: [0, -2, 0] }}
            transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
          >
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="1.5" opacity="0.6">
              <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
              <circle cx="9" cy="10" r="1" />
              <circle cx="15" cy="10" r="1" />
            </svg>
          </motion.div>
        </div>
      </motion.div>

      {/* Connection Icon - Left Side */}
      <motion.div
        className="absolute top-1/2 left-16 transform -translate-y-1/2 z-10 opacity-70"
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 0.3, x: 0 }}
        transition={{ delay: 2.6, duration: 1.2 }}
      >
        <div className="bg-white/5 backdrop-blur-sm rounded-full p-3 border border-white/10">
          <motion.div
            animate={{ scale: [1, 1.1, 1] }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
          >
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="1.5" opacity="0.6">
              <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
              <circle cx="9" cy="7" r="4" />
              <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
              <path d="M16 3.13a4 4 0 0 1 0 7.75" />
            </svg>
          </motion.div>
        </div>
      </motion.div>

      {/* Support Icon - Right Side */}
      <motion.div
        className="absolute top-1/2 right-16 transform -translate-y-1/2 z-10 opacity-70"
        initial={{ opacity: 0, x: 20 }}
        animate={{ opacity: 0.3, x: 0 }}
        transition={{ delay: 2.9, duration: 1.2 }}
      >
        <div className="bg-white/5 backdrop-blur-sm rounded-full p-3 border border-white/10">
          <motion.div
            animate={{ rotate: [0, 10, -10, 0] }}
            transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
          >
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="1.5" opacity="0.6">
              <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
            </svg>
          </motion.div>
        </div>
      </motion.div>

      {/* Feel Free to Share Icon - Bottom Left */}
      <motion.div
        className="absolute bottom-32 left-28 z-10 opacity-70"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 0.3, y: 0 }}
        transition={{ delay: 3.2, duration: 1.2 }}
      >
        <div className="bg-white/5 backdrop-blur-sm rounded-full p-3 border border-white/10">
          <motion.div
            animate={{
              y: [0, -3, 0],
              opacity: [0.4, 0.6, 0.4]
            }}
            transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
          >
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="1.5" opacity="0.6">
              <path d="M9 12l2 2 4-4" />
              <path d="M21 12c0 4.97-4.03 9-9 9s-9-4.03-9-9 4.03-9 9-9c2.74 0 5.19 1.23 6.84 3.18" />
            </svg>
          </motion.div>
        </div>
      </motion.div>

      {/* Growth/Journey Icon - Bottom Right */}
      <motion.div
        className="absolute bottom-40 right-24 z-10 opacity-70"
        initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: 0.3, scale: 1 }}
        transition={{ delay: 3.5, duration: 1.2 }}
      >
        <div className="bg-white/5 backdrop-blur-sm rounded-full p-3 border border-white/10">
          <motion.div
            animate={{ rotate: [0, 360] }}
            transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
          >
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="1.5" opacity="0.6">
              <path d="M22 12h-4l-3 9L9 3l-3 9H2" />
            </svg>
          </motion.div>
        </div>
      </motion.div>

      {/* Floating Geometric Elements */}
      <div className="absolute inset-0 overflow-hidden opacity-20">
        {/* Floating Bubbles */}
        {bubbles.map((bubble, i) => (
          <motion.div
            key={`bubble-${i}`}
            className="absolute rounded-full opacity-5"
            style={{
              width: `${bubble.width}px`,
              height: `${bubble.height}px`,
              left: bubble.left,
              top: bubble.top,
              background: bubble.background,
              border: '1px solid rgba(255, 255, 255, 0.02)'
            }}
            animate={{
              y: [0, -10, 0],
              opacity: [0.02, 0.08, 0.02]
            }}
            transition={{
              duration: bubble.duration,
              repeat: Infinity,
              ease: "easeInOut",
              delay: bubble.delay
            }}
          />
        ))}

        {/* Elegant Orbs */}
        <motion.div
          className="absolute top-1/4 left-1/5 w-6 h-6 rounded-full opacity-10"
          style={{
            background: 'radial-gradient(circle, rgba(139, 92, 246, 0.2), transparent 70%)',
            filter: 'blur(2px)'
          }}
          animate={{
            y: [0, -8, 0],
            scale: [1, 1.1, 1]
          }}
          transition={{
            duration: 15,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />

        <motion.div
          className="absolute bottom-1/3 left-1/3 w-8 h-8 rounded-full opacity-8"
          style={{
            background: 'radial-gradient(circle, rgba(236, 72, 153, 0.15), transparent 70%)',
            filter: 'blur(3px)'
          }}
          animate={{
            y: [0, -10, 0],
            scale: [1, 1.05, 1]
          }}
          transition={{
            duration: 18,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 5
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
              <motion.div
                className="text-white/70 mb-4 text-6xl md:text-7xl lg:text-9xl"
                initial={{ opacity: 0}}
                animate={{ opacity: 1 }}
                transition={{ delay: 1, duration: 2}}
              >
                Connect.
              </motion.div>
              <Link href='/dashboard' className="group inline-block relative">
                <motion.div
                  className="relative text-7xl md:text-7xl lg:text-8xl mb-4"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.15, duration: 0 }}
                >
                  {/* Main VENT text with enhanced styling */}
                  <div className="relative">
                    {/* Background glow effect */}
                    <div
                      className="absolute inset-0 text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-pink-400 to-blue-400 blur-sm opacity-50"
                      style={{
                        WebkitBackgroundClip: 'text',
                        backgroundClip: 'text',
                      }}
                    >
                      VENT
                    </div>

                    {/* Main text with gradient */}
                    <div
                      className="relative text-transparent bg-clip-text bg-gradient-to-r from-purple-300 via-pink-300 to-blue-300 font-black tracking-tight filter drop-shadow-2xl "
                      style={{
                        WebkitBackgroundClip: 'text',
                        backgroundClip: 'text',
                        textShadow: '0 0 40px rgba(139, 92, 246, 0.3), 0 0 80px rgba(236, 72, 153, 0.2)'
                      }}
                    >
                      VENT
                    </div>

                    {/* Subtle inner shadow overlay */}
                    <div
                      className="absolute inset-0 text-transparent bg-clip-text bg-gradient-to-b from-transparent via-transparent to-white/10"
                      style={{
                        WebkitBackgroundClip: 'text',
                        backgroundClip: 'text',
                      }}
                    >
                      VENT
                    </div>
                  </div>

                  {/* Hover effect for the link */}
                  <motion.div
                    className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                    style={{
                      background: 'linear-gradient(90deg, transparent, rgba(139, 92, 246, 0.1), transparent)',
                      filter: 'blur(20px)'
                    }}
                  />
                </motion.div>
              </Link>
              <motion.div
                className="text-white/70  text-5xl md:text-7xl lg:text-9xl"
                initial={{ opacity: 0 }}
                animate={{ opacity: 0.7}}
                transition={{ delay: 2, duration: 2 }}
              >
                Transcend.
              </motion.div>
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