import { View, StyleSheet } from "react-native";
import Ref from "./.expo/screen/ref";
import TapBar from "./.expo/screen/tapBar";
import NavBar from "./.expo/screen/navBar";

const App = () =>{
  return(
    <View style={styles.basic}>
      <TapBar></TapBar>
      <Ref></Ref>
      <NavBar></NavBar>
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