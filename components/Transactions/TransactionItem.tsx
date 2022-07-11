import React from 'react';
import { View } from 'react-native';
import styled from 'styled-components/native';
import { Colors } from '../../styles/Colors';
import { RegularText } from '../Texts/RegularText';
import { SmallText } from '../Texts/SmallText';
import { TransactionAvi } from './TransactionAvi';
import { TransactionProps } from './types';

const TransactionRow = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  margin-bottom: 25px;
`;

const LeftView = styled.View`
  flex-direction: row;
  justify-content: flex-start;
  height: 100%;
  align-items: center;
  flex: 2;
`;

const RightView = styled.View`
  flex: 1;
`;

export const TransactionItem: React.FC<TransactionProps> = (props) => (
  <TransactionRow>
    <LeftView>
      <TransactionAvi background={props.art.background} icon={props.art.icon} />
      <View
        style={{
          marginLeft: 10,
        }}
      >
        <RegularText
          textStyles={{
            color: Colors.secondary,
            textAlign: 'left',
            marginBottom: 5,
          }}
        >
          {props.title}
        </RegularText>
        <SmallText
          textStyles={{
            textAlign: 'left',
            color: Colors.graydark,
          }}
        >
          {props.subtitle}
        </SmallText>
      </View>
    </LeftView>
    <RightView>
      <RegularText
        textStyles={{
          color: Colors.secondary,
          textAlign: 'right',
          marginBottom: 5,
        }}
      >
        {props.amount}
      </RegularText>
      <SmallText
        textStyles={{
          textAlign: 'right',
          color: Colors.graydark,
        }}
      >
        {props.date}
      </SmallText>
    </RightView>
  </TransactionRow>
);
