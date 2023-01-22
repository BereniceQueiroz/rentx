import React from 'react';
import { useTheme } from 'styled-components';
import {
  Container,
  Title
} from './styles';

interface ButtonProps {
  title: string;
  color?: string;
  onPress: () => void;
}

export function Button({title, color, onPress }: ButtonProps){
  const theme = useTheme();
  return (
    <Container color={color ? color : theme.colors.main} onPress={onPress}>
      <Title>{title}</Title>
    </Container>
  );
}
