import styles from './HeaderText.module.scss';
import React from "react";
import {Link} from "react-scroll";


const HeaderText: React.FC = () => {
    return (
        <div className={styles.HeaderText}>
            <span className={styles.sloganText}>Development Is Great</span>
            <h2>VAGHARSHYAN'S BLOG</h2>
            <span className={styles.description}>
              Dynamic Author Blog Page
            </span>
                <Link to={"Consultation"}><button>Free Consultation</button></Link>
        </div>
    )
}


export default HeaderText;