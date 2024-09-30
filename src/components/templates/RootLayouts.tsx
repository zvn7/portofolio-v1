import { Outlet } from "react-router-dom";

function RootLayouts() {
	return (
		<div className="bg-[#0F0F0F] text-white min-h-screen flex justify-center items-center">
			<div className="w-full max-w-screen-xl px-6 sm:px-10 py-10 sm:py-16 md:py-20">
				<Outlet />
			</div>
		</div>
	);
}

export default RootLayouts;
