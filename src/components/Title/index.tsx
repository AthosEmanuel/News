import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

interface TitleProps {
  text: string;
}
const Title: React.FC<TitleProps> = props => {
  return (
    <View style={styled.header}>
      <Text style={styled.headerTitle}>{props.text}</Text>
    </View>
  );
};

const styled = StyleSheet.create({
  header: {
    width: '100%',
    height: 40,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#f6f6f6',
    marginBottom: 30,
  },
  headerTitle: {
    fontSize: 20,
    color: '#000000',
    fontFamily: '',
  },
});

export default Title;
