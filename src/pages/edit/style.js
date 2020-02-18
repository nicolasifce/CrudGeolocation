import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#d9d9d9',
    padding: 20,
  },
  titulos: {
    fontSize: 15,
    color: '#979797',
    textAlignVertical: 'center',
  },
  containerInputs: {
    flexDirection: 'row',
    padding: 5,
    paddingLeft: 10,
    backgroundColor: '#E6E6E6',
    marginBottom: 10,
    elevation: 5,
  },
  inputs: {
    flex: 1,
    color: '#979797',
  },
  dropdownLongradouro: {
    width: '40%',
    backgroundColor: '#E6E6E6',
  },
  dropdownEstados: {
    marginLeft: 20,
    width: '30%',
    backgroundColor: '#E6E6E6',
    alignContent: 'flex-end',
    flex: 1,
  },
  button: {
    padding: 20,
    backgroundColor: '#6B8E23',
    alignItems: 'center',
  },
  textButon: {
    color: '#FFF',
    fontSize: 20,
  },
});

export default styles;
