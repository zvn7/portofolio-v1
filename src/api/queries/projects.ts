import { Project } from "@/types/Project";
import apiClient from "../apiClient";

export const fetchProjects = async (): Promise<Project[]> => {
	const { data } = await apiClient.get("/projects");
	return data;
};
