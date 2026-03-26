"use server";
import pool from "../lib/db";

export const saveContactInquiry = async (inquiry: { name: string; email: string; message: string }) => {
	try {
		await pool.query("INSERT INTO inquiries (name, email, message) VALUES ($1, $2, $3)", [
			inquiry.name,
			inquiry.email,
			inquiry.message,
		]);
	} catch (error) {
		throw new Error("Could not save inquiry");
	}
};
