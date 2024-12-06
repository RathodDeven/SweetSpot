export interface Token {
  symbol: string
  name: string
  decimals: number
  address: string | null // null for native ETH
  logoUrl: string
}

export const SUPPORTED_TOKENS: Token[] = [
  {
    symbol: 'ETH',
    name: 'Ethereum',
    decimals: 18,
    address: null,
    logoUrl:
      'https://raw.githubusercontent.com/spothq/cryptocurrency-icons/master/128/color/eth.png'
  },
  {
    symbol: 'USDGLO',
    name: 'USD Global',
    decimals: 18,
    address: '0x1234...', // Replace with actual contract address
    logoUrl:
      'https://raw.githubusercontent.com/spothq/cryptocurrency-icons/master/128/color/usdt.png'
  },
  {
    symbol: 'USDC',
    name: 'USD Coin',
    decimals: 6,
    address: '0x5678...', // Replace with actual contract address
    logoUrl:
      'https://raw.githubusercontent.com/spothq/cryptocurrency-icons/master/128/color/usdc.png'
  },
  {
    symbol: 'USDN',
    name: 'USD Neutrino',
    decimals: 18,
    address: '0x9012...', // Replace with actual contract address
    logoUrl:
      'https://raw.githubusercontent.com/spothq/cryptocurrency-icons/master/128/color/usdt.png'
  }
]
