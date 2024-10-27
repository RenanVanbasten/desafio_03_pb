import FurnIcon from "../../assets/icons/Meubel_House_Logos-05.png";
import UserIcon from "../../assets/icons/mdi_account-alert-outline.png";
import SearchIcon from "../../assets/icons/Vector.png";
import LikesIcon from "../../assets/icons/akar-icons_heart.png";
import KartIcon from "../../assets/icons/ant-design_shopping-cart-outlined.png";
import { Link } from "react-router-dom";
import { NavBar } from "./styles";

function Header() {
  return (
    <NavBar>
      <div className="navbar-container">
        <div className="navbar-content">
          <div className="logo">
            <img src={FurnIcon} />
            <h1>Furniro</h1>
          </div>
          <ul className="nav-1">
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/shop">Shop</Link>
            </li>
            <li>
              <Link to="/">About</Link>
            </li>
            <li>
              <Link to="/">Contact</Link>
            </li>
          </ul>
          <ul className="nav-2">
            <li>
              <Link to="/">
                <img src={UserIcon} alt=""/>
              </Link>
            </li>
            <li>
              <Link to="/">
                <img src={SearchIcon} alt=""/>
              </Link>
            </li>
            <li>
              <Link to="/">
                <img src={LikesIcon} alt=""/>
              </Link>
            </li>
            <li>
              <Link to="/">
                <img src={KartIcon} alt=""/>
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </NavBar>
  );
}

export default Header;
