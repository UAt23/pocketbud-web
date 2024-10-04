"use client";

import {
	Popover,
	PopoverContent,
	PopoverTrigger,
} from "@/components/ui/popover";
import Image from "next/image";
import React from "react";

// TODO Create propType and get input to create the form

export function CreatePopover() {
   const [isOpened, changeIsOpen] = React.useState(false)

	return (
		<Popover onOpenChange={(open) => changeIsOpen(open)}>
			<PopoverTrigger asChild>
				<div className={`${!isOpened ? "hover:shadow-xl hover:bg-white active:shadow-lg" : "bg-white shadow-lg"} flex gap-2 items-center cursor-pointer p-2 rounded-xl transition-all select-none`}>
					<Image
						src="/icons/plus-square-rounded.svg"
						alt="add icon"
						width={24}
						height={24}
					/>
					<p className="text-xs text-[#374151] font-semibold">
						New Budget
					</p>
				</div>
			</PopoverTrigger>
			<PopoverContent side="left" align="start" className="w-full">
				<div className="grid gap-4">
					<div className="space-y-2">
						<h4 className="font-medium leading-none">Create new budget</h4>
						<p className="text-sm text-muted-foreground">
							Select the accounts you want for this budget.
						</p>
					</div>
					<div className="grid gap-2">
						<div className="grid grid-cols-3 items-center gap-4">
							<label htmlFor="width">Width</label>
							<input
								id="width"
								defaultValue="100%"
								className="col-span-2 h-8"
							/>
						</div>
						<div className="grid grid-cols-3 items-center gap-4">
							<label htmlFor="maxWidth">Max. width</label>
							<input
								id="maxWidth"
								defaultValue="300px"
								className="col-span-2 h-8"
							/>
						</div>
						<div className="grid grid-cols-3 items-center gap-4">
							<label htmlFor="height">Height</label>
							<input
								id="height"
								defaultValue="25px"
								className="col-span-2 h-8"
							/>
						</div>
						<div className="grid grid-cols-3 items-center gap-4">
							<label htmlFor="maxHeight">Max. height</label>
							<input
								id="maxHeight"
								defaultValue="none"
								className="col-span-2 h-8"
							/>
						</div>
					</div>
				</div>
			</PopoverContent>
		</Popover>
	);
}
