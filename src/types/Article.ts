export interface Article {
	_id: string;
	title: string;
	publicationDate: string;
	content: string;
	image: string;
	author: string;
	tags?: string[];
	readingTime?: number;
	summary?: string;
}
