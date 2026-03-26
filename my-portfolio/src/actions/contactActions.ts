"use server";

export const saveContactInquiry = async (inquiry: { name: string; email: string; message: string }) => {
	try {
		await sql`
            INSERT INTO inquiries (name, email, message)
            VALUES (${inquiry.name}, ${inquiry.email}, ${inquiry.message})
        `;
	} catch (error) {
		throw new Error("Could not save inquiry");
	}
};
