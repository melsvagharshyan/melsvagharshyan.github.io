import styles from './Skills.module.scss';
import React from 'react';
import {useAppSelector} from "../../Redux/hooks";


const Skills: React.FC = () => {
    const {items} = useAppSelector(state => state.items);


    return (
        <div className={styles.Skills} id={"Skills"}>
            <div className={styles.SkillsText}>
                <h1>My Skills</h1>
                <span>
                   My front-end skills, which I chose while learning programming․
                    <br/>
                    They make me feel invincible․
                </span>
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
