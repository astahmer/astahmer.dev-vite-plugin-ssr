import react from "@vitejs/plugin-react";
import ssr from "vite-plugin-ssr/plugin";
import type { UserConfig } from "vite";
import { createVanillaExtractSprinklesExtractor } from "vite-box-extractor";
// import { vanillaExtractPlugin } from "@vanilla-extract/vite-plugin";

// TODO preact + mdx (check tropical)
const config: UserConfig = {
  plugins: [
    createVanillaExtractSprinklesExtractor({
      components: { Box: { properties: "all", conditions: "all" } },
      functions: { themeSprinkles: { properties: "all" } },
      vanillaExtractOptions: {
        // onEvaluated: (context, evalResult, filePath) =>
        //   console.dir(
        //     {
        //       context,
        //       // evalResult,
        //       filePath,
        //     },
        //     { depth: null }
        //   ),
        // onAfterEvaluateMutation: (args) => console.dir(args, { depth: null }),
      },
      // isExtractableFile: (file) =>
      //   file.endsWith(".mdx") || file.endsWith(".tsx") || file.endsWith(".jsx"),
      // onExtracted: (args) => (!args.isSsr ? console.log(args) : undefined),
    }),
    react(),
    ssr({
      // prerender: { noExtraDir: true },
      includeAssetsImportedByServer: true,
    }),
    // vanillaExtractPlugin({ forceEmitCssInSsrBuild: true }),
  ],
};

export default config;
