import { StyleSheet} from 'react-native';

const style = StyleSheet.create({
  containera: {
    flex: 1,
  },
  container:{
    flex: 1,
    justifyContent: 'center',
  },
  info:{
    flex: 1,
    paddingHorizontal: 7,
    paddingTop: 10,
    flexDirection: 'row'
  },
  image:{
  },
  imgMain:{
    width: 112,
    height: 132,
    // width: 301,
    // height: 361,
  },
  detail:{
    marginLeft: 10,

  },
  textInfo:{
    fontSize: 15,
    fontWeight: 400,
  },
  txtbold:{
    fontWeight: 'bold',
  },
  textDetail: {
    fontSize: 16,
  },
  color:{
    flex: 4,
    backgroundColor: '#C4C4C4',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingVertical: 10
  },
  text2:{
    fontSize: 18,
    fontWeight: 400,
    marginRight: 150
  },
  box:{
    height: '80%',
    justifyContent: 'space-between',
  },
  boxBlueAqua:{
    width: 85,
    height: 80,
    backgroundColor: '#C5F1FB'
  },
  boxRed:{
    width: 85,
    height: 80,
    backgroundColor: '#F30D0D'
  },
  boxBlack:{
    width: 85,
    height: 80,
    backgroundColor: '#000'
  },
  boxBlue:{
    width: 85,
    height: 80,
    backgroundColor: '#234896'
  },
  btnOke:{
    width: 326,
    height: 44,
    backgroundColor: '#1952E294',
    borderRadius: 10,
    borderWidth: 1,
    borderColor: '#CA1536',
    alignItems: 'center',
    justifyContent: 'center'
  },
  textBtnOke:{
    fontSize: 20,
    fontWeight: 700,
    lineHeight: 23.44,
    color: '#F9F2F2'
  }
});

export default style;