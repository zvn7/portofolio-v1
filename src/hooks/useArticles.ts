import { fetchArticles } from "@/api/queries/articles";
import { useQuery } from "@tanstack/react-query";

export const useArticles = () => {
	return useQuery({
		queryKey: ["articles"],
		queryFn: fetchArticles,
	});
};
