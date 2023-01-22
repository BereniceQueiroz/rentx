import React from 'react';
import { useNavigation } from '@react-navigation/native';
import { useWindowDimensions } from 'react-native';
import LogoSvg from '~/assets/logo_background_gray.svg';
import DoneSvg from '~/assets/done.svg';
import { ConfirmButton } from '~/components/ConfirmButton';

import {
  Container,
  Content,
  Title,
  Message,
  Footer
} from './styles';
import { StatusBar } from 'react-native';

export function SchedulingComplete(){
  //useWindowDimensions dentro de funcao JSX o Dimensios usado fora do JSX no styled components
  const { width } = useWindowDimensions();
  const navigation = useNavigation();

  function handleConfirm() {
    navigation.navigate('Home')
  }

  return (
    <Container>
      <StatusBar barStyle={'light-content'} translucent backgroundColor={'transparent'}/>
      <LogoSvg width={width} />
      <Content>
        <DoneSvg width={80} height={80} />
        <Title>Carro alugado!</Title>
        <Message>Agora você só precisa ir {'\n'}
          até a concessionária da RENTX {'\n'}
          pegar o seu automóvel.
        </Message>
        <Footer>
          <ConfirmButton title="OK" onPress={handleConfirm} />
        </Footer>
      </Content>
    </Container>
  );
}
