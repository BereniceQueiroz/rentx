import React from 'react';
import { useNavigation, useRoute } from '@react-navigation/native';
import { Acessory } from '~/components/Acessory';
import { BackButton } from '~/components/BackButton';
import { ImageSlider } from "~/components/ImageSlider";
import { Button } from '~/components/Button';

import { getAccessoryIcon } from '~/utils/getAccessoryIcon';

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
import { CarDTO } from '~/dtos/CarDTO';

interface Params {
  car: CarDTO
}

export function CarDetails(){
  const navigation = useNavigation();
  const route = useRoute();
  const { car } = route.params as Params;

  function handleGoBack() {
    navigation.goBack();
  }

  function handleConfirmRental() {
    navigation.navigate('Scheduling');
  }

  return (
    <Container>
      <Header>
        <BackButton onPress={handleGoBack} />
      </Header>

      <CarImages>
        <ImageSlider  imagesUrl={car.photos}/>
      </CarImages>

      <Content>
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
      </Content>

      <Footer>
        <Button title={'Escolher período do aluguel'} onPress={handleConfirmRental} />
      </Footer>
    </Container>
  );
}
