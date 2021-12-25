import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronUp } from "@fortawesome/free-solid-svg-icons";
import { faMobileAlt } from "@fortawesome/free-solid-svg-icons";
import { faCopyright } from "@fortawesome/free-solid-svg-icons";
import greatBuyLogo from "../assets/greatBuyLogo.svg";

const Footer = () => {
  const arrowUp = <FontAwesomeIcon icon={faChevronUp} />;
  const mobilePhone = (
    <FontAwesomeIcon className="mobilePhone" icon={faMobileAlt} />
  );
  const copyright = (
    <FontAwesomeIcon className="copyright" icon={faCopyright} />
  );
  const scrollUp = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };
  return (
    <div className="footer-container">
      <div className="footer-toTop">
        <button onClick={scrollUp}>{arrowUp}</button>
        <p>To top</p>
      </div>
      <h4 className="footer-title">Shipping & returns</h4>
      <ul>
        <li className="footer-item">30 day return policy</li>
        <li className="footer-item">Free shipping for premium members</li>
        <li className="footer-item">
          Free shipping on orders over for 1000US$ non-members
        </li>
      </ul>
      <div className="footer-contactUs">
        <h4 className="footer-title">Contact us</h4>
        {mobilePhone}
      </div>
      <p className="footer-item">1-800-805-6534</p>
      <p className="footer-item">24hs, 7 days at week</p>
      <div className="footer-links">
        <p className="footer-link">Privacy policy</p>
        <p className="footer-link">Terms & condition</p>
        <p className="footer-link">Feedback</p>
      </div>
      <div className="footer-copyright">
        {copyright}
        <p className="footer-item">2021 GREATBUY! ARG LTD</p>
      </div>

      <img
        src={greatBuyLogo}
        alt="great buy logo"
        className="footer-greatBuyLogo"
      />
    </div>
  );
};

export default Footer;
