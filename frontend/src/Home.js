import ImageSlideshow from "./components/ImageSlideshow";
import img1 from "./images/logo.jpg";

const Home = () => {
  const slides = {
    images: [img1, img1, img1],
    titles: ["Offline Music Downloader", "NFT Generator", "Booker"],
    text: [
      "Interacted with Spotify and YouTube's API to download a profile's playlist data locally",
      "Built a generative adversial network (GAN) in Keras that was trained on images collected by a Selenium web-scraper",
      'Independently followed a book titled "Web Development With Django" to learn about creating a backend in Python through applications',
    ],
  };

  slides.keys = Array.from(Array(slides.images.length).keys());

  return (
    <div className="home">
      <div className="section">
        <div className="sectionLeft">
          <p>put a gigantic quote here</p>
        </div>
        <div className="sectionRight">
          <ImageSlideshow slides={slides} />
        </div>
      </div>
    </div>
  );
};

export default Home;
