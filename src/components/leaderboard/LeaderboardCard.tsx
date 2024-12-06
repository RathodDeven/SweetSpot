import React from 'react'
import { motion } from 'framer-motion'
import { Star, Trophy, Award, Target } from 'lucide-react'
import { UserAvatar } from '../UserAvatar'
import { User } from '../../graphql/generated'
import { formatAddress } from '../../utils/formatters'

interface LeaderboardCardProps {
  user: User
  rank: number
  score: number
  achievements: number
  animate?: boolean
}

const rankColors = {
  1: 'from-yellow-400 to-yellow-600',
  2: 'from-slate-300 to-slate-500',
  3: 'from-amber-600 to-amber-800'
}

const rankEmojis = {
  1: '👑',
  2: '🥈',
  3: '🥉'
}

export function LeaderboardCard({
  user,
  rank,
  score,
  achievements,
  animate = true
}: LeaderboardCardProps) {
  const isTopThree = rank <= 3
  const rankColor = rankColors[rank as keyof typeof rankColors]
  const rankEmoji = rankEmojis[rank as keyof typeof rankEmojis]

  return (
    <motion.div
      initial={animate ? { opacity: 0, x: -20 } : false}
      animate={{ opacity: 1, x: 0 }}
      transition={{ delay: rank * 0.1 }}
      whileHover={{ scale: 1.02, rotateX: 5, rotateY: 5 }}
      className="relative bg-white/80 backdrop-blur-sm rounded-lg p-4 shadow-lg overflow-hidden group hover:shadow-purple-500/20 transition-all duration-300 transform perspective-1000"
    >
      {/* Background effects */}
      <div className="absolute inset-0 bg-gradient-to-r from-purple-500/10 via-pink-500/10 to-purple-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      <div className="absolute inset-0 border-2 border-transparent bg-gradient-to-r from-purple-500 via-pink-500 to-purple-500 mask-border animate-pulse-border rounded-lg" />

      {/* Rank indicator */}
      {isTopThree && (
        <div className="absolute -top-6 -right-6 w-12 h-12 bg-gradient-to-br from-yellow-400 to-yellow-600 rotate-12 transform transition-transform group-hover:rotate-0">
          <div className="w-full h-full flex items-center justify-center -rotate-12 transform transition-transform group-hover:rotate-0">
            <span className="text-xl">{rankEmoji}</span>
          </div>
        </div>
      )}

      <div className="flex items-center justify-between relative z-10">
        <div className="flex items-center space-x-4">
          <div className="relative">
            <UserAvatar user={user} size="sm" />
            <div
              className={`absolute -top-1 -right-1 w-5 h-5 rounded-full bg-gradient-to-br ${rankColor || 'from-purple-500 to-purple-700'} flex items-center justify-center text-white text-xs font-bold shadow-lg`}
            >
              {rank}
            </div>
          </div>
          <div>
            <h3 className="font-semibold">{formatAddress(user.id)}</h3>
            <div className="flex items-center space-x-1 text-sm text-gray-600">
              <Star className="h-4 w-4 text-yellow-400" />
              <span>{score} points</span>
            </div>
          </div>
        </div>

        {/* Stats */}
        <div className="flex items-center space-x-4">
          <div className="text-center">
            <Trophy className="h-4 w-4 text-purple-500 mx-auto mb-1" />
            <span className="text-xs text-gray-600">Rank</span>
            <p className="font-bold text-sm">{rank}</p>
          </div>
          <div className="text-center">
            <Award className="h-4 w-4 text-pink-500 mx-auto mb-1" />
            <span className="text-xs text-gray-600">Achievements</span>
            <p className="font-bold text-sm">{achievements}</p>
          </div>
          <div className="text-center">
            <Target className="h-4 w-4 text-indigo-500 mx-auto mb-1" />
            <span className="text-xs text-gray-600">Level</span>
            <p className="font-bold text-sm">{Math.floor(score / 100)}</p>
          </div>
        </div>
      </div>

      {/* Progress bar */}
      <div className="mt-4">
        <div className="h-2 bg-gray-200 rounded-full overflow-hidden">
          <motion.div
            initial={{ width: 0 }}
            animate={{ width: `${score % 100}%` }}
            transition={{ duration: 1, delay: rank * 0.1 }}
            className={`h-full bg-gradient-to-r ${rankColor || 'from-purple-500 to-purple-700'}`}
          />
        </div>
        <div className="flex justify-between text-xs text-gray-500 mt-1">
          <span>Level {Math.floor(score / 100)}</span>
          <span>{score % 100}/100 XP</span>
        </div>
      </div>
    </motion.div>
  )
}
