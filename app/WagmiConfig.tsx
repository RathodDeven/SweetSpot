"use client";

import React from "react";
import { WagmiConfig, createConfig, mainnet } from "wagmi";
import { createPublicClient, http } from "viem";
import { optimismGoerli } from "viem/chains";

const config = createConfig({
  autoConnect: true,
  // @ts-ignore
  publicClient: createPublicClient({
    chain: optimismGoerli,
    transport: http(),
  }),
});

const WagmiConfigWrapper = ({ children }: { children: React.ReactNode }) => {
  return <WagmiConfig config={config}>{children}</WagmiConfig>;
};

export default WagmiConfigWrapper;
