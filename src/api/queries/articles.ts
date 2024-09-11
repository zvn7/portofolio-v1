import { Article } from "@/types/Article";
import apiClient from "../apiClient";

export const fetchArticles = async (): Promise<Article[]> => {
	const { data } = await apiClient.get("/articles");
	return data;
};
