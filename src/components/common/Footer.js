import React from "react";

import "../../assets/css/footer.scss";

import LogoTictactripWhite from "../../assets/icons/logo-tictactrip-white.svg";
import IconFacebook from "../../assets/icons/icon-facebook.svg";
import IconTwitter from "../../assets/icons/icon-twitter.svg";
import IconInstagram from "../../assets/icons/icon-instagram.svg";

/** FOOTER | website footer with social media icons & logo */

const Footer = () => {
  return (
    <div className="FooterContainer">
      <img className="FooterLogo" src={LogoTictactripWhite} alt="Logo White" />
      <div className="SocialMediaContainer">
        <img
          className="SocialMediaIcon"
          src={IconFacebook}
          alt="Icon Facebook"
        />
        <img className="SocialMediaIcon" src={IconTwitter} alt="Icon Twitter" />
        <img
          className="SocialMediaIcon"
          src={IconInstagram}
          alt="Icon Instagram"
        />
      </div>
    </div>
  );
};

export default Footer;
