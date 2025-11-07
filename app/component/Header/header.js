"use client";
import "./header.css";

import Logo from "../../../public/logo1.svg";
import { FaSearch } from "react-icons/fa";
import { IoMenuSharp } from "react-icons/io5";
import { FaRegCircleUser } from "react-icons/fa6";
import { CiHeart } from "react-icons/ci";
import { MdOutlineShoppingBag } from "react-icons/md";
import { RiArrowDropDownLine } from "react-icons/ri";
import LoginModel from "../LoginModal/LoginModel"

import "../LoginModal/LoginModel.css"

import Image from "next/image";
import { useState } from "react";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState("Mobile & Tablets");
  const [showModal, setShowModal] = useState(false);

  const categories = [
    "Laptop & PC",
    "Watches",
    "Mobile & Tablets",
    "Health & Sports",
    "Home Appliances",
    "Games & Videos",
    "Televisions",
  ];

  const handleSelect = (category) => {
    setSelectedCategory(category);
    setIsOpen(false);
  };

  return (
    <>
      <nav className="navbar">
        <div className="logoSection">
          <Image src={Logo} alt="logo" />
        </div>

        <div className="searchSection">
          <div className="categoryBox" onClick={() => setIsOpen(!isOpen)}>
            <IoMenuSharp className="menuIcon" />
            <span className="categoryText">{selectedCategory}</span>
            <RiArrowDropDownLine className="dropdownIcon" />
          </div>

          {isOpen && (
            <ul className="dropdownMenu">
              {categories.map((category, index) => (
                <li
                  key={index}
                  className="dropdownItem"
                  onClick={() => handleSelect(category)}
                >
                  {category}
                </li>
              ))}
            </ul>
          )}

          <div className="searchBox">
            <input
              type="text"
              className="searchInput"
              placeholder="I am shopping for..."
              aria-label="Search products"
            />
            <button className="searchBtn" aria-label="Search">
              <FaSearch className="searchIcon" />
            </button>
          </div>
        </div>

        {/* Account Section */}
        <div
          className="accountContainer"
          onClick={() => setShowModal(true)}
        >
          <div className="accountSection">
            <FaRegCircleUser className="accountIcon" />
            <div className="accountText">
              <span className="accountLabel">ACCOUNT</span>
              <a href="#" className="signInLink">
                Sign In / Register
              </a>
            </div>
          </div>

          <div className="iconsSection">
            <div className="iconWrapper">
              <CiHeart className="icon" />
              <span className="badge">0</span>
            </div>

            <div className="iconWrapper">
              <MdOutlineShoppingBag className="icon" />
              <span className="badge">1</span>
            </div>
          </div>
        </div>
      </nav>

      {/* Place modal OUTSIDE of clickable account container */}
      {showModal && <LoginModel onClose={() => setShowModal(false)} />}
    </>
  );
}
