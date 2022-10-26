import styles from './Skills.module.scss';
import React from 'react';
import {useAppSelector} from "../../Redux/hooks";


const Skills: React.FC = () => {
    const {items} = useAppSelector(state => state.items);


    return (
        <div className={styles.Skills} id={"Skills"}>
            <div className={styles.SkillsText}>
                <h1>SKILLS</h1>
            </div>
            <div className={styles.Items}>
                {
                    items.map((item, index) => {
                        return (
                            <div key={index} className={styles.item}>
                                <img src={item.img} alt="image"/>
                                <h3>{item.header}</h3>
                                <span>{item.context}</span>
                            </div>
                        )
                    })
                }
            </div>
        </div>
    );
};

export default Skills;
