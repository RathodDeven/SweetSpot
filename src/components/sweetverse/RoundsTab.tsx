import React from 'react'
import { motion } from 'framer-motion'
import { Clock, Users } from 'lucide-react'
import { MOCK_ROUNDS, Round } from '../../types/rounds'
import { formatEther } from '../../utils/formatters'

function RoundCard({
  round,
  isActive = false
}: {
  round: Round
  isActive?: boolean
}) {
  const progress =
    (parseFloat(round.claimedAmount) /
      parseFloat(round.totalAllocation.amount)) *
    100
  const timeLeft = Math.max(0, round.endTime - Date.now())
  const daysLeft = Math.ceil(timeLeft / (1000 * 60 * 60 * 24))

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className={`bg-white rounded-lg shadow-md p-6 ${
        isActive ? 'border-2 border-purple-500' : ''
      }`}
    >
      <div className="flex justify-between items-start mb-4">
        <div>
          <div className="flex items-center space-x-2">
            <h3 className="text-xl font-bold">{round.name}</h3>
            {isActive && (
              <span className="px-2 py-1 bg-green-100 text-green-800 text-xs font-medium rounded-full">
                Active
              </span>
            )}
          </div>
          <p className="text-gray-600 text-sm mt-1">{round.description}</p>
        </div>
      </div>

      <div className="space-y-4">
        <div className="flex justify-between items-center text-sm">
          <span className="text-gray-600">Total Allocation</span>
          <span className="font-medium">
            {formatEther(round.totalAllocation.amount)}{' '}
            {round.totalAllocation.token.symbol}
          </span>
        </div>

        <div className="space-y-2">
          <div className="flex justify-between items-center text-sm">
            <span className="text-gray-600">Progress</span>
            <span className="font-medium">{progress.toFixed(1)}%</span>
          </div>
          <div className="w-full bg-gray-200 rounded-full h-2">
            <motion.div
              initial={{ width: 0 }}
              animate={{ width: `${progress}%` }}
              className="h-full bg-purple-600 rounded-full"
            />
          </div>
        </div>

        <div className="grid grid-cols-2 gap-4">
          <div className="flex items-center space-x-2">
            <Users className="h-5 w-5 text-gray-400" />
            <span className="text-sm text-gray-600">
              {round.participantCount} participants
            </span>
          </div>
          <div className="flex items-center space-x-2">
            <Clock className="h-5 w-5 text-gray-400" />
            <span className="text-sm text-gray-600">
              {round.status === 'upcoming'
                ? `Starts in ${daysLeft} days`
                : round.status === 'active'
                  ? `${daysLeft} days left`
                  : 'Completed'}
            </span>
          </div>
        </div>
      </div>
    </motion.div>
  )
}

export function RoundsTab() {
  const activeRound = MOCK_ROUNDS.find((round) => round.status === 'active')
  const upcomingRounds = MOCK_ROUNDS.filter(
    (round) => round.status === 'upcoming'
  )
  const completedRounds = MOCK_ROUNDS.filter(
    (round) => round.status === 'completed'
  )

  return (
    <div className="space-y-8">
      {activeRound && (
        <div>
          <h2 className="text-2xl font-bold mb-4">Active Round</h2>
          <RoundCard round={activeRound} isActive />
        </div>
      )}

      <div>
        <h2 className="text-2xl font-bold mb-4">Upcoming Rounds</h2>
        <div className="grid grid-cols-1 gap-6">
          {upcomingRounds.map((round) => (
            <RoundCard key={round.id} round={round} />
          ))}
        </div>
      </div>

      <div>
        <h2 className="text-2xl font-bold mb-4">Past Rounds</h2>
        <div className="grid grid-cols-1 gap-6">
          {completedRounds.map((round) => (
            <RoundCard key={round.id} round={round} />
          ))}
        </div>
      </div>
    </div>
  )
}
