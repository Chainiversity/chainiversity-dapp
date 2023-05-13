import { StaticImageData } from "next/image";
import LevelCard from "../LevelCard";
import { NextPage } from "next";

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
          <button className="rounded-lg shadow-lg w-full bg-blue-700 text-white p-4">
            Mint
          </button>
          <button className="rounded-lg shadow-lg w-full bg-teal-700 text-white p-4">
            Show
          </button>
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
