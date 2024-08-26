import CustomTable from "@/components/CustomTable";
import React from "react";

interface DataRow {
	name: string;
	email: string;
	age: number;
}

function AddTransaction() {
	const columns = [
		{ header: "Name", accessor: "name" },
		{ header: "Email", accessor: "email" },
		{ header: "Age", accessor: "age" },
	];

	const data: DataRow[] = [
		{ name: "John Doe", email: "john@example.com", age: 28 },
		{ name: "Jane Smith", email: "jane@example.com", age: 34 },
		{ name: "Alex Johnson", email: "alex@example.com", age: 45 },
	];
	return (
		<div className="flex flex-col">
			{/* SEARCH and FILTERS */}
			<div className=""></div>
			{/* TRANSACTIONS */}
			<div className="">
				<CustomTable columns={columns} data={data} />
			</div>
		</div>
	);
}

export default AddTransaction;
