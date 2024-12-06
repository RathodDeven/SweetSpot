import React from 'react'
import { Clock, Calendar } from 'lucide-react'
import { motion } from 'framer-motion'
import { RoundDetails } from '../../types/contract'
import { formatDate } from '../../utils/formatters'

interface RoundInfoProps {
  details: RoundDetails
}

export function RoundInfo({ details }: RoundInfoProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="bg-white rounded-lg shadow-md p-6"
    >
      <h2 className="text-2xl font-bold mb-4">Current Round</h2>
      <div className="space-y-4">
        <div className="flex items-center space-x-2">
          <Calendar className="h-5 w-5 text-purple-600" />
          <span className="text-gray-600">
            Start: {formatDate(details.startTime)}
          </span>
        </div>
        <div className="flex items-center space-x-2">
          <Clock className="h-5 w-5 text-purple-600" />
          <span className="text-gray-600">
            End: {formatDate(details.endTime)}
          </span>
        </div>
      </div>
    </motion.div>
  )
}
