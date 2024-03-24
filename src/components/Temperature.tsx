import { useWeatherContext } from "@/context/UseWeather";
import { Image, Text, View } from "react-native";

export function Temperature() {
  const { weatherData } = useWeatherContext();
  // Função para obter o ícone correspondente ao código de condição do clima
  const getWeatherIcon = (conditionCode: string) => {
    switch (conditionCode) {
      case "storm":
        return require("@/assets/storm.png");
      case "cloudly_day":
        return require("@/assets/cloudly_day.png");
      case "rain":
        return require("@/assets/rain.png");
      case "cloud":
        return require("@/assets/cloud.png");
      default:
        return require("@/assets/clear_day.png");
    }
  };
  

  // Renderização condicional do ícone com base no código de condição do clima
  const weatherIcon = weatherData
    ? getWeatherIcon(weatherData.condition_slug)
    : null;

  return (
    <View className="flex-1 items-center">
      {weatherIcon && <Image source={weatherIcon} />}
      {weatherData && (
        <>
          <Text className="text-6xl mt-4 text-white">{weatherData.temp}°</Text>
          <View className="items-center">
            <Text className="text-lg text-white">
              {weatherData.description}
            </Text>
            <Text className="text-lg text-white">
              {weatherData.forecast[0].max}° / {weatherData.forecast[0].min}°
            </Text>
          </View>
        </>
      )}
    </View>
  );
}
