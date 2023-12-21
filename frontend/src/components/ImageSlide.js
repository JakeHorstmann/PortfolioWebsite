const ImageSlide = ({ slide }) => {
  const slideText = slide.text;
  const slideTitle = slide.title;
  const slideImage = slide.image;
  return (
    <div className="imageSlide">
      <div className="imageForSlide">
        <img src={slideImage} alt={slideTitle}></img>
      </div>
      <div className="textForSlide">
        <div className="slideTitle">
          <h3>{slideTitle}</h3>
        </div>
        <div className="slideText">
          <p>{slideText}</p>
        </div>
      </div>
    </div>
  );
};

export default ImageSlide;
