import React, { useState } from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet } from 'react-native';

const NavBar = () => {
  const [clickCount, setClickCount] = useState(0);

  const handleMenuClick = (count) => {
    setClickCount(count);
  };
  
  return (
    <View style={styles.navBar}>
        <Text>여기 네비게이션 바</Text>
    </View>
  );
};
const styles = StyleSheet.create({
    navBar:{
        width:'100%',
        height: 59,
        backgroundColor: 'blue',
        borderTopRightRadius: 5,
        borderTopLeftRadius: 5,
        position: 'absolute',
        bottom: 0 
    }
});

export default NavBar;