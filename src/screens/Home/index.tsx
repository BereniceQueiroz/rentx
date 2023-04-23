
import React, { useEffect, useState } from 'react';
import { StatusBar } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { RFValue} from "react-native-responsive-fontsize";
import { Ionicons } from '@expo/vector-icons';
import { RectButton, PanGestureHandler } from 'react-native-gesture-handler';
import { useTheme } from 'styled-components';

import Animated, {
  useSharedValue,
  useAnimatedStyle,
  useAnimatedGestureHandler,
} from 'react-native-reanimated';

const ButtonAnimated = Animated.createAnimatedComponent(RectButton);

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
} from './styles';

export function Home(){
  const theme = useTheme();
  const [cars, setCars] = useState<CarDTO[]>([]);
  const [loading, setLoading] = useState(true);
  const navigation = useNavigation();

  const positionY = useSharedValue(0);
  const positionX = useSharedValue(0);

  const myCarsButtonStyle = useAnimatedStyle(() => {
    return {
      transform: [
        { translateX: positionX.value},
        { translateY: positionY.value}
      ]
    }
  })

  const onGestureEvent = useAnimatedGestureHandler({
    // ao Pressionar o botao
    onStart() {

    },
    // ao arrastar o botao
    onActive(event) {
      positionX.value = event.translationX;
      positionY.value = event.translationY;
    },
     // ao soltar o botao
     onEnd() {

     }
  })

  function handleCarDetails(car: CarDTO) {
    navigation.navigate('CarDetails', { car });
  }

  function handleOpenMyCars() {
    navigation.navigate('MyCars');
  }

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


  return (
    <Container>
      <StatusBar barStyle="light-content" translucent backgroundColor="transparent" />
      <Header>
        <HeaderContent>
          <LogoSVG width={RFValue(108)} height={RFValue(12)} />
          <TotalCars>Total de {cars.length} carros</TotalCars>
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
    {/* pega o movimento com os dedos feito pelo usuário */}
    <PanGestureHandler onGestureEvent={onGestureEvent}>
      <Animated.View
        style={[
          myCarsButtonStyle,
          {
            backgroundColor: theme.colors.main,
            position: 'absolute',
            bottom: 22,
            right: 22,
            height: 60,
            width: 60,
            borderRadius: 30,
            justifyContent: 'center',
            alignItems: 'center',
          }
        ]}
      >
        <ButtonAnimated onPress={handleOpenMyCars}>
          <Ionicons name="ios-car-sport" size={32} color={theme.colors.background_secondary} />
        </ButtonAnimated>
      </Animated.View>
    </PanGestureHandler>
    </Container>
  );
}
