import styles from './FreeHelp.module.scss';
import React, {useEffect, useRef} from 'react';
import emailjs from '@emailjs/browser';


const FreeHelp: React.FC = () => {
    const form = useRef<HTMLFormElement>(null);



    const onSend = (e: any)=>{
        e.preventDefault();
        emailjs.sendForm('service_7i5yx1v', 'template_9hh6o5l', form.current!, 'h2dB72NtADNkCTq7J')
            .then((result) => {
                form.current!.value = ""
                console.log(result.text);
            }, (error) => {
                console.log(error.text);
            });
        e.target.reset();
    };



    return (
        <div className={styles.FreeHelp} id={"Consultation"}>
            <form ref={form} onSubmit={onSend}>
                <div>Fill out your details to talk with Me now!</div>
                <input type="text" name="name"  placeholder={"Your Full Name"} required={true} />
                <input type="email" name="email" placeholder={"Your Email"} required={true}/>
                <input name="message" placeholder={"Your Message"} className={styles.Message} />
                <input type="submit" value="Send" />
            </form>
        </div>
    );
};

export default FreeHelp;
