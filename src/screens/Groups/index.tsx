import { StackNavigationProp } from '@react-navigation/stack';
import { RootStackParamList } from 'App';
import { Content, H1, View } from 'native-base';
import React from 'react';
import { StyleSheet } from 'react-native';
import { GroupCard } from 'src/component/common/GroupCard';

type Props = {
  navigation: StackNavigationProp<RootStackParamList, 'Groups'>;
};

export const GroupsScreen: React.VFC<Props> = ({ navigation }) => {
  return (
    <Content>
      <View>
        <H1 style={styles.title}>参加中のグループ</H1>
      </View>
      <View padder>
        <GroupCard onPress={() => navigation.navigate('Account')} />
        <GroupCard onPress={() => navigation.navigate('Account')} />
      </View>
    </Content>
  );
};

const styles = StyleSheet.create({
  title: {
    fontWeight: 'bold',
    textAlign: 'center',
    padding: 4,
    marginTop: 16,
  },
});
