export default function Loading() {
	return (
		<div className="max-w-3xl mx-auto">
			<div className="animate-pulse">
				<div className="h-10 bg-gray-200 rounded w-3/4 mb-6"></div>
				<div className="space-y-3">
					<div className="h-4 bg-gray-200 rounded"></div>
					<div className="h-4 bg-gray-200 rounded"></div>
					<div className="h-4 bg-gray-200 rounded w-5/6"></div>
				</div>
			</div>
		</div>
	);
}
