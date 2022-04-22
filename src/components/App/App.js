import React, {useEffect} from 'react';
import { useSelector } from 'react-redux';
import { loadingStateSelector, errorSelector, modalSelector } from '../../store/selectors';
import Loader from '../Loader/Loader';
import Table from '../Table/Table';
import styles from './App.module.scss';

import Modal from '../Modal/Modal';
import Graph from '../Graph/Graph';

const App = () => {
    const isLoading = useSelector(loadingStateSelector);
    const error = useSelector(errorSelector);
    const modal = useSelector(modalSelector);

    const { display: modalDisplay, params: modalParams } = modal;

    useEffect(() => {
        if (error) {
            console.log(error);
        }
    }, [error]);

    return (
        <div className={styles.app}>
            { isLoading && <Loader/> }
            <Table/>
            {
                modalDisplay &&
                <Modal children={<Graph slug={modalParams.slug} country={modalParams.country} caseType={'confirmed'}/>}/>
            }
        </div>
    )
}

export default App;