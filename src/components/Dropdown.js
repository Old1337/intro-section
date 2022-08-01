import React from "react";

import arrowDown from "../images/icon-arrow-down.svg";

export default function DropDown(props) {
  const [dropDown, setDropdown] = React.useState(false);

  const showDropdownMenu = () => {
    setDropdown((prevState) => !prevState);
  };
  return (
    <>
      <li
        onClick={showDropdownMenu}
        className={`mobile-link ${dropDown ? "active" : ""}`}
      >
        <button className="reset--btn dropdown-btn">
          <a href="/#">{props.title}</a>
          <img className="drop-down-img" src={arrowDown} alt="" />
        </button>
        <div className="drop-down-items">
          {props.list.map((item, index) => (
            <div key={index} className="drop-down-item">
              {props.images && <img src={props.images[index]} alt="" />}

              <span>{item}</span>
            </div>
          ))}
        </div>
      </li>
    </>
  );
}
