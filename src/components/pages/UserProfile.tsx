'use client'
import React, { useState } from 'react'
import { motion } from 'framer-motion'
import {
  Wallet,
  Shield,
  Clock,
  ChevronDown,
  ChevronRight,
  TrendingUp,
  DollarSign,
  Activity,
  BarChart3,
  Star
} from 'lucide-react'
import {
  formatAddress,
  formatDate,
  formatShortDate
} from '../../utils/formatters'
import { UserAvatar } from '../UserAvatar'
import {
  MOCK_ALLOCATION_HISTORY,
  MOCK_FINANCIAL_STATS
} from '../../types/profile'
import { useAccount } from 'wagmi'
import useEns from '../../hooks/useEns'
import { Address, formatUnits } from 'viem'
import { AllocatedToken, User, useUserQuery } from '../../graphql/generated'
import { getSupportedToken } from '../../types/tokens'

function MetricCard({
  title,
  value,
  icon,
  trend = null
}: {
  title: string
  value: string
  icon: any
  trend: any
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="bg-white rounded-lg shadow-md p-4 sm:p-6"
    >
      <div className="flex items-center justify-between mb-2">
        <span className="text-gray-600 text-sm">{title}</span>
        <div className="p-2 bg-purple-50 rounded-lg">
          {/* <Icon className="h-5 w-5 text-purple-600" /> */}
        </div>
      </div>
      <div className="text-lg sm:text-2xl font-bold">{value}</div>
      {trend && (
        <div
          className={`flex items-center mt-2 ${trend.positive ? 'text-green-500' : 'text-red-500'}`}
        >
          <TrendingUp
            className={`h-4 w-4 ${!trend.positive && 'rotate-180'}`}
          />
          <span className="text-sm ml-1">{trend.value}% from last period</span>
        </div>
      )}
    </motion.div>
  )
}

