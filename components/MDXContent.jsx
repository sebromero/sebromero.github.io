'use client';

// To use MDXRemote it must be wrapped in a client component
// SEE: https://blog.kfirfitousi.com/posts/web-dev/mdx-nextjs-13

import Image from 'next/image'
import { MDXRemote } from 'next-mdx-remote';
import 'photoswipe/dist/photoswipe.css' // Required for image gallery
import { Gallery, Item } from "react-photoswipe-gallery";
// Import SCSS
import './MDXContent.scss';
 
/** Place your custom MDX components here */

// Fullscreen gallery options
const galleryOptions = {
  // padding: { top: 20, bottom: 48, left: 100, right: 100 },
};

const captionStyle = "font-size: 1rem; padding: 8px; border-radius: 4px; background-color: rgba(0,0,0, 0.5)";

const MdxComponents = {
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
    Gallery: (props) => (
      <Gallery options={galleryOptions} withCaption>
        <div className='gallery'>
        {props.children}
        </div>
      </Gallery>
    ),
    Item: (props) => (
      <Item
        original={props.original}
        thumbnail={props.thumbnail}
        width={props.width}
        height={props.height}
        caption={props.caption ? "<span style='" + captionStyle + "'>" + props.caption + "</span>" : null}
      >
        {({ ref, open }) => (
          <img
            style={{ cursor: 'pointer', objectFit: 'cover', width: '100%', maxHeight: '100%'}}            
            src={props.thumbnail ? props.thumbnail : props.original}
            ref={ref}
            onClick={open}
          />
        )}
      </Item>
    ),
  };
   
  export function MDXContent({ source }) {
    return <MDXRemote {...source} components={MdxComponents} />;
  }