import { ethers } from 'ethers'

export function formatAddress(address: string): string {
  return `${address.slice(0, 6)}...${address.slice(-4)}`
}

export function formatEther(wei: string): string {
  return parseFloat(ethers.formatEther(wei)).toFixed(4)
}

export function formatDate(timestamp: number): string {
  const options: Intl.DateTimeFormatOptions = {
    year: 'numeric',
    month: '2-digit',
    day: '2-digit',
    hour: '2-digit',
    minute: '2-digit',
    second: '2-digit',
    timeZoneName: 'short' // Include the timezone
  }
  return new Intl.DateTimeFormat(undefined, options).format(
    new Date(timestamp * 1000)
  )
}
