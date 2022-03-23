import React from "react";
import FaceBook from "../../icons/Facebook.svg";
import Instagram from "../../icons/Instagram.svg";
import Twitter from "../../icons/Twitter.svg";
function Footer() {
  return (
    <div className="FootCont">
      <footer>
        <div className="SocialCont">
          <h4>Calculation Finance</h4>
          <img alt="Instagram" src={Instagram} />
          <img alt="Facebook" src={FaceBook} />
          <img alt="Twitter" src={Twitter} />
        </div>
        <p>© Copyright 2022, Calculation Finance LLC. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default Footer;
