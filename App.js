import { Text, View, StyleSheet, Image, TouchableOpacity } from 'react-native';
import {NavigationContainer} from '@react-navigation/native'
import {createNativeStackNavigator} from '@react-navigation/native-stack'
import Icon from 'react-native-vector-icons/FontAwesome'
import Icons from 'react-native-vector-icons/Ionicons';
import Buy from './components/Buy/buy'
import SelectColor from './components/SelectColor/selectColor'


const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer  style={style.container}>
      <Stack.Navigator initialRouteName="Screen01"screenOptions={{
          headerStyle: {
            height: 30, 
          },
          headerTitleStyle: {
            fontSize: 15, 
          },
        }}> 
        <Stack.Screen name="Buy" component={Buy}  options={{title: 'Screen 01', headerShown: false }}/>
        <Stack.Screen name="SelectColor" component={SelectColor} options={{ title: 'Chọn màu sắc điện thoại'}}/>
        
      </Stack.Navigator>
    </NavigationContainer>
    
  );
}

const style = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center'
  },
  
});
