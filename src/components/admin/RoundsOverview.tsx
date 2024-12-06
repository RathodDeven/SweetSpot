import React from 'react'
import { motion } from 'framer-motion'
import { Clock, Users, ChevronRight, AlertCircle } from 'lucide-react'
import { Round, MOCK_ROUNDS } from '../../types/rounds'
import { formatEther, formatDate } from '../../utils/formatters'

function RoundStatusBadge({ status }: { status: Round['status'] }) {
  const getStatusColor = () => {
    switch (status) {
      case 'active':
        return 'bg-green-100 text-green-800'
      case 'upcoming':
        return 'bg-blue-100 text-blue-800'
      case 'completed':
        return 'bg-gray-100 text-gray-800'
    }
  }

  return (
    <span
      className={`px-3 py-1 rounded-full text-sm font-medium ${getStatusColor()}`}
    >
      {status.charAt(0).toUpperCase() + status.slice(1)}
    </span>
  )
}

function RoundCard({ round }: { round: Round }) {
  const progress =
    (parseFloat(round.claimedAmount) /
      parseFloat(round.totalAllocation.amount)) *
    100
  const timeLeft = Math.max(0, round.endTime - Date.now())
  const daysLeft = Math.ceil(timeLeft / (1000 * 60 * 60 * 24))

  return (
    <motion.div
      whileHover={{ scale: 1.02 }}
      className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-all duration-300"
    >
      <div className="flex justify-between items-start mb-4">
        <div>
          <h3 className="text-xl font-bold mb-2">{round.name}</h3>
          <p className="text-gray-600 text-sm mb-4">{round.description}</p>
        </div>
        <RoundStatusBadge status={round.status} />
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
            <span className="text-gray-600">Claimed</span>
            <span className="font-medium">{progress.toFixed(1)}%</span>
          </div>
          <div className="w-full bg-gray-200 rounded-full h-2">
            <div
              className="bg-purple-600 rounded-full h-2 transition-all duration-300"
              style={{ width: `${progress}%` }}
            />
          </div>
        </div>

        <div className="grid grid-cols-2 gap-4 pt-2">
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

export function RoundsOverview() {
  const activeRound = MOCK_ROUNDS.find((round) => round.status === 'active')
  const upcomingRounds = MOCK_ROUNDS.filter(
    (round) => round.status === 'upcoming'
  )

  return (
    <div className="space-y-8">
      {activeRound && (
        <div>
          <div className="flex items-center space-x-3 mb-6">
            <AlertCircle className="h-6 w-6 text-purple-600" />
            <h2 className="text-2xl font-bold">Active Round</h2>
          </div>
          <RoundCard round={activeRound} />
        </div>
      )}

      <div>
        <div className="flex items-center justify-between mb-6">
          <div className="flex items-center space-x-3">
            <Clock className="h-6 w-6 text-purple-600" />
            <h2 className="text-2xl font-bold">Upcoming Rounds</h2>
          </div>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="flex items-center space-x-2 text-purple-600 hover:text-purple-700"
          >
            <span>View All Rounds</span>
            <ChevronRight className="h-5 w-5" />
          </motion.button>
        </div>
        <div className="grid grid-cols-1 gap-6">
          {upcomingRounds.map((round) => (
            <RoundCard key={round.id} round={round} />
          ))}
        </div>
      </div>
    </div>
  )
}
