import React, { useRef } from 'react';
import BottomSheet from 'reanimated-bottom-sheet';
import styled from 'styled-components/native';
import { Colors } from '../../styles/Colors';
import { RegularText } from '../Texts/RegularText';
import { SmallText } from '../Texts/SmallText';
import { SendMoneyItem } from './SendMoneyItem';
import { SendMoneySectionProps } from './types';

const SendMoneySectionBackground = styled.View`
  width: 100%;
  padding-top: 15px;
  background-color: ${Colors.white};
`;

const SendMoneyRow = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  padding-horizontal: 25px;
`;

const SendMoneyList = styled.FlatList`
  width: 100%;
  flex: auto;
  min-height: 80%;
  padding-horizontal: 25px;
`;

const TextButton = styled.TouchableOpacity``;

export const SendMoneySection: React.FC<SendMoneySectionProps> = ({ data }) => {
  const sheetRef = useRef(null);

  const renderContent = () => {
    return (
      <SendMoneySectionBackground>
        <SendMoneyRow style={{ marginBottom: 25 }}>
          <RegularText
            textStyles={{
              fontSize: 19,
              color: Colors.secondary,
            }}
          >
            Send money to
          </RegularText>
          <TextButton onPress={() => alert('Add')}>
            <SmallText
              textStyles={{
                fontWeight: 'bold',
                color: Colors.tertiary,
              }}
            >
              +Add
            </SmallText>
          </TextButton>
        </SendMoneyRow>
        <SendMoneyList
          data={data}
          contentContainerStyle={{
            alignItems: 'flex-start',
          }}
          horizontal={false}
          showsVerticalScrollIndicator={false}
          numColumns={3}
          keyExtractor={({ id }: any) => String(id)}
          renderItem={({ item }: any) => <SendMoneyItem {...item} />}
        />
      </SendMoneySectionBackground>
    );
  };

  return (
    <BottomSheet
      ref={sheetRef}
      snapPoints={[240, 85]}
      borderRadius={25}
      initialSnap={1}
      enabledContentTapInteraction={false}
      renderContent={renderContent}
    />
  );
};
