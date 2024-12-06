import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Coins } from 'lucide-react';
import { UserBalances } from '../../types/contract';
import { formatEther } from '../../utils/formatters';
import { DonationSuggestionsModal } from '../donations/DonationSuggestionsModal';
import toast from 'react-hot-toast';

interface TokenBalanceProps {
  balances: UserBalances;
  onClaim: () => void;
}

export function TokenBalance({ balances, onClaim }: TokenBalanceProps) {
  const [showDonationModal, setShowDonationModal] = useState(false);
  const [claimedAmount, setClaimedAmount] = useState('');

  const handleClaim = async () => {
    try {
      await onClaim();
      const amount = formatEther(balances.claimableTokens);
      setClaimedAmount(amount);
      toast.success('Tokens claimed successfully!');
      setShowDonationModal(true);
    } catch (error) {
      toast.error('Failed to claim tokens.');
    }
  };

  return (
    <>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
        className="bg-white rounded-lg shadow-md p-6"
      >
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-2xl font-bold">Your Balances</h2>
          <Coins className="h-6 w-6 text-purple-600" />
        </div>
        
        <div className="space-y-4">
          <div>
            <p className="text-sm text-gray-600">Claimable Tokens</p>
            <p className="text-2xl font-bold text-purple-600">
              {formatEther(balances.claimableTokens)} COOKIE
            </p>
          </div>
          
          <div>
            <p className="text-sm text-gray-600">Allowed Amount</p>
            <p className="text-2xl font-bold text-gray-900">
              {formatEther(balances.allowedAmount)} ETH
            </p>
          </div>
          
          <motion.button
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            onClick={handleClaim}
            className="w-full bg-purple-600 text-white py-3 rounded-lg font-medium hover:bg-purple-700 transition-colors"
          >
            Claim Tokens
          </motion.button>
        </div>
      </motion.div>

      <DonationSuggestionsModal
        isOpen={showDonationModal}
        onClose={() => setShowDonationModal(false)}
        claimedAmount={claimedAmount}
        claimedToken="COOKIE"
      />
    </>
  );
}