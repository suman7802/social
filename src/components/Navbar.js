import React from "react";
import {Link} from "react-router-dom";
function Navbar() {
  return (
    <div className="nav px-[1rem] py-[.5rem] font-bold">
      <ul className="flex flex-row justify-between">
        <li className="cursor-pointer">
          <Link to="/">Logo</Link>
        </li>
        <div className="flex flex-row space-x-7">
          <li className="cursor-pointer logIn">
            <Link to="/login">Log In</Link>
          </li>
          <li className="cursor-pointer signUp">
            <Link to="/signup">Sign Up</Link>
          </li>
        </div>
      </ul>
    </div>
  );
}
export default Navbar;
