import React from 'react'
import { motion } from 'framer-motion'
import { LeaderboardCard } from './LeaderboardCard'
import {
  OrderDirection,
  useGetUsersQuery,
  User_OrderBy
} from '../../graphql/generated'

export function TopContributors() {
  const { data } = useGetUsersQuery({
    variables: {
      first: 10,
      orderBy: User_OrderBy.TotalScore,
      orderDirection: OrderDirection.Desc
    }
  })

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="space-y-4"
    >
      {data?.users.map((user, index) => (
        <LeaderboardCard
          key={user.id}
          // @ts-ignore
          user={user}
          rank={index + 1}
          score={user.totalScore}
          achievements={user.scores?.length || 0}
        />
      ))}
    </motion.div>
  )
}
