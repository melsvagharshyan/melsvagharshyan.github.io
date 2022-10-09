import NavLinks from "../NavLinks";
import styles from './NormalNavbar.module.scss';
import React from "react";


const NormalNavbar: React.FC = () => {
    return (
        <nav className={styles.NormalNavbar}>
            <NavLinks />
        </nav>
    )
}


export default NormalNavbar;