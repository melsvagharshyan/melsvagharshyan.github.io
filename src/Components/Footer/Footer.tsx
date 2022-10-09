import styles from './Footer.module.scss';
import {MdOutlineEmail} from 'react-icons/md'

import React from 'react';

const Footer: React.FC = () => {
    return (
        <div className={styles.Footer}>
            <div className={styles.section1}>
               <span className={styles.silver}>
                   The Vagharshyan's blog is considered to be my author blog,
                   <br/>
                   it aims to be a way of communication with various programmers.
               </span>
                <span>Fill in your email to get special offers and updates.</span>
                <div className={styles.subscribe}>
                    <MdOutlineEmail size={20} className={styles.example}/>
                    <input type="text" placeholder={"Insert your email here"}/>
                    <button>Subscribe</button>
                </div>
            </div>
            <div className={styles.section2}>
                <a href="https://www.facebook.com/mels.vagharshyan">Facebook</a>
                <a href="https://www.linkedin.com/in/mels-vagharshyan-522735227/">Linkedin</a>
                <a href="https://www.instagram.com/mels_vagharshyan/">Instagram</a>
                <a href="https://github.com/melsvagharshyan/melsvagharshyan.github.io">GitHub</a>
            </div>
            <div className={styles.section3}>
                <div className={styles.contactUs}>
                    Contact Me
                </div>
                <div className={styles.address} id={"Contact"}>
                    <a href="tel:+37494541615">+37494541615</a>
                    <a href="tel:+37491991615">+37491991615</a>
                    <hr/>
                    <span>mels.vagharshyan18@gmail.com</span>
                    <span>melsvagharshyan.github.io</span>
                </div>
            </div>
        </div>
    );
};

export default Footer;
