import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#FFF',
    elevation: 5,
    paddingBottom: 10,
    paddingTop: 10,
    paddingLeft: 5,
    marginBottom: 10,
    flexDirection: 'row',
    paddingRight: 0,
  },
  textItem: {
    color: '#979797',
    fontSize: 25,
    marginLeft: 30,
    flex: 2,
  },
  containerDistancia: {
    paddingLeft: 3,
    alignContent: 'flex-end',
    flex: 1,
    flexDirection: 'row',
    paddingRight: 10,
  },
  textDistancia: {
    textAlignVertical: 'center',
    paddingRight: 10,
    textAlign: 'right',
    color: '#979797',

    fontSize: 18,
  },
});

export default styles;
