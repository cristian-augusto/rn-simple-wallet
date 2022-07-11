import React from 'react';
import { StyleProp, TextStyle } from 'react-native';
import styled from 'styled-components/native';
import { Colors } from '../../styles/Colors';
import { RegularText } from '../Texts/RegularText';
import { SmallText } from '../Texts/SmallText';

const StyledView = styled.View`
  flex-direction: column;
  flex: 1;
  justify-content: center;
`;

interface GreetingProps {
  mainText: string;
  subText: string;
  mainTextStyles?: StyleProp<TextStyle>;
  subTextStyles?: StyleProp<TextStyle>;
}

export const Greeting: React.FC<GreetingProps> = ({
  mainText,
  subText,
  mainTextStyles,
  subTextStyles,
}) => (
  <StyledView>
    <RegularText
      textStyles={[
        {
          color: Colors.secondary,
          fontSize: 22,
        },
        mainTextStyles,
      ]}
    >
      {mainText}
    </RegularText>
    <SmallText
      textStyles={[
        {
          color: Colors.graydark,
        },
        subTextStyles,
      ]}
    >
      {subText}
    </SmallText>
  </StyledView>
);
