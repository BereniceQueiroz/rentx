
import React, { useEffect, useState } from 'react';
import { StatusBar } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { RFValue} from "react-native-responsive-fontsize";
import { Ionicons } from '@expo/vector-icons'
import LogoSVG from "~/assets/logo.svg";
import { api } from '~/services/api';
import { CarDTO } from "~/dtos/CarDTO";
import { Car } from "~/components/Car";
import { Load } from "~/components/Load";
import {
  Container,
  Header,
  TotalCars,
  HeaderContent,
  CarList,
  MyCarsButton
} from './styles';
import { useTheme } from 'styled-components';

export function Home(){
  const theme = useTheme();
  const [cars, setCars] = useState<CarDTO[]>([]);
  const [loading, setLoading] = useState(true);
  const navigation = useNavigation();


  useEffect(() => {
    async function fetchCars() {
      try {
        const response = await api.get('/cars');
        setCars(response.data);
      } catch (error) {
        console.error(error);
      } finally {
        setLoading(false);
      }
    }
    fetchCars();
  }, []);

  function handleCarDetails(car: CarDTO) {
    navigation.navigate('CarDetails', { car });
  }

  function handleOpenMyCars() {
    navigation.navigate('MyCars');
  }

  return (
    <Container>
      <StatusBar barStyle="light-content" translucent backgroundColor="transparent" />
      <Header>
        <HeaderContent>
          <LogoSVG width={RFValue(108)} height={RFValue(12)} />
          <TotalCars>Total de 12 carros</TotalCars>
        </HeaderContent>
      </Header>

      { loading
        ? <Load />
        : <CarList
            data={cars}
            keyExtractor={item => (item.id)}
            renderItem={({item }) => <Car data={item} onPress={() => handleCarDetails(item)} /> }
          />
      }

      <MyCarsButton onPress={handleOpenMyCars}>
        <Ionicons name="ios-car-sport" size={32} color={theme.colors.background_secondary} />
      </MyCarsButton>

    </Container>
  );
}
