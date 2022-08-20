import React from 'react';
import { NavigationContainer } from '@react-navigation/native';

import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
const Tab = createBottomTabNavigator();

import Home from './src/screens/Home';
import ForgotPassword from './src/screens/authentication/ForgotPassword'

import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';

/* Temporary for testing */
import Profile from './src/screens/Profile';

function App() {
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
              colorCode = focused ? "#000" : "#FFF";
            }else if (route.name === 'ForgotPassword'){
              iconName='user';
              size= focused?21:20;
              colorCode = focused ? "#000" : "#FFF";
            }
            else if (route.name == 'One'){
              iconName='home';
              size= focused ? 21 : 20;
              colorCode = focused ? "#000" : "#FFF";
            }else if (route.name === 'Two'){
              iconName='user';
              size= focused?21:20;
              colorCode = focused ? "#000" : "#FFF";
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
          name="Near by"
          component={ForgotPassword}
        />
        <Tab.Screen
          name="Chats"
          component={Home}
        />
        <Tab.Screen
          name="Reports"
          component={Home}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
}

export default App;