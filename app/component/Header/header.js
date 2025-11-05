
import "./header.css"
import Logo from "../../../public/logo1.svg"
import { FaSearch } from "react-icons/fa";
import { IoMenuSharp } from "react-icons/io5";
import { FaRegCircleUser } from "react-icons/fa6";
import { CiHeart } from "react-icons/ci";
import { MdOutlineShoppingBag } from "react-icons/md";
import { RiArrowDropDownLine } from "react-icons/ri";


import Image from "next/image";
export default function Header() {
    return (
        <nav className="navbar">
            <div className="logoSection">
                <Image
                    src={Logo}
                    alt="logo"
                />
            </div>

            <div className="searchSection">
                <div className="categoryBox">
                    <IoMenuSharp className="menuIcon" />
                    <span className="categoryText">Mobile & Tablets</span>
                    <RiArrowDropDownLine className="dropdownIcon" />
                </div>

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

            <div className="accountContainer">
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








    );


}

