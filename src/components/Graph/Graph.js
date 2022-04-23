import React, { useEffect } from 'react';
import useActions from '../../hooks/useActions';
import { useSelector } from 'react-redux';
import { slugTrendSelector } from '../../store/selectors';
import {
    capitalize,
    setStartDayString
} from '../../utils/functions';
import {
    LineChart,
    XAxis,
    YAxis,
    Line,
    Tooltip,
    Legend,
    CartesianGrid
} from 'recharts';
import styles from './Graph.module.scss';

const Graph = ({slug, country, caseType}) => {
    const { loadSlugTrend } = useActions();

    const monthsDiscount = 6;
    const startDayString = setStartDayString(monthsDiscount);

    const graphData = useSelector(slugTrendSelector(slug, caseType));
    console.log(graphData);

    useEffect(() => {
        if (!graphData) {
            loadSlugTrend(slug, caseType, startDayString);
        }
    }, []);

    //temporary mock
    const data = [
        {month: 'January', confirmed: 45}, {month: 'February', confirmed: 68}, {month: 'March', confirmed: 34},
        {month: 'April', confirmed: 11}, {month: 'May', confirmed: 24}, {month: 'June', confirmed: 16}
    ];


    return (
        <div className={styles.graph}>
            <h2 className={styles.graph__title}>
                {capitalize(caseType)} cases trend for last ${monthsDiscount} months in {country}
            </h2>
            <LineChart className={styles.graph__lineChart}
                       width={730}
                       height={250}
                       data={data}
            >
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="month" />
                <YAxis dataKey="confirmed" />
                <Tooltip />
                <Legend />
                <Line className={styles.graph__line}
                      type="monotone"
                      dataKey={caseType}
                      stroke="#f28f3b"
                />
            </LineChart>
        </div>
    )
}

export default Graph;