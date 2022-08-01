import React from "react";

import logo from "../images/logo.svg";

import menu from "../images/icon-menu.svg";
import closeMenu from "../images/icon-close-menu.svg";

import todo from "../images/icon-todo.svg";
import calendar from "../images/icon-calendar.svg";
import reminder from "../images/icon-reminders.svg";
import planning from "../images/icon-planning.svg";

import DropDown from "./Dropdown";

import { motion } from "framer-motion";

const dropDownObj = [
  {
    title: "Features",
    images: [todo, calendar, reminder, planning],
    list: ["Todo List", "Calendar", "Reminders", "Planning"],
  },
  {
    title: "Company",
    list: ["History", "Our Team", "Blog"],
  },
];

export default function Header() {
  const [isShown, setIsShow] = React.useState(false);

  const showMenu = () => {
    setIsShow(true);
  };

  const hideMenu = () => {
    setIsShow(false);
  };

  const dropDownEl = dropDownObj.map((item, index) => (
    <DropDown
      key={index}
      title={item.title}
      list={item.list}
      images={item.images}
    />
  ));

  return (
    <motion.header
      className="header"
      initial={{ y: -100, opacity: 0 }}
      whileInView={{ y: 0, opacity: 1 }}
    >
      {isShown && <div className="overlay"></div>}
      <div className="left_header">
        <div className="logo">
          <img src={logo} alt="logo" />
        </div>
        <nav className="header_nav">
          <ul className="mobile-links">
            {dropDownEl}
            <li className="mobile-link">
              <a href="/#">Careers</a>
            </li>
            <li className="mobile-link">
              <a href="/#">About</a>
            </li>
          </ul>
        </nav>
      </div>

      <div className="right_header">
        <button className="reset--btn login-btn">Login</button>
        <button className="reset--btn register-btn">Register</button>
      </div>

      <nav className="mobile-nav">
        <motion.button
          whileHover={{ scale: 1.3 }}
          onClick={showMenu}
          aria-label="click to show mobile menu"
          className="mobile-btn"
        >
          <img src={menu} alt="logo" />
        </motion.button>
        <motion.div
          className="mobile-menu"
          animate={{ x: isShown ? -230 : 230 }}
          transition={{ type: "spring", velocity: 5 }}
        >
          <motion.button
            whileHover={{ scale: 1.1 }}
            onClick={hideMenu}
            aria-label="click to show mobile menu"
            className="close-btn"
          >
            <img src={closeMenu} alt="logo" />
          </motion.button>

          <ul className="mobile-links">
            {dropDownEl}
            <li className="mobile-link" animate={{ order: 1 }}>
              <a href="/#">Careers</a>
            </li>
            <li className="mobile-link" animate={{ order: 2 }}>
              <a href="/#">About</a>
            </li>
          </ul>
          <button className="reset--btn login-btn">Login</button>
          <button className="reset--btn register-btn">Register</button>
        </motion.div>
      </nav>
    </motion.header>
  );
}
