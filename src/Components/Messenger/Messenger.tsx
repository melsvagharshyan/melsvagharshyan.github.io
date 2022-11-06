import styles from './Messenger.module.scss';
import React, {useEffect, useState} from 'react';


const Messenger: React.FC = () => {
    const [show, setShow] = useState<boolean>(false);
    const [shadow, setShadow] = useState<boolean>(false);


    function MessengerShow() {
        if (window.scrollY > 100) {
            setShow(true);
        } else {
            setShow(true);
        }
    }

    useEffect(() => {
        window.addEventListener("scroll", MessengerShow);
    }, []);

    useEffect(() => {
        const time = setInterval(() => {
            setShadow(!shadow);
        }, 3000);
        return () => clearInterval(time);
    }, [shadow]);

    return (
        <a href={"https://www.facebook.com/messages/t/100010607527744"} target={"_blank"}>
            <img style={{opacity: show ? "1" : "0", boxShadow: shadow ? "deepskyblue 0 0 15px 0" : "none"}}
                 src="../../Images/messenger.png"
                 alt="Messenger"
                 className={styles.Messenger}/>
        </a>
    );
};

export default Messenger;


























