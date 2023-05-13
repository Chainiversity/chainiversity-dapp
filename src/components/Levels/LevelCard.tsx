import Image, { StaticImageData } from "next/image";
import Link from "next/link";
import { NextPage } from "next";

interface Props {
  nftPhoto: StaticImageData; // TODO: NFT URI
  levelName: string;
  date: string;
  levelAddress: string; 
}

const LevelCard: NextPage<Props> = ({ nftPhoto, levelName, date, levelAddress }) => {
  return (
    // TODO: Change a tags with link
    <div className="my-1 px-1 w-full md:w-1/2 lg:my-4 lg:px-4 lg:w-1/3">
      <article className="overflow-hidden rounded-lg shadow-lg">
      <Link href={`/levels/${levelAddress}`}>
          <Image
            className="block h-auto w-full"
            src={nftPhoto}
            alt="nft photo of level"
          />
      </Link>

        <div className="flex items-center justify-between leading-tight p-2 md:p-4">
          <h3 className="text-base">
            <Link href={`/levels/${levelAddress}`} className="no-underline hover:underline text-black" >
              {levelName}
            </Link>
          </h3>
          <p className="text-grey-darker text-sm">{date}</p>
        </div>
      </article>
    </div>
  );
};

export default LevelCard;
