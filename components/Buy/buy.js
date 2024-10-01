import React, { useState, useEffect } from 'react';
import { Text, View, StyleSheet, Image, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome'
import Icons from 'react-native-vector-icons/Ionicons';
import styles from './style'
export default function Buy({ navigation, route }) {

  const [image, setImage] = useState(require('../../assets/vs_blue.png')); 

  useEffect(() => {
    if (route.params?.color) {
      switch (route.params.color) {
        case 'red':
          setImage(require('../../assets/vs_red.png'));
          break;
        case 'black':
          setImage(require('../../assets/vs_black.png'));
          break;
        case 'silver':
          setImage(require('../../assets/vs_silver.png'));
          break;
        case 'blue':
          setImage(require('../../assets/vs_blue.png'));
          break;
        default:
          setImage(require('../../assets/vs_blue.png'));
      }
    }
  }, [route.params?.color]);

  return (
    <View style={styles.container}>
      <View style={styles.content}>
        <View style={styles.image}>
          <Image source={image} style={styles.imgMain}/>
        </View>
        <Text style={styles.textInfo}>Điện Thoại Vsmart Joy 3 - Hàng chính hãng</Text>
        <View style={styles.complain}>
          <View style={styles.startComplain}>
            <Icon name= 'star' color= 'yellow' size={20}/>
            <Icon name= 'star' color= 'yellow' size={20}/>
            <Icon name= 'star' color= 'yellow' size={20}/>
            <Icon name= 'star' color= 'yellow' size={20}/>
            <Icon name= 'star' color= 'yellow' size={20}/>
          </View>
          <Text style={styles.sumComplain}>(Xem 828 đánh giá)</Text>
        </View>
        <View style={styles.price}>
          <Text style={styles.priceNew}>1.790.000 đ</Text>
          <Text style={styles.priceOld}>1.790.000 đ</Text>
        </View>
        <View style={styles.refund}>
          <Text style={styles.textRefund}>Ở ĐÂU RẺ HƠN HOÀN TIỀN</Text>
          <Text style={styles.chamhoi}>?</Text>
        </View>
      </View>
      <View style={styles.footer}>
        <TouchableOpacity onPress={() => navigation.navigate('SelectColor')}>
          <View style={styles.selectColor}>
            <Text style={styles.textSelect}>4 MÀU-CHỌN MÀU</Text>
            <Icons name= 'chevron-forward' color= 'black' size={20}/>
          </View>
        </TouchableOpacity>
        <TouchableOpacity>
          <View style={styles.buy}>
            <Text style={styles.textBuy}>CHỌN MUA</Text>
          </View>
        </TouchableOpacity>
      </View>
    </View>
  );
}