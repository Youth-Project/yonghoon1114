import React, { useState, useRef, useEffect } from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity, Modal,
  Animated,
  TouchableWithoutFeedback,
  Dimensions,
  PanResponder,
  TextInput,
  
} from 'react-native';
import  {  vegetable, bread, fruit, sausage, seafood, truffle, noodle, spice, bean, grain, meat, milk, selected }  from './Array'
import BottomSheet from './BottomSheet';

const Ref = () => {

  const [isItem, setIsItem] = useState(true);
  const checkItem = () =>{
    
  }

  const [vegetableArray, changeVegetable] = useState(vegetable);
  const [breadArray, changeBread] = useState(bread);
  const [fruitArray, changeFruit] = useState(fruit);
  const [sausageArray, changeSausage] = useState(sausage);
  const [seafoodArray, changeSeafood] = useState(seafood);
  const [truffleArray, changetruffle] = useState(truffle);
  const [noodleArray, changeNoodle] = useState(noodle);
  const [spiceArray, changeSpice] = useState(spice);
  const [beanArray, changeBean] = useState(bean);
  const [grainArray, changeGrain] = useState(grain);
  const [meatArray, changeMeat] = useState(meat);
  const [milkArray, changeMilk] = useState(milk);
  const [selectedFood, changeSelectedFood] = useState(selected);

  const [modalVisible, setModalVisible] = useState(false);
  const [modalVisible2, setModalVisible2] = useState(false);

  const pressButton = () => {
      setModalVisible(true);
  };
  const pressButton2 = () => {
      setModalVisible2(true);
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
    const [inputValue, setInputValue] = useState('');

    const handleInputChange = (text) => {
      setInputValue(text);
    }
    const [foodUnits, setFoodUnits] = useState('개');
    const handleUnitPress = (unit) => {
        setFoodUnits(unit);
    };

    
  return (
    <View style={styles.container}>
      {!isItem && (
        <View style={styles.container}>
          <View style={styles.imgContainer}>
            {/* 앱 아이콘 이미지 */}
          </View>
          <View style={styles.statusText}>
            <Text>냉장고가 텅 비었어요.</Text>
            <Text>밑에서 끌어올려서 추가해주세요.</Text>
          </View>
        </View>
      )}
      {isItem && (
        <View style={styles.container}>
          <View style={styles.foodCont}>
            <ScrollView style={{ gap: 11 }}>
              {/* <View style={styles.foods}> */}
              {selectedFood && selectedFood.map((food, index) => (
                            <View key={index} style={styles.foods}>
                                <View style={styles.circle}>
                                  {/* 음식사진 */}
                                </View>
                                <Text style={styles.foodName}>
                                  {/* 음식이름  */} {food.name}
                                </Text>
                                <Text style={styles.foodCount}>
                                  {/* 개수,수량 등 */} {food.amount}
                                </Text>
                                <Text style={styles.foodUnit}>
                                  {/* 단위 */} {food.unit}
                                </Text>
                            <TouchableOpacity onPress={pressButton} style={styles.pencil}>
                              {/* 안에 연필이미지 */}
                            </TouchableOpacity>
                            </View>
                        ))}

              {/* </View> */}
            </ScrollView>
          </View>
        </View>
      )}
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
                    <View style={styles.background}/>
                </TouchableWithoutFeedback>
                <Animated.View
                    style={{...styles.bottomSheetContainer, transform: [{ translateY: translateY }]}}
                    {...panResponders.panHandlers}
                >
                <View style={{display:'flex', flexDirection:'row'}}>
                    <Text style={styles.title}>
                        재료 수정
                    </Text>
                    <TouchableOpacity style={styles.closeButton} onPress={closeModal}>
                        <Text>X</Text>
                        {/* X대신 이미지 */}
                    </TouchableOpacity>
                </View>
                <Text style={styles.textGray}>
                    수량
                </Text>
                <View style={styles.grayBorderContainer}>
                    <View style= {{display: 'flex', flexDirection:'row'}}>
                        <TextInput
                            style={styles.input}
                            onChangeText={handleInputChange}
                            value={inputValue}
                            placeholder="Type here..."
                        />
                        <Text style={styles.units}>{foodUnits}</Text>
                    </View>
                </View>
                <Text style={styles.textGray}>
                    단위
                </Text>
                <View style={styles.bottomContainer}>
                    <View style={styles.unitsContainer}>
                        <TouchableOpacity onPress={() => handleUnitPress('개')}>
                            <Text style= {styles.unitSelect}>개</Text>
                        </TouchableOpacity>
                        <TouchableOpacity onPress={() => handleUnitPress('큰술')}>
                            <Text style= {styles.unitSelect}>큰술</Text>
                        </TouchableOpacity>
                        <TouchableOpacity onPress={() => handleUnitPress('작은술')}>
                            <Text style= {styles.unitSelect}>작은술</Text>
                        </TouchableOpacity>
                        <TouchableOpacity onPress={() => handleUnitPress('ml')}>
                            <Text style= {styles.unitSelect}>ml</Text>
                        </TouchableOpacity>
                        <TouchableOpacity onPress={() => handleUnitPress('g')}>
                            <Text style= {styles.unitSelect}>g</Text>
                        </TouchableOpacity>
                    </View>
                    <View style={styles.buttonContainer}>
                        <TouchableOpacity style= {styles.deleteButton} onPress={closeModal}>
                            <Text style={styles.delete}>삭제하기</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style= {styles.nextButton} onPress={closeModal}>
                            <Text style={styles.next}>다음</Text>
                        </TouchableOpacity>
                    </View>
                </View>
                </Animated.View>
            </View>
        </Modal>
        <View style={styles.addButton} onPress={pressButton2}>
            <BottomSheet
                modalVisible={modalVisible2}
                setModalVisible={setModalVisible2}
            />
        </View>
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
  alignItems: 'center',
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
    marginTop: 11,
    display: 'flex',
    // justifyContent: 'center',
    flexDirection: 'row',
    alignItems: 'center'
  },
  foodCont:{
    width: '100%',
    height: '90%',
    display: 'flex',
    alignItems: 'center',
    marginTop: 22,
    // marginBottom: 22,
    gap: 11,
    // backgroundColor: 'yellow'
  },
  circle:{
    width: 50,
    height: 50,
    borderRadius: 100,
    backgroundColor: 'yellow',
    marginRight: 16 
  },
  foodName:{
    fontSize: 15,
    color: 'black',
    width: 100,
    height: 20,
    // backgroundColor: 'yellow'
  },
  foodCount:{
    // marginLeft: 10,
    width: 38,
    textAlign: 'right',
    // backgroundColor: 'purple'
  },
  foodUnit:{
    marginLeft: 5
  },
  pencil:{
    width: 30,
    backgroundColor: 'green',
    height: 30,
    marginLeft: 10,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center'
  },
  bottomSheetContent: {
    backgroundColor: '#F8F9FA',
    borderTopLeftRadius: 15,
    borderTopRightRadius: 15,
    width: '100%',
    height: '100%'
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
  textGray:{
      margin: 20,
      color: '#9C9C9C',
      fontSize: 15
  },
  grayBorderContainer:{
      borderBottomColor: '#EDEDED',
      borderBottomWidth: 1.5,
      height: '20%',
      display: 'flex',
      alignItems: 'center'
  },
  input:{
      marginTop: 20,
      borderBottomColor: '#BCBCBC',
      borderBottomWidth: 1,
      width: 99,
      height: 24,
      textAlign: 'center',
  },
  units:{
      height: 24,
      // width: 24,
      paddingLeft: 5,
      paddingRight: 5,
      marginLeft: 20,
      marginTop: 22,
      fontSize: 15,
      borderColor: '#D9D9D9',
      borderWidth: 1,
      display: 'flex',
      justifyContent: 'center',
      textAlign:'center',
      borderRadius: 5
  },
  bottomContainer:{
      // backgroundColor: 'yellow',
      width: '100%',
      height: '100%',
  },
  unitsContainer:{
      display:'flex',
      flexDirection:'row',
      gap: 20,
      justifyContent: 'center',
      alignItems: 'center',
      width: '100%',
      marginTop: 40
  },
  unitSelect:{
      fontSize: 15,
      // backgroundColor: 'purple',
      width: 40,
      height: 40,
      display: 'flex',
      justifyContent: 'center',
      textAlign: 'center',
  },   
  buttonContainer:{
      display:'flex',
      flexDirection:'row',
      marginTop: 50,
      gap: 30,
      justifyContent:'center'
  },
  deleteButton:{
      borderWidth:1,
      borderRadius: 25,
      borderColor: '#CCC',
      width: 112,
      height: 34,
  },
  delete:{
      textAlign:'center',
      padding: 5,
      color: '#CCC',
      fontWeight: '700',
      fontSize: 15
  },
  nextButton:{
      borderWidth:1,
      borderRadius: 25,
      borderColor: '#FEA655',
      backgroundColor:'#FEA655',
      width: 112,
      height: 34,
  },
  next:{
      textAlign:'center',
      padding: 5,
      color: 'white',
      fontWeight: '700',
      fontSize: 15
  },
  addButton:{
    width:50,
    height:50,
    borderRadius: 25,
    position: 'absolute',
    right: 20,
    bottom: 100
  }
});

export default Ref;