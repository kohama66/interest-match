import React from 'react';
import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { Container } from 'native-base';
import { GroupsScreen } from 'src/screens/Groups';
import { AccountScreen } from 'src/screens/Account';
import { ChatScreen } from 'src/screens/Chat';

export type RootStackParamList = {
  Groups: undefined;
  Account: undefined;
  Chat: undefined;
};

export default function App() {
  const Stack = createStackNavigator<RootStackParamList>();
  return (
    <NavigationContainer>
      <Container>
        <Stack.Navigator>
          {/* <Stack.Screen name="Groups" component={GroupsScreen} /> */}
          {/* <Stack.Screen name="Account" component={AccountScreen} /> */}
          <Stack.Screen name="Chat" component={ChatScreen} />
        </Stack.Navigator>
      </Container>
    </NavigationContainer>
    // <>
    //   <Header />
    //   <View style={styles.container}>
    //     <Text>Open up App.tsx to start working on your app!!</Text>
    //     <StatusBar style="auto" />
    //   </View>
    // </>
  );
}
