"use client";

import Image from "next/image";
import React, { useState } from "react";

function SearchBox() {
	const [isSearchFocused, setSearchFocus] = useState(false)

   const handleFocus = () => {
		
		setSearchFocus(true);
	}
	
	const handleBlur = () => {
		
		setSearchFocus(false);
	}

	return (
		<div
			className={`${
				isSearchFocused ? "border-neutral-700" : "border-transparent"
			} border-2 flex flex-row gap-2 bg-white w-72 p-2 rounded-lg shadow-sm select-none`}
		>
			<Image
				src="/icons/search.svg"
				alt="Search Icon"
				width={18}
				height={18}
			/>
			<input
				placeholder="Search"
				type="text"
				className="w-full bg-transparent h-8 outline-none text-neutral-600"
				onFocus={handleFocus}
				onBlur={handleBlur}
			/>
		</div>
	);
}

export default SearchBox;
