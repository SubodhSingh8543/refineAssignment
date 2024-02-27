import React, { useEffect, useState } from 'react';
import {
    LineChart,
    Line,
    XAxis,
    YAxis,
    CartesianGrid,
    Tooltip,
    ResponsiveContainer,
    Legend
} from 'recharts';
import ChartTooltip from './chartTooltip';

interface DataItem {
    name1: string;
    name2: string;
    value1: number;
    value2: number;
}

export interface Year1Int {
    name1: string;
    value1: number;
}

export interface Year2Int {
    name2: string;
    value2: number;
}

const CustomLineChart = ({year1,year2}:{year1:Year1Int[],year2:Year2Int[]}) => {
    const [tooltipData, setTooltipData] = useState<any>(null);
    const [chartData,setChartData] = useState<DataItem[]>([])

    const newData: DataItem[] = []

    for(let i=0; i<year1.length; i++){
        newData.push({...year1[i],...year2[i]})
    }

    useEffect(() => {
        setChartData(newData);
    },[year1,year2])

    // console.log(year1,year2);

    return (
        <ResponsiveContainer width="100%" height={213}>
            <LineChart
                data={chartData}
                margin={{
                    top: 35,
                    right: 50,
                    left: 20,
                    bottom: 40,
                }}
            >
                <XAxis dataKey="name1" />
                <YAxis />
                <Tooltip content={<ChartTooltip />} />
                {/* <Legend /> */}
                <CartesianGrid stroke="#f0f0f0" strokeDasharray="0" horizontal={true} vertical={false} />
                <Line stroke="#489AD2" strokeWidth={3} type="monotone" dataKey="value1" dot={false} activeDot={{ r: 1, onClick: () => { } }} name="Line 1" />
                <Line strokeDasharray="5 5" strokeWidth={3} type="monotone" dataKey="value2" stroke="#b0d4ec" dot={false} activeDot={{ r: 1, onClick: () => { } }} name="Line 2" />
            </LineChart>
        </ResponsiveContainer>
    );
};

export default CustomLineChart;
