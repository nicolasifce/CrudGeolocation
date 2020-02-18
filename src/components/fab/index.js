import React, {useState} from 'react';
import {PermissionsAndroid} from 'react-native';
import {FAB, Portal, Provider} from 'react-native-paper';
import api from '../../service/api';
import Geolocation from '@react-native-community/geolocation';
import {useSelector} from 'react-redux';
import {useDispatch} from 'react-redux';

export default function fabs(props) {
  const {navigation} = props;
  const [open, setOpen] = useState(false);
  const token = useSelector(state => state.token);
  const dispatch = useDispatch();

  async function verifyLocation() {
    try {
      const granted = await PermissionsAndroid.request(
        PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION,
      );
      if (granted === PermissionsAndroid.RESULTS.GRANTED) {
        Geolocation.getCurrentPosition(async info => {
          let latitude = info.coords.latitude;
          let longitude = info.coords.longitude;

          console.log(latitude, longitude);

          try {
            const responce = await api.post(
              '/estabelecimento/estabelecimentos/proximos',
              {
                latitude: latitude,
                longitude: longitude,
              },
              {
                headers: {token},
              },
            );
            if (responce.data.length == 0) {
              alert('Nenhuma loja próxima');
            } else {
              let lojasProximas = responce.data;
              console.log('lojas', lojasProximas);
              navigation.navigate('LojasProximas', {lojasProximas});
            }
          } catch (err) {
            alert('Localização não encotrada');
          }
        });
      } else {
        return alert('Localização não obtida');
      }
    } catch (err) {
      console.warn(err);
    }
  }
  async function sair() {
    await dispatch({type: 'ADD_TOKEN', token: ''});
    navigation.navigate('Login');
  }
  return (
    <Provider>
      <Portal>
        <FAB.Group
          open={open}
          color="#FFF"
          fabStyle={{backgroundColor: '#6B8E23'}}
          theme={{colors: {background: '#6B8E23'}}}
          icon={open ? 'dots-horizontal' : 'dots-vertical'}
          actions={[
            {
              icon: 'logout',
              label: 'Sair',
              onPress: () => sair(),
            },
            {
              icon: 'map-marker',
              label: 'Estabelecimentos Próximos',
              onPress: () => verifyLocation(),
            },
            {
              icon: 'plus',
              label: 'Adicionar Estabelecimento',
              onPress: () => navigation.navigate('Criar'),
            },
          ]}
          onStateChange={({open}) => setOpen(open)}
          onPress={() => {
            if (open) {
              // do something if the speed dial is open
            }
          }}
        />
      </Portal>
    </Provider>
  );
}
