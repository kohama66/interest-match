import React from 'react';
import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import { Container } from 'native-base';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { GroupsStack } from 'src/navigate/Groups';
import { AccountStack } from 'src/navigate/Account';

export type RootTabParamList = {
  Groups: undefined;
  Account: undefined;
};

export default function App() {
  const Tab = createBottomTabNavigator<RootTabParamList>();

  return (
    <NavigationContainer>
      <Container>
        <Tab.Navigator>
          <Tab.Screen name="Groups" component={GroupsStack} />
          <Tab.Screen name="Account" component={AccountStack} />
        </Tab.Navigator>
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
