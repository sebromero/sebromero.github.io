'use client';

// To use MDXRemote it must be wrapped in a client component
// SEE: https://blog.kfirfitousi.com/posts/web-dev/mdx-nextjs-13

import Image from 'next/image'
import { MDXRemote } from 'next-mdx-remote';
 
/** Place your custom MDX components here */
const MdxComponents = {
    /** h1 colored in yellow */
    h1: (props) => (
      <h1 style={{ color: '#FFF676', fontSize: '5em' }} {...props} />
    ),
    img: (props) => (
      <Image
        sizes="100vw"
        style={{ width: '100%', height: 'auto' }}
        width={800}
        height={600}
        src={props.src}
        {...props}
      />
    ),
    /** Card component */
    Card: (props) => (
      <div
        style={{
          background: '#333',
          borderRadius: '0.25rem',
          padding: '0.5rem 1rem',
        }}
        {...props}
      />
    ),
  };
   
  export function MDXContent({ source }) {
    return <MDXRemote {...source} components={MdxComponents} />;
  }