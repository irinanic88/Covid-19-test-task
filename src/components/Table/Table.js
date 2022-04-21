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

    if (summary.length === 0) {
        return <div/>
    }

    return (
        <table>
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
                summary.map((row, index) => {
                    const { ID, Country, TotalConfirmed, TotalRecovered, TotalDeaths } = row;
                    const Active = TotalConfirmed - TotalRecovered - TotalDeaths;
                    return (
                        <tr key={`${Country}-${index}`}>
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