import React, { useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';

const Ref = () => {
  const [isItem, setIsItem] = useState(false);
  return (
    <View style={styles.container}>
      {!isItem && (
        <>
          <View style={styles.container}>
            <View style={styles.imgContainer}>
              {/* 앱 아이콘 이미지 */}
            </View>
            <View style={styles.statusText}>
              <Text>냉장고가 텅 비었어요.</Text>
              <Text>밑에서 끌어올려서 추가해주세요.</Text>
            </View>
          </View>
        </>
      )}
      {isItem && (
        <>
          <View style={styles.container}>
            <View style={styles.foodCont}>
              <View style={styles.foods}>
              </View>
              <View style={styles.foods}>
              </View>
            </View>
          </View>
        </>
      )}
      <View style={styles.grayBox}></View>
    </View>
  );
};
const styles = StyleSheet.create({
 container:{
  // backgroundColor:'black',
  width: '100%',
  // height: '100%',
  // marginTop : 36,
  // marginBottom: 66,
  display: 'flex',
  flexDirection: 'column',
  // justifyContent: 'center',
  alignItems: 'center'
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
    cursor: 'pointer',
    borderBottomWidth: 1,
    borderBottomColor: '#D4D4D4',
  },
  menuClicked: {
    borderBottomColor: '#FEA655',
    color: '#000000',
  },
  imgContainer: {
    width: 156,
    height: 156,
    backgroundColor: 'purple',
    marginTop: '65%',
  },
  statusText: {
    marginTop: 10,
    width: '100%',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  grayBox:{
    width: 205,
    height: 7,
    backgroundColor: '#DBDBDB',
    borderTopRightRadius: 5,
    borderTopLeftRadius: 5,
    marginTop: '72%',
    position: 'absolute',
    top: 430
  },
  foods:{
    borderRadius: 15,
    backgroundColor: '#F8F9FA',
    width: 300,
    height: 63,
    backgroundColor: 'white',
    elevation: 4, // Adjust the elevation value to control the shadow intensity
    padding: 16,
    borderRadius: 8,
  },
  foodCont:{
    width: '100%',
    height: '80%',
    display: 'flex',
    alignItems: 'center',
    marginTop: 22,
    gap: 11
  }
});

export default Ref;