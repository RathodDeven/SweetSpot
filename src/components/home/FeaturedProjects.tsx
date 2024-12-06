import React from 'react'
import { motion } from 'framer-motion'
import { Users, Gift, ExternalLink } from 'lucide-react'

const FEATURED_PROJECTS = [
  {
    id: '1',
    name: 'DeFi Protocol Alpha',
    description:
      'Innovative DeFi protocol focusing on sustainable yield generation',
    image: 'https://images.unsplash.com/photo-1526304640581-d334cdbbf45e?w=800',
    category: 'DeFi',
    totalDonations: '150.5',
    contributors: 45
  },
  {
    id: '2',
    name: 'NFT Marketplace Beta',
    description: 'Community-driven NFT marketplace with focus on digital art',
    image: 'https://images.unsplash.com/photo-1569437061241-a848be43cc82?w=800',
    category: 'NFT',
    totalDonations: '89.2',
    contributors: 32
  }
]

export function FeaturedProjects() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      {FEATURED_PROJECTS.map((project, index) => (
        <motion.div
          key={project.id}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: index * 0.2 }}
          whileHover={{ scale: 1.02, rotateX: 5, rotateY: 5 }}
          className="group relative bg-white/80 backdrop-blur-sm rounded-lg shadow-lg overflow-hidden transform perspective-1000"
        >
          <div className="absolute inset-0 border-2 border-transparent bg-gradient-to-r from-purple-500 via-pink-500 to-purple-500 mask-border animate-pulse-border rounded-lg" />
          <div className="absolute inset-0 bg-gradient-to-br from-purple-500/10 via-pink-500/10 to-purple-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          <div className="h-48 sm:h-56 overflow-hidden">
            <img
              src={project.image}
              alt={project.name}
              className="w-full h-full object-cover transform transition-transform duration-500 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          </div>
          <div className="p-4 sm:p-6 relative">
            <div className="flex items-start justify-between">
              <div>
                <h3 className="text-lg sm:text-xl font-bold mb-2">
                  {project.name}
                </h3>
                <span className="inline-flex items-center px-2 sm:px-3 py-1 rounded-full text-sm font-medium bg-gradient-to-r from-purple-500 to-pink-500 text-white">
                  {project.category}
                </span>
              </div>
              <motion.button
                whileHover={{ scale: 1.1, rotate: 15 }}
                whileTap={{ scale: 0.9 }}
                className="p-2 text-gray-400 hover:text-purple-600 transition-colors"
              >
                <ExternalLink className="h-5 w-5" />
              </motion.button>
            </div>

            <p className="text-gray-600 mb-4 mt-3 text-sm sm:text-base">
              {project.description}
            </p>

            <div className="grid grid-cols-2 gap-2 sm:gap-4">
              <div className="flex items-center space-x-1 sm:space-x-2">
                <Users className="h-4 w-4 sm:h-5 sm:w-5 text-purple-500" />
                <span className="text-xs sm:text-sm text-gray-600">
                  {project.contributors} contributors
                </span>
              </div>
              <div className="flex items-center space-x-1 sm:space-x-2">
                <Gift className="h-4 w-4 sm:h-5 sm:w-5 text-pink-500" />
                <span className="text-xs sm:text-sm text-gray-600">
                  {project.totalDonations} ETH donated
                </span>
              </div>
            </div>
          </div>
        </motion.div>
      ))}
    </div>
  )
}
