import React from 'react';
import {View, Text, FlatList, TouchableOpacity, Image} from 'react-native';
import FA from '../../components/fab';
import styles from './style';

const list = props => {
  const {navigation, deletar, dadosItem, dados} = props;
  return (
    <View style={{flex: 1}}>
      <View style={{marginTop: 20}}>
        <FlatList
          data={dados}
          extraData={dados}
          keyExtractor={(item, index) => `${index}`}
          renderItem={({item}) => (
            <View style={styles.containerItem}>
              <TouchableOpacity
                onPress={() => dadosItem(item)}
                style={{flexDirection: 'row'}}>
                <Image
                  source={require('../../assets/icons/list/Updates.png')}
                />
                <Text style={styles.textNome}>{item.nome}</Text>
              </TouchableOpacity>

              <TouchableOpacity
                style={styles.containerExcluir}
                onPress={() => deletar(item)}>
                <Image
                  source={require('../../assets/icons/list/Grupo298.png')}
                  style={styles.itemExcluir}
                />
              </TouchableOpacity>
            </View>
          )}
        />
      </View>
      <FA navigation={navigation} />
    </View>
  );
};

export default list;
