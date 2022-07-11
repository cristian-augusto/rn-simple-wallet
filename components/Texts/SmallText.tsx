import React, { FunctionComponent } from 'react';
import styled from 'styled-components/native';
import { Colors } from '../../styles/Colors';
import { TextProps } from './types';

const StyledText = styled.Text`
  font-size: 13px;
  color: ${Colors.gray};
  text-align: left;
  font-family: Lato-Regular;
`;

export const SmallText: FunctionComponent<TextProps> = ({
  textStyles,
  children,
}) => <StyledText style={textStyles}>{children}</StyledText>;
