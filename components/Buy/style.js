import { StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    //alignItems: 'center', canh giữa hết
    paddingHorizontal: 22, 
  },
  content:{
    flex: 3,
    justifyContent: 'space-between'
  },
  image:{
    justifyContent: 'center',
    alignItems: 'center'
  },
  imgMain:{
    width: 220,
    height: 280,
    // width: 301,
    // height: 361,
  },
  textInfo:{
    fontWeight: 400,
    fontSize: 15,
    lineHeight: 17.58
  },
  complain:{
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  startComplain:{
    flexDirection: 'row',
    width: '38%',
    justifyContent: 'space-between'
  },
  sumComplain:{
    fontWeight: 400,
    fontSize: 15,
    lineHeight: 17.58
  },
  price:{
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center'
  },
  priceNew:{
    fontWeight: 700,
    fontSize: 18,
    lineHeight: 21.09
  },
  priceOld:{
    fontWeight: 700,
    fontSize: 15,
    lineHeight: 17.58,
    color: '#808080',
    textDecorationLine: 'line-through',
    marginRight: 45
  },
  refund:{
    flexDirection: 'row',
    alignItems: 'center'
  },
  textRefund:{
    fontWeight: 700,
    fontSize: 12,
    lineHeight: 14.06,
    color: '#FA0000'
  },
  chamhoi: {
    width: 20,
    height: 20,
    borderWidth: 1,
    textAlign: 'center',
    borderRadius: 90,
    marginLeft: 10,
    color: '#808080',
    borderColor: '#808080',
  },
  footer:{
    flex: 1,
    justifyContent: 'space-around'
  },
  selectColor:{
    width: 290,
    height: 34,
    flexDirection: 'row',
    borderWidth: 1,
    borderRadius: 10,
    borderColor: '#C4C4C4',
    justifyContent: 'flex-end',
    alignItems: 'center'
  },
  textSelect:{
    fontWeight: 400,
    fontSize: 15,
    lineHeight: 17.58,
    marginRight: 55
  },
  buy:{
    width: 290,
    height: 44,
    backgroundColor: '#CA1536',
    borderRadius: 10,
    borderWidth: 1,
    borderColor: '#C4C4C4',
    justifyContent: 'center',
    alignItems: 'center'
  },
  textBuy:{
    fontWeight: 700,
    fontSize: 20,
    lineHeight: 23.44,
    color: '#fff'
  }
});

export default styles;