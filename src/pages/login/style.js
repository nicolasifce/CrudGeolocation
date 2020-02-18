import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
    flex: 1,
    backgroundColor: '#6B8E23',
  },
  title: {
    color: '#FFF',
    fontSize: 20,
    marginBottom: 30,
  },
  icon: {
    width: 90,
    height: 80,
    marginBottom: 30,
  },
  textInputs: {
    color: '#FFF',
    fontSize: 20,
    marginBottom: 10,
  },
  conainerInputs: {
    backgroundColor: '#FFF',
    flexDirection: 'row',
    alignItems: 'center',
    padding: 5,
  },
  inputLogin: {
    backgroundColor: '#FFF',
    width: 200,
    marginLeft: 10,
    marginBottom: 10,
    borderLeftWidth: 0.5,
    borderColor: '#29B473',
    color: '#29B473',
    paddingLeft: 10,
    fontSize: 18,
  },
  inputSenha: {
    backgroundColor: '#FFF',
    width: 200,
    borderLeftWidth: 0.5,
    borderColor: '#29B473',
    padding: 15,
    marginLeft: 10,
    color: '#29B473',
    fontSize: 18,
  },
  buttonEntra: {
    padding: 20,
    backgroundColor: '#364712',

    marginTop: 20,
  },
  textButton: {
    color: '#FFF',
    fontSize: 18,
  },
});

export default styles;
