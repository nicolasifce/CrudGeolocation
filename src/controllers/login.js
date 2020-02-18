import React, {useState} from 'react';
import {Alert} from 'react-native';
import LoginView from '../pages/login';
import api from '../service/api';
import {useDispatch} from 'react-redux';

export default function Login({navigation}) {
  const [senha, setSenha] = useState('');
  const [usuario, setUsuario] = useState('');
  const dispatch = useDispatch();

  async function autenticar() {
    try {
      const responce = await api.post('/auth', {
        user: usuario,
        password: senha,
      });

      const token = responce.data.HASH;

      dispatch({type: 'ADD_TOKEN', token});

      navigation.navigate('Lista', {token});
    } catch (err) {
      Alert.alert('Aviso!', 'Dados incorretos');
    }
  }

  return (
    <LoginView
      autenticar={autenticar}
      setSenha={setSenha}
      senha={senha}
      setUsuario={setUsuario}
      usuario={usuario}
    />
  );
}
