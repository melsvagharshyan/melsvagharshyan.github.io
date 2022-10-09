import React from "react";
import styles from './NavLinks.module.scss';
import {useAppDispatch, useAppSelector} from "../../Redux/hooks";
import {setOpen} from "../../Redux/Reducers/MobileReducer";
import {Link} from "react-scroll";


const NavLinks: React.FC = () => {
    const {active} = useAppSelector(state=> state.open);
    const dispatch = useAppDispatch();

    const links = ["Skills", "About", "Portfolio", "Careers", "Contact"];

    return (
        <div className={styles.NavLinks}>
            {
                links.map((link, index) => {
                    return <Link key={index} to={link}
                                 duration={700}
                                 smooth={true} offset={50}
                                 onClick={() => dispatch(setOpen(false))}
                                 style={{color: active? "rgba(0,0,0,0.9)": "#fff"}}>{link}</Link>
                })
            }
        </div>
    )
}


export default NavLinks;