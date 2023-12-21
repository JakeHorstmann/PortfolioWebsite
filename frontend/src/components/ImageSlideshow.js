import { React, useState } from "react";
import "../styles/ImageSlideshow.css";
import ImageSlide from "./ImageSlide";
import SlideButton from "./SlideButton";

const ImageSlideshow = ({ slides }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const slide = {
    text: slides.text[currentIndex],
    title: slides.titles[currentIndex],
    image: slides.images[currentIndex],
  };

  const changeSlide = (slideIndex) => {
    const isFirstSlide = slideIndex === -1;
    const isLastIndex = slideIndex === slides.images.length;
    const newIndex = isFirstSlide
      ? slides.images.length - 1
      : isLastIndex
      ? 0
      : slideIndex;
    setCurrentIndex(newIndex);
  };

  return (
    <div className="imageSlideshow">
      <ImageSlide slide={slide} />
      <div className="slideButtons">
        <SlideButton
          onClickEvent={() => changeSlide(currentIndex - 1)}
          symbol={"\u21e6"}
        />
        {slides.keys.map((key) => (
          <SlideButton
            key={key}
            onClickEvent={() => changeSlide(key)}
            symbol={currentIndex === key ? "\u25fc" : "\u25fb"}
          />
        ))}
        <SlideButton
          onClickEvent={() => changeSlide(currentIndex + 1)}
          symbol={"\u21e8"}
        />
      </div>
    </div>
  );
};

export default ImageSlideshow;
