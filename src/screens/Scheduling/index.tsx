import React from 'react';
import { useNavigation } from '@react-navigation/native';
import { useTheme } from 'styled-components';
import { StatusBar } from 'react-native';
import { BackButton } from '~/components/BackButton';
import { Button } from '~/components/Button';
import { Calendar } from '~/components/Calendar';
import ArrowSvg from '~/assets/arrow.svg';

import {
  Container,
  Header,
  Title,
  RentalPeriod,
  DateInfo,
  DateTitle,
  ContentDateValue,
  DateValue,
  Content,
  Footer,
} from './styles';



export function Scheduling(){
  const theme = useTheme();
  const navigation = useNavigation();

  function handleConfirmRental() {
    navigation.navigate('SchedulingDetails');
  }


  return (
    <Container>
      <Header>
      <StatusBar barStyle="light-content" translucent backgroundColor="transparent" />
        <BackButton color={theme.colors.shape} onPress={() => {}} />
        <Title>Escolha uma {'\n'}data de início e {'\n'}fim do aluguel</Title>

        <RentalPeriod>
          <DateInfo>
            <DateTitle>De</DateTitle>
            {/* no ios borderbottom nao funciona em text, criar view */}
            <ContentDateValue selected={false}>
              <DateValue></DateValue>
            </ContentDateValue>
          </DateInfo>
          <ArrowSvg />
          <DateInfo>
            <DateTitle>Até</DateTitle>
            <ContentDateValue selected={false}>
              <DateValue></DateValue>
            </ContentDateValue>
          </DateInfo>
        </RentalPeriod>
      </Header>
      <Content>
        <Calendar />
      </Content>

      <Footer>
        <Button title={'Confirmar'} onPress={handleConfirmRental} />
      </Footer>
    </Container>
  );
}
