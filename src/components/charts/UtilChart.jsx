import React from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";
import "./UtilChart.css";
import mockdata from "../../data/mockdata.json";

// console.log(mockdata, "MockData");
// 필터링 조건
const filterOper = "W/B";
const filterFactor = "LINEARITY";

// 필터링 데이터 가져오기
const filterData = mockdata.filter((item) => {
  return item.OPER === "W/B" && item.FACTOR === "LINEARITY";
});

console.log(JSON.stringify(filterData), "예시 데이터");
// 예시용: '투자가동률'만 필터링한 데이터 가공
const rawData = [
  {
    AREA: "PKG",
    Site: "IC",
    Factor: "투자가동률",
    "1월": 0.1987,
    "2월": 0.558,
    "3월": 0.311,
    "4월": 0.8567,
    "5월": 0.9854,
    "6월": 0.6888,
  },
  {
    AREA: "PKG",
    Site: "CJ",
    Factor: "투자가동률",
    "1월": 0.9029,
    "2월": 0.2614,
    "3월": 0.2075,
    "4월": 0.4418,
    "5월": 0.9856,
    "6월": 0.8038,
  },
  {
    AREA: "PKG",
    Site: "CQ",
    Factor: "투자가동률",
    "1월": 0.7981,
    "2월": 0.3453,
    "3월": 0.5046,
    "4월": 0.5477,
    "5월": 0.7288,
    "6월": 0.6367,
  },
];

// Rechart 데이터 포맷으로 변환
const transformData = () => {
  const rechartData = filterData.map(item=> {
    month: item.MONTH,
    value: item.VALUE,
  })
};

// const transformData = () => {
//   const months = ["1월", "2월", "3월", "4월", "5월", "6월"];
//   return months.map((month) => {
//     const entry = { month };
//     rawData.forEach((row) => {
//       entry[row.Site] = row[month];
//     });
//     return entry;
//   });
// };

// Legend 설정
// const customLegend = [{}];

// Chart Component 시작

const UtilChart = () => {
  const chartData = transformData();
  // const chartData = filterData;

  return (
    <div className='UtilChart__container'>
      {/* <p className='UtilChart__chart-title'>월별 투자가동률</p> */}
      <ResponsiveContainer>
        <LineChart data={chartData} className='UtilChart__line-chart'>
          <CartesianGrid strokeDasharray='1 5' />
          <XAxis dataKey='month' />
          <YAxis
            domain={[0, 1]}
            tickFormatter={(v) => `${Math.round(v * 100)}%`}
          />
          <Tooltip formatter={(value) => `${(value * 100).toFixed(1)}%`} />
          <Legend />
          <Line type='monotone' dataKey='IC' stroke='#8884d8' strokeWidth={2} />
          <Line type='monotone' dataKey='CJ' stroke='#82ca9d' strokeWidth={2} />
          <Line type='monotone' dataKey='CQ' stroke='#ffc658' strokeWidth={2} />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
};

export default UtilChart;
