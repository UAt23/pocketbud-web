import React from "react";

function Transaction() {
	return (
		<div className="flex flex-row justify-between h-full bg-white shadow-sm rounded-md px-3 py-2">
			{/* Left */}
			<div className="flex flex-col gap-1">
				<span className="text-base text-neutral-700 font-medium">
					Category
				</span>
				<span className="text-xs text-neutral-400 font-normal">
					12/12/2024
				</span>
			</div>
			{/* Right */}
			<div className="flex flex-col gap-2">
				<span className="text-base text-neutral-700 font-medium">
					12,894.00₺
				</span>
				<span className="text-xs text-neutral-400 font-normal"></span>
			</div>
		</div>
	);
}

export default Transaction;
