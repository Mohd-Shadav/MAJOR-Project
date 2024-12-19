import React from 'react'
import styles from './Footer.module.css';
import { FaHome } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";

function Footer() {
  return (
    <div className={styles["container"]}>

        <div className={styles["titleCont"]}>

            <div className={styles["title"]}>
           
               <FaHome/>
                
                <h6>AffordEstate</h6>

            </div>

           <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptatem, debitis ha</p>

           <div className={styles["icons"]}>
           <FaFacebook />
           <FaTwitter />
           <FaInstagram />
           </div>

        </div>
        <div className={styles["productCont"]}>

            <h6>
                Product
            </h6>

            <ul>
                <li>Features</li>
                <li>Pricing</li>
                <li>Case Studies</li>
                <li>Reviews</li>
                {/* <li></li> */}
            </ul>
   
        </div>
        <div className={styles["productCont"]}>
        <h6>
              Company
            </h6>

            <ul>
                <li>Features</li>
                <li>Pricing</li>
                <li>Case Studies</li>
                <li>Reviews</li>
                {/* <li></li> */}
            </ul>
        </div>
        <div className={styles["productCont"]}>
        <h6>
               Support
            </h6>

            <ul>
                <li>Getting started</li>
                <li>Help center</li>
                <li>Server status</li>
                <li>Report a bug</li>
                <li>Chat support</li>
            </ul>
        </div>
        <div className={styles["productCont"]}>
        <h6>
                Contact us
            </h6>

            <ul>
                <li>Features</li>
                <li>Pricing</li>
                <li>Case Studies</li>
                <li>Reviews</li>
                {/* <li></li> */}
            </ul>
        </div>

    </div>
  )
}

export default Footer