import React from "react";
import "./_header.scss";

import { FaBars } from "react-icons/fa";
import { AiOutlineSearch } from "react-icons/ai";
import { MdNotifications, MdApps } from "react-icons/md";

const Header = ({ handleToggleSidebar }) => {
    return (
        <div className="header">
            <div className="header_left">
                <FaBars
                    className="header_menu"
                    size={26}
                    onClick={() => handleToggleSidebar()}
                />
                <svg
                    className="header_logo"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="-35.20005 -41.33325 305.0671 247.9995"
                >
                    <path
                        d="M229.763 25.817c-2.699-10.162-10.65-18.165-20.748-20.881C190.716 0 117.333 0 117.333 0S43.951 0 25.651 4.936C15.553 7.652 7.6 15.655 4.903 25.817 0 44.236 0 82.667 0 82.667s0 38.429 4.903 56.85C7.6 149.68 15.553 157.681 25.65 160.4c18.3 4.934 91.682 4.934 91.682 4.934s73.383 0 91.682-4.934c10.098-2.718 18.049-10.72 20.748-20.882 4.904-18.421 4.904-56.85 4.904-56.85s0-38.431-4.904-56.85"
                        fill="red"
                    />
                    <path
                        d="M93.333 117.559l61.333-34.89-61.333-34.894z"
                        fill="#fff"
                    />
                </svg>
                <span>YouTube</span>
            </div>
            <form>
                <input
                    type="text"
                    placeholder="Search"
                    className="header_search"
                />
                <button type="submit" className="header_search_button">
                    <AiOutlineSearch size={22} />
                </button>
            </form>
            <div className="header_icons">
                <MdNotifications size={28} />
                <MdApps size={29} />
                <img
                    src="https://www.pngkey.com/png/detail/301-3012756_login-avatar-comments-username-icons-png.png"
                    alt="avatar-icon"
                />
            </div>
        </div>
    );
};

const Search = () => {};

export default Header;
