import React, {useContext} from 'react';
import { AuthContext } from '../context/AuthContext';
import Authentication from './Authentication';


import {NavigationContainer} from '@react-navigation/native';
import Application from './Application';

const  Navigation = () => {
    const {isLogin} =  useContext(AuthContext)
    return (
        <NavigationContainer>
            {isLogin === null ? <Authentication/> : <Application/>}
        </NavigationContainer>
    )
}
export default Navigation;