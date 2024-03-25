import { StatusBar } from "expo-status-bar";
import { View } from "react-native";
import { Weather } from "@/app/Weather";
import { WeatherProvider, useWeatherContext } from "@/context/UseWeather";

export default function App() {
  return (
    <WeatherProvider>
      <Weather />
      <StatusBar style="light" />
    </WeatherProvider>
  );
}
