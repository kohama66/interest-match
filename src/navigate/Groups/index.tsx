import { createStackNavigator } from '@react-navigation/stack';
import React from 'react';
import { ChatScreen } from 'src/screens/Chat';
import { GroupsScreen } from 'src/screens/Groups';

export type GroupStackParamList = {
  Groups: undefined;
  Chat: undefined;
};

export const GroupsStack = () => {
  const Stack = createStackNavigator<GroupStackParamList>();

  return (
    <Stack.Navigator>
      <Stack.Screen name="Groups" component={GroupsScreen} />
      <Stack.Screen name="Chat" component={ChatScreen} />
    </Stack.Navigator>
  );
};
