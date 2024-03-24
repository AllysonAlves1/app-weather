import { View } from "react-native";
import { Badge } from "./Badge";
import { useWeatherContext } from "@/context/UseWeather";

export function PropertiesSun() {
  const { weatherData } = useWeatherContext(); // Obtém os dados do clima do contexto

  return (
    <View className="bg-neutral-900/10 rounded-full shadow-lg mt-2">
      <View className="w-full items-center flex-row justify-between flex-wrap">
        <Badge
          label={weatherData?.sunrise.toString() + ""}
          labelClasses="ml-2 text-white"
          icon={require("@/assets/sunrise.png")}
          className="mx-2 p-2 flex-row items-center justify-center"
        />
        <Badge
          label={weatherData?.sunset.toString() + ""}
          labelClasses="ml-2 text-white"
          icon={require("@/assets/sunset.png")}
          className="mx-2 p-2 flex-row items-center justify-center"
        />
      </View>
    </View>
  );
}
