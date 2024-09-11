import { fetchEducations } from "@/api/queries/education";
import { Education } from "@/types/Education";
import { useQuery } from "@tanstack/react-query";

export const useEducations = () => {
	return useQuery<Education[], Error>({
		queryKey: ["educations"],
		queryFn: fetchEducations,
	});
};
