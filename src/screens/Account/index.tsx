import { Content, Text, Thumbnail, View, H1 } from 'native-base';
import React from 'react';
import { StyleSheet } from 'react-native';
import { InterestCard } from 'src/component/common/InterestCard';

export const AccountScreen: React.VFC = () => {
  return (
    <Content>
      <H1 style={styles.title}>やってみたい事</H1>
      <View style={styles.userSection} padder>
        <View style={styles.iconSection} padder>
          <Thumbnail size={50} source={require('assets/profile.png')} />
          <Text style={{ marginTop: 8 }}>nickname</Text>
        </View>
        <View padder>
          <InterestCard text="ボードゲーム" />
          <InterestCard text="ボードゲーム" />
          <InterestCard text="ボードゲーム" />
        </View>
      </View>
      <View style={styles.interest} padder>
        <InterestCard text="ボードゲーム" />
        <InterestCard text="ボードゲーム" />
        <InterestCard text="ボードゲーム" />
        <InterestCard text="ボードゲーム" />
        <InterestCard text="ボードゲーム" />
      </View>
    </Content>
  );
};

const styles = StyleSheet.create({
  title: {
    textAlign: 'center',
    padding: 4,
    marginTop: 16,
    fontWeight: 'bold',
  },
  userSection: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    borderBottomWidth: 1,
  },
  iconSection: {
    flexDirection: 'column',
    alignItems: 'center',
  },
  interest: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
  },
});
