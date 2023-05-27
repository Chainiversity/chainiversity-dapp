import Image, { StaticImageData } from "next/image";
import Link from "next/link";
import { NextPage } from "next";

interface Props {
  nftPhoto: StaticImageData; // TODO: NFT URI
  levelName: string;
  levelURL: string;
  levelDescription?: string;
}

const LevelCard: NextPage<Props> = ({
  nftPhoto,
  levelName,
  levelURL,
  levelDescription = "",
}) => {
  return (
    <div className="w-full my-1 md:my-4 px-1 md:px-4">
      <article className="overflow-hidden rounded-lg shadow-lg">
        <Link href={`/levels/${levelURL}`}>
          <Image
            className="block h-auto w-full"
            src={nftPhoto}
            alt="nft photo of level"
          />
        </Link>

        <div className="p-5">
          <h3 className="text-base text-center font-bold w-full">
            <Link
              href={`/levels/${levelURL}`}
              className="no-underline hover:underline text-black"
            >
              {levelName} LEVEL
            </Link>
          </h3>
          { levelDescription !== "" && <p className="mt-5">
            {levelDescription}
            </p>}
          {/* TODO: show many times that nft minted */}
        </div>
      </article>
    </div>
  );
};

export default LevelCard;
