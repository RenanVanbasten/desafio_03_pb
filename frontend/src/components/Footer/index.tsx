import { useState } from "react";
import { FooterContainer } from "./styles";
import { Link } from "react-router-dom";

function Footer() {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [messageColor, setMessageColor] = useState("");

  const validateEmail = (email: string) => {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
  };
  

  const handleSubscribe = () => {
    if (validateEmail(email)) {
      setMessage("Thank you for subscribing!");
      setMessageColor("green");
    } else {
      setMessage("Please enter a valid email address.");
      setMessageColor("red");
    }
  };

  return (
    <FooterContainer>
      <div className="footer-top">
        <div>
          <h4>Furniro</h4>
          <p>
            400 University Drive Suite 200 Coral <br /> Gables,
            <br /> FL 33134 USA
          </p>
        </div>
        <ul className="links">
          <li style={{ color: "#9F9F9F", marginTop: "0px" }}>Links</li>
          <li>
            <Link to={"/"}>Home</Link>
          </li>
          <li>
            <Link to={"/shop"}>Shop</Link>
          </li>
          <li>
            <Link to={"/"}>About</Link>
          </li>
          <li>
            <Link to={"/"}>Contact</Link>
          </li>
        </ul>
        <ul className="links">
          <li style={{ color: "#9F9F9F", marginTop: "0px" }}>Help</li>
          <li>
            <Link to={"/"}>Payment Options</Link>
          </li>
          <li>
            <Link to={"/"}>Returns</Link>
          </li>
          <li>
            <Link to={"/"}>Privacy Policies</Link>
          </li>
        </ul>
        <ul>
          <li style={{ color: "#9F9F9F", marginTop: "0px" }}>Newsletter</li>
          <li>
            <input
              type="text"
              placeholder="Enter Your Email Address"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <button onClick={handleSubscribe}>SUBSCRIBE</button>
          </li>
          {message && (
            <p style={{ color: messageColor, fontWeight:"700", marginTop: "8px", marginLeft:"30px" }}>{message}</p>
          )}
        </ul>
      </div>
      <hr />
      <p className="bottom-footer">2023 Furniro. All rights reserved.</p>
    </FooterContainer>
  );
}

export default Footer;
