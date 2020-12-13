import bestservice from "../img/bestservice.svg";
import quickprocess from "../img/quickprocess.svg";
import honesty from "../img/honesty.svg";

const About = () => {
  return (
    <div id="about" className="about-section">
      <div className="about-header">
        <h1>The Summerwood Promise</h1>
        <p>We help you find your dream house</p>
      </div>
      <div className="about-cards">
        <div className="card">
          <div className="card-logo">
            <img src={bestservice} alt="" />
          </div>
          <div className="card-detail">
            <h1>Quality Service</h1>
            <p>
              {" "}
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione
              quae natus non nulla facere praesentium sequi ullam quod commodi
              necessitatibus nam, veniam at! Doloremque, reprehenderit.
            </p>
          </div>
        </div>
        <div className="card">
          <div className="card-logo">
            <img src={quickprocess} alt="" />
          </div>
          <div className="card-detail">
            <h1>Quick Process</h1>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione
              quae natus non nulla facere praesentium sequi ullam quod commodi
              necessitatibus nam, veniam at! Doloremque, reprehenderit.
            </p>
          </div>
        </div>
        <div className="card">
          <div className="card-logo">
            <img src={honesty} alt="" />
          </div>
          <div className="card-detail">
            <h1>Client satisfaction</h1>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione
              quae natus non nulla facere praesentium sequi ullam quod commodi
              necessitatibus nam, veniam at! Doloremque, reprehenderit.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
