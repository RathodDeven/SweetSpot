import React from 'react'
import { motion } from 'framer-motion'
import { Calendar, Clock, Users } from 'lucide-react'
import { formatDate, formatEther } from '../../utils/formatters'
import {
  OrderDirection,
  Round,
  Round_OrderBy,
  useCurrentRoundsQuery,
  useRoundsQuery
} from '../../graphql/generated'
import Markup from '../common/Lexical/Markup'
import getIPFSLink from '../../utils/getIPFSLink'
import Link from 'next/link'
import { timeAgo, timeToGo } from '../../utils/helpers'

function RoundCard({ round }: { round: Round }) {
  // const progress =
  //   (parseFloat(round.claimedAmount) /
  //     parseFloat(round.totalAllocation.amount)) *
  //   100
  const timeLeft = Math.max(0, Number(round.end) * 1000 - Date.now())
  const totalTime = Number(round.end) * 1000 - Number(round.start) * 1000
  const progress = (timeLeft / totalTime) * 100
  const daysLeft = Math.ceil(timeLeft / (1000 * 60 * 60 * 24))

  const isActive =
    Number(round.start) * 1000 < Date.now() &&
    Number(round.end) * 1000 > Date.now()

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className={`bg-white rounded-lg shadow-md p-6 ${
        isActive ? 'border-2 border-purple-500' : ''
      }`}
    >
      <div className="flex justify-between items-start mb-4">
        <div className="flex flex-col">
          <div className="flex items-center space-x-2">
            <div className="start-center-row gap-x-2">
              {round?.metadata?.image && (
                <img
                  src={getIPFSLink(round?.metadata?.image)}
                  alt={round?.metadata?.image}
                  className="w-10 h-10 rounded-md"
                />
              )}

              <h3 className="text-xl font-bold">{round?.metadata?.name}</h3>
            </div>
            {isActive && (
              <span className="px-2 py-1 bg-green-100 text-green-800 text-xs font-medium rounded-full">
                Active
              </span>
            )}
          </div>
          {round?.metadata?.external_url && (
            <Link
              href={round?.metadata?.external_url}
              className="text-blue-500"
            >
              {round?.metadata?.external_url}
            </Link>
          )}
          <Markup className="text-gray-600 text-sm mt-1">
            {round?.metadata?.description}
          </Markup>
        </div>
      </div>

      {/* created at */}

      <div className="space-y-4">
        {/* <div className="flex justify-between items-center text-sm">
          <span className="text-gray-600">Total Allocation</span>
          <span className="font-medium">
            {formatEther(round.totalAllocation.amount)}{' '}
            {round.totalAllocation.token.symbol}
          </span>
        </div> */}

        {isActive && (
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
        )}

        <div className="grid grid-cols-2 gap-4">
          {/* <div className="flex items-center space-x-2">
            <Users className="h-5 w-5 text-gray-400" />
            <span className="text-sm text-gray-600">
              {round.participantCount} participants
            </span>
          </div> */}
          <div className="flex items-center space-x-2">
            <Clock className="h-5 w-5 text-gray-400" />
            <span className="text-sm text-gray-600">
              {Number(round.start) * 1000 > Date.now()
                ? `Starts in ${timeToGo(Number(round.start) * 1000)}`
                : isActive
                  ? `${timeToGo(Number(round.end) * 1000)} left`
                  : `Completed ${timeAgo(Number(round.end) * 1000)}`}
            </span>
          </div>
        </div>

        {/* start and end, date time */}
        <div className="start-center-row flex-wrap gap-x-6">
          <div className="start-center-row gap-x-2">
            <Calendar className="h-5 w-5 text-purple-600" />
            <span className="text-gray-600">
              Created At: {formatDate(round?.createdAt)}
            </span>
          </div>
          <div className="start-center-row gap-x-2">
            <Calendar className="h-5 w-5 text-purple-600" />
            <span className="text-gray-600">
              Start: {formatDate(round?.start)}
            </span>
          </div>
          <div className="start-center-row gap-x-2">
            <Calendar className="h-5 w-5 text-purple-600" />
            <span className="text-gray-600">End: {formatDate(round?.end)}</span>
          </div>
        </div>
      </div>
    </motion.div>
  )
}

export function RoundsTab() {
  const { data: currentRoundsData } = useCurrentRoundsQuery()
  const { data: roundsData } = useRoundsQuery({
    variables: {
      orderBy: Round_OrderBy.CreatedAt,
      orderDirection: OrderDirection.Desc
    }
  })
  const currentRound = currentRoundsData?.currentRounds?.[0]?.round

  const completedRounds = roundsData?.rounds.filter(
    (round) => round.id !== currentRound?.id
  )

  if (!currentRound) return null

  return (
    <div className="space-y-8">
      {currentRound && (
        <div>
          <h2 className="text-2xl font-bold mb-4">
            {Number(currentRound.start) * 1000 > Date.now()
              ? 'Starting Soon'
              : Number(currentRound?.end) * 1000 < Date.now()
                ? 'Just Ended'
                : 'Active Round'}
          </h2>
          <RoundCard
            //  @ts-ignore
            round={currentRound}
          />
        </div>
      )}

      <div>
        <h2 className="text-2xl font-bold mb-4">Past Rounds</h2>
        <div className="grid grid-cols-1 gap-6">
          {completedRounds?.map((round) => (
            <RoundCard key={round.id} round={round} />
          ))}
        </div>
      </div>
    </div>
  )
}
