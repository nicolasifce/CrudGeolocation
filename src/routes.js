import {createAppContainer, createSwitchNavigator} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';

import Login from './controllers/login';
import Lista from './controllers/list';
import Edicao from './controllers/edit';
import Criar from './controllers/create';
import LojasProximas from './controllers/lojasProximas';

const Routes = createStackNavigator(
  {
    Login: {
      screen: Login,
      navigationOptions: {
        headerShown: false,
      },
    },
    Lista: {
      screen: Lista,
      navigationOptions: {
        headerLeft: () => null,
        headerTitle: 'Estabelecimentos',
      },
    },
    Edicao: {
      screen: Edicao,
      navigationOptions: {
        headerTitle: 'Informações',
      },
    },
    Criar: {
      screen: Criar,
      navigationOptions: {
        headerTitle: 'Adcionar Estabelecimento',
      },
    },
    LojasProximas: {
      screen: LojasProximas,
      navigationOptions: {
        headerTitle: 'Lojas Próximas',
      },
    },
  },
  {
    defaultNavigationOptions: {
      headerTintColor: '#FFF',
      headerStyle: {
        backgroundColor: '#6B8E23',
      },
      headerTitleStyle: {
        color: '#FFF',
      },
    },
  },
);

const AppContainer = createAppContainer(Routes);

export default AppContainer;
