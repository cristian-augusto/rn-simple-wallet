import React from "react";
import { GestureResponderEvent, StyleProp, TextStyle, ViewStyle } from "react-native";
import styled from "styled-components/native"
import { Colors } from "../../styles/Colors";
import { RegularText } from "../Texts/RegularText";

const ButtonView = styled.TouchableOpacity`
    align-items: center;
    background-color: ${Colors.primary};
    width: 100%;
    padding: 20px;
    border-radius: 20px;
`;

interface ButtonProps {
    btnStyles?: StyleProp<ViewStyle>;
    onPress: ((event: GestureResponderEvent) => void) | undefined;
    textStyles?: StyleProp<TextStyle>;
    children: React.ReactNode;
}

export const RegularButton: React.FC<ButtonProps> = ({onPress, btnStyles, textStyles, children}) => (
    <ButtonView onPress={onPress} style={btnStyles}>
        <RegularText textStyles={textStyles}>
            {children}
        </RegularText>
    </ButtonView>
)