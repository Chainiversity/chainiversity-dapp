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
          levelDescription="Curious about retrieving cryptographically proven random value outputs? Chainlink VRF is the way to go for! You will be asked to get a simple VRF output in this level."
        />
      </div>
      <div className="w-full md:w-1/2 lg:w-1/3 mb-10 lg:mb-0">
        <LevelCard
          levelAddress="automation"
          levelName="AUTOMATION"
          date="18/05/23"
          nftPhoto={automation}
          levelDescription="Automation and Smart Contracts! Yes, Chainlink Automation combines those terms. Read the level instructions carefully, and certify your Automation knowledge."
        />
      </div>
      <div className="w-full md:w-1/2 lg:w-1/3 mb-10 lg:mb-0 ">
        <LevelCard
          levelAddress="priceFeed"
          levelName="PRICE FEED"
          date="14/05/23"
          nftPhoto={priceFeed}
          levelDescription="You’re invited to this level if you’re interested in getting price data in a trust-minimized manner using Chainlink Price Feeds. Show your knowledge of Chainlink and Solidity!"
        />
      </div>
    </div>
  );
}

export default LevelCardList;
