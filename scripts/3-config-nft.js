import sdk from "./1-initialize-sdk.js";
import { readFileSync } from "fs";

const bundleDrop = sdk.getBundleDropModule(
  "0x5818694fB184dFF3345292D3eE98d3A1FfE8584b",
);

(async () => {
  try {
    await bundleDrop.createBatch([
      {
        name: "Kitty Logo",
        description: "This NFT will give you access to Kitty DAO!",
        image: readFileSync("scripts/assets/logo.png"),
      },
    ]);
    console.log("✅ Successfully created a new NFT in the drop!");
  } catch (error) {
    console.error("failed to create the new NFT", error);
  }
})()