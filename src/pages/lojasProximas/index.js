import React from 'react';
import {View, Text, FlatList, Image} from 'react-native';
import styles from './style';

const lojasProximas = props => {
  const {dados} = props;
  return (
    <View>
      {console.log(dados)}
      <View>
        <FlatList
          data={dados}
          keyExtractor={(item, index) => `${index}`}
          renderItem={({item}) => (
            <View style={styles.container}>
              <Image source={require('../../assets/icons/list/Updates.png')} />
              <Text style={styles.textItem}>{item.nome}</Text>
              <View style={styles.containerDistancia}>
                <Text style={styles.textDistancia}>
                  {`${item.distancia} Km`}
                </Text>
              </View>
            </View>
          )}
        />
      </View>
    </View>
  );
};
export default lojasProximas;
