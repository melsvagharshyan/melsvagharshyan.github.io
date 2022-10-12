import React from "react";
import NavLinks from "../NavLinks";
import styles from './MobileNavbar.module.scss';
import {useAppDispatch, useAppSelector} from "../../../Redux/hooks";
import {setOpen} from "../../../Redux/Reducers/MobileReducer";


const MobileNavbar: React.FC = () => {
    const {open} = useAppSelector(state => state.open);
    const dispatch = useAppDispatch();
    const openButton = <img src={"../../Images/burger.png"}
                            alt={"burger-open"}
                            className={styles.Burger}
                            onClick={() => dispatch(setOpen(!open))}/>;
    const closeButton = <img src={"../../Images/cancel.png"}
                             alt={"burger-close"}
                             className={styles.Burger}
                             onClick={() => dispatch(setOpen(!open))}/>

    return (
        <nav  className={styles.MobileNavbar}>
             <div style={{marginRight: open? "0":"-100%"}} className={styles.Container}>{<NavLinks/>}</div>
            {open ? closeButton : openButton}
        </nav>
    )
}


export default MobileNavbar;