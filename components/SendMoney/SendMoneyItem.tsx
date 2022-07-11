import React from 'react';
import styled from 'styled-components/native';
import { Colors } from '../../styles/Colors';
import { Profile } from '../Header/Profile';
import { ScreenWidth } from '../shared';
import { RegularText } from '../Texts/RegularText';
import { SmallText } from '../Texts/SmallText';
import { SendMoneyProps } from './types';

const SendMoneyItemContainer = styled.TouchableHighlight`
  height: 130px;
  width: ${ScreenWidth * 0.27}px;
  padding: 10px;
  border-radius: 15px;
  justify-content: space-around;
  margin: 0px 10px 10px 0px;
`;
export const SendMoneyItem: React.FC<SendMoneyProps> = ({
  name,
  amount,
  img,
  background,
}) => (
  <SendMoneyItemContainer
    underlayColor={Colors.secondary}
    style={{
      backgroundColor: background,
    }}
    onPress={() => alert('Send Money!')}
  >
    <>
      <Profile img={img} imgContainerStyle={{ marginBottom: 10 }} />
      <SmallText
        textStyles={{
          textAlign: 'left',
          color: Colors.white,
          fontSize: 12,
        }}
      >
        {name}
      </SmallText>
      <RegularText
        textStyles={{
          color: Colors.white,
          textAlign: 'left',
          fontSize: 13,
        }}
      >
        {amount}
      </RegularText>
    </>
  </SendMoneyItemContainer>
);
