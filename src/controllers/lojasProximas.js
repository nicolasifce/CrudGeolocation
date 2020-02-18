import React, {useEffect, useState} from 'react';
import LojasProximasView from '../pages/lojasProximas';

export default function lojasProximas({navigation}) {
  const [dados, setDados] = useState([]);
  useEffect(() => {
    setDados(navigation.getParam('lojasProximas'));
  }, []);
  return <LojasProximasView dados={dados} setDados={setDados} />;
}
