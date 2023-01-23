
import React, { useEffect, useState } from 'react';
import { StatusBar } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { RFValue} from "react-native-responsive-fontsize";
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
  CarList
} from './styles';

export function Home(){
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

    </Container>
  );
}
