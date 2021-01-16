import time from "../img/time.svg";
import pin from "../img/pin.svg";
import phonecall from "../img/phone-call.svg";
const Contact = () => {
  return (
    <div id="contact" className="contact-section">
      <div className="contact-header">
        <h1>Just one step ahead</h1>
      </div>
      <div className="contact-main">
        <form className="contact-form">
          <div className="input-name">
            <input type="text" name="name" placeholder="Name" />
          </div>
          <div className="input-email">
            <input type="email" name="email" placeholder="Email" />
          </div>
          <div className="input-message">
            <textarea
              name="message"
              id=""
              cols="30"
              rows="10"
              placeholder="Let us get to know you and your needs"
            ></textarea>
          </div>
          <button>SEND</button>
        </form>
        <div className="contact-info">
          <div className="contact-address">
            <h2 class="summerwood-yellow pin">Summerwood Real Estate,</h2>
            <div className="pin">
              <img src={pin} alt="" />
              <p>Main Street, 74115 State</p>
            </div>
            <div className="phonecall">
              <img src={phonecall} alt="" />
              <p class="summerwood-yellow">(033) 123456</p>
            </div>
          </div>
          <div className="contact-timing">
            <div className="time">
              <img src={time} alt="" />
              <h2>Opening Hours</h2>
            </div>

            <h2>Monday - Friday : 9H - 17H </h2>
            <h2>Saturday : 9H - 14H </h2>
            <h2>Sunday closed </h2>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
