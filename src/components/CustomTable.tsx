import React from "react";

interface Column {
	header: string;
	accessor: string;
}

interface TableProps {
	columns: Column[];
	data: Record<string, any>[];
}

const CustomTable: React.FC<TableProps> = ({ columns, data }) => {
	return (
		<div className="overflow-x-auto">
			<table className="min-w-full bg-white border border-gray-200 rounded-lg">
				<thead>
					<tr>
						{columns.map((column, index) => (
							<th
								key={index}
								className="px-6 py-3 text-left text-sm font-medium text-gray-600 border-b"
							>
								{column.header}
							</th>
						))}
					</tr>
				</thead>
				<tbody>
					{data.map((row, rowIndex) => (
						<tr
							key={rowIndex}
							className={`${
								rowIndex % 2 === 0 ? "bg-gray-50" : "bg-white"
							} hover:bg-gray-100 transition-colors duration-200`}
						>
							{columns.map((column, colIndex) => (
								<td
									key={colIndex}
									className="px-6 py-3 text-sm text-gray-700 border-b whitespace-nowrap"
								>
									{row[column.accessor]}
								</td>
							))}
						</tr>
					))}
				</tbody>
			</table>
		</div>
	);
};

export default CustomTable;
