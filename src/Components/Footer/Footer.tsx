import styles from './Footer.module.scss';
import {MdOutlineEmail} from 'react-icons/md'

import React from 'react';

const Footer: React.FC = () => {
    return (
        <div className={styles.Footer}>
            <div className={styles.section1}>
               <span className={styles.silver}>Mels Code is a global software engineering company offering IT, advanced technology
                   <br/>
                solutions for small, medium businesses and enterprises.
               </span>
                <span>Fill in your email to get special offers and updates.</span>
                <div className={styles.subscribe}>
                    <MdOutlineEmail size={20} className={styles.example}/>
                    <input type="text" placeholder={"Insert your email here"}/>
                    <button>Subscribe</button>
                </div>
                <span className={styles.copyright}>Mels Code Copyright © 2022. All Rights Reserved</span>
            </div>
            <div className={styles.section2}>
                <span>Terms & Conditions</span>
                <span>Privacy Policy</span>
            </div>
            <div className={styles.section3}>
                <a href="">Facebook</a>
                <a href="">Linkedin</a>
                <a href="">Instagram</a>
                <a href="">GitHub</a>
            </div>
            <div className={styles.section4}>
                <div className={styles.contactUs}>
                    Contact Us
                    <br/>
                    <span>info@creatix.tech</span>
                </div>
                <div className={styles.address}>
                    <span>24/15 Azatutyan Ave, 0018</span>
                    <span>Yerevan, Armenia</span>
                    <span>+374 94541615</span>
                    <hr/>
                    <span>Schönhauser Allee 163 10435</span>
                    <span>Berlin, Germany</span>
                    <span>+49 1762 1048349</span>
                    <hr/>
                    <span> UK, London</span>
                    <span>+44 808 175 2566</span>
                </div>
            </div>
        </div>
    );
};

export default Footer;
