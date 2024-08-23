"use client";

import Image from "next/image";
import {
	BarChart,
	Bar,
	Rectangle,
	XAxis,
	YAxis,
	CartesianGrid,
	Tooltip,
	Legend,
	ResponsiveContainer,
} from "recharts";

const data = [
	{
		name: "Mon",
		income: 60,
		expense: 40,
	},
	{
		name: "Tue",
		income: 70,
		expense: 60,
	},
	{
		name: "Wed",
		income: 90,
		expense: 75,
	},
	{
		name: "Thu",
		income: 90,
		expense: 75,
	},
	{
		name: "Fri",
		income: 65,
		expense: 55,
	},
];

function MonthlyBalanceChart() {
	return (
		<div className="bg-white rounded-lg p-4 h-full shadow-lg">
			<div className="flex justify-between items-center">
				<h1 className="text-lg font-semibold text-neutral-700 mb-6">Monthly Balance</h1>
				{/* <Image src="/moreDark.png" alt="" width={20} height={20} /> */}
			</div>
			<ResponsiveContainer width="100%" height="90%">
				<BarChart width={500} height={300} data={data} barSize={20}>
					<CartesianGrid
						strokeDasharray="3 3"
						vertical={false}
						stroke="rgb(163 163 163)"
					/>
					<XAxis
						dataKey="name"
						axisLine={false}
						tick={{ fill: "rgb(82 82 82)" }}
						tickLine={false}
					/>
					<YAxis
						axisLine={false}
						tick={{ fill: "rgb(82 82 82)" }}
						tickLine={false}
					/>
					<Tooltip
						contentStyle={{
							borderRadius: "12px",
							borderColor: "lightgray",
              textTransform: "capitalize",
						}}
					/>
					<Legend
						align="center"
						verticalAlign="bottom"
						wrapperStyle={{
							paddingTop: "20px",
              textTransform: "capitalize"
						}}
					/>
					<Bar
						dataKey="income"
						fill="#22c55e"
						legendType="circle"
						radius={[10, 10, 0, 0]}
					/>
					<Bar
						dataKey="expense"
						fill="#dc2626"
						legendType="circle"
						radius={[10, 10, 0, 0]}
					/>
				</BarChart>
			</ResponsiveContainer>
		</div>
	);
}

export default MonthlyBalanceChart;
