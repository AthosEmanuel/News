import React from 'react';
import {Image, StyleSheet, Text, View} from 'react-native';

interface FooterProps {
  text: string;
  icon?: boolean;
}

const FooterTabs: React.FC<FooterProps> = props => {
  return (
    <View>
      <Text>{props.text}</Text>
      <Image source={props.icon} style={styled.icon} />
    </View>
  );
};
const styled = StyleSheet.create({
  icon: {
    width: 30,
    height: 30,
  },
});
export default FooterTabs;
