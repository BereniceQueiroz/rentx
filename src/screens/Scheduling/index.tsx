import React, {useState } from 'react';
import { useNavigation, useRoute } from '@react-navigation/native';
import { useTheme } from 'styled-components';
import { StatusBar } from 'react-native';
import { BackButton } from '~/components/BackButton';
import { Button } from '~/components/Button';
import {
  Calendar,
  MarkedDateProps,
  DayProps,
  generateInterval } from '~/components/Calendar';
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
import { getPlatformDate } from '~/utils/getPlataformDate';
import { format } from 'date-fns';
import { CarDTO } from '~/dtos/CarDTO';

interface RentalPeriod {
  startFormatted: string;
  endFormatted: string;
}
interface Params {
  car: CarDTO
}

export function Scheduling(){
  const theme = useTheme();
  const navigation = useNavigation();
  const route = useRoute();
  const { car } = route.params as Params;
  const [lastSelectedDate, setLastSelectedDate ] = useState<DayProps>({} as DayProps);
  const [markedDates, setMarkedDates ] = useState<MarkedDateProps>({} as MarkedDateProps);
  const [rentalPeriod, setRentalPeriod] = useState<RentalPeriod>( {} as RentalPeriod);

  function handleConfirmRental() {
    navigation.navigate('SchedulingDetails', {
      car,
      dates: Object.keys(markedDates)
    });
  }

  function handleGoBack() {
    navigation.goBack();
  }

  function handleChangeDate(date: DayProps ) {
    let start = !lastSelectedDate.timestamp ? date : lastSelectedDate;
    let end = date;

    if(start.timestamp > end.timestamp) {
      start = end;
      end = start;
    }

    setLastSelectedDate(end);
    const interval = generateInterval(start, end);
    setMarkedDates(interval);

    const firstDate = Object.keys(interval)[0];
    const endDate = Object.keys(interval)[Object.keys(interval).length - 1];

    setRentalPeriod({
      startFormatted: format(getPlatformDate(new Date(firstDate)), 'dd/MM/yyyy'),
      endFormatted: format(getPlatformDate(new Date(endDate)), 'dd/MM/yyyy')
    })

  }

  return (
    <Container>
      <Header>
      <StatusBar barStyle="light-content" translucent backgroundColor="transparent" />
        <BackButton color={theme.colors.shape} onPress={handleGoBack} />
        <Title>Escolha uma {'\n'}data de início e {'\n'}fim do aluguel</Title>
        <RentalPeriod>
          <DateInfo>
            <DateTitle>De</DateTitle>
            {/* no ios borderbottom nao funciona em text, criar view */}
            <ContentDateValue selected={!!rentalPeriod.startFormatted}>
              <DateValue>{rentalPeriod.startFormatted}</DateValue>
            </ContentDateValue>
          </DateInfo>
          <ArrowSvg />
          <DateInfo>
            <DateTitle>Até</DateTitle>
            <ContentDateValue selected={!!rentalPeriod.endFormatted}>
              <DateValue>{rentalPeriod.endFormatted}</DateValue>
            </ContentDateValue>
          </DateInfo>
        </RentalPeriod>
      </Header>
      <Content>
        <Calendar
          markedDates={markedDates}
          onDayPress={handleChangeDate}
        />
      </Content>

      <Footer>
        <Button
          title={'Confirmar'}
          onPress={handleConfirmRental}
          enabled={!!rentalPeriod.startFormatted} />
      </Footer>
    </Container>
  );
}
