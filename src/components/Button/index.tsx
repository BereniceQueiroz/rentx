import React from 'react';
import { useTheme } from 'styled-components';
import {
  Container,
  Title
} from './styles';
import { Load } from '../Load';

interface ButtonProps {
  title: string;
  color?: string;
  onPress: () => void;
  enabled?: boolean;
  loading?: boolean;
}

export function Button({title, color, onPress, enabled = true, loading = false }: ButtonProps){
  const theme = useTheme();
  return (
    <Container
      color={color ? color : theme.colors.main}
      onPress={onPress}
      enabled={enabled}
      style={{opacity: (enabled === false || loading === true)  ? 0.5 : 1}}
      >
      { loading ? <Load /> : <Title>{title}</Title> }
    </Container>
  );
}
