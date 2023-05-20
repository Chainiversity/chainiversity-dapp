import React from "react";
import Level from "@/components/Levels/Level";
import feedPhoto from "public/assets/images/nfts/price-feed.jpg";
import {addresses} from "../../../../contracts/addresses";
import Link from "next/link";

function priceFeed() {
  return (
    <Level
      nftPhoto={feedPhoto}
      levelName={"NFT Certificate - Chainlink Price Feed"}
      date={"13/05/23"}
      levelAddress={
        `${addresses.priceFeedAddress}` as `0x${string}`
      }
    >
      <h1>
        <b>Price Feeds Level</b>
      </h1>
      <br />
      <p>
        Another level for Chainiversity: Chainlink Price Feeds Level! In this
        level, you will be asked to integrate Chainlink Price Feeds into your
        contract. If you integrate it correctly, and follow the instructions
        below, you will pass this level and you will be able to claim your NFT
        certificate for your web3 dev portfolio!
      </p>
      <p>
        Note that you must utilize Polygon Mumbai testnet in order to submit a
        solution contract. To pay for gas fees and contract creation, you must
        have test MATIC: reach MATIC faucet
        <Link className="docs_link" href="https://faucet.polygon.technology/"> here </Link>
        or
        <Link className="docs_link" href="https://mumbaifaucet.com/"> here</Link>.
      </p>
      <p>
        For this level, you will not need LINK tokens to utilize Chainlink Price
        Feeds.
      </p>
      <br />
      <h3>
        {" "}
        <b>Requirements</b>
      </h3>
      <ul className="list-disc">
        <li>
          Basic knowledge of
          <Link className="docs_link" href="https://docs.chain.link/data-feeds/price-feeds/">
            {" "}
            Chainlink Price Feeds
          </Link>
          .
        </li>
        <li>
          Basic knowledge of Solidity and Remix. A beginner? No worries, you can
          go from zero to hero
          <Link className="docs_link" href="https://www.youtube.com/watch?v=gyMwXuJrbJQ">here</Link>.
        </li>
        <li>
          Understanding of
          <Link className="docs_link" href="https://www.alchemy.com/overviews/solidity-interface">
            {" "}
            interfaces{" "}
          </Link>
          in Solidity.
        </li>
        <li>
          Understanding of
          <Link className="docs_link" href="https://docs.alchemy.com/docs/solidity-payable-functions">
            {" "}
            payable functions{" "}
          </Link>
          in order to send MATIC to the mananger contract.
        </li>
      </ul>
      <br />
      <h3>
        {" "}
        <b>Level Task</b>
      </h3>
      <p>
        In this level, the task is that you send 0.01 USD worth of MATIC to the
        manager contract using
        <Link className="docs_link" href="https://docs.chain.link/data-feeds/price-feeds/addresses?network=polygon#Mumbai%20Testnet">
          <strong> MATIC/USD </strong>
        </Link>
        Price Feeds. Chainiversity Level Manager contract is {" "}
        <Link
          className="docs_link"
          href="https://mumbai.polygonscan.com/address/0xF6eA5735CF1315C7bb339f9c81D2AFeB800640E7"
        >
          here
        </Link>.
      </p>
      <p>
        In order to send MATIC to the manager contract, use the following
        interface function:
        <code> function receiveAnswer() external payable;</code>. 0.01 USD worth
        of MATIC will be sent to the Manager contract, and you will be able to
        withdraw it.
      </p>
      <br />
      <p>
        The manager contract will also check if the first address parameter is
        the owner of the provided contract address using
        <Link className="docs_link" href="https://docs.openzeppelin.com/contracts/4.x/api/access">
          OpenZeppelin&#39;s Ownable imported contract
        </Link>
        .
        <strong>
          Be careful here: the owner of the contract will be able to claim the
          NFT certificate.
        </strong>
        , so you must import
        <code>Ownable.sol</code>. Make sure that the owner of the contract sends
        the transaction when calling the interface function
        <code> function receiveAnswer() external payable;</code>.
      </p>
      <br />
      <h3>
        <b>Some tips</b>
      </h3>
      <p>
        The most important point for solving this challenge is paying attention
        to the decimals of the Price Feeds output. You will have to play around
        with decimals if you want to send a valid amount of MATIC to the manager
        contract.
      </p>
      <p>
        Even though you correctly write your smart contract, and attempt to
        submit your solution, the transaction could give an error in Remix
        interface. Try submitting the solution multiple times; if it does not
        still work, then check for errors.
      </p>
      <p>
        The heartbeat for MATIC/USD feed is 120 seconds. Make sure to leave no
        gap between retrieving the price and submitting your solution.
      </p>
    </Level>
  );
}

export default priceFeed;
