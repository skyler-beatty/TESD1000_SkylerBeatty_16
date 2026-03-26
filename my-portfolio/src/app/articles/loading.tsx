export default function Loading() {
	return (
		<div className="flex flex-col gap-4">
			<h1 className="text-3xl font-bold mb-6">Articles</h1>
			{[1, 2, 3].map((i) => (
				<div key={i} className="border rounded p-4 animate-pulse">
					<div className="h-6 bg-gray-200 rounded w-3/4 mb-2"></div>
					<div className="h-4 bg-gray-200 rounded w-full mb-2"></div>
					<div className="h-4 bg-gray-200 rounded w-1/4"></div>
				</div>
			))}
		</div>
	);
}
