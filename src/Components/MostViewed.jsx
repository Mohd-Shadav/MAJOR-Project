import React from 'react'
import styles from './MostViewed.module.css';
import { FaRupeeSign } from "react-icons/fa";

function MostViewed() {
  return (
    <div className={styles["container"]}>

        <div className={styles["Headings"]}>

            <img src="public\Untitled_design-removebg-preview (1).png" alt="" />
            <h1>Most Viewed</h1>
            <p>Explore the properties everyone is talking about, curated for your dream home search.</p>
        </div>

        <div className={styles["scrollHousesCard"]}>

             <div className={styles["cardHouses"]}>
              <img src="https://m.economictimes.com/thumb/height-450,width-600,imgsize-22382,msid-111780228/which-mansion-tops-the-list-of-the-worlds-most-expensive-houses.jpg" alt="" />
              <div>
                <span>Nagra house no 122 jhansi..</span>
                <span><FaRupeeSign/> 5000000</span>
              </div>
             </div>


             <div className={styles["cardHouses"]}>
              <img src="https://m.economictimes.com/thumb/height-450,width-600,imgsize-22382,msid-111780228/which-mansion-tops-the-list-of-the-worlds-most-expensive-houses.jpg" alt="" />
              <div>
                <span>Nagra house no 122 jhansi..</span>
                <span><FaRupeeSign/> 5000000</span>
              </div>
             </div>



             <div className={styles["cardHouses"]}>
              <img src="https://m.economictimes.com/thumb/height-450,width-600,imgsize-22382,msid-111780228/which-mansion-tops-the-list-of-the-worlds-most-expensive-houses.jpg" alt="" />
              <div>
                <span>Nagra house no 122 jhansi..</span>
                <span><FaRupeeSign/> 5000000</span>
              </div>
             </div>



             <div className={styles["cardHouses"]}>
              <img src="https://m.economictimes.com/thumb/height-450,width-600,imgsize-22382,msid-111780228/which-mansion-tops-the-list-of-the-worlds-most-expensive-houses.jpg" alt="" />
              <div>
                <span>Nagra house no 122 jhansi..</span>
                <span><FaRupeeSign/> 5000000</span>
              </div>
             </div>


             <div className={styles["cardHouses"]}>
              <img src="https://m.economictimes.com/thumb/height-450,width-600,imgsize-22382,msid-111780228/which-mansion-tops-the-list-of-the-worlds-most-expensive-houses.jpg" alt="" />
              <div>
                <span>Nagra house no 122 jhansi..</span>
                <span><FaRupeeSign/> 5000000</span>
              </div>
             </div>


             <div className={styles["cardHouses"]}>
              <img src="https://m.economictimes.com/thumb/height-450,width-600,imgsize-22382,msid-111780228/which-mansion-tops-the-list-of-the-worlds-most-expensive-houses.jpg" alt="" />
              <div>
                <span>Nagra house no 122 jhansi..</span>
                <span><FaRupeeSign/> 5000000</span>
              </div>
             </div>

        </div>

        <div className={styles["virualScroller"]}>
          <span></span>
          <span></span>
          <span></span>
        </div>

    </div>
  )
}

export default MostViewed