import Image from "next/image";
import Link from "next/link";

const menuItems = [
	{
		title: "MENU",
		items: [
			{
				icon: "/icons/home.svg",
				label: "Home",
				href: "/summary",
			},
			{
				icon: "/icons/arrow-up-down.svg",
				label: "Transactions",
				href: "/transactions",
			},
			{
				icon: "/icons/budget.svg",
				label: "Budget",
				href: "/budget",
			},
		],
	},
	// {
	// 	title: "OTHER",
	// 	items: [
	// 		{
	// 			icon: "/profile.png",
	// 			label: "Profile",
	// 			href: "/profile",
	// 			visible: ["admin", "teacher", "student", "parent"],
	// 		},
	// 		{
	// 			icon: "/setting.png",
	// 			label: "Settings",
	// 			href: "/settings",
	// 			visible: ["admin", "teacher", "student", "parent"],
	// 		},
	// 		{
	// 			icon: "/logout.png",
	// 			label: "Logout",
	// 			href: "/logout",
	// 			visible: ["admin", "teacher", "student", "parent"],
	// 		},
	// 	],
	// },
];

const Menu = () => {
	return (
		<div className="mt-8 text-sm">
			{menuItems.map((i) => (
				<div className="flex flex-col gap-2" key={i.title}>
					<span className="hidden lg:block text-neutral-100 font-semibold mt-2 border-b-2 border-neutral-400">
						{i.title}
					</span>
					{i.items.map((item) => {
                  return (
                     <Link
                        href={item.href}
                        key={item.label}
                        className="flex items-center justify-center lg:justify-start gap-4 text-neutral-200 py-2 md:px-2 rounded-md hover:bg-neutral-800"
                     >
                        <Image
                           src={item.icon}
                           alt=""
                           width={24}
                           height={24}
                        />
                        <span className="hidden lg:block text-white">
                           {item.label}
                        </span>
                     </Link>
                  );
					})}
				</div>
			))}
		</div>
	);
};

export default Menu;
