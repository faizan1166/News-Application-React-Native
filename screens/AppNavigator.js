import React from 'react';
import {Icon} from '@rneui/themed';
import HomeScreen from './HomeScreen';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Details from './Details';

const Tab = createBottomTabNavigator();

const AppNavigator = () => {
  return (
    <>
      <NavigationContainer>
        <Tab.Navigator
          screenOptions={({route}) => ({
            headerShown: false,
            tabBarIcon: ({focused, color, size}) => {
              let iconName;
              if (route.name === 'Home') {
                iconName = focused ? 'home' : 'home';
              } else if (route.name === 'search') {
                iconName = focused ? 'search' : 'search';
              }
              return <Icon name={iconName} size={size} color={color} />;
            },
            tabBarActiveTintColor: '#9e2b23',
            tabBarInactiveTintColor: 'grey',
          })}>
          <Tab.Screen
            name="HomeScreen"
            component={HomeScreen}
            options={{
              tabBarStyle: {
                display: 'none',
              },
              tabBarLabel: 'Home',
              tabBarIcon: ({color, size}) => (
                <Icon name="home" color={color} size={size} />
              ),
            }}
          />
          <Tab.Screen
            name="details"
            options={() => ({
              tabBarStyle: {
                display: 'none',
              },
              tabBarButton: () => null,
            })}
            component={Details}
          />
          
        </Tab.Navigator>
      </NavigationContainer>
    </>
  );
};

export default AppNavigator;
