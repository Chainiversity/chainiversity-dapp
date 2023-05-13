import LevelCard from "./LevelCard";
import vrf from "public/assets/images/nfts/vrf.jpeg";
import priceFeed from "public/assets/images/nfts/price-feed.jpeg";
import automation from "public/assets/images/nfts/automation.jpeg";

function LevelCardList() {
  return (
    <div className="flex flex-wrap mt-10 -mx-1 lg:-mx-4 w-full">
      <LevelCard levelName="VRF" date="13/05/23" nftPhoto={vrf} />
      <LevelCard levelName="PRICE FEED" date="14/05/23" nftPhoto={priceFeed} />
      <LevelCard levelName="AUTOMATION" date="18/05/23" nftPhoto={automation} />
    </div>
  );
}

export default LevelCardList;
