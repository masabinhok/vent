'use client'
import { MoveLeftIcon } from 'lucide-react'
import { useRouter } from 'next/navigation'
import React from 'react'

const BackNav = () => {
  const router = useRouter();
  return (
    <button
      onClick={() => router.back()}
      className='fixed top-8 left-8 p-3 rounded-full bg-white/80 backdrop-blur-sm border border-gray-200 hover:bg-white hover:shadow-lg transition-all duration-200 group z-10'
    >
      <MoveLeftIcon
        size={20}
        className="text-gray-600 group-hover:text-gray-900 transition-colors duration-200"
      />
    </button>
  )
}

export default BackNav