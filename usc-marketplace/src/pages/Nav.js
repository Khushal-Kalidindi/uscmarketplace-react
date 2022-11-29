import "./../App.css";
import HomePage from "./Home";
import { Link } from "react-router-dom";

function Nav() {
  return (
    <nav>
      <Link to="/">
        <h3>USC MarketPlace</h3>
      </Link>
      <ul className="nav-links">
        <Link to="/">
          <li>Home</li>
        </Link>
        <li><a href="http://localhost:9080/Auction/AuctionPage.html" style={{"text-decoration":"none", "color":"white"}}>Auction</a></li>
        <Link to="/login">
          <li>Login</li>
        </Link>
        <Link to="/profile">
          <li>Profile</li>
        </Link>
      </ul>
    </nav>
  );
}

export default Nav;
