import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Coins, Plus, Trash2, Check, Clock, PlusCircle, UserPlus } from 'lucide-react';
import { MOCK_USERS } from '../../types/users';
import { formatAddress, formatEther } from '../../utils/formatters';
import { UserAvatar } from '../UserAvatar';
import { QuickAllocation } from './QuickAllocation';
import { ethers } from 'ethers';
import { SUPPORTED_TOKENS } from '../../types/tokens';
import toast from 'react-hot-toast';

interface Allocation {
  token: string;
  amount: string;
  claimed: boolean;
}

interface UserAllocation {
  user: {
    id: string;
    name: string;
    address: string;
  };
  allocations: Allocation[];
}

const MOCK_ALLOCATIONS: UserAllocation[] = [
  {
    user: MOCK_USERS[0],
    allocations: [
      { token: 'SWEET', amount: '1000000000000000000000', claimed: true },
      { token: 'ETH', amount: '100000000000000000', claimed: false }
    ]
  },
  {
    user: MOCK_USERS[1],
    allocations: [
      { token: 'SWEET', amount: '2000000000000000000000', claimed: false },
      { token: 'USDGLO', amount: '5000000000000000000000', claimed: true }
    ]
  }
];

export function TokenAllocation() {
  const [showExisting, setShowExisting] = useState(true);
  const [quickAllocationUser, setQuickAllocationUser] = useState<typeof MOCK_USERS[0] | null>(null);
  const [allocations, setAllocations] = useState<UserAllocation[]>(MOCK_ALLOCATIONS);
  const [newUser, setNewUser] = useState({
    name: '',
    address: '',
    token: 'SWEET',
    amount: ''
  });

  const handleAddUser = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!newUser.address.match(/^0x[a-fA-F0-9]{40}$/)) {
      toast.error('Please enter a valid Ethereum address');
      return;
    }

    const newAllocation: UserAllocation = {
      user: {
        id: `user-${allocations.length + 1}`,
        name: newUser.name,
        address: newUser.address
      },
      allocations: [{
        token: newUser.token,
        amount: ethers.parseEther(newUser.amount).toString(),
        claimed: false
      }]
    };

    setAllocations([...allocations, newAllocation]);
    setNewUser({ name: '', address: '', token: 'SWEET', amount: '' });
    toast.success('Sweet Spot member added successfully!');
  };

  return (
    <div className="space-y-8">
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
            <table className="min-w-full divide-y divide-gray-200">
              <thead>
                <tr>
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
              <tbody className="bg-white divide-y divide-gray-200">
                {allocations.map((userAllocation, userIndex) => (
                  userAllocation.allocations.map((allocation, allocationIndex) => (
                    <tr key={`${userAllocation.user.id}-${allocation.token}`} className="hover:bg-gray-50">
                      {allocationIndex === 0 && (
                        <td
                          className="px-6 py-4 whitespace-nowrap"
                          rowSpan={userAllocation.allocations.length}
                        >
                          <div className="flex items-center">
                            <UserAvatar user={userAllocation.user} />
                            <div className="ml-4">
                              <div className="text-sm font-medium text-gray-900">
                                {userAllocation.user.name}
                              </div>
                              <div className="text-sm text-gray-500">
                                {formatAddress(userAllocation.user.address)}
                              </div>
                            </div>
                          </div>
                        </td>
                      )}
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="text-sm text-gray-900">{allocation.token}</div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="text-sm text-gray-900">
                          {formatEther(allocation.amount)}
                        </div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <span className={`inline-flex items-center px-3 py-1 rounded-full text-sm font-medium ${
                          allocation.claimed
                            ? 'bg-green-100 text-green-800'
                            : 'bg-yellow-100 text-yellow-800'
                        }`}>
                          {allocation.claimed ? (
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
                          rowSpan={userAllocation.allocations.length}
                        >
                          <motion.button
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            onClick={() => setQuickAllocationUser(userAllocation.user)}
                            className="flex items-center space-x-1 text-purple-600 hover:text-purple-700"
                          >
                            <PlusCircle className="h-4 w-4" />
                            <span className="text-sm font-medium">Add Tokens</span>
                          </motion.button>
                        </td>
                      )}
                    </tr>
                  ))
                ))}
              </tbody>
            </table>
          </div>

          <div className="border-t border-gray-200 pt-6">
            <div className="flex items-center space-x-3 mb-4">
              <UserPlus className="h-5 w-5 text-purple-600" />
              <h3 className="text-lg font-semibold">Add New Member</h3>
            </div>
            
            <form onSubmit={handleAddUser} className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Member Name
                </label>
                <input
                  type="text"
                  value={newUser.name}
                  onChange={(e) => setNewUser({ ...newUser, name: e.target.value })}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-600 focus:border-transparent"
                  placeholder="Enter member name"
                  required
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Wallet Address
                </label>
                <input
                  type="text"
                  value={newUser.address}
                  onChange={(e) => setNewUser({ ...newUser, address: e.target.value })}
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
                  onChange={(e) => setNewUser({ ...newUser, token: e.target.value })}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-600 focus:border-transparent"
                >
                  <option value="SWEET">SWEET - Sweet Spot Token</option>
                  {SUPPORTED_TOKENS.map(token => (
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
                  onChange={(e) => setNewUser({ ...newUser, amount: e.target.value })}
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
                  Add Member
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
        user={quickAllocationUser}
        onClose={() => setQuickAllocationUser(null)}
      />
    </div>
  );
}