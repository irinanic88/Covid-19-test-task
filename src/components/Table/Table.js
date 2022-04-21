import React, { useEffect } from 'react';
import useActions from '../../hooks/useActions';
import { useSelector } from 'react-redux';
import { summarySelector } from '../../store/selectors';

const Table = () => {
    const { loadSummary } = useActions();
    const summary = useSelector(summarySelector);

    useEffect(() => {
        if (summary.length === 0) {
            loadSummary();
        }
    }, [summary]);

    return (
        <div>This is Table</div>
    )
}

export default Table;