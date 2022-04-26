import React from 'react';
import { View, Text, TouchableOpacity, SafeAreaView, Image } from 'react-native'
import Icon from 'react-native-vector-icons/EvilIcons'
import Icone from 'react-native-vector-icons/MaterialCommunityIcons'

import Estilo from './Estilo'


export function HomeScreen({navigation}) {
    return (
        <SafeAreaView>
            <Icon name="user" size={60} style={Estilo.icon} />
            <Text style={Estilo.welcome}>Bem-vindo(a), usuário(a) xxxx!</Text>
            <Icone name="menu" size={30} style={Estilo.menu}></Icone>

            <View style={Estilo.caixa}>
                <Icone name="dumbbell" size={50} style={Estilo.icons} />
                <Text style={Estilo.txt}>Meus treinos</Text>

                <Text style={Estilo.info}>Ultimo treino: xxxx</Text>
                <Text style={Estilo.info}>Repetições: xxxx</Text>


            </View>

            <View style={Estilo.caixa2}>
                <Icone name="clock-alert-outline" size={50} style={Estilo.icons} />
                <Text style={Estilo.txt}>Lembretes</Text>

                <Text style={Estilo.info}>Dia do próximo treino: xxxx</Text>
                <Text style={Estilo.info}>Horário: xxxx</Text>


            </View>

            <View style={Estilo.caixa3}>
                <Icone name="file-chart-outline" size={50} style={Estilo.icons} />
                <Text style={Estilo.txt}>Relatório</Text>

                <Text style={Estilo.info}>Total de treinos: xxxx</Text>
                <Text style={Estilo.info}>Dias concluídos: xxxx</Text>


            </View>

            <Text style={Estilo.sugestao}>Exercício sugerido pelo professor:</Text>
            <Image style={Estilo.gif} source={require('./assets/exercise.gif')} />


            <View style={Estilo.aba}>
                <Icone name="home-variant-outline" size={30} style={Estilo.home} />
                <Icon name="user" size={30} style={Estilo.user} />
                <Icon name="search" size={30} style={Estilo.search} />
                <Icon name="gear" size={30} style={Estilo.gear} />
                <TouchableOpacity onPress={() => navigation.navigate('Login')}>
                    <Icone name="logout" size={30} style={Estilo.logout} />
                </TouchableOpacity>

            </View>


        </SafeAreaView>
    )
}