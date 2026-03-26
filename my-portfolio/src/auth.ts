import NextAuth from "next-auth";
import Credentials from "next-auth/providers/credentials";
import bcrypt from "bcryptjs";
import pool from "./lib/db";

export const { handlers, signIn, signOut, auth } = NextAuth({
	providers: [
		Credentials({
			credentials: {
				email: { label: "Email", type: "email" },
				password: { label: "Password", type: "password" },
			},
			async authorize(credentials) {
				try {
					const result = await pool.query("SELECT * FROM users WHERE email = $1", [credentials.email as string]);
					const user = result.rows[0];
					if (!user) return null;

					const passwordMatch = await bcrypt.compare(credentials.password as string, user.password);
					if (!passwordMatch) return null;

					return {
						id: user.id,
						email: user.email,
						name: user.name,
					};
				} catch (error) {
					return null;
				}
			},
		}),
	],
	pages: {
		signIn: "/login",
	},
	session: {
		strategy: "jwt",
	},
	callbacks: {
		async jwt({ token, user }) {
			if (user) token.id = user.id;
			return token;
		},
		async session({ session, token }) {
			if (token) session.user.id = token.id as string;
			return session;
		},
	},
});
