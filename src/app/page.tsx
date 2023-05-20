import Image from "next/image";
import LevelCardList from "@/components/Levels";

export default function Home() {
  return (
    <section className="w-full flex-center flex-col">
      <h1 className="head_text text-center">
        HONE YOUR
        <br className="mac-md:hidden" />
        <span className="blue_gradient">CHAINLINK</span> SKILLS
      </h1>
      <p className="desc text-center">
        Chainlink your smart contracts, earn NFT certificates!
      </p>

      <figure className="mx-auto text-center my-10 p-10">
        <blockquote>
          <p className="text-2xl italic font-medium text-gray-900">
            &quot;Do you want to enhance your Solidity development skills? Do
            you want to learn how to integrate Chainlink services in your smart
            contracts? Do you want to certify your knowledge of Solidity and
            Chainlink? Then, Chainiversity is the right place for you!
          </p>
          <br />
          <p className="text-2xl italic font-medium text-gray-900">
            Chainiversity is an interactive educational hub for developers who
            want to excel in Chainlink and Solidity development. There are
            levels that developers need to submit a solution for using Chainlink
            services. There are currently three levels in Chainiversity where
            one of Chainlink Price Feeds, Chainlink VRF and Chainlink Automation
            is used for each level.&quot;
          </p>
        </blockquote>
      </figure>

      <h3 className="head_text text-center mb-5">LEVELS</h3>
      <LevelCardList />
      
    </section>
  );
}
