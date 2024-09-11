export interface Skill {
	id: string;
	name: string;
	category: string; // frontend, backend, database, etc.
	level?: string; // Opsional jika level bisa kosong, default adalah "beginner"
}
