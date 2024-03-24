import { View } from "react-native";
import { Badge } from "./Badge";
import { useWeatherContext } from "@/context/UseWeather";

export function PropertiesWeather() {
  const { weatherData } = useWeatherContext(); // Obtém os dados do clima do contexto

  return (
    <View className="bg-neutral-900/10 rounded-full shadow-lg">
      <View className="w-full items-center flex-row justify-between flex-wrap">
        <Badge
          label={weatherData?.rain.toString() + "%"}  
          labelClasses="ml-2 text-white"
          icon={require("@/assets/grain.png")}
          className="mx-2 p-2 flex-row items-center justify-center"
        />
        <Badge
          label={weatherData?.humidity.toString() + "%"}
          labelClasses="ml-2 text-white"
          icon={require("@/assets/dew-point.png")}
          className="mx-2 p-2 flex-row items-center justify-center"
        />
        <Badge
          label={weatherData?.wind_speedy.toString() + ""}
          labelClasses="ml-2 text-white"
          icon={require("@/assets/wind_speedy.png")}
          className="mx-2 p-2 flex-row items-center justify-center"
        />
      </View>
    </View>
  );
}
