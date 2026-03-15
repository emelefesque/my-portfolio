import createMDX from "@next/mdx";
const withMDX = createMDX({
  extensions: [".mdx", ".md"],
});
export default withMDX({
  pageExtensions: ["js", "jsx", "md", "mdx"],
});
