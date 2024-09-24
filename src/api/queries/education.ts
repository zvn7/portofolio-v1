import { Education } from "@/types/Education";
import apiClient from "../apiClient";

export const fetchEducations = async (): Promise<Education[]> => {
	const { data } = await apiClient.get("/education");
	return data;
};
