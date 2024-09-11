import { Skill } from "@/types/Skill";
import apiClient from "../apiClient";

export const fetchSkills = async (): Promise<Skill[]> => {
	const { data } = await apiClient.get("/skills");
	return data;
};
