import React from 'react';
import { useTheme } from 'styled-components';
import { StatusBar } from 'react-native';
import { BackButton } from '~/components/BackButton';
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
import { Button } from '~/components/Button';


export function Scheduling(){
  const theme = useTheme();
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

      </Content>

      <Footer>
        <Button title={'Confirmar'} />
      </Footer>
    </Container>
  );
}
