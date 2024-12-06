import React from 'react'
import { motion } from 'framer-motion'
import { ExternalLink, Users, Gift, ArrowUpRight } from 'lucide-react'
import { Project } from '../../types/project'

const MOCK_PROJECTS: Project[] = [
  {
    id: '1',
    name: 'DeFi Protocol Alpha',
    description:
      'Innovative DeFi protocol focusing on sustainable yield generation',
    image: 'https://images.unsplash.com/photo-1526304640581-d334cdbbf45e?w=800',
    category: 'DeFi',
    totalDonations: '150.5',
    contributors: 45,
    status: 'active'
  },
  {
    id: '2',
    name: 'NFT Marketplace Beta',
    description: 'Community-driven NFT marketplace with focus on digital art',
    image: 'https://images.unsplash.com/photo-1569437061241-a848be43cc82?w=800',
    category: 'NFT',
    totalDonations: '89.2',
    contributors: 32,
    status: 'active'
  },
  {
    id: '3',
    name: 'DAO Infrastructure Gamma',
    description: 'Building tools for decentralized governance and coordination',
    image: 'https://images.unsplash.com/photo-1551434678-e076c223a692?w=800',
    category: 'DAO',
    totalDonations: '205.8',
    contributors: 67,
    status: 'active'
  }
]

function ProjectCard({ project }: { project: Project }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="bg-white rounded-lg shadow-md overflow-hidden"
    >
      <div className="h-48 overflow-hidden">
        <img
          src={project.image}
          alt={project.name}
          className="w-full h-full object-cover transform hover:scale-105 transition-transform duration-300"
        />
      </div>
      <div className="p-6">
        <div className="flex items-start justify-between">
          <div>
            <h3 className="text-xl font-bold mb-2">{project.name}</h3>
            <span className="inline-block px-3 py-1 text-sm font-medium text-purple-600 bg-purple-100 rounded-full mb-3">
              {project.category}
            </span>
          </div>
          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            className="p-2 text-gray-400 hover:text-purple-600"
          >
            <ExternalLink className="h-5 w-5" />
          </motion.button>
        </div>

        <p className="text-gray-600 mb-4">{project.description}</p>

        <div className="grid grid-cols-2 gap-4">
          <div className="flex items-center space-x-2">
            <Users className="h-5 w-5 text-gray-400" />
            <span className="text-sm text-gray-600">
              {project.contributors} contributors
            </span>
          </div>
          <div className="flex items-center space-x-2">
            <Gift className="h-5 w-5 text-gray-400" />
            <span className="text-sm text-gray-600">
              {project.totalDonations} ETH donated
            </span>
          </div>
        </div>

        <motion.button
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          className="w-full mt-4 bg-purple-600 text-white px-4 py-2 rounded-lg flex items-center justify-center space-x-2 hover:bg-purple-700 transition-colors"
        >
          <span>Support Project</span>
          <ArrowUpRight className="h-4 w-4" />
        </motion.button>
      </div>
    </motion.div>
  )
}

export function ProjectsTab() {
  return (
    <div className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {MOCK_PROJECTS.map((project: Project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>
    </div>
  )
}
