import React from 'react';
import styles from './style';
import {
  ScrollView,
  View,
  Text,
  TouchableOpacity,
  TextInput,
  Picker,
} from 'react-native';

const create = props => {
  const {
    Estados,
    salvar,
    nome,
    setNome,
    longradouro,
    setLongradouro,
    nomeLongradouro,
    setNomeLongradouro,
    numeroCasa,
    setNumeroCasa,
    cidade,
    setCidade,
    estado,
    setEstado,
    bairro,
    setBairro,
  } = props;
  return (
    <ScrollView style={styles.container}>
      <View style={styles.containerInputs}>
        <Text style={styles.titulos}>Nome:</Text>
        <TextInput
          value={nome}
          onChangeText={text => setNome(text)}
          style={styles.inputs}
        />
      </View>
      <View style={{flexDirection: 'row', marginBottom: 10}}>
        <Picker
          style={styles.dropdownLongradouro}
          selectedValue={longradouro}
          onValueChange={item => setLongradouro(item)}>
          <Picker.Item label={'Rua'} value={'Rua'} color={'#979797'} />
          <Picker.Item label={'Avenida'} value={'Avenida'} color={'#979797'} />
        </Picker>
        <Picker
          style={styles.dropdownEstados}
          selectedValue={estado}
          onValueChange={item => setEstado(item)}>
          {Estados.map((item, index) => (
            <Picker.Item
              label={item}
              value={item}
              color={'#979797'}
              key={index}
            />
          ))}
        </Picker>
      </View>
      <View style={styles.containerInputs}>
        <Text style={styles.titulos}>(Rua/Avenida):</Text>
        <TextInput
          value={nomeLongradouro}
          onChangeText={text => setNomeLongradouro(text)}
          style={styles.inputs}
        />
      </View>
      <View style={styles.containerInputs}>
        <Text style={styles.titulos}>Número Casa:</Text>
        <TextInput
          value={numeroCasa}
          onChangeText={text => setNumeroCasa(text)}
          keyboardType={'numeric'}
          style={styles.inputs}
        />
      </View>
      <View style={styles.containerInputs}>
        <Text style={styles.titulos}>Cidade:</Text>
        <TextInput
          value={cidade}
          onChangeText={text => setCidade(text)}
          style={styles.inputs}
        />
      </View>
      <View style={styles.containerInputs}>
        <Text style={styles.titulos}>Bairro:</Text>
        <TextInput
          value={bairro}
          onChangeText={text => setBairro(text)}
          style={styles.inputs}
        />
      </View>
      <TouchableOpacity style={styles.button} onPress={() => salvar()}>
        <Text style={styles.textButon}>Salvar</Text>
      </TouchableOpacity>
    </ScrollView>
  );
};

export default create;
