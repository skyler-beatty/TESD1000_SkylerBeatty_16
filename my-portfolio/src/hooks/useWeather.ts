import { useEffect, useState } from "react";

interface WeatherPeriod {
	name: string;
	temperature: number;
	temperatureUnit: string;
	shortForecast: string;
	icon: string;
}

const useWeather = () => {
	const [weather, setWeather] = useState<WeatherPeriod | null>(null);
	const [loading, setLoading] = useState(true);
	const [error, setError] = useState<string | null>(null);

	useEffect(() => {
		const fetchWeather = async () => {
			try {
				const response = await fetch("https://api.weather.gov/gridpoints/PIH/30,20/forecast");
				if (!response.ok) {
					throw new Error("Failed to fetch weather data");
				}
				const data = await response.json();
				setWeather(data.properties.periods[0]);
			} catch (err) {
				setError(err instanceof Error ? err.message : "Unknown error");
			} finally {
				setLoading(false);
			}
		};

		fetchWeather();
	}, []);

	return { weather, loading, error };
};

export default useWeather;
