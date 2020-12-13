import listing1 from "../img/listing1.jpg";
import listing2 from "../img/listing2.jpg";
import listing3 from "../img/listing3.jpg";
import listing4 from "../img/listing4.jpg";
import listing5 from "../img/listing5.jpg";
import listing6 from "../img/listing6.jpg";
import listing7 from "../img/listing7.jpg";
import listing8 from "../img/listing8.jpg";

const Gallery = () => {
  return (
    <div id="gallery" className="gallery-section container">
      <div className="gallery-title">
        <h1>Look at our recently sold homes</h1>
      </div>
      <div className="image-gallery">
        <div className="img1">
          <img src={listing1} alt="" />
        </div>
        <div className="img2">
          <img src={listing2} alt="" />
        </div>
        <div className="img3">
          <img src={listing3} alt="" />
        </div>
        <div className="img4">
          {" "}
          <img src={listing4} alt="" />
        </div>
        <div className="img5">
          <img src={listing5} alt="" />
        </div>
        <div className="img6">
          <img src={listing6} alt="" />
        </div>
        <div className="img7">
          <img src={listing7} alt="" />
        </div>
        <div className="img8">
          <img src={listing8} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Gallery;
