import nextMDX from '@next/mdx'

// import remarkGfm from 'remark-gfm'


// SEE: https://stdaddress.com/posts/2022-11-09-use-front-matter-with-next-js-and-mdx
import remarkFrontmatter from "remark-frontmatter";
import remarkMdxFrontmatter from "remark-mdx-frontmatter";


/** @type {import('next').NextConfig} */
const nextConfig = {
    // Configure `pageExtensions` to include markdown and MDX files
    pageExtensions: ['js', 'jsx', 'md', 'mdx', 'ts', 'tsx'],
};


const withMDX = nextMDX({
    extension: /\.mdx?$/,
    options: {
        // If you use remark-gfm, you'll need to use next.config.mjs
        // as the package is ESM only
        // https://github.com/remarkjs/remark-gfm#install
        remarkPlugins: [remarkFrontmatter, remarkMdxFrontmatter], // add remarkGfm
        rehypePlugins: [],
        // If you use `MDXProvider`, uncomment the following line.
        // providerImportSource: "@mdx-js/react",
    },
})
   
// Merge MDX config with Next.js config
export default withMDX(nextConfig)