import styles from './Slider.module.scss';
import React, {useEffect} from 'react';
import {useAppDispatch, useAppSelector} from "../../Redux/hooks";
import {setIndex} from "../../Redux/Reducers/SliderReducer";

const MyComponent: React.FC = () => {
    const dispatch = useAppDispatch();
    const {slides, index} = useAppSelector(state => state.Slider);

    const indexSet = () =>  {
        let initialIndex = index === slides.length - 1 ? 0 : index + 1;
        dispatch(setIndex(initialIndex));
    }


    useEffect(() => {
        const timeOut = setInterval(() => {
            indexSet();
        }, 4000);
        return () => clearInterval(timeOut);
    }, [index])


    return (
        <div className={styles.Slider}  >
            <div className={styles.SliderContainer}>
                <div className={styles.Text}>
                    <h1>{slides[index].text}</h1>
                    <h4>{slides[index].autor}</h4>
                </div>
                <div className={styles.SliderTracker}>{slides.map((d, i) => {
                    return <div className={index === i ? styles.activeButton : styles.button} onClick={()=> dispatch(setIndex(i))}></div>
                })}</div>
            </div>
        </div>
    );
};

export default MyComponent;
