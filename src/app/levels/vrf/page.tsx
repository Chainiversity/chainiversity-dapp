import React from "react";
import Level from "@/components/Levels/Level";
import vrfPhoto from "public/assets/images/nfts/vrf.jpg";
import {addresses} from "../../../../contracts/addresses";
import Link from "next/link";

function vrf() {
  return (
    <Level
      nftPhoto={vrfPhoto}
      levelName={"NFT Certificate - Chainlink VRF"}
      date={"13/05/23"}
      levelAddress={`${addresses.vrfAddress}` as `0x${string}`}
    >
      <h1>
        <b>VRF Level</b>
      </h1>
      <br />
      <p>
        In this level of Chainiversity, you will be asked to integrate{" "}
        <Link
          href="https://docs.chain.link/vrf/v2/introduction/"
          className="docs_link"
        >
          Chainlink VRF
        </Link>{" "}
        (Verifiable Randomness Function) into your smart contract. If you
        integrate it correctly, and follow the instructions below, you will pass
        this level and you will be able to claim your NFT certificate for your
        web3 dev portfolio!
      </p>
      <p>
        Note that you must utilize Polygon Mumbai testnet in order to submit a
        solution contract. To pay for gas fees and contract creation, you must
        have test MATIC: reach MATIC faucet{" "}
        <Link className="docs_link" href="https://faucet.polygon.technology/">
          here
        </Link>{" "}
        or{" "}
        <Link className="docs_link" href="https://mumbaifaucet.com/">
          here
        </Link>{" "}
        . To use Chainlink services, you will need LINK token on the Mumbai
        testnet, reach the faucet{" "}
        <Link className="docs_link" href="https://faucets.chain.link/mumbai">
          here
        </Link>{" "}
      </p>
      <br />
      <h2>
        <b>Requirements</b>
      </h2>
      <ul className="list-disc">
        <li>Basic knowledge of Chainlink and its VRF product.</li>
        <li>
          Basic knowledge of Solidity and Remix. A beginner? No worries, you can
          go from zero to hero{" "}
          <Link
            className="docs_link"
            href="https://www.youtube.com/watch?v=gyMwXuJrbJQ"
          >
            here
          </Link>{" "}
          .
        </li>
        <li>
          Understanding of{" "}
          <Link
            className="docs_link"
            href="https://www.alchemy.com/overviews/solidity-interface"
          >
            interfaces
          </Link>{" "}
          in Solidity.
        </li>
      </ul>
      <br />
      <h2>
        <b>Level Task</b>
      </h2>
      <p>
        In order to pass this level, the task is very simple:
        <strong>
          getting a VRF output from the Chainlink network with subscription
          method
        </strong>
        . You should be warned that returning a number made up by yourself does
        not work, and this transaction will revert. We suggest that you
        integrate the Chainlink VRF correctly by following the Chainlink
        documentation and the instructions below to pass the level!
      </p>
      <br />
      <p>
        There is a level manager contract developed by Chainiversity team that
        will validate if your contract calls for a VRF output. The address is:
        0x000000000000000000000000
      </p>
      <p>
        In order for the manager contract to check if you passed the level, you
        must implement the interface:
        <code>function checkAnswer(address, address) external;</code>. The first
        address is your EVM account address, and the second one is the address
        of your solution contract. The manager contract will check if the first
        address parameter is the owner of the provided contract address using{" "}
        <Link
          className="docs_link"
          href="https://docs.openzeppelin.com/contracts/4.x/api/access"
        >
          OpenZeppelin&#39;s Ownable imported contract
        </Link>{" "}
        .
        <strong>
          Be careful here: the owner of the contract will be able to claim the
          NFT certificate.
        </strong>
        If your transaction is not reverted, you will be able to claim your NFT
        certificate with the mint button on this page.
      </p>
      <p></p>
      <br />
      <h2>
        <b>Some tips</b>
      </h2>
      <p>
        Knowing where to implement the
        <code>checkAnswer()</code>
        interface function is important. There are two types of functions that
        need to be implemented in a VRF contract, try to think of where to call
        the function from the manager contract.
      </p>
      <p>
        As validating the contract will consume some amount of gas, you may
        consider increasing the callback gas limit for the VRF contract. Also,
        considering funding your subscription with enough LINK.
      </p>
    </Level>
  );
}

export default vrf;
