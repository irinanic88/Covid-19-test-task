import React, {useEffect} from 'react';
import { useSelector } from 'react-redux';
import { loadingStateSelector, errorSelector } from '../../store/selectors';
import Loader from '../Loader/Loader';
import Table from '../Table/Table';

const App = () => {
    const isLoading = useSelector(loadingStateSelector);
    const error = useSelector(errorSelector);

    useEffect(() => {
        if (error) {
            console.log(error);
        }
    }, [error]);

    return (
        <div>
            { isLoading && <Loader/> }
            <Table/>
        </div>
    )
}

export default App;