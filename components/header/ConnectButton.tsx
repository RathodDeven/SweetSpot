import React from "react";
import { useAccount, useConnect, useDisconnect } from "wagmi";
import { InjectedConnector } from "wagmi/connectors/injected";
import { shortenString } from "@/utils/helper-function";
import getStampFyiURL from "@/utils/getStampFyiURL";
import Image from "next/image";

const ConnectButton = () => {
  const { address, isConnected } = useAccount();
  const { connect } = useConnect({
    connector: new InjectedConnector(),
  });
  const { disconnect } = useDisconnect();

  React.useEffect(() => {
    console.log("address", address);
    console.log("isConnected", isConnected);
  }, [address, isConnected]);
  if (isConnected)
    return (
      <div
        className="font-bold flex flex-row justify-center items-center space-x-2"
        onClick={() => disconnect()}
      >
        <Image
          alt="addr"
          src={getStampFyiURL(String(address))}
          width={30}
          height={30}
          className="rounded-full"
        />
        <div>{shortenString(String(address), 7)}</div>
      </div>
    );
  return (
    <button onClick={() => connect()} className="font-bold">
      Connect Wallet
    </button>
  );
};

export default ConnectButton;
