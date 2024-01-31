import React, { useState, useRef, useEffect } from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity, Modal,
  Animated,
  TouchableWithoutFeedback,
  Dimensions,
  PanResponder,
  TextInput,
  
} from 'react-native';
import  {  vegetable, bread, fruit, sausage, seafood, truffle, noodle, spice, bean, grain, meat, milk }  from './Array'

const BottomSheet = () => {

    const [modalVisible, setModalVisible] = useState(false);
    const pressButton = () => {
        setModalVisible(true);
    };
      const screenHeight = Dimensions.get("screen").height;
      const panY = useRef(new Animated.Value(screenHeight)).current;
      const translateY = panY.interpolate({
          inputRange: [-1, 0, 1],
          outputRange: [0, 0, 1],
      });
  
      const resetBottomSheet = Animated.timing(panY, {
          toValue: 0,
          duration: 300,
          useNativeDriver: true,
      });
  
      const closeBottomSheet = Animated.timing(panY, {
          toValue: screenHeight,
          duration: 300,
          useNativeDriver: true,
      });
  
      const panResponders = useRef(PanResponder.create({
          onStartShouldSetPanResponder: () => true,
          onMoveShouldSetPanResponder: () => false,
          onPanResponderMove: (event, gestureState) => {
              panY.setValue(gestureState.dy);
          },
          onPanResponderRelease: (event, gestureState) => {
              if(gestureState.dy > 0 && gestureState.vy > 1.5) {
                  closeModal();
              }
              else {
                  resetBottomSheet.start();
              }
          }
      })).current;
  
      useEffect(()=>{
          if(modalVisible) {
              resetBottomSheet.start();
          }
      }, [modalVisible]);
  
      const closeModal = () => {
          closeBottomSheet.start(()=>{
              setModalVisible(false);
          })
      }
      
    return (
        <>
        <TouchableOpacity style={styles.button} onPress={pressButton}>
            <Text style={styles.addButton}>+</Text>
        </TouchableOpacity>
        <Modal
            visible={modalVisible}
            animationType={"fade"}
            transparent
            statusBarTranslucent
        >
            <View style={styles.overlay}>
                <TouchableWithoutFeedback
                    onPress={closeModal}
                >
                    <View style={styles.background} />
                </TouchableWithoutFeedback>
                <Animated.View
                    style={{ ...styles.bottomSheetContainer, transform: [{ translateY: translateY }] }}
                    {...panResponders.panHandlers}
                >
             <View style={styles.container}> 
                <View style={{ display: 'flex', flexDirection: 'row' }}>
                    <Text style={styles.title}>
                        냉장고 재료추가
                    </Text>
                    <TouchableOpacity style={styles.closeButton} onPress={closeModal}>
                        <Text>X</Text>
                        {/* X대신 이미지 */}
                    </TouchableOpacity>
                </View>
                <View style={styles.inputArea}>
                    <View style={styles.wrapper}>
                        <View style={styles.searchImg}>
                            {/* 돋보기 이미지 */}
                        </View>
                        <TextInput style={styles.search} placeholder='검색...'></TextInput>
                    </View>
                </View>
                <View style={styles.foodContainer}>
                    <ScrollView contentContainerStyle={styles.foodName} style={styles.scrollView}>
                        <Text style={styles.foodCategory}>채소</Text>
                        {vegetable && vegetable.map((food, index) => (
                            <TouchableOpacity key={index} style={styles.itemContainer}>
                                <View style={styles.circularView}>
                                    {/* 어레이에 있는 이미지 넣기 */}
                                </View>
                                <Text>{food.name}</Text>
                            </TouchableOpacity>
                        ))}
                        <Text style={styles.foodCategory}>빵/떡</Text>
                        {bread && bread.map((food, index) => (
                            <TouchableOpacity key={index} style={styles.itemContainer}>
                                <View style={styles.circularView}>
                                    {/* 어레이에 있는 이미지 넣기 */}
                                </View>
                                <Text>{food.name}</Text>
                            </TouchableOpacity>
                        ))}
                        <Text style={styles.foodCategory}>햄/소시지</Text>
                        {sausage && sausage.map((food, index) => (
                            <TouchableOpacity key={index} style={styles.itemContainer}>
                                <View style={styles.circularView}>
                                    {/* 어레이에 있는 이미지 넣기 */}
                                </View>
                                <Text>{food.name}</Text>
                            </TouchableOpacity>
                        ))}
                        <Text style={styles.foodCategory}>해산물</Text>
                        {seafood && seafood.map((food, index) => (
                            <TouchableOpacity key={index} style={styles.itemContainer}>
                                <View style={styles.circularView}>
                                    {/* 어레이에 있는 이미지 넣기 */}
                                </View>
                                <Text>{food.name}</Text>
                            </TouchableOpacity>
                        ))}
                        <Text style={styles.foodCategory}>유제품</Text>
                        {milk && milk.map((food, index) => (
                            <TouchableOpacity key={index} style={styles.itemContainer}>
                                <View style={styles.circularView}>
                                    {/* 어레이에 있는 이미지 넣기 */}
                                </View>
                                <Text>{food.name}</Text>
                            </TouchableOpacity>
                        ))}
                        <Text style={styles.foodCategory}>고기류</Text>
                        {meat && meat.map((food, index) => (
                            <TouchableOpacity key={index} style={styles.itemContainer}>
                                <View style={styles.circularView}>
                                    {/* 어레이에 있는 이미지 넣기 */}
                                </View>
                                <Text>{food.name}</Text>
                            </TouchableOpacity>
                        ))}
                        <Text style={styles.foodCategory}>과일</Text>
                        {fruit && fruit.map((food, index) => (
                            <TouchableOpacity key={index} style={styles.itemContainer}>
                                <View style={styles.circularView}>
                                    {/* 어레이에 있는 이미지 넣기 */}
                                </View>
                                <Text>{food.name}</Text>
                            </TouchableOpacity>
                        ))}
                        <Text style={styles.foodCategory}>곡물</Text>
                        {grain && grain.map((food, index) => (
                            <TouchableOpacity key={index} style={styles.itemContainer}>
                                <View style={styles.circularView}>
                                    {/* 어레이에 있는 이미지 넣기 */}
                                </View>
                                <Text>{food.name}</Text>
                            </TouchableOpacity>
                        ))}
                        <Text style={styles.foodCategory}>콩/견과류</Text>
                        {bean && bean.map((food, index) => (
                            <TouchableOpacity key={index} style={styles.itemContainer}>
                                <View style={styles.circularView}>
                                    {/* 어레이에 있는 이미지 넣기 */}
                                </View>
                                <Text>{food.name}</Text>
                            </TouchableOpacity>
                        ))}
                        <Text style={styles.foodCategory}>조미료/양념</Text>
                        {spice && spice.map((food, index) => (
                            <TouchableOpacity key={index} style={styles.itemContainer}>
                                <View style={styles.circularView}>
                                    {/* 어레이에 있는 이미지 넣기 */}
                                </View>
                                <Text>{food.name}</Text>
                            </TouchableOpacity>
                        ))}
                        <Text style={styles.foodCategory}>면</Text>
                        {noodle && noodle.map((food, index) => (
                            <TouchableOpacity key={index} style={styles.itemContainer}>
                                <View style={styles.circularView}>
                                    {/* 어레이에 있는 이미지 넣기 */}
                                </View>
                                <Text>{food.name}</Text>
                            </TouchableOpacity>
                        ))}
                        <Text style={styles.foodCategory}>트러플</Text>
                        {truffle && truffle.map((food, index) => (
                            <TouchableOpacity key={index} style={styles.itemContainer}>
                                <View style={styles.circularView}>
                                    {/* 어레이에 있는 이미지 넣기 */}
                                </View>
                                <Text>{food.name}</Text>
                            </TouchableOpacity>
                        ))}
                        <View style={{ marginBottom: 10 }}></View>
                    </ScrollView>
                </View>
            </View>
                    </Animated.View>
                </View>
            </Modal></>
    )
}

