import React, {useEffect} from 'react';
import { ReactComponent as CloseIcon } from '../../assets/icons/close.svg';
import styles from './Modal.module.scss';

const Modal = ({children}) => {
    useEffect(() => {
        document.body.style.overflow = "hidden";
        return () => {
            document.body.style.overflow = "auto";
        }
    }, []);

    return (
        <div className={styles.modal}>
            <div className={styles.modal__container}>
                {children}
                <button className={styles.modal__closeButton}>
                    <CloseIcon className={styles.modal__closeIcon}/>
                </button>
            </div>
        </div>
    )
}

export default Modal;