import { Experience } from "@/types/Experience";
import apiClient from "../apiClient";

export const fetchExperiences = async (): Promise<Experience[]> => {
	const { data } = await apiClient.get("/experiences");
	return data;
};
