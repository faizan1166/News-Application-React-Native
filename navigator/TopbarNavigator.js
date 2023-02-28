import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import Cryptocurrency from './Cryptocurrency';
import CardScreen from '../screens/CardScreen';
import Tech from './Tech';
import Sport from './Sport';
import Entertenment from './Entertenment';
import Health from './Health';
import {Icon} from '@rneui/base';
const Tab = createMaterialTopTabNavigator();

export const TopbarNavigator = () => {
  return (
    <Tab.Navigator
      screenOptions={({route}) => ({
        headerShown: false,
        tabBarScrollEnabled: true,
        tabBarIcon: ({focused, color, size}) => {
          let iconName;
          if (route.name === 'Home') {
            iconName = focused ? 'home-outline' : 'home-outline';
          } else if (route.name === 'Crypto') {
            iconName = focused ? 'wallet-outline' : 'wallet-outline';
          } else if (route.name === 'Technology') {
            iconName = focused ? 'desktop-outline' : 'desktop-outline';
          } else if (route.name === 'Sports') {
            iconName = focused
              ? 'game-controller-outline'
              : 'game-controller-outline';
          } else if (route.name === 'Health') {
            iconName = focused ? 'medkit-outline' : 'medkit-outline';
          } else if (route.name === 'Entertenment') {
            iconName = focused ? 'headset-outline' : 'headset-outline';
          } else if (route.name === 'Search') {
            iconName = focused ? 'search' : 'search';
          }
          return (
            <Icon name={iconName} size={15} color={color} type="ionicon" />
          );
        },
        tabBarActiveTintColor: 'white',
        tabBarInactiveTintColor: 'white',
        tabBarIndicatorStyle: {
          backgroundColor: 'white',
        },
        tabBarItemStyle: {
          width: 'auto',
          alignSelf: 'center',
          justifyContent: 'center',
          marginLeft: 10,
        },
        tabBarStyle: {
          height: 55,
          backgroundColor: '#9e2b23',
        },
        tabBarLabelStyle: {
          fontSize: 8,

          // fontWeight:"bold",
          width: '100%',
          marginBottom: -3,
          textAlign: 'center',
          alignSelf: 'center',
        },
      })}>
      <Tab.Screen name="Home" component={CardScreen} />
      <Tab.Screen name="Crypto" component={Cryptocurrency} />
      <Tab.Screen name="Technology" component={Tech} />
      <Tab.Screen name="Sports" component={Sport} />
      <Tab.Screen name="Health" component={Health} />
      <Tab.Screen name="Entertenment" component={Entertenment} />
    </Tab.Navigator>
  );
};
