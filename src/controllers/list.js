import React, {useState, useEffect} from 'react';
import {Alert} from 'react-native';
import api from '../service/api';
import ListView from '../pages/list';

export default function list({navigation}) {
  useEffect(() => {
    capturaDados();
  });

  const [dados, setDados] = useState([]);

  async function capturaDados() {
    const token = navigation.getParam('token');

    const responce = await api.get('/estabelecimento/estabelecimentos', {
      headers: {token},
    });
    setDados(responce.data);
  }

  async function dadosItem(item) {
    navigation.navigate('Edicao', {item});
  }

  async function deletar(item) {
    Alert.alert('Aviso!', 'Deseja Realmente excluir o item', [
      {
        text: 'Sim',
        onPress: async () => {
          const token = navigation.getParam('token');
          await api.delete(`/estabelecimento/estabelecimentos/${item._id}`, {
            headers: {token},
          });
        },
      },
      {
        text: 'Não',
      },
    ]);
  }

  return (
    <ListView
      navigation={navigation}
      deletar={deletar}
      dadosItem={dadosItem}
      dados={dados}
    />
  );
}
