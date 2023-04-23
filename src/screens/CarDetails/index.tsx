import React from 'react';
import { StatusBar } from 'react-native';
import { useNavigation, useRoute } from '@react-navigation/native';
import { getStatusBarHeight } from 'react-native-iphone-x-helper';
import Animated, {
  useSharedValue,
  useAnimatedScrollHandler,
  useAnimatedStyle,
  interpolate,
  Extrapolate
} from 'react-native-reanimated';
import { Acessory } from '~/components/Acessory';
import { BackButton } from '~/components/BackButton';
import { ImageSlider } from "~/components/ImageSlider";
import { Button } from '~/components/Button';

import { getAccessoryIcon } from '~/utils/getAccessoryIcon';
import { CarDTO } from '~/dtos/CarDTO';

import {
  Container,
  Header,
  CarImages,
  Content,
  Details,
  Description,
  Brand,
  Name,
  Rent,
  Period,
  Price,
  About,
  Accessories,
  Footer
} from './styles';



interface Params {
  car: CarDTO
}

export function CarDetails(){
  const navigation = useNavigation();
  const route = useRoute();
  const { car } = route?.params as Params;
  const statusBarHeight = getStatusBarHeight();

  const scrollY = useSharedValue(0);

  const scrollHandler = useAnimatedScrollHandler(event => {
    scrollY.value = event.contentOffset.y
  })

  const headerStyleAnimation = useAnimatedStyle(() => {
    return {
      height: interpolate(
        scrollY.value,
        [0, 200],
        [200, statusBarHeight + 50],
        Extrapolate.CLAMP
      )
    }
  })

  const sliderCarsStyleAnimation = useAnimatedStyle(() => {
    return {
      opacity: interpolate(
        scrollY.value,
        [0, 150],
        [1, 0],
        Extrapolate.CLAMP
      )
    }
  })

  function handleGoBack() {
    navigation.goBack();
  }

  function handleConfirmRental() {
    navigation.navigate('Scheduling', { car });
  }


  return (
    <Container>
      <StatusBar barStyle="dark-content" translucent backgroundColor="transparent" />

      <Animated.View style={headerStyleAnimation}>
        <Header>
          <BackButton onPress={handleGoBack} />
        </Header>
        <CarImages>
          <Animated.View style={sliderCarsStyleAnimation}>
            <ImageSlider imagesUrl={car.photos} />
          </Animated.View>
        </CarImages>

      </Animated.View>

      <Animated.ScrollView
        contentContainerStyle={{
          paddingHorizontal: 24,
          paddingTop: 32,
        }}
        showsVerticalScrollIndicator={false}
        onScroll={scrollHandler}
        scrollEventThrottle={16}
      >
      <Details>
        <Description>
          <Brand>{car.brand}</Brand>
          <Name>{car.name}</Name>
        </Description>
        <Rent>
          <Period>{car.rent.period}</Period>
          <Price>{`R$ ${car.rent.price}`}</Price>
        </Rent>
      </Details>

      <Accessories>
        {car.accessories.map(accesory => (
          <Acessory key={accesory.type} name={accesory.name} icon={getAccessoryIcon(accesory.type)} />
        ))}
      </Accessories>
      <About>{car.about}</About>
      </Animated.ScrollView>
      <Footer>
        <Button title={'Escolher período do aluguel'} onPress={handleConfirmRental} />
      </Footer>
    </Container>
  );
}
