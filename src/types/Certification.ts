export interface Certification {
	id: string;
	title: string;
	provider: string;
	dateObtained: string; // Format tanggal dalam ISO string
	certificateUrl?: string; // Opsional jika URL mungkin tidak ada
}
