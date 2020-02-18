import React, {useState, useEffect} from 'react';
import EditView from '../pages/edit';
import {useSelector} from 'react-redux';
import api from '../service/api';
import {Alert} from 'react-native';
import axios from 'axios';

export default function edit({navigation}) {
  const token = useSelector(state => state.token);

  const [id, setId] = useState('');
  const [nome, setNome] = useState('');
  const [nomeLongradouro, setNomeLongradouro] = useState('');
  const [longradouro, setLongradouro] = useState('');
  const [numeroCasa, setNumeroCasa] = useState('');
  const [cidade, setCidade] = useState('');
  const [estado, setEstado] = useState('');
  const [bairro, setBairro] = useState('');
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

  useEffect(() => {
    preencher();
  }, []);

  function preencher() {
    const dados = navigation.getParam('item');
    setNome(dados.nome);
    setCidade(dados.cidade);
    setLongradouro(dados.longradouro);
    setNomeLongradouro(dados.nomeLongradouro);
    setEstado(dados.estado);
    setNumeroCasa(dados.numeroCasa);
    setId(dados._id);
    setBairro(dados.bairro);
  }

  async function editar() {
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
        const responce = await api.put(
          `estabelecimento/estabelecimentos/${id}`,
          {
            nome: nome,
          },
          {
            headers: {token},
          },
        );
        Alert.alert('Sucesso', 'Usuário alterado');
        navigation.goBack();
      } catch (error) {
        Alert.alert('Aviso!', 'Usúario não pôde ser alterado');
      }
    } catch (error) {
      Alert.alert('Aviso!', 'Endereço não encontrado');
      console.log(error);
    }
  }
  return (
    <EditView
      editar={editar}
      Estados={Estados}
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
