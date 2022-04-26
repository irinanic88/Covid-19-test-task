import React, { useEffect } from 'react';
import useActions from '../../hooks/useActions';
import { ReactComponent as CloseIcon } from '../../assets/icons/close.svg';
import styles from './Modal.module.scss';

const Modal = ({children}) => {
    const { closeModal } = useActions();

    useEffect(() => {
        document.body.style.overflow = "hidden";
        return () => {
            document.body.style.overflow = "auto";
        }
    }, []);

    const handleWindowClick = (event) => {
        const clickedArea = event.target;

        if (clickedArea.dataset.id === "modal") {
            closeModal();
        }
        return;
    }

    return (
        <div className={styles.modal} data-id="modal" onClick={handleWindowClick}>
            <div className={styles.modal__container}>
                {children}
                <button className={styles.modal__closeButton} onClick={closeModal}>
                    <CloseIcon className={styles.modal__closeIcon}/>
                </button>
            </div>
        </div>
    )
}

export default Modal;