function AllocationHistoryTable({
  allocations
}: {
  allocations: AllocatedToken[]
}) {
  const [currentPage, setCurrentPage] = useState(1)
  // const [sortConfig, setSortConfig] = useState({
  //   key: 'date',
  //   direction: 'desc'
  // })
  const [filter, setFilter] = useState<
    'all' | 'claimed' | 'pending' | 'expired'
  >('all')

  const itemsPerPage = 10
  const filteredData = allocations.filter(
    (item) =>
      filter === 'all' ||
      (filter === 'claimed' && item.claimedAmount === item.amount) ||
      (filter === 'pending' &&
        Number(item.round.end) * 1000 > Date.now() &&
        item.claimedAmount < item.amount) ||
      (filter === 'expired' &&
        Number(item.round.end) * 1000 < Date.now() &&
        item.claimedAmount < item.amount)
  )

  // const handleSort = (key: string) => {
  //   setSortConfig((prev) => ({
  //     key,
  //     direction: prev.key === key && prev.direction === 'asc' ? 'desc' : 'asc'
  //   }))
  // }

  // Mobile card view for each allocation
  const MobileAllocationCard = ({ item }: { item: AllocatedToken }) => {
    const isClaimed = item.claimedAmount === item.amount
    const isExpired = Number(item.round.end) * 1000 < Date.now() && !isClaimed
    const isPending = Number(item.round.end) * 1000 > Date.now() && !isClaimed
    const status = isClaimed ? 'Claimed' : isPending ? 'Pending' : 'Expired'
    return (
      <div className="bg-white p-4 rounded-lg shadow-sm border border-gray-100">
        <div className="flex justify-between items-start mb-3">
          <div>
            <span className="text-sm text-gray-500">
              {formatShortDate(item.timestamp)}
            </span>
            <div className="font-medium">
              {getSupportedToken(item.token as Address)?.symbol}
            </div>
          </div>
          <span
            className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${
              isClaimed
                ? 'bg-green-100 text-green-800'
                : isPending
                  ? 'bg-blue-100 text-blue-800'
                  : 'bg-yellow-100 text-yellow-800'
            }`}
          >
            {status}
          </span>
        </div>
        <div className="flex justify-between items-center text-sm">
          <span className="text-gray-600">Amount</span>
          <span className="font-medium">
            {formatUnits(
              item.amount,
              getSupportedToken(item.token as Address)?.decimals!
            )}
          </span>
        </div>
        {/* <div className="flex justify-between items-center text-sm mt-1">
          <span className="text-gray-600">Value</span>
          <span className="font-medium">${item.usdValue.toLocaleString()}</span>
        </div> */}
      </div>
    )
  }

  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden">
      <div className="p-4 sm:p-6 border-b border-gray-200">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <h2 className="text-xl font-bold">Allocation History</h2>
          <select
            value={filter}
            // @ts-ignore
            onChange={(e) => setFilter(e.target.value)}
            className="w-full sm:w-auto px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-600 focus:border-transparent"
          >
            <option value="all">All</option>
            <option value="claimed">Claimed</option>
            <option value="pending">Pending</option>
            <option value="expired">Expired</option>
          </select>
        </div>
      </div>

      {/* Mobile View */}
      <div className="block sm:hidden">
        <div className="divide-y divide-gray-100">
          {filteredData?.length > 0 &&
            filteredData.map((item) => (
              <div key={item.id} className="p-4">
                <MobileAllocationCard item={item} />
              </div>
            ))}
        </div>
      </div>

      {/* Desktop View */}
      <div className="hidden sm:block overflow-x-auto">
        <table className="min-w-full divide-y divide-gray-200">
          <thead className="bg-gray-50">
            <tr>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Date
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Token
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Amount
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Status
              </th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {filteredData.map((item) => {
              const isClaimed = item.claimedAmount === item.amount
              const isPending =
                Number(item.round.end) * 1000 > Date.now() && !isClaimed
              const isExpired =
                Number(item.round.end) * 1000 < Date.now() && !isClaimed
              const status = isClaimed
                ? 'Claimed'
                : isPending
                  ? 'Pending'
                  : 'Expired'

              return (
                <tr key={item.id} className="hover:bg-gray-50">
                  <td className="px-6 py-4 whitespace-nowrap">
                    {`${formatShortDate(item.timestamp)}${isClaimed ? ' (✅ ' + formatShortDate(item.claimedTimeStamp) + ')' : ''}`}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    {getSupportedToken(item.token as Address)?.symbol}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    {formatUnits(
                      item.amount,
                      getSupportedToken(item.token as Address)?.decimals!
                    )}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <span
                      className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${
                        isClaimed
                          ? 'bg-green-100 text-green-800'
                          : isPending
                            ? 'bg-blue-100 text-blue-800'
                            : 'bg-yellow-100 text-yellow-800'
                      }`}
                    >
                      {status}
                    </span>
                  </td>
                </tr>
              )
            })}
          </tbody>
        </table>
      </div>

      <div className="px-4 sm:px-6 py-4 border-t border-gray-200">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
          <span className="text-sm text-gray-700 order-2 sm:order-1">
            Showing {(currentPage - 1) * itemsPerPage + 1} to{' '}
            {Math.min(currentPage * itemsPerPage, filteredData.length)} of{' '}
            {filteredData.length} entries
          </span>
          <div className="flex space-x-2 order-1 sm:order-2 w-full sm:w-auto">
            <button
              onClick={() => setCurrentPage((prev) => Math.max(1, prev - 1))}
              disabled={currentPage === 1}
              className="flex-1 sm:flex-none px-3 py-1 border border-gray-300 rounded-md disabled:opacity-50"
            >
              Previous
            </button>
            <button
              onClick={() => setCurrentPage((prev) => prev + 1)}
              disabled={currentPage * itemsPerPage >= filteredData.length}
              className="flex-1 sm:flex-none px-3 py-1 border border-gray-300 rounded-md disabled:opacity-50"
            >
              Next
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export function UserProfile({ address }: { address: Address }) {
  const { address: connectedAddress } = useAccount()
  const { ensName } = useEns({ address })
  const { data } = useUserQuery({
    variables: {
      id: address.toLowerCase()
    }
  })

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 sm:py-8 space-y-6 min-h-screen h-fit overflow-y-auto">
      {/* Profile Overview */}
      <div className="bg-white rounded-lg shadow-md p-4 sm:p-6">
        <div className="flex flex-col sm:flex-row items-center sm:items-start gap-6">
          <UserAvatar address={address} size="lg" />
          <div className="flex-1 text-center sm:text-left">
            <div className="flex flex-col sm:flex-row items-center gap-2">
              <h1 className="text-2xl font-bold">
                {ensName ?? formatAddress(address as Address)}
              </h1>
              {data?.user?.totalScore > 0 && (
                <Shield className="h-5 w-5 text-blue-500" />
              )}
            </div>
            <div className="flex flex-col sm:flex-row items-center gap-4 mt-2">
              <div className="flex items-center space-x-2 text-gray-600">
                <Wallet className="h-4 w-4" />
                <span className="text-sm">{address}</span>
              </div>

              {data?.user && (
                <div className="flex items-center space-x-2 text-gray-600">
                  <Clock className="h-4 w-4" />
                  <span className="text-sm">
                    Member since {formatDate(Number(data?.user?.createdAt))}
                  </span>
                </div>
              )}
            </div>
          </div>
          <div className="text-center">
            <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-purple-100">
              <div className="text-2xl font-bold text-purple-600">
                {
                  data?.user?.scores?.find(
                    (score) => score.scoreType === 'Trust'
                  )?.value
                }
              </div>
            </div>
            <div className="mt-2 text-sm text-gray-600">Trust Score</div>
          </div>
        </div>
      </div>

      {/* Financial Statistics */}
      {/* <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <MetricCard
          title="Total Claimed"
          value={`$${MOCK_FINANCIAL_STATS.totalClaimed.usdValue.toLocaleString()}`}
          icon={DollarSign}
          trend={{ positive: true, value: 12.5 }}
        />
        <MetricCard
          title="Success Rate"
          value={`${MOCK_FINANCIAL_STATS.successRate}%`}
          icon={Activity}
          trend={{ positive: true, value: 5.2 }}
        />
      </div> */}

      {/* Allocation History */}
      {data?.user?.allocatedTokens &&
        data?.user?.allocatedTokens?.length > 0 && (
          // @ts-ignore
          <AllocationHistoryTable allocations={data?.user?.allocatedTokens} />
        )}

      {/* Additional Metrics */}
      {/* <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="bg-white rounded-lg shadow-md p-6">
          <h2 className="text-xl font-bold mb-4">Transaction Metrics</h2>
          <div className="space-y-4">
            <div className="flex justify-between items-center">
              <span className="text-gray-600">Average Transaction Value</span>
              <span className="font-bold">
                $
                {(
                  MOCK_FINANCIAL_STATS.totalClaimed.usdValue /
                  MOCK_FINANCIAL_STATS.totalTransactions
                ).toFixed(2)}
              </span>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-gray-600">Most Used Token</span>
              <span className="font-bold">SWEET</span>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-gray-600">Platform Engagement</span>
              <div className="flex items-center">
                <Star className="h-5 w-5 text-yellow-400 mr-1" />
                <span className="font-bold">High</span>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-lg shadow-md p-6">
          <h2 className="text-xl font-bold mb-4">Monthly Summary</h2>
          <div className="space-y-4">
            <div className="flex justify-between items-center">
              <span className="text-gray-600">Claims This Month</span>
              <span className="font-bold">12</span>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-gray-600">Active Days</span>
              <span className="font-bold">18</span>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-gray-600">Contribution Score</span>
              <div className="flex items-center">
                <Star className="h-5 w-5 text-yellow-400 mr-1" />
                <span className="font-bold">92/100</span>
              </div>
            </div>
          </div>
        </div>
      </div> */}
    </div>
  )
}
