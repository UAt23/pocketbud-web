import React from "react";

function AccountCard() {
	return (
		<div className="w-[22%] flex flex-col gap-4 bg-white rounded-xl p-4 shadow-xl">
			<div className="flex flex-col gap-1">
				<span className="text-xs xl:text-sm text-neutral-400 font-medium">
					Available Balance
				</span>
				<span className="text-xl xl:text-3xl text-blue-500 font-medium">
					24,563.54₺
				</span>
			</div>
			<div className="hidden xl:flex flex-row items-center justify-between">
				<div className="flex flex-col gap-1">
					<span className="text-sm font-semibold text-neutral-600">
						Monthly Budget
					</span>
					<span className="text-xs font-normal text-neutral-400">
						220₺ / Day
					</span>
				</div>
				<div className="flex flex-col gap-1">
					<span className="text-sm font-bold text-red-600">
						14,567.54₺
					</span>
					<span className="text-xs font-normal text-neutral-400 text-right">
						of 40,000₺
					</span>
				</div>
			</div>
		</div>
	);
}

export default AccountCard;
