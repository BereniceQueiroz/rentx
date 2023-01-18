import React from 'react';
import { useFonts, Inter_400Regular, Inter_500Medium} from "@expo-google-fonts/inter";
import { Archivo_400Regular, Archivo_500Medium, Archivo_600SemiBold} from "@expo-google-fonts/archivo";
import { ThemeProvider } from "styled-components"
import theme from '~/styles/theme';

import { CarDetails } from '~/screens/CarDetails';


export default function App() {
  const [fontsLoaded] = useFonts({
    Inter_400Regular,
    Inter_500Medium,
    Archivo_400Regular,
    Archivo_500Medium,
    Archivo_600SemiBold
  });

  if(!fontsLoaded) {
    return null;
  }

  return (
    <ThemeProvider theme={theme}>
      <CarDetails/>
    </ThemeProvider>
  );
}
