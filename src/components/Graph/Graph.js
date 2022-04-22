import React from 'react';
import { capitalize } from '../../utils/functions';
import { LineChart, XAxis, YAxis, Line, Tooltip, Legend, CartesianGrid } from 'recharts';
import styles from './Graph.module.scss';

const Graph = ({slug, country, caseType}) => {

    //temporary mock
    const data = [
        {month: 'January', confirmed: 45}, {month: 'February', confirmed: 68}, {month: 'March', confirmed: 34},
        {month: 'April', confirmed: 11}, {month: 'May', confirmed: 24}, {month: 'June', confirmed: 16}
    ];


    return (
        <div className={styles.graph}>
            <h2 className={styles.graph__title}>
                {capitalize(caseType)} cases trend for last 6 months in {country}
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