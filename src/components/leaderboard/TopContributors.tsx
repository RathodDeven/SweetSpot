import React from 'react';
import { motion } from 'framer-motion';
import { MOCK_SCORES } from '../../types/scores';
import { LeaderboardCard } from './LeaderboardCard';

export function TopContributors() {
  const topScores = [...MOCK_SCORES]
    .sort((a, b) => b.totalScore - a.totalScore)
    .slice(0, 3);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="space-y-4"
    >
      {topScores.map((score, index) => (
        <LeaderboardCard
          key={score.user.id}
          user={score.user}
          rank={index + 1}
          score={score.totalScore}
          achievements={score.achievements.length}
        />
      ))}
    </motion.div>
  );
}