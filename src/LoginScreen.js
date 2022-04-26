import React from 'react';
import { Text, TouchableOpacity, SafeAreaView, TextInput } from 'react-native'

import Estilo from './Estilo'


export function LoginScreen({ navigation }){
    return (
        <SafeAreaView style={Estilo.App}>
            <Text style={Estilo.logo}>
                LOGO
            </Text>

            <TextInput style={Estilo.inputEmail} placeholder={'Digite seu email'} />

            <TextInput style={Estilo.inputSenha} placeholder={'Digite sua senha'} />

            <TouchableOpacity style={Estilo.botao} onPress={() => navigation.navigate('Home')}>
                <Text style={Estilo.botaoText}>Login</Text>
            </TouchableOpacity>

        </SafeAreaView>
    )
}
