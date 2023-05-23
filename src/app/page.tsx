import Image from "next/image";
import LevelCardList from "@/components/Levels";
import Link from "next/link";

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
            Chainlink? Then, Chainiversity is the right place for you!&quot;
          </p>
        </blockquote>
        <Link
        className="relative inline-flex items-center justify-center p-0.5 mb-2 mr-2 overflow-hidden text-sm font-medium text-blue-600 rounded-lg group bg-gradient-to-br from-cyan-500 to-blue-500 group-hover:from-cyan-500 group-hover:to-blue-500 hover:text-white focus:ring-4 focus:outline-none focus:ring-cyan-200 mt-2"
        href={"/getting-started"}
      >
        <span className="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white rounded-md group-hover:bg-opacity-0">
          Getting Started {'->'}
        </span>
        
      </Link>
      </figure>

      

      <h3 className="text-4xl font-extrabold text-center mb-5 md:hidden">
        LEVELS
      </h3>
      <div className="mb-10 flex-center">
        <LevelCardList />
      </div>
    </section>
  );
}
