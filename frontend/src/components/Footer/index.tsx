import { FooterContainer } from "./styles";

function Footer() {
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
        <ul>
          <li style={{ color: "#9F9F9F", marginTop: "00px" }}>Links</li>
          <li>Home</li>
          <li>Shop</li>
          <li>About</li>
          <li>Contact</li>
        </ul>
        <ul>
          <li style={{ color: "#9F9F9F", marginTop: "00px" }}>Help</li>
          <li>Payment Options</li>
          <li>Returns</li>
          <li>Privacy Policies</li>
        </ul>
        <ul>
          <li style={{ color: "#9F9F9F", marginTop: "00px" }}>Newsletter</li>
          <li>
            <input type="text" name="" id="" />
            <button>SUBSCRIBE</button>
          </li>
        </ul>
      </div>
      <hr />
      <p className="bottom-footer">2023 furino. All rights reverved</p>
    </FooterContainer>
  );
}

export default Footer;
