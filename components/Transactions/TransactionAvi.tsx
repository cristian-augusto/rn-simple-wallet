import React from 'react';
import styled from 'styled-components/native';
import { Ionicons } from '@expo/vector-icons';
import { TransactionAviProps } from './types';
import { Colors } from '../../styles/Colors';

const StyledView = styled.View`
  height: 45px;
  width: 45px;
  border-radius: 10px;
  justify-content: center;
  align-items: center;
`;

export const TransactionAvi: React.FC<TransactionAviProps> = ({
  icon,
  background,
}) => (
  <StyledView
    style={{
      backgroundColor: background,
    }}
  >
    <Ionicons name={icon} size={25} color={Colors.white} />
  </StyledView>
);
