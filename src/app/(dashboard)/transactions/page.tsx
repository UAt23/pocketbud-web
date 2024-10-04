"use client"

import CustomTable from "@/components/CustomTable";
import Dropdown from "@/components/Dropdown";
import SearchBox from "@/components/SearchBox";
import Image from "next/image";
import React, { useState } from "react";

interface DataRow {
	name: string;
	email: string;
	age: number;
}

function AddTransaction() {
	const [isFilterOpen, setFilterOpen] = useState(false);

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

	const toggleFilterMenu = () => {
		setFilterOpen(!isFilterOpen);
	}

	return (
		<div className="flex flex-col">
			{/* SEARCH and FILTERS */}
			<div className="flex flex-col gap-2 px-6 pt-4">
				<div className="flex items-center justify-between">
					<SearchBox />
					<div className="flex flex-row gap-4">
						<div className="flex flex-row items-center gap-2 p-2 bg-transparent ring-2 ring-neutral-600 rounded-lg shadow-md hover:shadow-lg hover:-translate-y-0.5 active:shadow-md active:hover:-translate-y-0 transition-all select-none">
							<Image
								src="/icons/plus-square-rounded.svg"
								alt="Filter Icons"
								width={24}
								height={24}
							/>
							<span className="text-neutral-600 text-sm">
								Add Transaction
							</span>
						</div>
						<div onClick={toggleFilterMenu} className="flex items-center justify-center w-10 p-2 bg-white rounded-lg shadow-sm hover:shadow-md active:shadow-sm transition-all select-none">
							<Image
								src="/icons/filter.svg"
								alt="Filter Icons"
								width={22}
								height={22}
							/>
						</div>
					</div>
				</div>
				<div className={`${isFilterOpen ? "flex" : "hidden" } flex-row items-center justify-end gap-4`}>
					<Dropdown id="12" title="Category"/>
					<Dropdown id="12" title="Account"/>
					<Dropdown id="12" title="Amount"/>
					<Dropdown id="12" title="Date Range"/>
					<Dropdown id="12" title="Sort By"/>
				</div>
			</div>
			{/* TRANSACTIONS */}
			<div className="">
				<CustomTable columns={columns} data={data} />
			</div>
		</div>
	);
}

export default AddTransaction;
