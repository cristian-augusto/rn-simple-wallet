import React from 'react';
import styled from 'styled-components/native';
import { Colors } from '../../styles/Colors';
import { RegularText } from '../Texts/RegularText';
import { SmallText } from '../Texts/SmallText';
import { AmountProps } from './types';

const AmountSectionBackground = styled.View`
  width: 100%;
  padding-top: 5px;
  align-items: center;
  flex: 1;
`;

export const AmountSection: React.FC<AmountProps> = ({ balance }) => (
  <AmountSectionBackground>
    <SmallText
      textStyles={{
        color: Colors.secondary,
        marginBottom: 15,
      }}
    >
      Total Balance
    </SmallText>
    <RegularText
      textStyles={{
        color: Colors.secondary,
        fontSize: 28,
      }}
    >
      R$ {balance}
    </RegularText>
  </AmountSectionBackground>
);
