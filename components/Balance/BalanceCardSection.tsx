import React from 'react';
import styled from 'styled-components/native';
import { BalanceCard } from './BalanceCard';
import { BalanceCardProps } from './types';

const BalanceCardSectionBackground = styled.View`
  width: 100%;
  align-items: center;
  flex: 2;
`;

export const BalanceCardSection: React.FC<BalanceCardProps> = (props) => (
  <BalanceCardSectionBackground>
    <BalanceCard {...props} />
  </BalanceCardSectionBackground>
);
