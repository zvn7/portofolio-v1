import { Outlet } from "react-router-dom";

function RootLayouts() {
	return (
		<div className="px-6 sm:px-10 md:px-20 lg:px-32 xl:px-44 py-10 sm:py-16 md:py-20">
			<Outlet />
		</div>
	);
}

export default RootLayouts;
