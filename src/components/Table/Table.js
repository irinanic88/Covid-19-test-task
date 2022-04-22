import React, { useEffect } from 'react';
import useActions from '../../hooks/useActions';
import { useSelector } from 'react-redux';
import { summarySelector } from '../../store/selectors';
import styles from './Table.module.scss';

const Table = () => {
    const { loadSummary, openModal } = useActions();
    const summary = useSelector(summarySelector);

    useEffect(() => {
        if (summary.length === 0) {
            loadSummary();
        }
    }, [summary]);

    if (summary.length === 0) {
        return <div/>
    }

    const handleRowClick = (slug, country) => {
        openModal(slug, country);
    }

    return (
        <table className={styles.table}>
            <thead>
            <tr>
                <th>Country</th>
                <th>Confirmed</th>
                <th>Active</th>
                <th>Recovered</th>
                <th>Deaths</th>
            </tr>
            </thead>
            <tbody>
            {
                summary.map( row => {
                    const { ID, Slug, Country, TotalConfirmed, TotalRecovered, TotalDeaths } = row;
                    const Active = TotalConfirmed - TotalRecovered - TotalDeaths;
                    return (
                        <tr key={ID} onClick={() => handleRowClick(Slug, Country)}>
                            <td>{Country}</td>
                            <td>{TotalConfirmed}</td>
                            <td>{Active}</td>
                            <td>{TotalRecovered}</td>
                            <td>{TotalDeaths}</td>
                        </tr>
                    )
                })
            }
            </tbody>
        </table>
    )
}

export default Table;