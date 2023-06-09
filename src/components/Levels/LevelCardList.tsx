import LevelCard from "./LevelCard";
import vrf from "public/assets/images/nfts/vrf.jpg";
import priceFeed from "public/assets/images/nfts/price-feed.jpg";
import automation from "public/assets/images/nfts/automation.jpg";

function LevelCardList() {
  return (
    <div className="flex flex-wrap mt-5 -mx-1 lg:-mx-4 w-full">
      <div className="w-full md:w-1/2 lg:w-1/3 mb-10 lg:mb-0">
        <LevelCard
          levelURL="vrf"
          levelName="VRF"
          nftPhoto={vrf}
          levelDescription="Curious about retrieving verifiable random outputs? Chainlink VRF is the way to go for! You will be asked to get a simple VRF output in this level to be eligible for an NFT certificate."
        />
      </div>
      <div className="w-full md:w-1/2 lg:w-1/3 mb-10 lg:mb-0">
        <LevelCard
          levelURL="automation"
          levelName="AUTOMATION"
          nftPhoto={automation}
          levelDescription="Automation and Smart Contracts! Yes, Chainlink Automation combines those two terms. Read the level instructions carefully, and certify your Automation knowledge."
        />
      </div>
      <div className="w-full md:w-1/2 lg:w-1/3 mb-10 lg:mb-0 ">
        <LevelCard
          levelURL="priceFeed"
          levelName="PRICE FEED"
          nftPhoto={priceFeed}
          levelDescription="You’re invited to this level if you’re interested in getting price data in a trust-minimized manner using Chainlink Price Feeds. Show your knowledge of Chainlink and Solidity!"
        />
      </div>
    </div>
  );
}

export default LevelCardList;
