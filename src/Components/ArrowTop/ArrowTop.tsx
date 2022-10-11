import styles from './ArrowTop.module.scss';
import {IoIosArrowUp} from 'react-icons/io'
import React, {useEffect, useState} from 'react';
import {Link} from "react-scroll";




const ArrowTop:React.FC = () => {
    const [show, setShow] = useState<boolean>(false);

    function ArrowShow() {
        if (window.scrollY > 100) {
            setShow(true);
        } else {
            setShow(false);
        }
    }

    useEffect(()=>{
        window.addEventListener("scroll", ArrowShow);
    },[]);

    return (
        <Link smooth={true} to={"Home"}><IoIosArrowUp style={{display: show? "block" : "none"}} size={"40"} className={styles.Arrow}/></Link>
    );
};

export default ArrowTop;
