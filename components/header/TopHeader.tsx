import React from 'react'
import ConnectButton from './ConnectButton'

const TopHeader = () => {
  return (
    <div className="flex flex-row items-center justify-between p-5">
      <div className="text-xl font-bold">Your Project Name</div>
      <ConnectButton />
    </div>
  )
}

export default TopHeader
