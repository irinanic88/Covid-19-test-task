import React, {useEffect} from 'react';
import { useSelector } from 'react-redux';
import { loadingStateSelector, errorSelector } from '../../store/selectors';
import Loader from '../Loader/Loader';
import Table from '../Table/Table';
import styles from './App.module.scss';

import Modal from '../Modal/Modal';
import Graph from '../Graph/Graph';

const App = () => {
    const isLoading = useSelector(loadingStateSelector);
    const error = useSelector(errorSelector);

    useEffect(() => {
        if (error) {
            console.log(error);
        }
    }, [error]);

    return (
        <div className={styles.app}>
            { isLoading && <Loader/> }
            <Table/>
            <Modal children={<Graph slug={'this is slug'} country={'Spain'} caseType={'confirmed'}/>}/>
        </div>
    )
}

export default App;