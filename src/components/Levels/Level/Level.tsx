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
import { vrfContract } from "../../../../contracts/vrf-test";

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
  const { address, isConnected } = useAccount();

  const { data: contractData } = useContractReads({
    contracts: [
      {
        ...vrfContract,
        functionName: "winners",
        args: ["0xFf9616b10E82baE7c8eb98542f9799087D2087c5"],
      },
      {
        ...vrfContract,
        functionName: "canMint",
        args: ["0xFf9616b10E82baE7c8eb98542f9799087D2087c5"],
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
          {isConnected ? (
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
                    onClick={()=> null}
                  >
                    Show My Nft
                  </button>
                </>
              )}
            </>
          ) : (
            <button className="rounded-lg shadow-lg w-full bg-teal-700 text-white p-4">
              Connect Wallet
            </button>
          )}
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
