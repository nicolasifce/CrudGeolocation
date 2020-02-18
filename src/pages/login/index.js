import React from 'react';
import {View, Text, TextInput, TouchableOpacity, Image} from 'react-native';
import styles from './style';

const Login = props => {
  const {autenticar, usuario, senha, setSenha, setUsuario} = props;
  return (
    <View style={styles.container}>
      <Image
        source={require('../../assets/icons/login/Grupo5.png')}
        style={styles.icon}
      />
      <Text style={styles.title}>LOGIN</Text>
      <View>
        <View style={styles.conainerInputs}>
          <Image
            source={require('../../assets/icons/login/Caminho11.png')}
            style={{marginLeft: 10}}
          />
          <TextInput
            style={styles.inputLogin}
            value={usuario}
            placeholder="Usuário"
            placeholderTextColor="#29B473"
            onChangeText={text => setUsuario(text)}
          />
        </View>
        <View style={[styles.conainerInputs, {marginTop: 10}]}>
          <Image
            source={require('../../assets/icons/login/Grupo11.png')}
            style={{marginLeft: 10}}
          />
          <TextInput
            style={styles.inputSenha}
            value={senha}
            placeholder="Senha"
            textContentType="password"
            placeholderTextColor="#29B473"
            onChangeText={text => setSenha(text)}
          />
        </View>
      </View>
      <TouchableOpacity
        style={styles.buttonEntra}
        onPress={async () => await autenticar()}>
        <Text style={styles.textButton}>Entrar</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Login;
