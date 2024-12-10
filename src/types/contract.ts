export interface UserBalances {
  claimableTokens: string
  allowedAmount: string
}

export interface ContractState {
  isConnected: boolean
  isOwner: boolean
  address: string | null
  roundDetails: null
  userBalances: UserBalances | null
}
