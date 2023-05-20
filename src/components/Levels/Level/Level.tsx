"use client";

import { StaticImageData } from "next/image";
import LevelCard from "../LevelCard";
import { NextPage } from "next";

import {
  useAccount,
  usePrepareContractWrite,
  useContractWrite,
  useContractReads,
  useWaitForTransaction,
} from "wagmi";
import { ConnectButton } from "@rainbow-me/rainbowkit";
import { abi } from "../../../../contracts/abi-test";
import { useIsMounted } from "@/hooks/useIsMounted";
import Link from "next/link";

interface LevelButtonsProps {
  levelAddress: `0x${string}`;
}

const MintButton: NextPage<LevelButtonsProps> = ({ levelAddress }) => {
  const { config: mintConfig } = usePrepareContractWrite({
    address: levelAddress,
    abi: abi,
    functionName: "safeMint",
  });

  const {
    write: mint,
    isLoading: isMintLoading,
    isSuccess: isMintStarted,
  } = useContractWrite(mintConfig);
  
  return (
    <button
      className="rounded-lg shadow-lg w-full bg-blue-700 text-white p-4 disabled:opacity-25 disabled:cursor-not-allowed"
      onClick={() => mint?.()}
      disabled={isMintLoading || isMintStarted}
      data-mint-loading={isMintLoading}
      data-mint-started={isMintStarted}
    >
      {isMintLoading && "Waiting for approval"}
      {isMintStarted && "Minting..."}
      {!isMintLoading && !isMintStarted && "Mint"}
    </button>
  );
};

const LevelButtons: NextPage<LevelButtonsProps> = ({ levelAddress }) => {
  const mounted = useIsMounted();
  const { address, isConnected } = useAccount();
  
  const { data: contractData } = useContractReads({
    contracts: [
      {
        address: levelAddress,
        abi: abi,
        functionName: "winners",
        args: [address as `0x${string}`],
      },
      {
        address: levelAddress,
        abi: abi,
        functionName: "canMint",
        args: [address as `0x${string}`],
      },
    ],
    watch: true,
  });

  // to solve hydration errors
  if (!mounted) return null;

  // connect to wallet
  if (mounted && !isConnected) {
    return (
      <ConnectButton.Custom>
        {({
          account,
          chain,
          openAccountModal,
          openChainModal,
          openConnectModal,
          authenticationStatus,
          mounted,
        }) => {
          // Note: If your app doesn't use authentication, you
          // can remove all 'authenticationStatus' checks
          const ready = mounted;
          const connected = ready && account && chain;

          return (
            <div
              {...(!ready && {
                "aria-hidden": true,
                style: {
                  opacity: 0,
                  pointerEvents: "none",
                  userSelect: "none",
                },
              })}
            >
              {(() => {
                if (!connected) {
                  return (
                    <button
                      onClick={openConnectModal}
                      type="button"
                      className="rounded-lg shadow-lg w-full bg-red-700 text-white p-4 disabled:opacity-25 disabled:cursor-not-allowed"
                    >
                      Connect Wallet
                    </button>
                  );
                }

                if (chain.unsupported) {
                  return (
                    <button onClick={openChainModal} type="button">
                      Wrong network
                    </button>
                  );
                }
              })()}
            </div>
          );
        }}
      </ConnectButton.Custom>
    );
  }
  console.log(contractData?.[0].result, contractData?.[1].result);
  return (
    <>
      {!contractData?.[0].result && (
        <>
          <div className="w-full text-red-700 mt-10 mb-2 text-center text-xl">
            You have not succesfully completed the level yet!
          </div>
          <button
            className="rounded-lg shadow-lg w-full bg-blue-700 text-white p-4 disabled:opacity-25 disabled:cursor-not-allowed"
            onClick={() => {}}
            disabled={true}
          >
            Complete Level First!
          </button>
        </>
      )}
      {contractData?.[0].result && contractData?.[1].result && (
        <>
          <div className="w-full text-teal-700 mt-10 mb-2 text-center text-xl">
            You can mint!
          </div>
          <MintButton levelAddress={levelAddress} />
        </>
      )}
      {contractData?.[0].result && !contractData?.[1].result && (
        <>
          <div className="w-full text-blue-700 mt-10 mb-2 text-center text-xl">
            You have passed the level!
          </div>
        </>
      )}
    </>
  );
};

interface Props {
  nftPhoto: StaticImageData; // TODO: NFT URI
  levelName: string;
  date: string;
  levelAddress: `0x${string}`;
  children: React.ReactNode;
}

const Level: NextPage<Props> = ({
  nftPhoto,
  levelName,
  date,
  levelAddress,
  children,
}) => {
  return (
    <section className="w-full md:flex space-y-10 md:space-y-4">
      <div className="lg:w-3/8 md:w-4/8 space-y-6">
        <LevelCard
          levelAddress={levelAddress}
          levelName={levelName}
          date={date}
          nftPhoto={nftPhoto}
        />
        <div className="w-full px-1 md:px-4 space-y-2">
          <LevelButtons levelAddress={levelAddress} />
        </div>
      </div>
      <div className="lg:w-5/8 md:w-4/8 w-full">
        <article className="overflow-hidden rounded-lg shadow-lg min-h-full p-5">
          {children}
        </article>
      </div>
    </section>
  );
};

export default Level;
