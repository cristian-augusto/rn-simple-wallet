import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { Ionicons } from '@expo/vector-icons';
import { Greeting } from '../components/Header/Greeting';
import { Profile } from '../components/Header/Profile';
import { Home } from '../screens/Home';
import { Welcome } from '../screens/Welcome';
import { Colors } from '../styles/Colors';
import avatarImg from '../assets/avi/avatar.png';
import { CardProps } from '../components/Cards/types';
import { Balance } from '../screens/Balance';

export type RootStackParamList = {
  Welcome: undefined;
  Home: undefined;
  Balance: CardProps;
};

const Stack = createStackNavigator<RootStackParamList>();

export const RootStack: React.FC = () => (
  <NavigationContainer>
    <Stack.Navigator
      initialRouteName="Welcome"
      screenOptions={{
        headerStyle: {
          backgroundColor: Colors.graylight,
          borderBottomWidth: 0,
          shadowColor: 'transparent',
          shadowOpacity: 0,
          elevation: 0,
          height: 120,
        },
        headerTintColor: Colors.secondary,
        headerRightContainerStyle: {
          paddingRight: 25,
        },
        headerLeftContainerStyle: {
          paddingLeft: 10,
        },
        headerRight: () => (
          <Profile
            img={avatarImg}
            imgContainerStyle={{ backgroundColor: Colors.tertiary }}
          />
        ),
      }}
    >
      <Stack.Screen
        name="Welcome"
        component={Welcome}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="Home"
        component={Home}
        options={{
          headerTitle: (props) => (
            <Greeting mainText="Hey Coby!" subText="Welcome back" {...props} />
          ),
          headerLeft: () => <></>,
        }}
      />

      <Stack.Screen
        name="Balance"
        component={Balance}
        options={({ route }) => ({
          headerTitle: route?.params?.alias,
          headerTitleAlign: 'center',
          headerBackImage: (props) => (
            <Ionicons
              {...props}
              name="chevron-back"
              size={25}
              color={Colors.secondary}
            />
          ),
          headerLeftContainerStyle: {
            paddingLeft: 0,
          },
        })}
      />
    </Stack.Navigator>
  </NavigationContainer>
);
