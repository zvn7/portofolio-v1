import { useState } from "react";
import Header from "@/components/molecules/Header";
import Tabs from "@/components/molecules/Tabs";
import { FolderCode, Globe, Loader2 } from "lucide-react";
import {
	Card,
	CardContent,
	CardDescription,
	CardFooter,
	CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { useProjects } from "@/hooks/useProjects";
import StackIcon from "tech-stack-icons";

function ProjectPage() {
	const [activeTab, setActiveTab] = useState("All");
	const { data: projects, isLoading: isLoadingProjects } = useProjects();

	const filteredProjects =
		activeTab === "All"
			? projects
			: projects?.filter((project) => project.category.includes(activeTab));

	return (
		<div className="min-h-screen space-y-6">
			<Header title="My Projects" backLink="/" />

			<Tabs
				activeTab={activeTab}
				setActiveTab={setActiveTab}
				tabs={["All", "Website", "Application", "API", "UI/UX"]}
			/>

			<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
				{filteredProjects?.map((project) => (
					<Card
						className="p-4 space-y-4 bg-neutral-800 shadow-lg border-none text-white"
						key={project.id}
					>
						{isLoadingProjects ? (
							<div className="flex items-center justify-center text-white">
								<Loader2 className="h-6 w-6 animate-spin" />
							</div>
						) : (
							<>
								<img
									src={project.image}
									className="rounded-xl"
									alt={project.title}
								/>
								<CardContent className="space-y-2">
									<CardTitle>{project.title}</CardTitle>
									<CardDescription>{project.description}</CardDescription>
									<div className="flex flex-wrap space-x-2">
										{project.technologies?.[0].split(", ").map((tech) => (
											<div key={tech.trim()} className="flex items-center">
												<StackIcon name={tech.trim()} className="w-6 h-6" />
											</div>
										))}
									</div>
								</CardContent>
							</>
						)}
						<CardFooter className="flex gap-2">
							{project.url && (
								<Button
									className="w-full space-x-2"
									onClick={() => window.open(project.url, "_blank")}
								>
									<Globe className="h-4 w-4" /> <span>Preview</span>
								</Button>
							)}
							{project.repository && (
								<Button
									className="w-full space-x-2"
									onClick={() => window.open(project.repository, "_blank")}
								>
									<FolderCode className="h-4 w-4" /> <span>Repo</span>
								</Button>
							)}
						</CardFooter>
					</Card>
				))}
			</div>
		</div>
	);
}

export default ProjectPage;
