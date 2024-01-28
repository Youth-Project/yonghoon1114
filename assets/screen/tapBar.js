import React, { useState } from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet } from 'react-native';

const TapBar = () => {
  const [clickCount, setClickCount] = useState(0);

  const handleMenuClick = (count) => {
    setClickCount(count);
  };
  
  return (
    <View style ={styles.container}>
      <View style ={styles.tapBar}>
        <TouchableOpacity
              style={[styles.menu, clickCount === 0 ? styles.menuClicked : '']}
              onPress={() => handleMenuClick(0)}>
              <Text>냉장고</Text>
        </TouchableOpacity>
        <TouchableOpacity
              style={[styles.menu, clickCount === 1 ? styles.menuClicked : '']}
              onPress={() => handleMenuClick(1)}>
              <Text>레시피</Text>
        </TouchableOpacity>
        <TouchableOpacity
              style={[styles.menu, clickCount === 2 ? styles.menuClicked : '']}
              onPress={() => handleMenuClick(2)}>
              <Text>북마크</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
 container:{
  width: '100%',
  display: 'flex',
  flexDirection: 'column'
  },
  tapBar: {
    marginTop: 35,
    display: 'flex',
    width: '100%',
    height: 36,
    justifyContent:'center',
    alignItems: 'center',
    flexDirection: 'row',
  },
  menu: {
    width: '33.3%',
    height: '100%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    color: '#D4D4D4',
    fontSize: 15,
    fontStyle: 'normal',
    fontWeight: '400',
    // lineHeight: 'normal',
    cursor: 'pointer',
    borderBottomWidth: 1,
    borderBottomColor: '#D4D4D4',
  },
  menuClicked: {
    borderBottomColor: '#FEA655',
    color: '#000000',
  },
});

export default TapBar;