/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {View, Text, StyleSheet, Image} from 'react-native';
import {Monument} from '../../assets';

interface SubTitleProps {
  text: string;
  hideIcon?: boolean;
}
const SubTitle: React.FC<SubTitleProps> = props => {
  return (
    <View>
      <View style={styled.header}>
        {props.hideIcon ? (
          <View style={{marginLeft: 35}} />
        ) : (
          <Image source={Monument} style={styled.icon} />
        )}
        <Text style={styled.headerTitle}>{props.text}</Text>
      </View>
    </View>
  );
};

const styled = StyleSheet.create({
  header: {
    width: '100%',
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
    marginLeft: 20,
  },
  icon: {
    width: 30,
    height: 30,
  },
  headerTitle: {
    marginLeft: 10,
    fontSize: 12,
    color: '#000000',
    fontFamily: 'Georgia',
  },
});

export default SubTitle;
