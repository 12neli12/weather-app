import React from "react";
import { CiLinkedin } from "react-icons/ci";
import { FaGithub } from "react-icons/fa";
import { CiInstagram } from "react-icons/ci";
import styles from '../Footer/Footer.module.css'

const Footer = () => {
  return(
    <footer className={styles.foot}>
      <p>
        ⓒ 2024 Ornel Mero. All right reserved.
      </p>
      {/* <div style={{paddingTop:6}}>
        <a href="https://al.linkedin.com/in/ornel-mero-27b3b5237"><CiLinkedin /></a>
        <a href="https://github.com/12neli12"><FaGithub /></a>
        <a href="https://www.instagram.com/ornel_mero/"><CiInstagram /></a>
      </div> */}
    </footer>
  )
}

export default Footer;