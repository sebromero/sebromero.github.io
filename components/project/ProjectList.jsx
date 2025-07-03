"use client";
import React, { useState } from "react";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import { Gallery } from "react-photoswipe-gallery";

// Required for image gallery
// import "photoswipe/dist/photoswipe.css";
import "react-tooltip/dist/react-tooltip.css";
import ModalVideo from "react-modal-video";
import Modal from "react-modal";

import ModalOne from "./modal/ModalOne";
import ModalTwo from "./modal/ModalTwo";
import ImageCard from "@/components/cards/ImageCard";
import GalleryImageCard from "@/components/cards/GalleryImageCard";
import DetailsCard from "@/components/cards/DetailsCard";

// Modal.setAppElement("#__next");

const ProjectList = ({projects}) => {

  const electronicsProjects = projects.filter(project => project.filter_categories.includes("electronics"));
  const softwareProjects = projects.filter(project => project.filter_categories.includes("software"));
  const designProjects = projects.filter(project => project.filter_categories.includes("design"));

  const categoriesData = [
    {label: "All", data: projects},
    {label: "Electronics", data: electronicsProjects},
    {label: "Software", data: softwareProjects},
    {label: "Design", data: designProjects}
  ];

  // for popup video for youtube
  const [isOpenYoutube, setOpenYoutube] = useState(false);

  // popup video for vimeo
  const [isOpenVimeo, setOpenVimeo] = useState(false);

  // for modal details
  const [isOpenModalOne, setIsOpenModalOne] = useState(false);

  // for modal details method
  function toggleModalOne() {
    setIsOpenModalOne(!isOpenModalOne);
  }

  return (
    <>
      <Gallery>
        <Tabs>
          {/* START FILTER TABLIST */}
          <TabList>
            {
              categoriesData.map((category) => {
                return <Tab key={category.label}>{category.label}</Tab>
              })
            }
          </TabList>
          {/* END FILTER TABLIST */}

          <div className="list_wrapper">
            {
              categoriesData.map((category) => {
                return <TabPanel key={category.label}>
                  <ul className="portfolio_list" data-aos="fade-right" data-aos-duration="1200">
                    {
                      category.data && category.data.map((project) => {
                        return (
                          <li key={project.slug}>
                            <DetailsCard title={project.title} subtitle={project.subtitle} date={project.date_end} href={project.link} image={project.title_image}></DetailsCard>
                            {/* VIMEO */}
                            {/* <ImageCard width={300} height={300} image="/img/portfolio/5.jpg" title="Teresa Butler" subtitle="Vimeo" id="vimeo" onClick={() => setOpenVimeo(true)} /> */}
                            {/* YOUTUBE */}
                            {/* <ImageCard width={300} height={300} image="/img/portfolio/2.jpg" title="Ashely Flores" subtitle="Youtube" id="youtube" onClick={() => setOpenYoutube(true)} /> */}
                            {/* SHOT */}
                            {/* <GalleryImageCard width={300} height={300} sourceWidth={500} sourceHeight={550} thumbnail="/img/portfolio/4.jpg" image="/img/portfolio/4.jpg" title="Derek Smith" subtitle="Shot" id="shot" /> */}
                            {/* DETAILS */}
                            {/* <ImageCard width={300} height={300} image="/img/portfolio/6.jpg" title="Selena Gomez" subtitle="Details" id="detail" onClick={toggleModalOne} /> */}
                          </li>
                        )
                      })
                    }                
                  </ul>
                </TabPanel>
              })
            }
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

    </>
  );
};

export default ProjectList;
