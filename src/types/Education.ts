export interface Education {
	id: string;
	institution: string;
	fieldOfStudy?: string; // Opsional jika fieldOfStudy bisa kosong
	startDate: string; // Format tanggal dalam ISO string
	endDate?: string; // Opsional jika endDate bisa kosong
	description?: string; // Opsional jika description bisa kosong
}
