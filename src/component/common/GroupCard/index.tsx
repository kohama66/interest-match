import { Card, CardItem, Text } from 'native-base';
import React from 'react';
import { StyleSheet } from 'react-native';

type Props = {
  onPress: () => void;
};

export const GroupCard: React.VFC<Props> = ({ onPress }) => {
  return (
    <Card>
      <CardItem button cardBody>
        {/* あとでイラスト挿入 */}
      </CardItem>
      <CardItem footer bordered style={styles.footer} button onPress={onPress}>
        <Text>グループ名1</Text>
        <Text>参加人数 : 3人</Text>
      </CardItem>
    </Card>
  );
};

const styles = StyleSheet.create({
  footer: {
    justifyContent: 'space-between',
  },
});
