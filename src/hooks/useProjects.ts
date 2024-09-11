import { useQuery } from "@tanstack/react-query";
import { fetchProjects } from "../api/queries/projects";

export const useProjects = () => {
	return useQuery({
		queryKey: ["projects"],
		queryFn: fetchProjects,
	});
};
