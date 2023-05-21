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
          <p className="text-2xl italic font-medium text-gray-900 my-5">
            &quot;Do you want to enhance your Solidity development skills? Do
            you want to learn how to integrate Chainlink services in your smart
            contracts? Do you want to certify your knowledge of Solidity and
            Chainlink? Then, Chainiversity is the right place for you!
          </p>
        </blockquote>
      </figure>

      <h3 className="text-4xl font-extrabold text-center mb-5 md:hidden">LEVELS</h3>
      <div className="mb-10">
        <LevelCardList />
      </div>
    </section>
  );
}
