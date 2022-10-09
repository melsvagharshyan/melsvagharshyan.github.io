import styles from "./Navbar.module.scss";
import React, {useEffect} from "react";
import NormalNavbar from "./NormalNavbar/NormalNavbar";
import MobileNavbar from "./MobileNavbar/MobileNavbar";
import {useAppDispatch, useAppSelector} from "../../Redux/hooks";
import {setActive} from "../../Redux/Reducers/MobileReducer";
import {Link} from "react-scroll";


const Navbar: React.FC = () => {
    const dispatach = useAppDispatch();
    const {active} = useAppSelector(state => state.open);

    const onScroll = () => {
        if (window.scrollY >= 1) {
            dispatach(setActive(true));
        } else {
            dispatach(setActive(false));
        }
    }

    useEffect(() => {
        window.addEventListener("scroll", onScroll);
    }, []);


    return (
        <div className={styles.Navbar}
             style={{background: active ? "white" : "none", boxShadow: active ? "black 0 0 13px 0" : "none"}}>
            <div className={styles.NavbarContainer}>
                <Link to={"Home"}><img src={"../../Images/script.png"} alt="code" className={styles.logo}/></Link>
                <NormalNavbar/>
                <MobileNavbar/>
            </div>
        </div>
    )
}


export default Navbar;