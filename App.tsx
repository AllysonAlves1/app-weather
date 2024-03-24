import { StatusBar } from "expo-status-bar";
import { View } from "react-native";
import { Weather } from "@/app/Weather";
import { WeatherProvider } from "@/context/UseWeather";

export default function App() {
  return (
    <WeatherProvider>
      <View className="flex-1 bg-sky-700">
        <Weather />
        <StatusBar style="light" />
      </View>
    </WeatherProvider>
  );
}
