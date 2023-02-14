import { StyleSheet } from 'react-native';
import { Colors, Layout, hs, ms, vs } from '../../theme';

const styles = StyleSheet.create({
  container: {
    ...Layout.fill,
    backgroundColor: Colors.orange,
  },
  viewHeader: {
    paddingVertical: vs(20),
    ...Layout.rowHCenter,
    marginHorizontal: hs(10),
  },
  viewBack: {
    height: ms(40),
    width: ms(40),
    padding: ms(10),
  },
  imageBack: {
    height: '100%',
    width: '100%',
    resizeMode: 'contain',
  },
  textProfile: {
    textAlign: 'center',
    ...Layout.fill,
    fontSize: ms(16),
    color: Colors.white,
  },
  viewCurv: {
    marginTop: '40%',
    height: '100%',
    width: '100%',
    position: 'absolute',
  },
  imgCurv: {
    width: '100%',
    height: '100%',
  },
  viewUser: {
    height: ms(120),
    width: ms(120),
    borderRadius: ms(60),
    ...Layout.alignItemsCenter,
    ...Layout.justifyContentCenter,
    backgroundColor: Colors.white,
    ...Layout.selfCenter,
    padding: ms(10),
  },
  imgUser: {
    height: ms(100),
    width: ms(100),
    borderRadius: ms(50),
    resizeMode: 'contain',
  },
  viewCamera: {
    position: 'absolute',
    height: ms(30),
    width: ms(30),
    right: 0,
    bottom: 0,
    borderRadius: ms(15),
    padding: ms(5),
    backgroundColor: Colors.gray,
  },
  imgCamera: {
    width: '100%',
    height: '100%',
  },
  textName: {
    fontSize: ms(20),
    color: Colors.black,
    fontWeight: 'bold',
    marginTop: vs(10),
    textAlign: 'center',
  },
  textEmail: {
    fontSize: ms(14),
    color: Colors.gray,
    textAlign: 'center',
    marginBottom: vs(10),
  },
  viewRightIcon: {
    height: ms(20),
    width: ms(20),
  },
  imgRightIcon: {
    width: '100%',
    height: '100%',
    resizeMode: 'contain',
    tintColor: Colors.orange,
  },
  viewUserData: {
    marginVertical: vs(10),
    borderRadius: ms(10),
    marginHorizontal: hs(20),
    backgroundColor: Colors.white,
    padding: ms(20),
    ...Layout.row,
  },
  textUserDataTitle: {
    fontSize: ms(16),
    color: Colors.black,
  },
  textUserDataValue: {
    marginEnd: hs(10),
    fontSize: ms(14),
    color: Colors.gray,
  },
});

export default styles;
