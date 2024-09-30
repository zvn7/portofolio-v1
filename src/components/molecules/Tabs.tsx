interface TabsProps {
	activeTab: string;
	setActiveTab: (tab: string) => void;
	tabs: string[];
	className?: string;
}

const Tabs = ({ activeTab, setActiveTab, tabs, className }: TabsProps) => {
	return (
		<div className={`flex flex-wrap items-center justify-center ${className}`}>
			<div className="flex overflow-x-auto overflow-y-hidden whitespace-nowrap dark:border-gray-700">
				{tabs.map((tab) => (
					<button
						key={tab}
						onClick={() => setActiveTab(tab)}
						className={`inline-flex items-center capitalize h-10 px-4 -mb-px text-sm sm:text-base text-center whitespace-nowrap focus:outline-none
            ${
							activeTab === tab
								? "text-blue-600 border-b-2 border-blue-700 dark:border-blue-700 dark:text-blue-300"
								: "text-white border-b-2 border-transparent hover:border-gray-400 dark:text-white"
						}`}
					>
						{tab}
					</button>
				))}
			</div>
		</div>
	);
};

export default Tabs;
