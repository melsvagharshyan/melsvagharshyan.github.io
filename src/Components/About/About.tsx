import styles from './About.module.scss';
import React from 'react';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import {useAppSelector} from "../../Redux/hooks";
import {responsive} from "./CarouselAttributes";
import {DotProps} from 'react-multi-carousel/lib/types';


const About: React.FC = () => {
    const {slides} = useAppSelector(state => state.Slider);


    const CustomDot = ({onClick, active}: DotProps) => {
        return (
            <div className={active ? styles.active : styles.inactive} onClick={onClick}></div>
        );
    };


    return (
        <div className={styles.About} id={"About"}>
            <h1>ABOUT ME</h1>
            <Carousel className={styles.Carousel}
                      responsive={responsive}
                      infinite={true}
                      showDots={true}
                      customDot={<CustomDot onClick={undefined}/>}
                      arrows={false}
            >
                {
                    slides.map((slide, index) => {
                        return (
                            <div className={styles.item} key={index}>
                                <h3>{slide.title}</h3>
                                <hr/>
                                {index !== 3 && <p>{slide.text}</p>}
                                {index === 3 && <div>
                                    <img src={'../../Images/Languages/armenian.png'} alt={"flag"}/>
                                    <img src={'../../Images/Languages/english.png'} alt={"flag"}/>
                                    <img src={'../../Images/Languages/russian.png'} alt={"flag"}/>
                                </div>
                                }
                            </div>
                        )
                    })
                }
            </Carousel>
        </div>
    )
        ;
};

export default About;
