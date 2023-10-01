import * as React from "react";
import { Link } from "react-router-dom";
import "../styles/navBar.css";
export default function NavBar() {
  return (
    <>
      <div className="navBar">
        <ul className="navList">
          <li className="left">
            <Link to="/" className="link">
              Home
            </Link>
          </li>
          <li className="left">
            <Link to="/about" className="link">
              About
            </Link>
          </li>
          <li className="left">
            <Link to="/contacts" className="link">
              Contacts
            </Link>
          </li>
          <li className="right">
            <Link to="/sign-in" className="link">
              Sign in
            </Link>
          </li>
        </ul>
      </div>
    </>
  );
}
