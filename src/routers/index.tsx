import RootLayouts from "@/components/templates/RootLayouts";
import AboutPage from "@/pages/about/AboutPage";
import ContactPage from "@/pages/contact/ContactPage";
import HomePage from "@/pages/HomePage";
import ProjectPage from "@/pages/project/ProjectPage";
import { createBrowserRouter } from "react-router-dom";

export const router = createBrowserRouter([
	{
		path: "/",
		element: <RootLayouts />,
		children: [
			{
				path: "/",
				element: <HomePage />,
			},
			{
				path: "/about-me",
				element: <AboutPage />,
			},
			{
				path: "/projects",
				element: <ProjectPage />,
			},
			{
				path: "/contact-me",
				element: <ContactPage />,
			},
		],
	},
]);
