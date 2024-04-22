"use client";
import React, { useState } from "react";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import { Gallery, Item } from "react-photoswipe-gallery";
import "photoswipe/dist/photoswipe.css";
import "react-tooltip/dist/react-tooltip.css";
import ModalVideo from "react-modal-video";
import Modal from "react-modal";

import Image from "next/image";
import ModalOne from "./modal/ModalOne";
import ModalTwo from "./modal/ModalTwo";
import { Tooltip as ReactTooltip } from "react-tooltip";
import ImageCard from "@/components/cards/ImageCard";
// Modal.setAppElement("#__next");

const Portfolio = () => {
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
                <li>
                  <ImageCard width={300} height={300} image="/img/portfolio/5.jpg" title="Teresa Butler" subtitle="Vimeo" id="vimeo" onClick={() => setOpenVimeo(true)} />
                </li>
                {/* END VIMEO */}

                <li>
                  <ImageCard width={300} height={300} image="/img/portfolio/2.jpg" title="Ashely Flores" subtitle="Youtube" id="youtube" onClick={() => setOpenYoutube(true)} />
                </li>
                {/* END YOUTUBE */}

                <li>
                  <div className="inner">
                    <div className="entry tokyo_tm_portfolio_animation_wrap">
                      <Item
                        original="/img/portfolio/4.jpg"
                        thumbnail="/img/portfolio/4.jpg"
                        width={500}
                        height={550}
                      >
                        {({ ref, open }) => (
                          <Image
                            width={300}
                            height={300}
                            srl_gallery_image="true"
                            src="/img/portfolio/4.jpg"
                            alt="Childhood"
                            data-tip
                            data-for="shot"
                            data-tooltip-id={"shot"}
                            role="button"
                            ref={ref}
                            onClick={open}
                          />
                        )}
                      </Item>
                      <ReactTooltip
                        id="shot"
                        place="bottom"
                        variant="light"
                        float
                        render={() => (
                          <div className="tooltip-wrapper">
                            <h5>Derek Smith</h5>
                            <span>Shot</span>
                          </div>
                        )}
                      />
                    </div>
                  </div>
                </li>
                {/* END SHOT */}

                <li>
                  <div className="inner">
                    <div className="entry tokyo_tm_portfolio_animation_wrap">
                      <Item
                        original="/img/portfolio/3.jpg"
                        thumbnail="/img/portfolio/3.jpg"
                        width={500}
                        height={550}
                      >
                        {({ ref, open }) => (
                          <Image
                            width={300}
                            height={300}
                            srl_gallery_image="true"
                            src="/img/portfolio/3.jpg"
                            alt="Childhood"
                            data-tip
                            data-for="shot2"
                            data-tooltip-id={"shot2"}
                            role="button"
                            ref={ref}
                            onClick={open}
                          />
                        )}
                      </Item>
                      <ReactTooltip
                        id="shot2"
                        place="bottom"
                        variant="light"
                        float
                        render={() => (
                          <div className="tooltip-wrapper">
                            <h5>Gloria jenkins</h5>
                            <span>Shot</span>
                          </div>
                        )}
                      />
                    </div>
                  </div>
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
                  <div className="inner">
                    <div className="entry tokyo_tm_portfolio_animation_wrap">
                      <Item
                        original="/img/portfolio/4.jpg"
                        thumbnail="/img/portfolio/4.jpg"
                        width={500}
                        height={550}
                      >
                        {({ ref, open }) => (
                          <Image
                            width={300}
                            height={300}
                            srl_gallery_image="true"
                            src="/img/portfolio/4.jpg"
                            alt="Childhood"
                            data-tip
                            data-for="shot2"
                            role="button"
                            data-tooltip-id={"shot2"}
                            ref={ref}
                            onClick={open}
                          />
                        )}
                      </Item>
                      <ReactTooltip
                        id="shot2"
                        place="bottom"
                        variant="light"
                        float
                        render={() => (
                          <div className="tooltip-wrapper">
                            <h5>Derek Smith</h5>
                            <span>Shot</span>
                          </div>
                        )}
                      />
                    </div>
                  </div>
                </li>
                {/* END SHOT */}
                <li>
                  <div className="inner">
                    <div className="entry tokyo_tm_portfolio_animation_wrap">
                      <Item
                        original="/img/portfolio/3.jpg"
                        thumbnail="/img/portfolio/3.jpg"
                        width={500}
                        height={550}
                      >
                        {({ ref, open }) => (
                          <Image
                            width={300}
                            height={300}
                            srl_gallery_image="true"
                            src="/img/portfolio/3.jpg"
                            alt="Childhood"
                            data-tip
                            data-for="shot3"
                            role="button"
                            data-tooltip-id={"shot3"}
                            ref={ref}
                            onClick={open}
                          />
                        )}
                      </Item>
                      <ReactTooltip
                        id="shot3"
                        place="bottom"
                        variant="light"
                        float
                        render={() => (
                          <div className="tooltip-wrapper">
                            <h5>Gloria jenkins</h5>
                            <span>Shot</span>
                          </div>
                        )}
                      />
                    </div>
                  </div>
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
