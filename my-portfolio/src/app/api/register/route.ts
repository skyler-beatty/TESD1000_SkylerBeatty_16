import bcrypt from "bcryptjs";
import { NextResponse } from "next/server";

export async function POST(req: Request) {
	try {
		const { name, email, password } = await req.json();

		const existing = await sql`SELECT * FROM users WHERE email = ${email}`;
		if (existing.rows.length > 0) {
			return NextResponse.json({ message: "Email already in use" }, { status: 400 });
		}

		const hashedPassword = await bcrypt.hash(password, 10);

		await sql`
            INSERT INTO users (name, email, password)
            VALUES (${name}, ${email}, ${hashedPassword})
        `;

		return NextResponse.json({ message: "User created" }, { status: 201 });
	} catch (error) {
		return NextResponse.json({ message: "Internal server error" }, { status: 500 });
	}
}
