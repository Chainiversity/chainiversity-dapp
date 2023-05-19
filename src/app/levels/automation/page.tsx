import React from 'react'
import Level from "@/components/Levels/Level";
import automationPhoto from "public/assets/images/nfts/automation.jpg";

function automation() {
    return (
        <Level nftPhoto={automationPhoto}
            levelName={"NFT Certificate - Chainlink Automation"}
            date={"13/05/23"}
            levelAddress={""}>
            <h1><b>Automation Level</b></h1>
            <br/>
            <p>Do you want to master automating your smart contracts? Then, this Chainiversity level is for you! In this level, you will be asked to integrate Chainlink Automation into your smart contract.</p>
            <p>Note that you must utilize Polygon Mumbai testnet in order to submit a solution contract. To pay for gas fees and contract creation, you must have test MATIC: reach MATIC faucet
                <a href="https://faucet.polygon.technology/"> here </a>
                or
                <a href="https://mumbaifaucet.com/"> here</a>. To use Chainlink services, you will need LINK token on the Mumbai testnet, reach the faucet
                <a href="https://faucets.chain.link/mumbai"> here</a>
            </p>
            <br/>
            <h2><b>Requirements</b></h2>
            <ul>
                <li>Basic knowledge of
                    <a href="https://docs.chain.link/chainlink-automation/introduction"> Chainlink Automation</a>.
                </li>
                <li>Basic knowledge of Solidity and Remix. A beginner? No worries, you can go from zero to hero
                    <a href="https://www.youtube.com/watch?v=gyMwXuJrbJQ"> here</a>.</li>
                <li>Understanding of
                    <a href="https://www.alchemy.com/overviews/solidity-interface"> interfaces </a>
                    in Solidity.</li>
            </ul>
            <br/>
            <h2><b>Level Task</b></h2>
            <p>In this level, you should create a function that will register your contract at the level manager contract whose address is 0x000000000000 using the interface
                <code> function registerContract() external;</code>. Registering is essential in order to pass the level.</p>
            <p>The time of the registration (block.timestamp) is stored in the manager contract. Chainlink Automation should be integrated in such a way that the interface function for submitting your solution
                <code> function submitAnswer() external; </code>
                is called
                <strong> at least </strong>
                30 seconds or more after the registration timestamp.
            </p>
            <br/>
            <p>You can automate your contract to call the
                <code> submitAnswer() </code>
                function in the manager contract every 30 seconds after your contract is registered for Chainlink Automation. To be safe, you can also set the interval for 45 seconds in your contract.</p>
            <p>The function
                <code> submitAnswer() </code>
                should be called only by the Chainlink node operators. If you attempt to call it, the transaction will revert.</p>
            <p>The manager contract will also check if the first address parameter is the owner of the provided contract address using
                <a href="https://docs.openzeppelin.com/contracts/4.x/api/access">OpenZeppelin&#39;s Ownable imported contract</a>.
                <strong> Be careful here: the owner of the contract will be able to claim the NFT certificate</strong>, so you must import
                <code> Ownable.sol</code>.</p>

        </Level>
    )
}

export default automation
