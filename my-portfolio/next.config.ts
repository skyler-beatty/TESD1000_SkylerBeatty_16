import type { NextConfig } from "next";

const nextConfig: NextConfig = {
	images: {
		remotePatterns: [
			{
				protocol: "https",
				hostname: "skylerbeatty.huskisites.com",
			},
		],
	},
};

export default nextConfig;
