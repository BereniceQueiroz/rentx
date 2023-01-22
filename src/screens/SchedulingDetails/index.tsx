import React from 'react';
import { useNavigation } from '@react-navigation/native';
import { Feather } from '@expo/vector-icons';
import { useTheme } from 'styled-components';
import { RFValue } from 'react-native-responsive-fontsize';

import { Acessory } from '~/components/Acessory';
import { BackButton } from '~/components/BackButton';
import { ImageSlider } from "~/components/ImageSlider";
import { Button } from '~/components/Button';

import SpeedSvg from '~/assets/speed.svg';
import AccelerationSvg from '~/assets/acceleration.svg'
import ForceSvg from '~/assets/force.svg'
import GasolineSvg from '~/assets/gasoline.svg'
import ExchangeSvg from '~/assets/exchange.svg'
import PeopleSvg from '~/assets/people.svg'

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
  Acessories,
  RentalPeriod,
  CalendarIcon,
  DateInfo,
  DateTitle,
  DateValue,
  RentalPrice,
  RentalPriceLabel,
  RentalPriceDetails,
  RentalPriceQuota,
  RentalPriceTotal,
  Footer
} from './styles';

export function SchedulingDetails(){
  const theme = useTheme();
  const navigation = useNavigation();

  function handleSchedulingCompleted() {
    navigation.navigate('SchedulingComplete');
  }

  return (
    <Container>
      <Header>
        <BackButton onPress={() => {}} />
      </Header>

      <CarImages>
        <ImageSlider  imagesUrl={['https://freepngimg.com/thumb/audi/35227-5-audi-rs5-red.png']}/>
      </CarImages>

      <Content>
        <Details>
          <Description>
            <Brand>Lamborghini</Brand>
            <Name>Huracan</Name>
          </Description>
          <Rent>
            <Period>Ao dia</Period>
            <Price>R$ 580</Price>
          </Rent>
        </Details>

        <Acessories>
          <Acessory name={'380Km/h'} icon={SpeedSvg} />
          <Acessory name={'3.2s'} icon={AccelerationSvg} />
          <Acessory name={'800 HP'} icon={ForceSvg} />
          <Acessory name={'Gasolina'} icon={GasolineSvg} />
          <Acessory name={'Auto'} icon={ExchangeSvg} />
          <Acessory name={'2 pessoas'} icon={PeopleSvg} />
        </Acessories>

        <RentalPeriod>
          <CalendarIcon>
            <Feather name='calendar' size={RFValue(24)} color={theme.colors.shape} />
          </CalendarIcon>
          <DateInfo>
            <DateTitle>De</DateTitle>
            <DateValue>18/06/2023</DateValue>
          </DateInfo>
          <Feather name='chevron-right' size={RFValue(24)} color={theme.colors.shape} />
          <DateInfo>
            <DateTitle>Até</DateTitle>
            <DateValue>18/06/2023</DateValue>
          </DateInfo>
        </RentalPeriod>

        <RentalPrice>
          <RentalPriceLabel>Total</RentalPriceLabel>
          <RentalPriceDetails>
            <RentalPriceQuota>R$ 580 x3 diárias</RentalPriceQuota>
            <RentalPriceTotal>R$ 2.900</RentalPriceTotal>
          </RentalPriceDetails>
        </RentalPrice>
      </Content>

      <Footer>
        <Button title={'Alugar agora'}
          color={theme.colors.success}
          onPress={handleSchedulingCompleted}
        />
      </Footer>
    </Container>
  );
}
