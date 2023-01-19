import React from 'react';
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
  About,
  Acessories,
  Footer
} from './styles';


export function CarDetails(){
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
        <About>
          Este é automóvel desportivo. Surgiu do lendário
          touro de lide indultado na praça Real Maestranza de Sevilla.
          É um belíssimo carro para quem gosta de acelerar.
        </About>
      </Content>

      <Footer>
        <Button title={'Escolher período do aluguel'} />
      </Footer>
    </Container>
  );
}
