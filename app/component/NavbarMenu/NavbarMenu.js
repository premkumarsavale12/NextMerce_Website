import React from "react";
import "./NavbarMenu.css"
import { RiArrowDropDownLine } from "react-icons/ri";
import Link from "next/link";
export default function NavbarMenu() {
  
  return (
    <div className="navbarMenu">
      <div className="menuLinks">


        <Link href={"/component/popular"} className="menuItem-active" style={{ color: "black", textDecoration: "none" }}>  Popular </Link>
        <Link href={"/component/shop"} className="menuItem-active" style={{ color: "black", textDecoration: "none" }}>  Shop </Link>
        <Link href={"/component/contact"} className="menuItem-active" style={{ color: "black", textDecoration: "none" }}>  Contact </Link>

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
