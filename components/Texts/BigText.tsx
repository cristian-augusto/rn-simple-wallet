import React, { FunctionComponent } from 'react';
import styled from 'styled-components/native';
import { Colors } from '../../styles/Colors';
import { TextProps } from './types';

const StyledText = styled.Text`
  font-size: 37px;
  color: ${Colors.white};
  text-align: left;
  font-family: Lato-Bold;
`;

export const BigText: FunctionComponent<TextProps> = ({
  textStyles,
  children,
}) => <StyledText style={textStyles}>{children}</StyledText>;
