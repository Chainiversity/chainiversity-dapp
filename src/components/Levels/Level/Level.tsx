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
        <div className="w-full px-1 md:px-4 space-x-4 flex items-center">
          <div className="w-8">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 128 128">
              <path
                d="M64 0c35.348 0 64 28.652 64 64s-28.652 64-64 64S0 99.348 0 64 28.652 0 64 0zm0 0"
                fill="#fff"
              />
              <path
                d="M85.898 49.242a5.76 5.76 0 00-5.418 0l-12.214 7.223-8.532 4.742-12.214 7.227a5.76 5.76 0 01-5.418 0l-9.707-5.649a5.423 5.423 0 01-2.711-4.52V46.989a4.972 4.972 0 012.71-4.52l9.708-5.417a5.738 5.738 0 015.418 0l9.707 5.418a5.423 5.423 0 012.71 4.52v7.218l8.329-4.965v-6.996a4.963 4.963 0 00-2.664-4.52l-17.86-10.382a5.738 5.738 0 00-5.418 0L24.266 37.727a4.608 4.608 0 00-2.934 4.52v20.991a4.967 4.967 0 002.711 4.496l18.059 10.407a5.76 5.76 0 005.418 0l12.214-7 8.352-4.965 12.172-6.977a5.76 5.76 0 015.418 0l9.707 5.418a5.419 5.419 0 012.707 4.52v11.062a4.967 4.967 0 01-2.707 4.516l-9.707 5.64a5.738 5.738 0 01-5.418 0l-9.707-5.418a5.416 5.416 0 01-2.711-4.515v-7.25l-8.106 4.738v7.219a4.969 4.969 0 002.707 4.52L80.5 100.03a5.746 5.746 0 005.422 0l18.058-10.383a5.42 5.42 0 002.688-4.511v-21a4.964 4.964 0 00-2.711-4.516zm0 0"
                fill="#7950DD"
              />
            </svg>
          </div>
          <Link
          target="_blank"
          className="docs_link"
          href={`https://mumbai.polygonscan.com/address/${levelAddress}`}>{`${levelAddress.slice(0,7)}...${levelAddress.slice(-4)} - NFT Contract`}</Link>
        </div>

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
