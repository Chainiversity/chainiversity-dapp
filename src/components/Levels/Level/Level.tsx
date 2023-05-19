"use client";

import { StaticImageData } from "next/image";
import LevelCard from "../LevelCard";
import { NextPage } from "next";

import {
  useAccount,
  usePrepareContractWrite,
  useContractWrite,
  useContractReads,
} from "wagmi";
import { ConnectButton } from "@rainbow-me/rainbowkit";
import { vrfContract } from "../../../../contracts/vrf-test";
import { useIsMounted } from "@/hooks/useIsMounted";

function LevelButtons() {
  const mounted = useIsMounted();
  const { address, isConnected } = useAccount();

  const { data: contractData } = useContractReads({
    contracts: [
      {
        ...vrfContract,
        functionName: "winners",
        args: [address as `0x${string}`],
      },
      {
        ...vrfContract,
        functionName: "canMint",
        args: [address as `0x${string}`],
      },
    ],
    watch: true,
  });

  const { config: mintConfig } = usePrepareContractWrite({
    ...vrfContract,
    functionName: "safeMint",
  });

  const { config: setLevelCompletedconfig } = usePrepareContractWrite({
    ...vrfContract,
    functionName: "setLevelCompleted",
  });

  const { write: mint, isSuccess: isMintSuccess } =
    useContractWrite(mintConfig);
  const { write: changeCanMint, isSuccess: isChangedCanMintSuccess } =
    useContractWrite(setLevelCompletedconfig);


  // to solce hydration errors
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

  return (
    <>
      {!contractData?.[0].result && (
        <>
          <div className="w-full text-red-700 mb-2">
            You have not succesfully completed the level yet!
          </div>
          <button
            className="rounded-lg shadow-lg w-full bg-blue-700 text-white p-4 disabled:opacity-25 disabled:cursor-not-allowed"
            onClick={() => changeCanMint?.()}
            disabled={contractData?.[0].result}
          >
            Complete Level
          </button>
        </>
      )}
      {contractData?.[0].result && contractData?.[1].result && (
        <>
          <div className="w-full text-teal-700 mb-2">You can mint!</div>
          <button
            className="rounded-lg shadow-lg w-full bg-blue-700 text-white p-4 disabled:opacity-25 disabled:cursor-not-allowed"
            onClick={() => mint?.()}
            disabled={!contractData?.[0].result}
          >
            Mint
          </button>
        </>
      )}
      {contractData?.[0].result && !contractData?.[1].result && (
        <>
          <div className="w-full text-blue-700 mb-2">
            You have already minted!
          </div>
          <button
            className="rounded-lg shadow-lg w-full bg-teal-700 text-white p-4"
            onClick={() => null}
          >
            Show My Nft
          </button>
        </>
      )}
    </>
  );
}

interface Props {
  nftPhoto: StaticImageData; // TODO: NFT URI
  levelName: string;
  date: string;
  levelAddress: string;
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
          <LevelButtons />
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
