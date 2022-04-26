import React, { useEffect } from 'react';
import useActions from '../../hooks/useActions';
import { useSelector } from 'react-redux';
import { slugTrendSelector } from '../../store/selectors';
import {
    capitalize,
    setStartDate,
    formattedData,
    setTicksX
} from '../../utils/functions';
import {
    ResponsiveContainer,
    LineChart,
    XAxis,
    YAxis,
    Line,
    Tooltip,
    CartesianGrid
} from 'recharts';
import styles from './Graph.module.scss';

const Graph = ({slug, country, caseType}) => {
    const { loadSlugTrend } = useActions();

    const monthsDiscount = 6;
    const startDate = setStartDate('months', monthsDiscount);

    const graphData = useSelector(slugTrendSelector(slug, caseType));


    useEffect(() => {
        if (!graphData) {
            loadSlugTrend(slug, caseType, startDate);
        }
    }, []);

    if (!graphData) {
        return <div/>
    }

    const formattedGraphData = formattedData(graphData);
    const ticksX = setTicksX(graphData);
    const formatTickItem = (tickItem) => `${tickItem.slice(0, 3)}`;

    const minDomain = graphData[0].confirmed;
    const maxDomain = graphData[graphData.length - 1].confirmed;

    return (
        <div className={styles.graph} data-id="graph">
            <h2 className={styles.graph__title}>
                {`${capitalize(caseType)} cases trend for last ${monthsDiscount} months in ${country}`}
            </h2>
            <ResponsiveContainer aspect={2}>
                <LineChart className={styles.graph__lineChart}
                           width={730}
                           height={250}
                           data={formattedGraphData}
                >
                    <CartesianGrid strokeDasharray="3 3"/>
                    <XAxis dataKey="date"
                           tickFormatter={formatTickItem}
                           ticks={ticksX}
                           tickMargin={10}
                           interval={0}
                    />
                    <YAxis dataKey="confirmed"
                           domain={[minDomain, maxDomain]}
                    />
                    <Tooltip />
                    <Line type="monotone"
                          dataKey="confirmed"
                          stroke="#f28f3b"
                          strokeWidth={2}
                          dot={false}
                    />
                </LineChart>
            </ResponsiveContainer>
        </div>
    )
}

export default Graph;