import React from 'react';
import styled from 'styled-components/native';
import { CardItem } from './CardItem';
import { CardSectionProps } from './types';

const CardList = styled.FlatList`
  width: 100%;
  flex: 1;
  padding-left: 25px;
  padding-bottom: 15px;
`;

export const CardsSection: React.FC<CardSectionProps> = ({ data }) => (
  <CardList
    data={data}
    horizontal
    showsHorizontalScrollIndicator={false}
    contentContainerStyle={{
      paddingRight: 25,
      alignItems: 'center',
    }}
    keyExtractor={({ id }: any) => String(id)}
    renderItem={({ item }: any) => <CardItem {...item} />}
  />
);
