import React from 'react';
import styles from './Header.module.scss';
import Navbar from "../Navbar/Navbar";
import HeaderText from "./HeaderText/HeaderText";

const Header: React.FC = () => {
    return (
        <div className={styles.Header} id={"Home"}>
            <Navbar/>
            <HeaderText/>
        </div>
    );
};

export default Header;
