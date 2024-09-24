import { RouterProvider } from "react-router-dom";
import { router } from "./routers";

function App() {
	return (
		<div className="bg-[#0F0F0F] text-white ">
			<RouterProvider router={router} />
		</div>
	);
}

export default App;
