import { createStackNavigator } from '@react-navigation/stack';
import React from 'react';
import { AccountScreen } from 'src/screens/Account';

type AccountStackParamList = {
  Account: undefined;
};

export const AccountStack = () => {
  const Stack = createStackNavigator<AccountStackParamList>();

  return (
    <Stack.Navigator>
      <Stack.Screen name="Account" component={AccountScreen} />
    </Stack.Navigator>
  );
};
