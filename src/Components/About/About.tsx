import styles from './About.module.scss';
import React, {useEffect} from 'react';
import {useAppDispatch, useAppSelector} from "../../Redux/hooks";
import {setIndex} from "../../Redux/Reducers/SliderReducer";

const About: React.FC = () => {
    const dispatch = useAppDispatch();
    const {slides, index} = useAppSelector(state => state.Slider);



    return (
        <div className={styles.About} id={"About"} >
            <h1>ABOUT ME</h1>
            <div className={styles.SliderContainer}>
                <div className={styles.Text}>
                    <h3>{slides[index].title}</h3>
                    <hr/>
                    <p>{slides[index].text}</p>
                    {index === 3 && <div>
                        <img src={'../../Images/Languages/armenian.png'}/>
                        <img src={'../../Images/Languages/english.png'}/>
                        <img src={'../../Images/Languages/russian.png'}/>
                    </div>

                    }
                </div>
                <div className={styles.SliderTracker}>{slides.map((d, i) => {
                    return <div key={i} className={index === i ? styles.activeButton : styles.button} onClick={()=> dispatch(setIndex(i))}></div>
                })}</div>
            </div>
        </div>
    );
};

export default About;
