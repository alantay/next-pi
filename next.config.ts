import type { NextConfig } from "next";
import createMDX from "@next/mdx";
import rehypePrettyCode from "rehype-pretty-code";

const nextConfig: NextConfig = {
  pageExtensions: ["js", "jsx", "md", "mdx", "ts", "tsx"],
};

const withMDX = createMDX({
  // Add markdown plugins here, as desired
  extension: /\.(md|mdx)$/,
  options: {
    rehypePlugins: [
      [rehypePrettyCode, { theme: "github-dark", showLineNumbers: true }], // or any other theme
    ],
  },
});

// Merge MDX config with Next.js config
export default withMDX(nextConfig);
