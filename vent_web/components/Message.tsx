'use client'

import { useMessage } from "@/store/messageStore"
import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "motion/react";

export const Message = () => {
  const { message, clearMessage } = useMessage();
  const [isVisible, setIsVisible] = useState(false);
  const [currentTimer, setCurrentTimer] = useState<NodeJS.Timeout | null>(null);

  useEffect(() => {
    if (message) {
      // Clear existing timer if there's one
      if (currentTimer) {
        clearTimeout(currentTimer);
      }

      setIsVisible(true);

      // Set new timer
      const timer = setTimeout(() => {
        setIsVisible(false);
        setTimeout(() => clearMessage(), 300); // Delay clearMessage to allow exit animation
      }, 3000);

      setCurrentTimer(timer);

      return () => {
        if (timer) {
          clearTimeout(timer);
        }
      };
    } else {
      // Clear timer when message is cleared
      if (currentTimer) {
        clearTimeout(currentTimer);
        setCurrentTimer(null);
      }
      setIsVisible(false);
    }
  }, [message, clearMessage]);

  // Clear timer on component unmount
  useEffect(() => {
    return () => {
      if (currentTimer) {
        clearTimeout(currentTimer);
      }
    };
  }, [currentTimer]);

  const getMessageStyle = (type: string) => {
    switch (type) {
      case 'success':
        return {
          gradient: 'from-emerald-500 to-green-600',
          icon: '✓',
          iconBg: 'bg-emerald-400/20',
          border: 'border-emerald-400/30'
        };
      case 'error':
        return {
          gradient: 'from-red-500 to-rose-600',
          icon: '✕',
          iconBg: 'bg-red-400/20',
          border: 'border-red-400/30'
        };
      case 'warning':
        return {
          gradient: 'from-amber-500 to-orange-600',
          icon: '⚠',
          iconBg: 'bg-amber-400/20',
          border: 'border-amber-400/30'
        };
      default:
        return {
          gradient: 'from-blue-500 to-indigo-600',
          icon: 'ℹ',
          iconBg: 'bg-blue-400/20',
          border: 'border-blue-400/30'
        };
    }
  };

  if (!message) return null;

  const style = getMessageStyle(message.type);

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 0, y: -50, scale: 0.95 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: -30, scale: 0.95 }}
          transition={{
            type: "spring",
            stiffness: 400,
            damping: 25,
            duration: 0.3
          }}
          className="fixed top-6 right-6 z-50 max-w-sm"
        >
          <div
            className={`
              relative overflow-hidden rounded-xl backdrop-blur-xl border ${style.border}
              bg-gradient-to-r ${style.gradient} shadow-2xl
              before:absolute before:inset-0 before:bg-white/10 before:backdrop-blur-sm
            `}
          >
            {/* Shimmer effect */}
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -skew-x-12 animate-pulse" />

            {/* Content */}
            <div className="relative flex items-start gap-3 p-4">
              {/* Icon */}
              <div className={`
                flex-shrink-0 w-8 h-8 rounded-full ${style.iconBg} 
                flex items-center justify-center text-white font-bold text-sm
                ring-2 ring-white/20
              `}>
                {style.icon}
              </div>

              {/* Message content */}
              <div className="flex-1 min-w-0">
                <p className="text-white font-medium text-sm leading-relaxed drop-shadow-sm">
                  {message.content}
                </p>
              </div>

              {/* Close button */}
              <button
                onClick={() => {
                  if (currentTimer) {
                    clearTimeout(currentTimer);
                    setCurrentTimer(null);
                  }
                  setIsVisible(false);
                  setTimeout(() => clearMessage(), 300);
                }}
                className="
                  flex-shrink-0 w-6 h-6 rounded-full bg-white/10 hover:bg-white/20 
                  flex items-center justify-center text-white/80 hover:text-white
                  transition-all duration-200 hover:scale-110 active:scale-95
                  ring-1 ring-white/10 hover:ring-white/20
                "
              >
                <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M18 6L6 18M6 6l12 12" />
                </svg>
              </button>
            </div>

            {/* Progress bar */}
            <div className="absolute bottom-0 left-0 right-0 h-1 bg-white/10">
              <motion.div
                key={message?.content} // Reset animation when message changes
                initial={{ width: "100%" }}
                animate={{ width: "0%" }}
                transition={{ duration: 3, ease: "linear" }}
                className="h-full bg-gradient-to-r from-white/50 to-white/30"
              />
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}

export default Message