const styles = StyleSheet.create({
    addButton:{
        width: 50,
        height: 50,
        marginBottom: 8,
        fontSize: 40,
        textAlign:'center',
        color:'white',
        display:'flex',
        justifyContent:'center',
        alignItems: 'center'
    },
    button:{
        width: 50,
        height: 50,
        borderRadius: 25,
        backgroundColor:'#FEA655',
        display:'flex',
        justifyContent:'center'
    },
    container:{
        // backgroundColor:'pink',
        height: '100%',
        width:'100%',
        // marginTop: 100,
        borderTopLeftRadius: 15,
        borderTopRightRadius: 15,
        // padding: 10
    },
    top:{
        display:'flex',
        flexDirection: 'row',
        marginTop: 16,
        marginLeft: 10,
    },
    title:{
        paddingTop: 16,
        paddingLeft: 10,
        fontSize: 15,
        width: 141
    },
    closeButton:{
        marginTop: 16,
        marginLeft: 155,
        width: 38,
        height: 23,
        backgroundColor: '#F8F9FA',
        justifyContent: 'center',
        alignItems:'center',
        // backgroundColor:'yellow'
    },
    inputArea:{
        width:'100%',
        display:'flex',
        alignItems:'center',
        marginTop: 15,
    },
    wrapper:{
        width: 300,
        height: 48,
        display:'flex',
        flexDirection:'row',
        justifyContent: 'center',
        alignItems:'',
        backgroundColor:'white',
        borderRadius: 15,
        // backgroundColor:'gray'
    },
    searchImg:{
        width: 48,
        height: 50,
        // backgroundColor:'purple'
    },
    search:{
        // marginLeft: 50,
        width: 250,
        height: 48,
        display:'flex',
        // justifyContent: 'center',
        // textAlign:'center',
        // marginLeft: 100,
        // backgroundColor:'gray'
    },
    foodContainer:{
        width: '100%',
        // height: 400,
        // backgroundColor: 'yellow',
        display: 'flex',
        alignItems: 'center',
    },
    foodCategory:{
        width: 300,
        fontWeight: '400',
        fontSize: 20,
        marginTop: 28
    },
    itemContainer: {
        // borderBottomWidth: 1,
        // borderBottomColor: '#ccc',
        paddingVertical: 10,
        width: 70,
        marginTop: 10,
        display: 'flex',
        flexDirection:'column',
        // justifyContent:'center',
        alignItems: 'center',
        textAlign:'center',
        // backgroundColor:'gray'
    },
    circularView: {
        width: 50,   // Adjust the width of the circular view
        height: 50,  // Adjust the height of the circular view
        borderRadius: 25, // Make it a circle by setting borderRadius to half of width/height
        backgroundColor: 'white', // Set the background color of the circular view
        // marginRight: 10, // Adjust as needed to add space between the circular view and text
        marginBottom: 5,
        backgroundColor: '#FEA655'
      },
    foodName:{
        flexDirection: 'row', // Set to 'row' for horizontal layout
        flexWrap: 'wrap',    // Allow items to wrap to the next line
        justifyContent: 'space-between', // Optional: Adjust as needed
        paddingHorizontal: 20,
        // backgroundColor: 'purple',
        gap: 5
    },
    scrollView: {
        height: 580, // Set a height for the ScrollView to enable scrolling
    },
    overlay: {
        flex: 1,
        justifyContent: "flex-end",
        backgroundColor: "rgba(0, 0, 0, 0.4)"
      },
      background: {
          flex: 1,
      },
      bottomSheetContainer: {
          height: '85%',
          backgroundColor: "#F8F9FA",
          borderTopLeftRadius: 15,
          borderTopRightRadius: 15,
          padding: 10
      },
})

export default BottomSheet;