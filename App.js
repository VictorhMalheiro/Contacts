import { StackNavigator, createAppContainer } from 'react-navigation';

import PeoplePage from './src/pages/PeoplePage';
import PeopleDetailPage from './src/pages/PeopleDetailPage';
import { capitalizeFirstLetter } from './src/util/';
//const AppNavigator = createStackNavigator({
export default  StackNavigator({
  'Main': {
    screen: PeoplePage
  },
  'PeopleDetail': {
    screen: PeopleDetailPage,
    navigationOptions: ({ navigation }) => {
      const peopleName = capitalizeFirstLetter(navigation.state.params.people.name.first);
      return({
        title: peopleName,
        headerTitleStyle: {
          fontSize: 24,      
        }
      });
    }
  }
}, {
  navigationOptions: {
    title: 'Meu app',    
    headerTintColor: '#edf2f8',
    headerStyle: {
      backgroundColor: '#4b58a4',
    },
    headerTitleStyle: {
      fontSize: 24,      
    }
  }
});
//export default createAppContainer(AppNavigator);
//export default PeoplePage;