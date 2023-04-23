
import React, { useEffect, useState } from 'react';
import { StatusBar } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { AntDesign } from '@expo/vector-icons';
import { useTheme } from 'styled-components';
import { api } from '~/services/api';
import { CarDTO } from "~/dtos/CarDTO";
import { Car } from "~/components/Car";
import { Load } from "~/components/Load";

import {
  Container,
  Header,
  Title,
  SubTitle,
  Content,
  Appointments,
  AppointmentsTitle,
  AppointmentsQuantity,
  CarWrapper,
  CarFooter,
  CarFooterTitle,
  CarFooterPeriod,
  CarFooterDate,
  CarList
} from './styles';
import { BackButton } from '~/components/BackButton';

export interface CarProps {
  id: string;
  user_id: string;
  car: CarDTO,
}

export function MyCars(){
  const [cars, setCars] = useState<CarProps[]>([]);
  const [loading, setLoading] = useState(true);
  const navigation = useNavigation();
  const theme = useTheme();

  useEffect(() => {
    async function fetchMyCars() {
      try {
        const response = await api.get('/schedules_byuser?user_id=1');
        setCars(response.data);
      } catch (error) {
        console.error(error);
      } finally {
        setLoading(false);
      }
    }
    fetchMyCars();
  }, []);

  function handleGoBack() {
    navigation.goBack();
  }


  return (
    <Container>
      <Header>
        <StatusBar barStyle="light-content" translucent backgroundColor="transparent" />
        <BackButton color={theme.colors.shape} onPress={handleGoBack} />
        <Title>Seus agendamentos,{'\n'}estão aqui.</Title>
        <SubTitle>Conforto, segurança e praticidade.</SubTitle>
      </Header>

      <Content>
        <Appointments>
          <AppointmentsTitle>Agendamentos feitos</AppointmentsTitle>
          <AppointmentsQuantity>{cars.length}</AppointmentsQuantity>
        </Appointments>

        { loading
          ? <Load />
          : <CarList
              data={cars}
              keyExtractor={item => (item.id)}
              renderItem={({item }) => (
                <CarWrapper>
                  <Car data={item.car} />
                  <CarFooter>
                    <CarFooterTitle>Período</CarFooterTitle>
                    <CarFooterPeriod>
                      <CarFooterDate>{item?.startDate}</CarFooterDate>
                      <AntDesign
                        name='arrowright'
                        size={20}
                        color={theme.colors.text_detail}
                        style={{marginHorizontal: 10}}
                      />
                      <CarFooterDate>{item?.endDate}</CarFooterDate>
                    </CarFooterPeriod>
                  </CarFooter>
                </CarWrapper>
              )}
            />
        }
      </Content>
    </Container>
  );
}
