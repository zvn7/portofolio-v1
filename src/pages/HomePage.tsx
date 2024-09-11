import { useArticles } from "@/hooks/useArticles";
import { useProjects } from "@/hooks/useProjects";

function HomePage() {
	const { data, isLoading, isError, error } = useArticles();

	if (isLoading) {
		return <div>Loading...</div>;
	}

	if (isError) {
		return <div>Error: {error?.message}</div>;
	}

	return (
		<div>
			<h1>Projects</h1>
			<ul>
				{data?.map((project) => (
					<li key={project._id}>
						<h2>{project.title}</h2>
					</li>
				))}
			</ul>
		</div>
	);
}

export default HomePage;
