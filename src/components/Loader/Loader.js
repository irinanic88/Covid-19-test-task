import React from 'react';
import { ReactComponent as LoaderIcon} from '../../assets/icons/loader.svg';
import styles from './Loader.module.scss';

const Loader = () => {
    return (
        <div className={styles.loader}>
            <div className={styles.loader__iconContainer}>
                <LoaderIcon className={styles.loader__icon}/>
            </div>
        </div>
    )
}

export default Loader;