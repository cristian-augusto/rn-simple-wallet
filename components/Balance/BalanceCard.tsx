import React from 'react';
import styled from 'styled-components/native';
import { ImageBackground as DefaultImageBackground, View } from 'react-native';
import { Colors } from '../../styles/Colors';
import { BalanceCardProps } from './types';
import cardBgImg from '../../assets/bgs/background_transparent.png';
import { RegularText } from '../Texts/RegularText';
import { SmallText } from '../Texts/SmallText';

type ImageBackgroundProps = DefaultImageBackground['props'] & {
  children: React.ReactNode;
};

const CustonBackground: React.FC<ImageBackgroundProps> = (props) => {
  return <DefaultImageBackground {...props} />;
};

const CardBackground = styled(CustonBackground)`
  height: 75%;
  width: 100%;
  resize-mode: cover;
  background-color: ${Colors.accent};
  border-radius: 25px;
  overflow: hidden;
`;

const TouchableView = styled.View`
  justify-content: space-between;
  align-items: center;
  padding: 30px;
  flex: 1;
`;

const CardRow = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  width: 100%;
`;

const Logo = styled.Image`
  width: 100%;
  height: 80%;
  resize-mode: contain;
  flex: 1;
`;

export const BalanceCard: React.FC<BalanceCardProps> = (props) => {
  return (
    <CardBackground source={cardBgImg}>
      <TouchableView>
        <CardRow>
          <RegularText
            textStyles={{
              color: Colors.white,
            }}
          >
            ******{props?.accountNo?.slice(6, 10)}
          </RegularText>
        </CardRow>
        <CardRow>
          <View style={{ flex: 3 }}>
            <SmallText
              textStyles={{
                marginBottom: 5,
                color: Colors.graylight,
              }}
            >
              Total balance
            </SmallText>
            <RegularText
              textStyles={{
                fontSize: 19,
              }}
            >
              {props?.balance}
            </RegularText>
          </View>
          <Logo source={props.logo} />
        </CardRow>
      </TouchableView>
    </CardBackground>
  );
};
