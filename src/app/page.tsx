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
      <div className="mt-5">
        <LevelCardList />
      </div>
    </section>
  );
}
