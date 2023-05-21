import LevelCard from "./LevelCard";
import vrf from "public/assets/images/nfts/vrf.jpg";
import priceFeed from "public/assets/images/nfts/price-feed.jpg";
import automation from "public/assets/images/nfts/automation.jpg";

function LevelCardList() {
  return (
    <div className="flex flex-wrap mt-5 -mx-1 lg:-mx-4 w-full">
      <div className="w-full md:w-1/2 lg:w-1/3 mb-10 lg:mb-0">
        <LevelCard
          levelAddress="vrf"
          levelName="VRF"
          date="13/05/23"
          nftPhoto={vrf}
          levelDescription="Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga dicta eum blanditiis voluptatum, quibusdam commodi unde possimus necessitatibus velit fugit illo tempora quaerat molestiae asperiores sequi ab. Vero, ea tempore."
        />
      </div>
      <div className="w-full md:w-1/2 lg:w-1/3 mb-10 lg:mb-0">
        <LevelCard
          levelAddress="automation"
          levelName="AUTOMATION"
          date="18/05/23"
          nftPhoto={automation}
        />
      </div>
      <div className="w-full md:w-1/2 lg:w-1/3 mb-10 lg:mb-0 ">
        <LevelCard
          levelAddress="priceFeed"
          levelName="PRICE FEED"
          date="14/05/23"
          nftPhoto={priceFeed}
        />
      </div>
    </div>
  );
}

export default LevelCardList;
