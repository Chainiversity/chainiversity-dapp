import React from "react";
import Level from "@/components/Levels/Level";
import automationPhoto from "public/assets/images/nfts/automation.jpg";
import Link from "next/link";

function automation() {
  return (
    <Level
      nftPhoto={automationPhoto}
      levelName={"NFT Certificate - Chainlink Automation"}
      date={"13/05/23"}
      levelAddress={
        `${process.env.NEXT_PUBLIC_TEST_CONTRACT_ADDRESS}` as `0x${string}`
      }
    >
      <h1>
        <b>Automation Level</b>
      </h1>
      <br />
      <p>
        Do you want to master automating your smart contracts? Then, this
        Chainiversity level is for you! In this level, you will be asked to
        integrate Chainlink Automation into your smart contract.
      </p>
      <p>
        Note that you must utilize Polygon Mumbai testnet in order to submit a
        solution contract. To pay for gas fees and contract creation, you must
        have test MATIC: reach MATIC faucet
        <Link className="docs_link" href="https://faucet.polygon.technology/">
          {" "}
          here{" "}
        </Link>
        or
        <Link className="docs_link" href="https://mumbaifaucet.com/">
          {" "}
          here
        </Link>
        . To use Chainlink services, you will need LINK token on the Mumbai
        testnet, reach the faucet
        <Link className="docs_link" href="https://faucets.chain.link/mumbai">
          {" "}
          here
        </Link>
      </p>
      <br />
      <h2>
        <b>Requirements</b>
      </h2>
      <ul className="list-disc">
        <li>
          Basic knowledge of
          <Link
            className="docs_link"
            href="https://docs.chain.link/chainlink-automation/introduction"
          >
            {" "}
            Chainlink Automation
          </Link>
          .
        </li>
        <li>
          Basic knowledge of Solidity and Remix. A beginner? No worries, you can
          go from zero to hero
          <Link
            className="docs_link"
            href="https://www.youtube.com/watch?v=gyMwXuJrbJQ"
          >
            {" "}
            here
          </Link>
          .
        </li>
        <li>
          Understanding of
          <Link
            className="docs_link"
            href="https://www.alchemy.com/overviews/solidity-interface"
          >
            {" "}
            interfaces{" "}
          </Link>
          in Solidity.
        </li>
      </ul>
      <br />
      <h2>
        <b>Level Task</b>
      </h2>
      <p>
        In this level, you should create a function that will register your
        contract at the level manager contract whose address is {" "}
        <Link
          className="docs_link"
          href="https://mumbai.polygonscan.com/address/0x770060AFfA4AabeaDb652e4ba8829F3506bAA3e2"
        >
          here
        </Link> {" "}
        using the interface
        <code> function registerContract() external;</code>. Registering is
        essential in order to pass the level.
      </p>
      <p>
        The time of the registration (block.timestamp) is stored in the manager
        contract. Chainlink Automation should be integrated in such a way that
        the interface function for submitting your solution
        <code> function submitAnswer() external; </code>
        is called
        <strong> at least </strong>
        30 seconds or more after the registration timestamp.
      </p>
      <br />
      <p>
        You can automate your contract to call the
        <code> submitAnswer() </code>
        function in the manager contract every 30 seconds after your contract is
        registered for Chainlink Automation. To be safe, you can also set the
        interval for 45 seconds in your contract.
      </p>
      <p>
        The function
        <code> submitAnswer() </code>
        should be called only by the Chainlink node operators. If you attempt to
        call it, the transaction will revert.
      </p>
      <p>
        The manager contract will also check if the first address parameter is
        the owner of the provided contract address using{" "}
        <Link
          className="docs_link"
          href="https://docs.openzeppelin.com/contracts/4.x/api/access"
        >
          OpenZeppelin&#39;s Ownable imported contract
        </Link>
        .
        <strong>
          {" "}
          Be careful here: the owner of the contract will be able to claim the
          NFT certificate
        </strong>
        , so you must import
        <code> Ownable.sol</code>.
      </p>
    </Level>
  );
}

export default automation;
