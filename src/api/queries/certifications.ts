import { Certification } from "@/types/Certification";
import apiClient from "../apiClient";

export const fetchCertifications = async (): Promise<Certification[]> => {
	const { data } = await apiClient.get("/certifications");
	return data;
};
