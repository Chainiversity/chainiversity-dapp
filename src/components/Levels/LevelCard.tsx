import Image, { StaticImageData } from "next/image";
import { NextPage } from "next";

interface Props {
  nftPhoto: StaticImageData; // TODO: NFT URI
  levelName: string;
  date: string;
}

const LevelCard: NextPage<Props> = ({ nftPhoto, levelName, date }) => {
  return (
    // TODO: Change a tags with link
    <div className="my-1 px-1 w-full md:w-1/2 lg:my-4 lg:px-4 lg:w-1/3">
      <article className="overflow-hidden rounded-lg shadow-lg">
        <a href="#">
          <Image
            className="block h-auto w-full"
            src={nftPhoto}
            alt="nft photo of level"
          />
        </a>

        <div className="flex items-center justify-between leading-tight p-2 md:p-4">
          <h3 className="text-base">
            <a className="no-underline hover:underline text-black" href="#">
              {levelName}
            </a>
          </h3>
          <p className="text-grey-darker text-sm">{date}</p>
        </div>
      </article>
    </div>
  );
};

export default LevelCard;
