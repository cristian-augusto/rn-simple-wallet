import React from 'react';
import { Ionicons } from '@expo/vector-icons';
import styled from 'styled-components/native';
import { RegularButton } from '../Buttons/RegularButton';
import { Colors } from '../../styles/Colors';

const ButtonSectionBackground = styled.View`
  width: 100%;
  align-items: center;
  flex: 1;
`;

export const ButtonSection: React.FC = () => (
  <ButtonSectionBackground>
    <RegularButton btnStyles={{ width: '50%' }} onPress={() => {}}>
      Cancel <Ionicons name="card" size={17} color={Colors.white} />
    </RegularButton>
  </ButtonSectionBackground>
);
