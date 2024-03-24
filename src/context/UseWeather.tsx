import { Properties } from '@/utils/properties';
import React, { createContext, useState, useContext, ReactNode } from 'react';

// Definir o tipo para o contexto
interface WeatherContextType {
  weatherData: Properties | null;
  updateWeatherData: (data: Properties) => void;
}

// Criar o contexto
const WeatherContext = createContext<WeatherContextType | undefined>(undefined);

// Provedor do contexto
export const WeatherProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [weatherData, setWeatherData] = useState<Properties | null>(null);

  const updateWeatherData = (newData: Properties) => {
    setWeatherData(newData);
  };

  return (
    <WeatherContext.Provider value={{ weatherData, updateWeatherData }}>
      {children}
    </WeatherContext.Provider>
  );
};

// Hook para consumir o contexto
export const useWeatherContext = () => {
  const context = useContext(WeatherContext);
  if (!context) {
    throw new Error('useWeatherContext must be used within a WeatherProvider');
  }
  return context;
};
