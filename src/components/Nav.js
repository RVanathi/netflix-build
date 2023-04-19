import React, { useEffect, useState } from "react";
import "./nav.css";
import { useNavigate } from "react-router-dom";

const Nav = () => {
  const [show, handleShow] = useState(false);
  const navigate = useNavigate();
  const transitionNavbar = () => {
    if (window.scrollY > 100) {
      handleShow(true);
    } else {
      handleShow(false);
    }
  };
  useEffect(() => {
    window.addEventListener("scroll", transitionNavbar);
    return () => window.removeEventListener("scroll", transitionNavbar);
  }, []);

  return (
    <div className={`nav ${show && "nav-black"}`}>
      <div className="nav-contents">
        <img
          onClick={() => navigate("/")}
          className="nav-logo"
          src="https://upload.wikimedia.org/wikipedia/commons/7/7a/Logonetflix.png"
          alt=""
        />
        <img
          onClick={() => navigate("/profile")}
          className="nav-avatar"
          src="https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png"
          alt=""
        />
      </div>
    </div>
  );
};

export default Nav;
