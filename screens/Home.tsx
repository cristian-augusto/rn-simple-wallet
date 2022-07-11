import React from 'react';
import { StatusBar } from 'expo-status-bar';
import styled from 'styled-components/native';
import { Container } from '../components/shared';
import { Colors } from '../styles/Colors';
import visaLogoImg from '../assets/cards/visa_white.png';
import mcLogoImg from '../assets/cards/mc.png';
import { CardsSection } from '../components/Cards/CardsSection';
import { TransactionSection } from '../components/Transactions/TransactionSection';
import { SendMoneySection } from '../components/SendMoney/SendMoneySection';

import portrait1 from '../assets/portraits/1.jpg';
import portrait2 from '../assets/portraits/2.jpg';
import portrait3 from '../assets/portraits/3.jpg';
import { StackScreenProps } from '@react-navigation/stack';
import { RootStackParamList } from '../navigators/RootStack';

const HomeContainer = styled(Container)`
  background-color: ${Colors.graylight};
  width: 100%;
  flex: 1;
`;

export type Props = StackScreenProps<RootStackParamList, 'Home'>;

export const Home: React.FC<Props> = () => {
  const cardsData = [
    {
      id: 1,
      accountNo: '3845757744',
      balance: 20000.15,
      alias: 'Work Debit',
      logo: visaLogoImg,
    },
    {
      id: 2,
      accountNo: '3845730203',
      balance: 12000.01,
      alias: 'Personal Prepaid',
      logo: mcLogoImg,
    },
    {
      id: 3,
      accountNo: '3845238847',
      balance: 5600.83,
      alias: 'School Prepaid',
      logo: visaLogoImg,
    },
  ];

  const transactionData = [
    {
      id: 1,
      amount: '-R$86,00',
      date: '14 Set 2022',
      title: 'Taxi',
      subtitle: 'Uber Car',
      art: {
        background: Colors.primary,
        icon: 'car',
      },
    },
    {
      id: 2,
      amount: '-R$286,00',
      date: '14 Set 2022',
      title: 'Shopping',
      subtitle: 'Ali Express',
      art: {
        background: Colors.tertiary,
        icon: 'cart',
      },
    },
    {
      id: 3,
      amount: '-R$586,00',
      date: '14 Ago 2022',
      title: 'Travel',
      subtitle: 'Emirates',
      art: {
        background: Colors.accent,
        icon: 'airplane',
      },
    },
  ];

  const sendMoneyData = [
    {
      id: 1,
      amount: '2450,56',
      name: 'Coby Andoh',
      background: Colors.tertiary,
      img: portrait1,
    },
    {
      id: 2,
      amount: '4450,56',
      name: 'Harleen Scot',
      background: Colors.primary,
      img: portrait2,
    },
    {
      id: 3,
      amount: '6250,56',
      name: 'James Corbyn',
      background: Colors.accent,
      img: portrait3,
    },
  ];

  return (
    <HomeContainer>
      <StatusBar style="dark" />
      <CardsSection data={cardsData} />
      <TransactionSection data={transactionData} />
      <SendMoneySection data={sendMoneyData} />
    </HomeContainer>
  );
};
