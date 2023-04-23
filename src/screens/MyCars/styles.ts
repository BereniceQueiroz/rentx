import styled from 'styled-components/native';
import { RFValue} from "react-native-responsive-fontsize";
import { FlatList, FlatListProps } from 'react-native';
import { CarProps } from ".";
import { getStatusBarHeight } from 'react-native-iphone-x-helper';

export const Container = styled.View`
  flex: 1;
  align-items: center;
  background-color: ${({theme}) => theme.colors.background_primary};
`;

export const Header = styled.View`
  width: 100%;
  height: 325px;
  background-color: ${({ theme }) => theme.colors.header};
  padding: 25px;
  align-items: flex-start;
  justify-content: space-between;
  padding-top: ${getStatusBarHeight() + 32}px;
`;

export const Title = styled.Text`
  font-family: ${({theme}) => theme.fonts.secondary_600};
  color: ${({theme}) => theme.colors.shape};
  font-size:  ${RFValue(30)}px;
  line-height: 34px;
`;

export const SubTitle = styled.Text`
  font-family: ${({theme}) => theme.fonts.secondary_400};
  color: ${({theme}) => theme.colors.shape};
  font-size:  ${RFValue(14)}px;
  line-height: 34px;
`;

export const Content = styled.View`
  flex:1;
  width: 100%;
  padding: 24px;
`;

export const Appointments = styled.View`
  width: 100%;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

export const AppointmentsTitle = styled.Text`
  font-family: ${({theme}) => theme.fonts.secondary_400};
  color: ${({theme}) => theme.colors.text};
  font-size:  ${RFValue(14)}px;
  line-height: 18px;
`;
export const AppointmentsQuantity = styled.Text`
  font-family: ${({theme}) => theme.fonts.secondary_400};
  color: ${({theme}) => theme.colors.title};
  font-size:  ${RFValue(14)}px;
  line-height: 18px;
`;

export const TotalCars = styled.Text`
  font-size: ${RFValue(15)}px;
  line-height: 18px;
  font-family: ${({theme}) => theme.fonts.primary_400};
  color: ${({theme}) => theme.colors.text};
`;

export const CarWrapper = styled.View`
  flex: 1;
  width: 100%;
  margin-bottom: 16px;
`;
export const CarFooter = styled.View`
  width: 100%;
  padding: 12px;
  margin-top:-10px;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  background-color: ${({theme}) => theme.colors.background_secondary};
`;

export const CarFooterTitle = styled.Text`
  font-size: ${RFValue(12)}px;
  line-height: 16px;
  font-family: ${({theme}) => theme.fonts.primary_400};
  color: ${({theme}) => theme.colors.text};
  text-transform: uppercase;
`;
export const CarFooterPeriod = styled.View`
  flex-direction: row;
  align-items: center;

`;
export const CarFooterDate = styled.Text`
  font-size: ${RFValue(14)}px;
  line-height: 16px;
  font-family: ${({theme}) => theme.fonts.primary_400};
  color: ${({theme}) => theme.colors.title};
  text-transform: uppercase;
`;

export const CarList = styled(FlatList as new (props: FlatListProps<CarProps>) => FlatList<CarProps>).attrs({
  contentContainerStyle: {
    paddingTop: 24,
  },
  showVerticalScrollIndicator: false,
  showHorizontalScrollIndicator: false,
})``;
