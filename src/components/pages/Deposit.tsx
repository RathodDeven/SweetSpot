import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Candy, ChevronRight, Gift, Pencil, Check, X } from 'lucide-react'
import { SUPPORTED_TOKENS } from '../../types/tokens'
import toast from 'react-hot-toast'
import { useRouter } from 'next/navigation'

interface DepositFormData {
  token: string
  amount: string
  isCustom: boolean
  message?: string
}

export function Deposit() {
  const { push } = useRouter()

  const [showConfirmation, setShowConfirmation] = useState(false)
  const [formData, setFormData] = useState<DepositFormData>({
    token: SUPPORTED_TOKENS[0].symbol,
    amount: '',
    isCustom: false
  })

  const calculateTotal = () => {
    const amount = parseFloat(formData.amount) || 0
    return formData.isCustom ? amount * 1.3333 : amount
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!showConfirmation) {
      setShowConfirmation(true)
      return
    }

    try {
      // Simulated deposit
      await new Promise((resolve) => setTimeout(resolve, 1000))
      toast.success('Deposit successful!')
      push('/dashboard')
    } catch (error) {
      toast.error('Failed to process deposit')
    }
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 to-pink-50 py-12 px-4">
      <div className="max-w-2xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-white rounded-2xl shadow-xl p-8"
        >
          <div className="flex items-center space-x-4 mb-8">
            <Candy className="h-8 w-8 text-purple-600" />
            <h1 className="text-2xl font-bold">Make a Deposit</h1>
          </div>

          <form onSubmit={handleSubmit} className="space-y-6">
            <AnimatePresence mode="wait">
              {showConfirmation ? (
                <motion.div
                  key="confirmation"
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  className="space-y-6"
                >
                  <div className="bg-purple-50 p-6 rounded-lg">
                    <div className="flex items-center justify-between mb-4">
                      <h3 className="font-medium">Deposit Summary</h3>
                      <button
                        type="button"
                        onClick={() => setShowConfirmation(false)}
                        className="text-purple-600 hover:text-purple-700 flex items-center space-x-1"
                      >
                        <Pencil className="h-4 w-4" />
                        <span className="text-sm">Edit</span>
                      </button>
                    </div>
                    <div className="space-y-3">
                      <div className="flex justify-between text-sm">
                        <span>Token:</span>
                        <span className="font-medium">{formData.token}</span>
                      </div>
                      <div className="flex justify-between text-sm">
                        <span>Base Amount:</span>
                        <span className="font-medium">
                          {formData.amount} {formData.token}
                        </span>
                      </div>
                      {formData.isCustom && (
                        <div className="flex justify-between text-sm text-purple-600">
                          <span>Custom Sweet Fee (33.33%):</span>
                          <span>
                            +{(parseFloat(formData.amount) * 0.3333).toFixed(6)}{' '}
                            {formData.token}
                          </span>
                        </div>
                      )}
                      <div className="flex justify-between text-sm font-medium pt-2 border-t border-purple-200">
                        <span>Total:</span>
                        <span>
                          {calculateTotal().toFixed(6)} {formData.token}
                        </span>
                      </div>
                    </div>
                    {formData.isCustom && formData.message && (
                      <div className="mt-4 p-4 bg-white rounded-lg">
                        <h4 className="text-sm font-medium mb-2">
                          Custom Message
                        </h4>
                        <p className="text-sm text-gray-600">
                          {formData.message}
                        </p>
                      </div>
                    )}
                  </div>

                  <div className="flex space-x-4">
                    <motion.button
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      type="button"
                      onClick={() => setShowConfirmation(false)}
                      className="flex-1 px-6 py-3 border border-gray-300 rounded-lg text-gray-700 hover:bg-gray-50 transition-colors flex items-center justify-center space-x-2"
                    >
                      <X className="h-5 w-5" />
                      <span>Cancel</span>
                    </motion.button>
                    <motion.button
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      type="submit"
                      className="flex-1 bg-purple-600 text-white px-6 py-3 rounded-lg flex items-center justify-center space-x-2"
                    >
                      <Check className="h-5 w-5" />
                      <span>Confirm Deposit</span>
                    </motion.button>
                  </div>
                </motion.div>
              ) : (
                <motion.div
                  key="form"
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  className="space-y-6"
                >
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Select Token
                    </label>
                    <select
                      value={formData.token}
                      onChange={(e) =>
                        setFormData({ ...formData, token: e.target.value })
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
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Amount
                    </label>
                    <input
                      type="number"
                      value={formData.amount}
                      onChange={(e) =>
                        setFormData({ ...formData, amount: e.target.value })
                      }
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-600 focus:border-transparent"
                      placeholder={`Enter amount in ${formData.token}`}
                      step="0.000001"
                      min="0"
                      required
                    />
                  </div>

                  <div>
                    <label className="flex items-center space-x-2">
                      <input
                        type="checkbox"
                        checked={formData.isCustom}
                        onChange={(e) =>
                          setFormData({
                            ...formData,
                            isCustom: e.target.checked
                          })
                        }
                        className="rounded text-purple-600 focus:ring-purple-500"
                      />
                      <span className="text-sm text-gray-700">
                        Make this a Custom Sweet (+33.33%)
                      </span>
                    </label>
                  </div>

                  {formData.isCustom && (
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Custom Message
                      </label>
                      <textarea
                        value={formData.message}
                        onChange={(e) =>
                          setFormData({ ...formData, message: e.target.value })
                        }
                        className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-600 focus:border-transparent h-32"
                        placeholder="Add a personal message..."
                        required
                      />
                    </div>
                  )}

                  <motion.button
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    type="submit"
                    className="w-full bg-purple-600 text-white px-6 py-3 rounded-lg flex items-center justify-center space-x-2"
                  >
                    <span>Review Deposit</span>
                    <ChevronRight className="h-5 w-5" />
                  </motion.button>
                </motion.div>
              )}
            </AnimatePresence>
          </form>
        </motion.div>
      </div>
    </div>
  )
}
