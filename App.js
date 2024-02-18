import { View, StyleSheet } from "react-native";
import Ref from "./assets/screen/ref";
import TapBar from "./assets/screen/tapBar";
import NavBar from "./assets/screen/navBar";
import BottomSheet from "./assets/screen/BottomSheet";
import SecondBottomSheet from "./assets/screen/BottomSheet";
import Ingredients from "./assets/screen/addNew";

const App = () =>{
  return(
    <View style={styles.basic}>
      {/* <TapBar></TapBar> */}
      {/* <Ref></Ref> */}
      {/* <Ingredients></Ingredients> */}
      {/* <NavBar></NavBar> */}
      {/* <BottomSheet></BottomSheet> */}
      {/* <AddModifyView></AddModifyView> */}
    </View>
  )
}
const styles = StyleSheet.create({
  basic:{
    width: '100%',
    height: '100%',
    backgroundColor: '#F8F9FA'
  }
})
export default App;