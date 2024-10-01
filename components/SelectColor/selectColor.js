import { Text, View, Image, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome'
import Icons from 'react-native-vector-icons/Ionicons';
import style from './style';
import React, { useState } from 'react';

export default function selectColor({ navigation }) {

  const [selectedColor, setSelectedColor] = useState('blue');

  const handleColorSelect = (color) => {
      setSelectedColor(color);
  };

  const handleDonePress = () => {
    navigation.navigate('Buy', { color: selectedColor }); // Gửi dữ liệu màu về Screen01
  };

  const productInfo = {
    blue: {mau: 'Xanh', price: '1.179.000 đ', provider: 'Tiki Trading' },
    red: {mau: 'Đỏ', price: '1.179.000 đ', provider: 'Tiki Trading' },
    black: {mau: 'Đen', price: '1.179.000 đ', provider: 'Tiki Trading' },
    silver: {mau: 'Bạc', price: '1.179.000 đ', provider: 'Tiki Trading' },
  };

  return (
    <View style={style.containera}>
      <View style={style.container}>
        <View style={style.info}>
          <View style={style.image}>
            <Image 
              style={style.imgMain} 
              source={
              selectedColor === 'red'
                ? require('../../assets/vs_red.png')
                : selectedColor === 'black'
                ? require('../../assets/vs_black.png')
                : selectedColor === 'silver'
                ? require('../../assets/vs_silver.png')
                : require('../../assets/vs_blue.png') // Mặc định là màu xanh
            }
            />
          </View>
          <View style={style.detail}>
             <Text style={style.textInfo}>Điện Thoại Vsmart Joy 3 {'\n'}Hàng chính hãng</Text>

            {selectedColor && (
            <View style={style.infoContainer}>
              <Text style={style.textDetail}>Màu: <Text style={style.txtbold}>{productInfo[selectedColor].mau}</Text></Text>
              <Text style={style.textDetail}>Cung cấp bởi <Text style={style.txtbold}>{productInfo[selectedColor].provider}</Text></Text>
              <Text style={style.textDetail}><Text style={style.txtbold}>{productInfo[selectedColor].price}</Text></Text>
            </View>
            )}

          </View>
        </View>
        <View style={style.color}>
          <Text style={style.text2}>Chọn một màu bên dưới:</Text>
          <View style={style.box}>
            <TouchableOpacity style={style.boxBlueAqua} onPress={() => handleColorSelect('silver')}></TouchableOpacity>
            <TouchableOpacity style={style.boxRed} onPress={() => handleColorSelect('red')}></TouchableOpacity>
            <TouchableOpacity style={style.boxBlack} onPress={() => handleColorSelect('black')}></TouchableOpacity>
            <TouchableOpacity style={style.boxBlue} onPress={() => handleColorSelect('blue')}></TouchableOpacity>
          </View>
          <TouchableOpacity style={style.btnOke}>
            <Text style={style.textBtnOke} onPress={handleDonePress}>Xong</Text>    
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}