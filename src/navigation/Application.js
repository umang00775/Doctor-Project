import React from 'react';
import { NavigationContainer } from '@react-navigation/native';

import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
const Tab = createBottomTabNavigator();

import Home from './src/screens/Home';
import ForgotPassword from './src/screens/authentication/ForgotPassword'
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';




function Application() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        options={{headerShown:false}}
        screenOptions={
        ({route}) => ({

          tabBarStyle: {
            paddingHorizontal: 10,
            paddingTop: 0,
            backgroundColor: '#FFF',
            marginHorizontal:5,
            marginBottom:5,
            borderRadius:25,
            position:"absolute",
          },

          headerShown: false,
          tabBarIcon: ({focused, size, colorCode}) => {
            let iconName;
            if (route.name == 'Home'){
              iconName='home';
              size= focused ? 21 : 20;
            }else if (route.name === 'ForgotPassword'){
              iconName='user';
              size= focused?21:20;
            }

            return (
              <FontAwesome5
                color="#000"
                name={iconName}
                size={size}              
              />
            )
          },
          showTabBarLabel: false
        })
      }
      
      >
        <Tab.Screen
          name="Home"
          component={Home}
        />
        <Tab.Screen
          name="ForgotPassword"
          component={ForgotPassword}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
}

export default Application;