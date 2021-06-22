import React from 'react';
import { Card, CardItem, Text } from 'native-base';
import { StyleSheet } from 'react-native';

type Props = {
  text: string;
};

export const InterestCard: React.VFC<Props> = ({ text }) => {
  return (
    <Card style={styles.card}>
      <CardItem button style={{ borderRadius: 10 }}>
        <Text>{text}</Text>
      </CardItem>
    </Card>
  );
};

const styles = StyleSheet.create({
  card: {
    borderRadius: 10,
    width: 190,
  },
});
