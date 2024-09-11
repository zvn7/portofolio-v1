import { fetchSkills } from "@/api/queries/skills";
import { Skill } from "@/types/Skill";
import { useQuery } from "@tanstack/react-query";

export const useSkills = () => {
	return useQuery<Skill[], Error>({
		queryKey: ["skills"],
		queryFn: fetchSkills,
	});
};
