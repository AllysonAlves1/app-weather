import { Header } from "@/components/Header";
import { PropertiesWeather } from "@/components/PropertiesWeather";
import { Temperature } from "@/components/Temperature";
import { ScrollView, Text, View } from "react-native";
import { CardWeek } from "@/components/CardWeek";
import { PropertiesSun } from "@/components/PropertiesSun";

export function Weather() {
  return (
    <ScrollView>
      <View className="flex-1 m-12">
        <Header />
        <View className="flex-1 mt-4">
          <Temperature />
        </View>
        <View className="flex-1 mt-4">
          <PropertiesWeather />
          <PropertiesSun />
        </View>
        <View className="flex-1">
          <CardWeek />
        </View>
      </View>
    </ScrollView>
  );
}
