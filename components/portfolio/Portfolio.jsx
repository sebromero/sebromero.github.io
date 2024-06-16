"use client";
import React, { useState } from "react";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import { Gallery } from "react-photoswipe-gallery";
import "photoswipe/dist/photoswipe.css";
import "react-tooltip/dist/react-tooltip.css";
import ModalVideo from "react-modal-video";
import Modal from "react-modal";

import ModalOne from "./modal/ModalOne";
import ModalTwo from "./modal/ModalTwo";
import ImageCard from "@/components/cards/ImageCard";
import GalleryImageCard from "@/components/cards/GalleryImageCard";
import DetailsCard from "@/components/cards/DetailsCard";
// import { getAllProjects } from "@/lib/projects";

// Modal.setAppElement("#__next");

const Portfolio = ({projects}) => {
  // for popup video for youtube
  const [isOpenYoutube, setOpenYoutube] = useState(false);

  // popup video for vimeo
  const [isOpenVimeo, setOpenVimeo] = useState(false);

  // for modal details
  const [isOpenModalOne, setIsOpenModalOne] = useState(false);
  const [isOpenModalTwo, setIsOpenModalTwo] = useState(false);

  // for modal details method
  function toggleModalOne() {
    setIsOpenModalOne(!isOpenModalOne);
  }
  function toggleModalTwo() {
    setIsOpenModalTwo(!isOpenModalTwo);
  }

  return (
    <>
      <Gallery>
        <Tabs>
          {/* START FILTER TABLIST */}
          <TabList>
            <Tab>All</Tab>
            <Tab>Videos</Tab>
            <Tab>Photography</Tab>
            <Tab>Details</Tab>
          </TabList>
          {/* END FILTER TABLIST */}

          <div className="list_wrapper">
            {/* START ALL PORTFOLIO */}
            <TabPanel>
              <ul
                className="portfolio_list"
                data-aos="fade-right"
                data-aos-duration="1200"
              >
                {
                  projects && projects.map((project) => {
                    return <li key={project.slug}><DetailsCard title={project.title} subtitle={project.subtitle} date={project.date_end} href={"/projects/" + project.slug} image={project.title_image}></DetailsCard></li>
                  })
                }                
                <li>
                  <ImageCard width={300} height={300} image="/img/portfolio/5.jpg" title="Teresa Butler" subtitle="Vimeo" id="vimeo" onClick={() => setOpenVimeo(true)} />
                </li>
                {/* END VIMEO */}

                <li>
                  <ImageCard width={300} height={300} image="/img/portfolio/2.jpg" title="Ashely Flores" subtitle="Youtube" id="youtube" onClick={() => setOpenYoutube(true)} />
                </li>
                {/* END YOUTUBE */}

                <li>
                  <GalleryImageCard width={300} height={300} sourceWidth={500} sourceHeight={550} thumbnail="/img/portfolio/4.jpg" image="/img/portfolio/4.jpg" title="Derek Smith" subtitle="Shot" id="shot" />
                </li>
                {/* END SHOT */}

                <li>
                  <GalleryImageCard width={300} height={300} sourceWidth={500} sourceHeight={550} thumbnail="/img/portfolio/3.jpg" image="/img/portfolio/3.jpg" title="Gloria Jenkins" subtitle="Shot" id="shot2" />
                </li>
                {/* END SHOT */}

                <li>
                  <ImageCard width={300} height={300} image="/img/portfolio/6.jpg" title="Selena Gomez" subtitle="Details" id="detail" onClick={toggleModalOne} />
                </li>
                {/* END DETAILS */}

                <li>
                  <ImageCard width={300} height={300} image="/img/portfolio/7.jpg" title="Ave Simone" subtitle="Details" id="detail2" onClick={toggleModalTwo} />
                </li>
                {/* END DETAILS */}
              </ul>
            </TabPanel>
            {/* END ALL PORTFOLIO */}

            {/* START VIDEOS */}
            <TabPanel>
              <ul
                className="portfolio_list"
                data-aos="fade-right"
                data-aos-duration="1200"
              >
                <li>
                  <ImageCard width={300} height={300} image="/img/portfolio/5.jpg" title="Teresa Butler" subtitle="Vimeo" id="vimeo" onClick={() => setOpenVimeo(true)} />
                </li>
                {/* END VIMEO */}
                <li>
                  <ImageCard width={300} height={300} image="/img/portfolio/2.jpg" title="Ashely Flores" subtitle="Youtube" id="youtube" onClick={() => setOpenYoutube(true)} />
                </li>
                {/* END YOUTUBE */}
              </ul>
              {/* END PORTFOLIO LIST */}
            </TabPanel>
            {/* END VIDEOS */}

            {/* START PHOTOGRAHY */}
            <TabPanel>
              <ul
                className="portfolio_list"
                data-aos="fade-right"
                data-aos-duration="1200"
              >
                <li>
                  <GalleryImageCard width={300} height={300} sourceWidth={500} sourceHeight={550} thumbnail="/img/portfolio/4.jpg" image="/img/portfolio/4.jpg" title="Derek Smith" subtitle="Shot" id="shot" />
                </li>
                {/* END SHOT */}
                <li>
                  <GalleryImageCard width={300} height={300} sourceWidth={500} sourceHeight={550} thumbnail="/img/portfolio/3.jpg" image="/img/portfolio/3.jpg" title="Gloria Jenkins" subtitle="Shot" id="shot2" />
                </li>
                {/* END SHOT */}
              </ul>
              {/* END PORTFOLIO LIST */}
            </TabPanel>
            {/* END PHOTOGRAHY */}

            {/* START PORTFOLIO DETAILS */}
            <TabPanel>
              <ul
                className="portfolio_list"
                data-aos="fade-right"
                data-aos-duration="1200"
              >
                <li>
                  <ImageCard width={300} height={300} image="/img/portfolio/6.jpg" title="Selena Gomez" subtitle="Details" id="detail" onClick={toggleModalOne} />
                </li>
                {/* END DETAILS */}
                <li>
                  <ImageCard width={300} height={300} image="/img/portfolio/7.jpg" title="Ave Simone" subtitle="Details" id="detail2" onClick={toggleModalTwo} />
                </li>
                {/* END DETAILS */}
              </ul>
              {/* END DETAILS GALLERY */}
            </TabPanel>
            {/* END PORTFOLIO DETAILS */}
          </div>
          {/* END LIST WRAPPER */}
        </Tabs>
      </Gallery>

      {/* START YOUTUBE VIDEO POPUP */}
      <ModalVideo
        channel="youtube"
        autoplay
        isOpen={isOpenYoutube}
        videoId="1gyTUHP6ne8"
        onClose={() => setOpenYoutube(false)}
      />
      {/* EMD YOUTUBE VIDEO POPUP */}

      {/* START VIMEO VIDEO POPUP  */}
      <ModalVideo
        channel="vimeo"
        autoplay
        isOpen={isOpenVimeo}
        videoId="100171151"
        onClose={() => setOpenVimeo(false)}
      />
      {/* END VIMEO VIDEO POPUP */}

      {/* START MODAL FOR PORTFOLIO DETAILS */}
      <Modal
        ariaHideApp={false}
        isOpen={isOpenModalOne}
        onRequestClose={toggleModalOne}
        contentLabel="My dialog"
        className="mymodal"
        overlayClassName="myoverlay"
        closeTimeoutMS={500}
      >
        <div className="tokyo_tm_modalbox_news portfolio_tm_modalbox">
          <button className="close-modal" onClick={toggleModalOne}>
            <img src="/img/svg/cancel.svg" alt="close icon" />
          </button>
          {/* END CLOSE ICON */}

          <ModalOne />
          {/* END BOX INNER */}
        </div>
        {/* END MODALBOX NEWS */}
      </Modal>
      {/* END MODAL FOR PORTFOLIO DETAILS */}

      {/* START MODAL FOR PORTFOLIO DETAILS */}
      <Modal
        ariaHideApp={false}
        isOpen={isOpenModalTwo}
        onRequestClose={toggleModalTwo}
        contentLabel="My dialog"
        className="mymodal"
        overlayClassName="myoverlay"
        closeTimeoutMS={500}
      >
        <div className="tokyo_tm_modalbox_news portfolio_tm_modalbox">
          <button className="close-modal" onClick={toggleModalTwo}>
            <img src="/img/svg/cancel.svg" alt="close icon" />
          </button>
          {/* END CLOSE ICON */}
          <ModalTwo />
          {/* END BOX INNER */}
        </div>
        {/* END MODALBOX NEWS */}
      </Modal>
      {/* END MODAL FOR PORTFOLIO DETAILS */}
    </>
  );
};

export default Portfolio;
