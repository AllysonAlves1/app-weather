import { Image, Text, TouchableOpacity, View } from "react-native";
import { Dialog, DialogContent, DialogTrigger } from "./Dialog";
import { Input } from "./Input";
import { Button } from "./Button";
import { useState } from "react";
import { useWeatherContext } from "@/context/UseWeather";
import axios from "axios";

export function City() {
  const { weatherData, updateWeatherData } = useWeatherContext();
  const [newCity, setNewCity] = useState("");

  const handleSearch = async () => {
    try {
      const response = await axios.get(
        `https://api.hgbrasil.com/weather?key=SUA-CHAVE&city_name=${newCity}`
      );
      const responseData = response.data;
      // Verifica se a chave 'results' existe na resposta da API
      if (responseData.results) {
        const resultsData = responseData.results;
        // Atualiza os dados do clima com os dados de 'results'
        updateWeatherData(resultsData);
      } else {
        console.error("Dados de resultados não encontrados na resposta da API");
      }
    } catch (error) {
      console.error("Erro ao buscar dados do clima:", error);
    }
  };

  return (
    <View className="h-8 w-40">
      <Dialog>
        <DialogTrigger>
          <TouchableOpacity className="flex-row items-center">
            <Image
              source={require("@/assets/location.png")}
              className="w-6 h-6"
            />
            <Text className="mx-2 text-lg text-white">{weatherData?.city_name || 'Localização'}</Text>
            <Image
              source={require("@/assets/expand-more.png")}
              className="w-4 h-4"
            />
          </TouchableOpacity>
        </DialogTrigger>
        <DialogContent>
          <Text className="font-bold mb-2">
            Digite o nome da Cidade e Estado:
          </Text>
          <Input
            placeholder="Example: São Paulo,SP"
            value={newCity}
            onChangeText={setNewCity}
          />
          <Button
            label="Buscar"
            labelClasses="font-bold text-center text-white"
            className="p-2 mt-2 rounded-md bg-sky-300 shadow-lg"
            onPress={handleSearch}
          />
        </DialogContent>
      </Dialog>
    </View>
  );
}
