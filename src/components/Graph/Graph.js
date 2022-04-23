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


    useEffect(() => {
        if (!graphData) {
            loadSlugTrend(slug, caseType, startDayString);
        }
    }, []);

    if (!graphData) {
        return <div/>
    }

    const minDomain = graphData[0].Confirmed;
    const maxDomain = graphData[graphData.length - 1].Confirmed;

    return (
        <div className={styles.graph}>
            <h2 className={styles.graph__title}>
                {`${capitalize(caseType)} cases trend for last ${monthsDiscount} months in ${country}`}
            </h2>
            <LineChart className={styles.graph__lineChart}
                       width={730}
                       height={250}
                       data={graphData}
            >
                <CartesianGrid strokeDasharray="3 3"/>
                <XAxis dataKey="Date"
                       interval={30}
                />
                <YAxis dataKey="Confirmed"
                       domain={[minDomain, maxDomain]}
                />
                <Tooltip />
                <Legend />
                <Line type="monotone"
                      dataKey="Confirmed"
                      stroke="#f28f3b"
                      strokeWidth={2}
                      dot={false}
                />
            </LineChart>
        </div>
    )
}

export default Graph;