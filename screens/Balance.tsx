import React from 'react';
import { StackScreenProps } from '@react-navigation/stack';
import { StatusBar } from 'expo-status-bar';
import styled from 'styled-components/native';
import { Container } from '../components/shared';
import { RootStackParamList } from '../navigators/RootStack';
import { Colors } from '../styles/Colors';
import { AmountSection } from '../components/Balance/AmountSection';
import { BalanceCardSection } from '../components/Balance/BalanceCardSection';
import { ButtonSection } from '../components/Balance/ButtonSection';

const BalanceContainer = styled(Container)`
  background-color: ${Colors.graylight};
  width: 100%;
  padding: 25px;
  flex: 1;
`;

type Props = StackScreenProps<RootStackParamList, 'Balance'>;

export const Balance: React.FC<Props> = ({ route }) => (
  <BalanceContainer>
    <StatusBar style="dark" />
    <AmountSection balance={route?.params?.balance} />
    <BalanceCardSection {...route?.params} />
    <ButtonSection />
  </BalanceContainer>
);
