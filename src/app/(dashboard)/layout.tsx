import Menu from "@/components/Menu";
import Topbar from "@/components/Topbar";
import Image from "next/image";
import Link from "next/link";

export default function DashboardLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<div className="h-screen flex">
			{/* LEFT */}
			<div className="w-[14%] md:w-[8%] lg:w-[16%] xl:w-[14%] p-4 bg-neutral-900">
				<Link
					href="/"
					className="flex items-center justify-start gap-2"
				>
					<Image src="/icons/wallet.svg" alt="logo" width={32} height={32} />
					<span className="hidden lg:block text-2xl text-neutral-100 font-bold">PocketBud</span>
				</Link>
				<Menu />
			</div>
			{/* RIGHT */}
			<div className="w-[86%] md:w-[92%] lg:w-[84%] xl:w-[86%] bg-[#f5f5f7] overflow-auto flex flex-col">
				<Topbar />
				{children}
			</div>
		</div>
	);
}
