import EncryptedStorage from 'react-native-encrypted-storage';
import React, { createContext, useEffect, useState } from "react";


export const AuthContext = createContext();

export const AuthProvider = ({children}) => {
    const [isLoading, setIsLoding] = useState(false)
    const [token, setToken] = useState(null)
    const [isLogin, setIsLogin] = useState(null)
    const [first_name, set_first_name] = useState('')
    const [last_name, set_last_name] = useState('')
    const [role, set_role] = useState('')


    const login = async(value) => {

        setIsLogin('login')
        await EncryptedStorage.setItem('isLogin', 'login')
        set_first_name(value.first_name)
        set_last_name(value.last_name)
        set_role(value.role)
        await EncryptedStorage.setItem('user', JSON.stringify({
            first_name: value.first_name, 
            last_name: value.last_name, 
            role: value.role
        }))
    }

    const logout = async() => {
        setIsLogin(null)
        await EncryptedStorage.removeItem('isLogin')
        await EncryptedStorage.removeItem('user')
    }

    const isLoggedIn = async() => {
        try {
            let loginState = await EncryptedStorage.getItem('isLogin')
            setIsLogin(loginState)
            const user_info  = await EncryptedStorage.getItem('user')
            console.log(`user info: ${user_info}`)
            if (user_info !== null){
                set_first_name(JSON.parse(user_info).first_name)
                set_last_name(JSON.parse(user_info).last_name)
                set_role(JSON.parse(user_info).role)
            }
        } catch (error) {
            console.error(error)
        }
    }

    useEffect(()=>{
        isLoggedIn();
    }, [])

    return (
        <AuthContext.Provider value={{isLogin, login, logout, first_name, last_name, role}}>
            {children}
        </AuthContext.Provider>
    )
}
