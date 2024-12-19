import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import {
  Coins,
  Plus,
  Trash2,
  Check,
  Clock,
  PlusCircle,
  UserPlus
} from 'lucide-react'
import { UserAvatar } from '../UserAvatar'
import { QuickAllocation } from './QuickAllocation'
import { ethers } from 'ethers'
import { getSupportedToken, SUPPORTED_TOKENS } from '../../types/tokens'
import toast from 'react-hot-toast'
import { useWriteContract } from 'wagmi'
import {
  nCookieJarContractABI,
  nCookieJarContractAddress
} from '../../contracts/nCookieJar/nCookieJarContractInfo'
import { valueInWei } from '../../utils/helpers'
import { viemPublicClient } from '../../utils/viemClient'
import {
  CurrentRoundAllocatedTokensDocument,
  useCurrentRoundAllocatedTokensQuery
} from '../../graphql/generated'
import EnsName from '../common/EnsName'
import { Address } from 'viem'
import { useApolloClient } from '@apollo/client'
import clsx from 'clsx'

export function TokenAllocation() {
  const [showExisting, setShowExisting] = useState(true)
  const [quickAllocationUser, setQuickAllocationUser] =
    useState<Address | null>(null)
  const { writeContractAsync } = useWriteContract()
  const { data: currentRound } = useCurrentRoundAllocatedTokensQuery()
  const [hoveredUser, setHoveredUser] = useState<Address | null>(null)

  const client = useApolloClient()

  const allocatedTokens =
    currentRound?.currentRounds?.[0]?.round?.allocatedTokens
  const groupedAllocatedTokens = allocatedTokens?.reduce<
    Record<string, typeof allocatedTokens>
  >((acc, token) => {
    const userId = token.user.id
    if (!acc[userId]) {
      acc[userId] = []
    }
    acc[userId].push(token)
    return acc
  }, {})

  const [newUser, setNewUser] = useState({
    address: '',
    token: SUPPORTED_TOKENS[0].symbol,
    amount: ''
  })

  const handleAddUser = async (e: React.FormEvent) => {
    e.preventDefault()

    await handleAllocate(
      newUser.address as Address,
      newUser.token,
      newUser.amount
    )

    setNewUser({
      address: '',
      token: SUPPORTED_TOKENS[0].symbol,
      amount: ''
    })
  }

  const handleAllocate = async (
    recipientAddress: Address,
    tokenSymbol: string,
    amount: string
  ) => {
    console.log('amount', amount)
    if (!recipientAddress.match(/^0x[a-fA-F0-9]{40}$/)) {
      toast.error('Please enter a valid Ethereum address')
      return
    }

    try {
      const selectedToken = SUPPORTED_TOKENS.find(
        (token) => token.symbol === tokenSymbol
      )

      const tx = await writeContractAsync({
        abi: nCookieJarContractABI,
        address: nCookieJarContractAddress,
        functionName: 'setAllowedAmount',
        args: [
          recipientAddress,
          selectedToken?.address,
          valueInWei(amount, selectedToken?.decimals!)
        ]
      })

      await toast.promise(
        viemPublicClient.waitForTransactionReceipt({
          hash: tx,
          confirmations: 5
        }),
        {
          error: 'Unable to confirm new allocations',
          loading: 'Confirming allocations',
          success: 'Amount Allocated to address ' + recipientAddress
        }
      )

      await client.refetchQueries({
        include: ['CurrentRoundAllocatedTokens']
      })
    } catch (error) {
      console.error(error)
      toast.error('An Error Occured')
    }
  }

  return (
    <div className="space-y-8 py-8">
      <div className="flex justify-between items-center">
        <h2 className="text-2xl font-bold">Sweet Spot Allocation</h2>
      </div>

      {showExisting && (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-white rounded-lg shadow-md p-6"
        >
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-2xl font-bold">Current Round Allocations</h2>
            <Coins className="h-6 w-6 text-purple-600" />
          </div>

          <div className="overflow-x-auto mb-8">
            <table className="min-w-full divide-y divide-gray-400">
              <thead>
                <tr className="bg-gray-50">
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Member
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
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Actions
                  </th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-400">
                {groupedAllocatedTokens &&
                  Object.entries(groupedAllocatedTokens).map(
                    (userAllocatedTokens) => {
                      const userAllocations = userAllocatedTokens[1]
                      const userAddress = userAllocatedTokens[0] as Address
                      return userAllocations.map(
                        (allocation, allocationIndex) => {
                          const isClaimed =
                            allocation.claimedAmount === allocation.amount
                          return (
                            <tr
                              key={`${allocation?.id}`}
                              className={clsx(
                                hoveredUser === userAddress && 'bg-gray-100'
                              )}
                              onMouseEnter={() => setHoveredUser(userAddress)}
                              onMouseLeave={() => setHoveredUser(null)}
                            >
                              {allocationIndex === 0 && (
                                <td
                                  className="px-6 py-4 whitespace-nowrap"
                                  rowSpan={userAllocations.length}
                                >
                                  <div className="flex items-center">
                                    <UserAvatar address={userAddress} />
                                    <div className="ml-4">
                                      <div className="text-sm font-medium text-gray-900">
                                        {
                                          <EnsName
                                            address={userAddress as Address}
                                            className="text-sm font-medium text-gray-900"
                                          />
                                        }
                                      </div>
                                      <div className="text-sm text-gray-500">
                                        {userAddress}
                                      </div>
                                    </div>
                                  </div>
                                </td>
                              )}
                              <td className="px-6 py-4 whitespace-nowrap">
                                <div className="start-center-row gap-x-2">
                                  <img
                                    src={
                                      getSupportedToken(
                                        allocation.token as Address
                                      )?.logoUrl
                                    }
                                    className="w-6 h-6"
                                  />
                                  <div className="text-sm text-gray-900">
                                    {
                                      getSupportedToken(
                                        allocation.token as Address
                                      )?.symbol
                                    }
                                  </div>
                                </div>
                              </td>
                              <td className="px-6 py-4 whitespace-nowrap">
                                <div className="text-sm text-gray-900">
                                  {ethers.formatUnits(
                                    allocation.amount,
                                    getSupportedToken(
                                      allocation.token as Address
                                    )?.decimals
                                  )}
                                </div>
                              </td>
                              <td className="px-6 py-4 whitespace-nowrap">
                                <span
                                  className={`inline-flex items-center px-3 py-1 rounded-full text-sm font-medium ${
                                    isClaimed
                                      ? 'bg-green-100 text-green-800'
                                      : 'bg-yellow-100 text-yellow-800'
                                  }`}
                                >
                                  {isClaimed ? (
                                    <>
                                      <Check className="h-4 w-4 mr-1" />
                                      Claimed
                                    </>
                                  ) : (
                                    <>
                                      <Clock className="h-4 w-4 mr-1" />
                                      Pending
                                    </>
                                  )}
                                </span>
                              </td>
                              {allocationIndex === 0 && (
                                <td
                                  className="px-6 py-4 whitespace-nowrap"
                                  rowSpan={userAllocations.length}
                                >
                                  <motion.button
                                    whileHover={{ scale: 1.05 }}
                                    whileTap={{ scale: 0.95 }}
                                    onClick={() =>
                                      setQuickAllocationUser(userAddress)
                                    }
                                    className="flex items-center space-x-1 text-purple-600 hover:text-purple-700"
                                  >
                                    <PlusCircle className="h-4 w-4" />
                                    <span className="text-sm font-medium">
                                      Add Tokens
                                    </span>
                                  </motion.button>
                                </td>
                              )}
                            </tr>
                          )
                        }
                      )
                    }
                  )}
              </tbody>
            </table>
          </div>

          <div className="border-t border-gray-200 pt-6">
            <div className="flex items-center space-x-3 mb-4">
              <UserPlus className="h-5 w-5 text-purple-600" />
              <h3 className="text-lg font-semibold">
                Allocate Token To New User
              </h3>
            </div>

            <form
              onSubmit={handleAddUser}
              className="grid grid-cols-1 md:grid-cols-2 gap-4"
            >
              {/* <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Member Name
                </label>
                <input
                  type="text"
                  value={newUser.name}
                  onChange={(e) =>
                    setNewUser({ ...newUser, name: e.target.value })
                  }
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-600 focus:border-transparent"
                  placeholder="Enter member name"
                  required
                />
              </div> */}

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Wallet Address
                </label>
                <input
                  type="text"
                  value={newUser.address}
                  onChange={(e) =>
                    setNewUser({ ...newUser, address: e.target.value })
                  }
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-600 focus:border-transparent"
                  placeholder="0x..."
                  required
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Token
                </label>
                <select
                  value={newUser.token}
                  onChange={(e) =>
                    setNewUser({ ...newUser, token: e.target.value })
                  }
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-600 focus:border-transparent"
                >
                  {SUPPORTED_TOKENS.map((token) => (
                    <option key={token.symbol} value={token.symbol}>
                      {token.symbol} - {token.name}
                    </option>
                  ))}
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Initial Allocation Amount
                </label>
                <input
                  type="number"
                  value={newUser.amount}
                  onChange={(e) =>
                    setNewUser({ ...newUser, amount: e.target.value })
                  }
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-600 focus:border-transparent"
                  placeholder="Enter amount"
                  min="0"
                  step="0.000001"
                  required
                />
              </div>

              <div className="md:col-span-2">
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  type="submit"
                  className="w-full bg-purple-600 text-white py-3 rounded-lg font-medium hover:bg-purple-700 transition-colors"
                >
                  Add Allocation
                </motion.button>
              </div>
            </form>
          </div>
        </motion.div>
      )}

      <motion.button
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
        onClick={() => setShowExisting(!showExisting)}
        className="flex items-center space-x-2 text-purple-600 hover:text-purple-700"
      >
        {showExisting ? (
          <>
            <Trash2 className="h-5 w-5" />
            <span>Hide Allocations</span>
          </>
        ) : (
          <>
            <Plus className="h-5 w-5" />
            <span>Show Allocations</span>
          </>
        )}
      </motion.button>

      <QuickAllocation
        userAddress={quickAllocationUser}
        onClose={() => setQuickAllocationUser(null)}
        handleAllocate={handleAllocate}
      />
    </div>
  )
}
