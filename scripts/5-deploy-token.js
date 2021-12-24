import sdk from "./1-initialize-sdk.js";

// In order to deploy the new contract we need our old friend the app module again.
const app = sdk.getAppModule("0x97856e8d723b15F0Da7bCF0CfdeaE28539063456");

(async () => {
  try {
    // Deploy a standard ERC-20 contract.
    const tokenModule = await app.deployTokenModule({
      // What's your token's name? Ex. "Ethereum"
      name: "KittyDAO Governance Token",
      // What's your token's symbol? Ex. "ETH"
      symbol: "KITTY",
    });
    console.log(
      "✅ Successfully deployed token module, address:",
      tokenModule.address,
    );
  } catch (error) {
    console.error("failed to deploy token module", error);
  }
})();