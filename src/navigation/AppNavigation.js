import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react';
import { NAVIGATION } from '../constants';
import {
  GetButtons,
  Login,
  Onboarding,
  ShowButtons,
  UserDetails,
} from '../screens';

const Stack = createNativeStackNavigator();

const options = {
  headerShown: false,
};

export function AppNavigation() {
  return (
    <Stack.Navigator initialRouteName={NAVIGATION.Onboarding}>
      <Stack.Screen
        options={options}
        name={NAVIGATION.Onboarding}
        component={Onboarding}
      />
      <Stack.Screen
        options={options}
        name={NAVIGATION.Login}
        component={Login}
      />
      <Stack.Screen
        options={options}
        name={NAVIGATION.UserDetails}
        component={UserDetails}
      />
      <Stack.Screen
        options={options}
        name={NAVIGATION.GetButtons}
        component={GetButtons}
      />
      <Stack.Screen
        options={options}
        name={NAVIGATION.ShowButtons}
        component={ShowButtons}
      />
    </Stack.Navigator>
  );
}
