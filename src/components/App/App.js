import React from 'react';
import { useSelector } from 'react-redux';
import { loadingStateSelector } from '../../store/selectors';
import Loader from '../Loader/Loader';
import Table from '../Table/Table';

const App = () => {
    const isLoading = useSelector(loadingStateSelector);

    return (
        <div>
            { isLoading && <Loader/> }
            <Table/>
        </div>
    )
}

export default App;