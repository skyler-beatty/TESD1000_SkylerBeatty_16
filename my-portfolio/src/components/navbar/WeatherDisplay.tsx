"use client";
import useWeather from "../../hooks/useWeather";

export default function WeatherDisplay() {
	const { weather, loading, error } = useWeather();

	if (loading) return <span className="text-sm">Loading weather...</span>;
	if (error) return <span className="text-sm">Weather unavailable</span>;

	return (
		<div className="flex items-center gap-2 text-sm">
			<img src={weather?.icon} alt={weather?.shortForecast} className="w-8 h-8" />
			<span>
				{weather?.temperature}°{weather?.temperatureUnit}
			</span>
			<span>{weather?.shortForecast}</span>
		</div>
	);
}
