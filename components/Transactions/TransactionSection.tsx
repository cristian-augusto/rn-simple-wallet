import React from 'react';
import styled from 'styled-components/native';
import { Ionicons } from '@expo/vector-icons';
import { Colors } from '../../styles/Colors';
import { RegularText } from '../Texts/RegularText';
import { SmallText } from '../Texts/SmallText';
import { TransactionSectionProps } from './types';
import { TransactionItem } from './TransactionItem';

const TransactionSectionBackground = styled.View`
  width: 100%;
  flex: 2;
  padding: 0 25px;
  padding-top: 5px;
`;

const TransactionRow = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  width: 100%;
`;

const TransactionList = styled.FlatList`
  width: 100%;
`;

export const TransactionSection: React.FC<TransactionSectionProps> = ({
  data,
}) => (
  <TransactionSectionBackground>
    <TransactionRow style={{ marginBottom: 25 }}>
      <RegularText
        textStyles={{
          fontSize: 19,
          color: Colors.secondary,
        }}
      >
        Transactions
      </RegularText>
      <SmallText
        textStyles={{
          color: Colors.secondary,
        }}
      >
        Recent
        <Ionicons name="caret-down" size={13} color={Colors.graydark} />
      </SmallText>
    </TransactionRow>
    <TransactionList
      data={data}
      showsVerticalScrollIndicator={false}
      contentContainerStyle={{
        paddingBottom: 25,
      }}
      keyExtractor={({ id }: any) => String(id)}
      renderItem={({ item }: any) => <TransactionItem {...item} />}
    />
  </TransactionSectionBackground>
);
