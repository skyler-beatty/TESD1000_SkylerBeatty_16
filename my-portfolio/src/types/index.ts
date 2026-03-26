export interface Article {
	id: string;
	title: string;
	slug: string;
	excerpt: string;
	content: string;
	createdAt: Date;
	updatedAt: Date;
}

export interface Comment {
	id: string;
	articleId: string;
	userId: string;
	author: string;
	content: string;
	createdAt: Date;
	updatedAt: Date;
}

export interface UserInquiry {
	id: string;
	name: string;
	email: string;
	message: string;
	createdAt: Date;
}
