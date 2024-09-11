import { RouterProvider } from "react-router-dom";
import { router } from "./routers";

function App() {
	return (
		<div className="App bg-gray-50">
			<div className="container mx-auto p-12">
				<RouterProvider router={router} />
			</div>
		</div>
	);
}

export default App;
