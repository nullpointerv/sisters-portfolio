"use client"

import React, { useEffect, useState } from 'react'

const colors = [
  'from-blue-900 to-purple-900',
  'from-green-900 to-teal-900',
  'from-red-900 to-pink-900',
  'from-yellow-900 to-orange-900',
  'from-indigo-900 to-blue-900',
]

export const ColorChangingBackground: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [colorClass, setColorClass] = useState('')

  useEffect(() => {
    const randomColor = colors[Math.floor(Math.random() * colors.length)]
    setColorClass(randomColor)
  }, [])

  return (
    <div className={`min-h-screen bg-gradient-to-br ${colorClass} text-white overflow-hidden relative`}>
      {children}
    </div>
  )
}

