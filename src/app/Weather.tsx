import { Header } from "@/components/Header";
import { PropertiesWeather } from "@/components/PropertiesWeather";
import { Temperature } from "@/components/Temperature";
import { ScrollView, Text, View } from "react-native";
import { CardWeek } from "@/components/CardWeek";
import { PropertiesSun } from "@/components/PropertiesSun";
import { useWeatherContext } from "@/context/UseWeather";

export function Weather() {
  const { weatherData } = useWeatherContext();
  const tempo = weatherData?.currently + "";

  const getContainerStyle = (currently: string) => {
    return currently === "dia" ? "bg-sky-500" : "bg-sky-700"; // Defina os estilos desejados para cada período do dia
  };

  return (
    <View className={`flex-1 p-12 ${getContainerStyle(tempo)} `}>
      <ScrollView>
        <Header />
        <Temperature />
        <View className="my-4">
          <PropertiesWeather />
          <PropertiesSun />
        </View>
        <CardWeek />
      </ScrollView>
    </View>
  );
}
