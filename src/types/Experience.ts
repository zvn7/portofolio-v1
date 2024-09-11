export interface Experience {
	id: string;
	company: string;
	position: string;
	startDate: string; // Format tanggal dalam ISO string
	endDate?: string; // Opsional jika endDate bisa kosong
	description?: string; // Opsional jika description bisa kosong
}
