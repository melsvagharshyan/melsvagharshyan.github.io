import styles from './About.module.scss';


import React from 'react';

const About = () => {
    return (
        <div className={styles.About} id={"About"}>
            <h1>ABOUT ME</h1>
            <div className={styles.AboutContainer}>
                <img className={styles.MelsImage} src="../../Images/mels.jpg" alt="Mels"/>
                <div className={styles.aboutText}>
                    <h1>
                        Hello!
                        <br/>
                        I'm Mels
                    </h1>
                    <p>
                        Me 21 years old. I'm from the Armenia. I live in Sevan․
                        I am studying at the Computer Science Department of the Informatics and Applied Mathematics Faculty of Yerevan State University.
                        However, I am learning programming on my own․
                        I love programming very much, and the same time I love to help others and i enjoy exploring new technologies in general!
                        My goal is to keep on growing as a developer - and if I could help you do the same, I'd be very happy!
                      </p>
                </div>
            </div>
        </div>
    );
};

export default About;
