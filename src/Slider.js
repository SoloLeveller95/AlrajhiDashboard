/* eslint-disable jsx-a11y/img-redundant-alt */
import { Splide, SplideSlide } from "@splidejs/react-splide";
import React from "react";
import { client, urlFor } from "./client";
import { useEffect, useState } from "react";
// import { Intersection } from "@splidejs/splide-extension-intersection";
import "./App.css";

const Slider = () => {
  const [images, setImages] = useState(null);
  const slides = `*[_type == "slides"]`;
  // const [slide4, setSlide4] = useState(null);
  images && images.sort((a, b) => (a._createdAt > b._createdAt ? 1 : -1));
  // const firstSlide = images[0];
  // const otherSlides = images.slice(1, images.length);

  const options = {
    // type: "fade",
    type: "loop",
    // rewind: true,
    gap: "1rem",
    autoplay: true,
    pauseOnHover: false,
    resetProgress: false,
    height: "100vh",
    pagination: false,
    arrows: false,
    speed: 2000,
    interval: 15000,
  };

  useEffect(() => {
    client
      .fetch(slides)
      .then((images) => {
        setImages(images);
      })
      .catch((err) => {
        console.log(err);
      });

    // if (images) {
    //   const slide4 = images.find((image) => image.name === "Slide 4");
    //   setSlide4(slide4);
    // }
  }, [slides]);

  return (
    <div className="container">
      <Splide options={options} aria-label="My Favorite Images">
        <SplideSlide>
          {images && (
            <img
              className="slide"
              src={urlFor(images[0].image).url()}
              alt={images[0].title}
            />
          )}
        </SplideSlide>
        <SplideSlide>
          {images && (
            <img
              className="slide"
              src={urlFor(images[1].image).url()}
              alt={images[1].title}
            />
          )}
        </SplideSlide>
        <SplideSlide>
          {images && (
            <img
              className="slide"
              src={urlFor(images[2].image).url()}
              alt={images[2].title}
            />
          )}
        </SplideSlide>
        <SplideSlide>
          {images && (
            <img
              className="slide"
              src={urlFor(images[3].image).url()}
              alt={images[3].title}
            />
          )}
        </SplideSlide>
        <SplideSlide>
          {images && (
            <img
              className="slide"
              src={urlFor(images[4].image).url()}
              alt={images[4].title}
            />
          )}
        </SplideSlide>
      </Splide>
    </div>
  );
};

export default Slider;
