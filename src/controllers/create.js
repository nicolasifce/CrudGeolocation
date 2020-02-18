import React, {useState} from 'react';
import CreateView from '../pages/create';
import axios from 'axios';
import api from '../service/api';
import {useSelector} from 'react-redux';
import {Alert} from 'react-native';

export default function create({navigation}) {
  const token = useSelector(state => state.token);

  const [nome, setNome] = useState('');
  const [nomeLongradouro, setNomeLongradouro] = useState('');
  const [numeroCasa, setNumeroCasa] = useState('');
  const [cidade, setCidade] = useState('');
  const [estado, setEstado] = useState('AC');
  const [bairro, setBairro] = useState('');
  const [longradouro, setLongradouro] = useState('Rua');

  const Estados = [
    'AC',
    'AL',
    'AP',
    'AM',
    'BA',
    'CE',
    'DF',
    'ES',
    'GO',
    'MA',
    'MT',
    'MS',
    'MG',
    'PA',
    'PB',
    'PR',
    'PE',
    'PI',
    'RJ',
    'RN',
    'RS',
    'RO',
    'RR',
    'SC',
    'SP',
    'SE',
    'TO',
  ];

  async function salvar() {
    if (
      nome == '' ||
      nomeLongradouro == '' ||
      numeroCasa == '' ||
      cidade == '' ||
      estado == '' ||
      longradouro == ''
    )
      return alert('Preencha todos os campos');

    let latitude = '';
    let longitude = '';

    try {
      const verification = await axios.get(
        `https://maps.googleapis.com/maps/api/geocode/json?address=${longradouro}%20${nomeLongradouro}%20${bairro}%20${cidade}%20${estado}%20${numeroCasa}%20&key=AIzaSyDcKr2SnT1JnC6RgaE5KHp_pivPJ4aYmLo`,
      );

      verification.data.results.map(item => {
        latitude = item.geometry.location.lat;
        longitude = item.geometry.location.lng;
      });
      try {
        const responce = await api.post(
          '/estabelecimento/estabelecimentos',
          {
            nome: nome,
            nomeLongradouro: nomeLongradouro,
            cidade: cidade,
            estado: estado,
            bairro: bairro,
            numeroCasa: numeroCasa,
            latitude: latitude,
            longitude: longitude,
            longradouro: longradouro,
          },
          {
            headers: {token},
          },
        );
        Alert.alert('Parabéns', 'Usuário Criado com sucesso!!!');
        navigation.navigate('Lista');
      } catch (erro) {
        alert('Não conseguimos fazer o cadastro');
      }
    } catch (err) {
      alert('Endereço não existente');
    }
  }

  return (
    <CreateView
      Estados={Estados}
      salvar={salvar}
      nome={nome}
      setNome={setNome}
      longradouro={longradouro}
      setLongradouro={setLongradouro}
      setNomeLongradouro={setNomeLongradouro}
      nomeLongradouro={nomeLongradouro}
      numeroCasa={numeroCasa}
      setNumeroCasa={setNumeroCasa}
      cidade={cidade}
      setCidade={setCidade}
      estado={estado}
      setEstado={setEstado}
      bairro={bairro}
      setBairro={setBairro}
    />
  );
}
