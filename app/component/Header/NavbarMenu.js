import React from "react";
import "./NavbarMenu.css"
import { RiArrowDropDownLine } from "react-icons/ri";

export default function NavbarMenu() {
  return (
    <div className="navbarMenu">
      <div className="menuLinks">
        <a href="#" className="menuItem active">Popular</a>
        <a href="#" className="menuItem">Shop</a>
        <a href="#" className="menuItem">Contact</a>

        <div className="menuDropdown">
          <a href="#" className="menuItem">
            Pages <RiArrowDropDownLine className="dropdownIcon" />
          </a>
        </div>

        <div className="menuDropdown">
          <a href="#" className="menuItem">
            Blogs <RiArrowDropDownLine className="dropdownIcon" />
          </a>
        </div>
      </div>

      <div className="menuRight">
        <span className="bestSelling">Best Selling</span>
        <span className="saleBadge">SALE</span>
      </div>
    </div>
  );
}
