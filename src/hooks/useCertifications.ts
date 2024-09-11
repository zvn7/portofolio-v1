import { fetchCertifications } from "@/api/queries/certifications";
import { Certification } from "@/types/Certification";
import { useQuery } from "@tanstack/react-query";

export const useCertifications = () => {
	return useQuery<Certification[], Error>({
		queryKey: ["certifications"],
		queryFn: fetchCertifications,
	});
};
