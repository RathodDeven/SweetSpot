import React from 'react'
import { motion } from 'framer-motion'
import Link from 'next/link'
import getStampFyiURL from '../utils/getStampFyiURL'

interface UserAvatarProps {
  address: string
  size?: 'sm' | 'md' | 'lg'
}

const glowAnimation = {
  initial: {
    filter: 'drop-shadow(0 0 0px rgba(147, 51, 234, 0))',
    scale: 1
  },
  hover: {
    filter: 'drop-shadow(0 0 8px rgba(147, 51, 234, 0.5))',
    scale: 1.05,
    transition: {
      duration: 0.2
    }
  }
}

export function UserAvatar({ address, size = 'md' }: UserAvatarProps) {
  const sizeClasses = {
    sm: 'h-8 w-8',
    md: 'h-10 w-10',
    lg: 'h-12 w-12'
  }

  return (
    <Link href={`/profile/${address}`} className="no-underline">
      <motion.div
        initial="initial"
        whileHover="hover"
        variants={glowAnimation}
        className={`${sizeClasses[size]} bg-purple-100 rounded-full flex items-center justify-center cursor-pointer`}
      >
        <img
          src={getStampFyiURL(address)}
          className={`${size === 'sm' ? 'h-4 w-4' : 'h-5 w-5'} text-purple-600`}
        />
      </motion.div>
    </Link>
  )
}
