import React from 'react'
import { Clock, Calendar } from 'lucide-react'
import { motion } from 'framer-motion'
import { formatDate } from '../../utils/formatters'
import { useCurrentRoundsQuery } from '../../graphql/generated'

export function RoundInfo() {
  const { data } = useCurrentRoundsQuery()
  const currentRound = data?.currentRounds[0]
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="bg-white rounded-lg shadow-md p-6"
    >
      <h2 className="text-2xl font-bold mb-4">Current Round</h2>
      <div className="space-y-4">
        <div className="font-semibold">{currentRound?.round.metadata.name}</div>
        <div className="">{currentRound?.round.metadata.description}</div>
        <div className="flex items-center space-x-2">
          <Calendar className="h-5 w-5 text-purple-600" />
          <span className="text-gray-600">
            Start: {formatDate(currentRound?.round.start)}
          </span>
        </div>
        <div className="flex items-center space-x-2">
          <Clock className="h-5 w-5 text-purple-600" />
          <span className="text-gray-600">
            End: {formatDate(currentRound?.round.end)}
          </span>
        </div>
      </div>
    </motion.div>
  )
}
