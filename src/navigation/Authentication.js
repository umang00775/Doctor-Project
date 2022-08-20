import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

/* Screens */
import Login from '../screens/authentication/Login';

const Stack = createNativeStackNavigator();

const Authentication = () => {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen name="Login" component={Login} />
    </Stack.Navigator>
  );
};

export default Authentication;