import { useWeatherContext } from "@/context/UseWeather";
import { Image, Text, View } from "react-native";
import { Badge } from "./Badge";

export function CardWeek() {
  const { weatherData } = useWeatherContext();
  const forecast = weatherData?.forecast || [];
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

  return (
    <View className="w-full items-center justify-center bg-neutral-900/10 shadow-lg py-2 px-4 rounded-xl mt-4">
      <View className="w-full flex-row justify-between items-center mb-2">
        <Text className="text-lg font-bold text-white">Next Forecast</Text>
        <Image source={require("@/assets/calendar.png")} />
      </View>

      {forecast.map((day, index) => (
        <View
          key={index}
          className="w-full flex-row justify-between items-center"
        >
          <Text className="text-slate-50 w-8">
            {day.weekday.substring(0, 3)}
          </Text>
          <Badge
            label={day.rain_probability + "%"}
            icon={require("@/assets/rainmeter.png")}
            labelClasses="ml-2 text-white w-8"
            className="mx-2 p-2 flex-row items-center justify-center"
          />
          <Image
            source={
              getWeatherIcon(day.condition) || require("@/assets/clear_day.png")
            }
            className="h-6 w-6"
          />
          <View className="flex-row items-center">
            <Text className="text-slate-50">{day.max} </Text>
            <Text className="text-slate-300 text-xs">{day.min}</Text>
          </View>
        </View>
      ))}
    </View>
  );
}
