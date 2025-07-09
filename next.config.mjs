/** @type {import('next').NextConfig} */

const nextConfig = {
    // Configure `pageExtensions` to include markdown and MDX files
    pageExtensions: ['js', 'jsx', 'md', 'mdx', 'ts', 'tsx'],
    output: "export", // Generate static pages
    
    // See: https://stackoverflow.com/questions/70500084/how-to-export-static-images-on-nextjs
    images: {
        unoptimized: false,
    }    
};

export default nextConfig;