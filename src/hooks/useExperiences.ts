import { fetchExperiences } from "@/api/queries/experiences";
import { Experience } from "@/types/Experience";
import { useQuery } from "@tanstack/react-query";

export const useExperiences = () => {
	return useQuery<Experience[], Error>({
		queryKey: ["experiences"],
		queryFn: fetchExperiences,
	});
};
