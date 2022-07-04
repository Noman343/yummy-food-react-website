import React, { useState } from "react";
import "./CSS/navbar.css";
import { BrowserRouter} from "react-router-dom";

function Navbar() {
  const [heroActive, setHeroActive] = useState(true);
  const toggleHeroClass = () => {
    setHeroActive(true);
    setAboutActive(false);
    setMenuActive(false);
    setBookingActive(false);
  };

  const [aboutActive, setAboutActive] = useState(false);
  const toggleAboutClass = () => {
    setAboutActive(true);
    setHeroActive(false);
    setMenuActive(false);
    setBookingActive(false);
  };

  const [menuActive, setMenuActive] = useState(false);
  const toggleMenuClass = () => {
    setMenuActive(true);
    setHeroActive(false);
    setAboutActive(false);
    setBookingActive(false);
  };

  const [eventActive, setEventActive] = useState(false);
  const toggleEventClass = () => {
    setEventActive(false);
    setHeroActive(true);
    setAboutActive(false);
    setMenuActive(false);
    setBookingActive(false);
  }

  const [chefsActive, setChefsActive] = useState(false);
  const toggleChefsClass = () => {
    setChefsActive(false);
    setHeroActive(true);
    setAboutActive(false);
    setMenuActive(false);
    setBookingActive(false);
  }
  
  const [galleryActive, setGalleryActive] = useState(false);
  const toggleGalleryClass = () => {
    setGalleryActive(false);
    setHeroActive(true);
    setAboutActive(false);
    setMenuActive(false);
    setBookingActive(false);
  }

  const [dropdownActive, setDropdownActive] = useState(false);
  const toggleDropdownClass = () => {
    setDropdownActive(false);
    setHeroActive(true);
    setAboutActive(false);
    setMenuActive(false);
    setBookingActive(false);
  }

  const [bookingActive, setBookingActive] = useState(false);
  const toggleBookingClass = () => {
    setBookingActive(true);
    setHeroActive(false);
    setAboutActive(false);
    setMenuActive(false);
  };

  const [sidebar, setSidebar] = useState(false);

  const showSidebar = () => setSidebar(!sidebar);
  return (
    <BrowserRouter>
      <header className="header fixed-top d-flex align-items-center">
        <div className="container d-flex align-items-center justify-content-between">
          <a
            href=""
            className="logo d-flex align-items-center me-auto me-lg-0 text-decoration-none"
          >
            <h1>
              Yummy<span>.</span>
            </h1>
          </a>

          <nav
            id="navbar"
            className="navbar navbar-expand-lg navbar-white bg-white"
          >
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li>
                {/* <NavLink
            to="hero"
            className={({ isActive }) =>
              isActive ? "active" : "undefined"
            }
          >
            Home
          </NavLink> */}
                <a
                  href="#hero"
                  className={heroActive ? "active" : null}
                  onClick={toggleHeroClass}
                >
                  Home
                </a>
              </li>
              <li>
                <a
                  href="#about"
                  className={aboutActive ? "active" : null}
                  onClick={toggleAboutClass}
                >
                  About
                </a>
              </li>
              <li>
                <a href="#menu"
                className={menuActive ? "active" : null}
                onClick={toggleMenuClass}
                >Menu</a>
              </li>
              <li>
                <a href="#hero"
                onClick={toggleEventClass}
                >Eents</a>
              </li>
              <li>
                <a href="#hero"
                onClick={toggleChefsClass}
                >Chefs</a>
              </li>
              <li>
                <a href="#hero"
                onClick={toggleGalleryClass}
                >Gallery</a>
              </li>
              <li className="dropdown">
                <a href="#"
                onClick={toggleDropdownClass}
                >
                  <span>Drop Down</span>{" "}
                  <i className="bi bi-chevron-down dropdown-indicator"></i>
                </a>
                <ul>
                  <li>
                    <a href="#">Drop Down 1</a>
                  </li>
                  <li className="dropdown">
                    <a href="#">
                      <span>Deep Drop Down</span>{" "}
                      <i className="bi bi-chevron-down dropdown-indicator"></i>
                    </a>
                    <ul>
                      <li>
                        <a href="#">Deep Drop Down 1</a>
                      </li>
                      <li>
                        <a href="#">Deep Drop Down 2</a>
                      </li>
                      <li>
                        <a href="#">Deep Drop Down 3</a>
                      </li>
                      <li>
                        <a href="#">Deep Drop Down 4</a>
                      </li>
                      <li>
                        <a href="#">Deep Drop Down 5</a>
                      </li>
                    </ul>
                  </li>
                  <li>
                    <a href="#">Drop Down 2</a>
                  </li>
                  <li>
                    <a href="#">Drop Down 3</a>
                  </li>
                  <li>
                    <a href="#">Drop Down 4</a>
                  </li>
                </ul>
              </li>
              <li>
                <a href="#book-a-table"
                className={bookingActive ? "active" : null}
                onClick={toggleBookingClass}
                >Contact</a>
              </li>
            </ul>
          </nav>
          <a className="btn-book-a-table" href="#book-a-table">
            Book a Table
          </a>
          <i
            className={sidebar ? "d-none" : "menu-bars menu-bars-a bi bi-list"}
            onClick={showSidebar}
          ></i>

          <nav className={sidebar ? "nav-menu active" : "nav-menu"}>
            <ul className="nav-menu-items" onClick={showSidebar}>
              <i
                className={sidebar ? "menu-bars menu-bars-b bi bi-x" : "d-none"}
              ></i>

              <li className="nav-text active">
                <a href="#hero"
                className={heroActive ? "active" : null}
                onClick={toggleHeroClass}
                >Home</a>
              </li>
              <li className="nav-text">
                <a href="#about"
                className={aboutActive ? "active" : null}
                onClick={toggleAboutClass}
                >About</a>
              </li>
              <li className="nav-text">
                <a href="#menu"
                className={menuActive ? "active" : null}
                onClick={toggleMenuClass}
                >Menu</a>
              </li>
              <li className="nav-text">
                <a href="#hero"
                 onClick={toggleEventClass}
                >Eents</a>
              </li>
              <li className="nav-text">
                <a href="#hero"
                onClick={toggleChefsClass}
                >Chefs</a>
              </li>
              <li className="nav-text">
                <a href="#hero"
                onClick={toggleGalleryClass}
                >Gallery</a>
              </li>

              <li className="nav-text">
                <a href="#book-a-table"
                className={bookingActive ? "active" : null}
                onClick={toggleBookingClass}
                >Contact</a>
              </li>
            </ul>
          </nav>
        </div>
      </header>
    </BrowserRouter>
  );
}

export default Navbar;
