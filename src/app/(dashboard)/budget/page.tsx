"use client";

import Image from "next/image";
import React from "react";
import AccountCard from "@/components/AccountCard";
import { CreatePopover } from '../../../components/CreatePopover';

function Budget() {
	const [selectedBudget, selectBudget] = React.useState<null | number>(null);

	const budgetSelection = (index: number) => {
		selectBudget(index);
	};

	return (
		<div className="flex flex-row gap-2 p-6 py-4">
			<div className="h-full w-1.5 rounded-sm bg-neutral-400"></div>
			<div className="flex flex-col gap-8 w-full">
				<div className="flex flex-col">
					<div className="flex flex-row justify-between items-center">
						<div className="flex gap-2 items-center cursor-pointer p-2 rounded-xl transition-all select-none">
							<p className="text-[#374151] text-sm font-semibold">
								Select Budget
							</p>
							{selectedBudget != null ? (
								<Image
									src="/icons/checkmark-circle.svg"
									alt="add icon"
									width={24}
									height={24}
								/>
							) : (
								<></>
							)}
						</div>
						<CreatePopover />
						{/* <div className="flex gap-2 items-center cursor-pointer p-2 rounded-xl transition-all hover:shadow-xl hover:bg-white active:shadow-lg select-none">
							<Image
								src="/icons/plus-square-rounded.svg"
								alt="add icon"
								width={24}
								height={24}
							/>
							<p className="text-xs text-[#374151] font-semibold">
								New Budget
							</p>
						</div> */}
					</div>
					<div className="flex flex-col">
						<div className="flex flex-row gap-4 px-2 pt-2 pb-4 overflow-x-auto ">
							<div
								onClick={() => budgetSelection(1)}
								className={`${
									selectedBudget === 1
										? "border-4 border-neutral-400"
										: "cursor-pointer hover:-translate-y-1"
								} min-w-60 h-32 bg-white shadow-md rounded-lg transition-all`}
							></div>
							<div
								onClick={() => budgetSelection(2)}
								className={`${
									selectedBudget === 2
										? "border-4 border-neutral-400"
										: "cursor-pointer hover:-translate-y-1"
								} min-w-60 h-32 bg-white shadow-md rounded-lg transition-all`}
							></div>
						</div>
					</div>
				</div>
				<div className="flex flex-col">
					<div className="flex flex-row justify-between items-center">
						<div className="flex gap-2 items-center cursor-pointer p-2 rounded-xl transition-all select-none">
							<p className="text-[#374151] text-sm font-semibold">
								Select Plan
							</p>
							{selectedBudget != null ? (
								<Image
									src="/icons/checkmark-circle.svg"
									alt="add icon"
									width={24}
									height={24}
								/>
							) : (
								<></>
							)}
						</div>
						<div className="flex gap-2 items-center cursor-pointer p-2 rounded-xl transition-all hover:shadow-xl hover:bg-white active:shadow-lg select-none">
							<Image
								src="/icons/plus-square-rounded.svg"
								alt="add icon"
								width={24}
								height={24}
							/>
							<p className="text-xs text-[#374151] font-semibold">
								New Plan
							</p>
						</div>
					</div>
					<div className="flex flex-col">
						<div className="flex flex-row gap-4 px-2 pt-2 pb-4 overflow-x-auto ">
							<div
								onClick={() => budgetSelection(1)}
								className={`${
									selectedBudget === 1
										? "border-4 border-neutral-400"
										: "cursor-pointer hover:-translate-y-1"
								} min-w-60 h-32 bg-white shadow-md rounded-lg transition-all`}
							></div>
							<div
								onClick={() => budgetSelection(2)}
								className={`${
									selectedBudget === 2
										? "border-4 border-neutral-400"
										: "cursor-pointer hover:-translate-y-1"
								} min-w-60 h-32 bg-white shadow-md rounded-lg transition-all`}
							></div>
						</div>
					</div>
				</div>
				<div className="grid grid-cols-12 grid-rows-4">
					<div className="col-span-full flex w-full gap-2 justify-between items-center row-start-1 row-end-2 p-2 select-none">
						<div className="flex gap-2 items-center">
							<p className="text-[#374151] text-sm font-semibold">
								Create Buckets
							</p>
							{selectedBudget != null ? (
								<Image
									src="/icons/checkmark-circle.svg"
									alt="add icon"
									width={24}
									height={24}
								/>
							) : (
								<></>
							)}
						</div>
						<div className="flex gap-2 items-center cursor-pointer p-2 rounded-xl transition-all hover:shadow-xl hover:bg-white active:shadow-lg select-none">
							<Image
								src="/icons/plus-square-rounded.svg"
								alt="add icon"
								width={24}
								height={24}
							/>
							<p className="text-xs text-[#374151] font-semibold">
								New Bucket
							</p>
						</div>
					</div>
					<div className="flex gap-2 row-start-2 row-end-3">
						<div className="flex">
							<input type="text" className="text-neutral-800" />
						</div>
					</div>
					<div className="col-span-full flex w-full gap-2 justify-between items-center row-start-3 row-end-4 p-2 select-none">
						<div className="flex gap-2 items-center">
							<p className="text-[#374151] text-sm font-semibold">
								Create Allocations
							</p>
							{selectedBudget != null ? (
								<Image
									src="/icons/checkmark-circle.svg"
									alt="add icon"
									width={24}
									height={24}
								/>
							) : (
								<></>
							)}
						</div>
						<div className="flex gap-2 items-center cursor-pointer p-2 rounded-xl transition-all hover:shadow-xl hover:bg-white active:shadow-lg select-none">
							<Image
								src="/icons/plus-square-rounded.svg"
								alt="add icon"
								width={24}
								height={24}
							/>
							<p className="text-xs text-[#374151] font-semibold">
								New Allocation
							</p>
						</div>
					</div>
					<div className="flex row-start-4 row-end-5">C</div>
				</div>
			</div>
		</div>
	);
}

export default Budget;
