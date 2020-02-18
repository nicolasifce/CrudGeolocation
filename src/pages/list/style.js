import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  containerItem: {
    backgroundColor: '#FFF',
    elevation: 5,
    paddingBottom: 10,
    paddingTop: 10,
    paddingLeft: 5,
    marginBottom: 10,
    flexDirection: 'row',
  },
  textNome: {
    color: '#979797',
    fontSize: 25,
    marginLeft: 30,
  },
  containerExcluir: {
    flex: 1,
    alignItems: 'flex-end',
  },
  itemExcluir: {height: 50, width: 90, left: 30},
});

export default styles;
