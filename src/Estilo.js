import { StyleSheet } from "react-native";

export default StyleSheet.create({

    App: {
        flexGrow: 1,
        justifyContent: "center",
        alignItems: "center",
        padding: 10,
    },
    
    logo: {
        textAlign: "center",
        fontSize: 30,
        top: -50
    },

    inputEmail: {
        width: 280,
        height: 50,
        borderRadius: 3,
        borderWidth: 0.5,
    },

    inputSenha: {
        width: 280,
        height: 50,
        borderRadius: 3,
        borderWidth: 0.5,
        top: 5
    },

    botao: {
        width: 60,
        height: 30,
        borderRadius: 9,
        borderWidth: 0.5,
        top: 20,
        justifyContent: "center",
    },

    botaoText: {
        textAlign: "center"
    },

    ////////////////////////////////////// Home

    icon: {
        top: 10,
        left: 10
    },

    welcome: {
        fontSize: 12,
        left: "20%",
        top: -18
    }, 

    menu:{
        right: "-88%",
        top: -43
    },

    caixa: {
        width: 280,
        height: 100,
        borderRadius: 3,
        borderWidth: 0.5,
        alignSelf: "center",
        top: -20
    },

    caixa2: {
        width: 280,
        height: 100,
        borderRadius: 3,
        borderWidth: 0.5,
        alignSelf: "center",
        top: -15
    },

    caixa3: {
        width: 280,
        height: 100,
        borderRadius: 3,
        borderWidth: 0.5,
        alignSelf: "center",
        top: -10
    },

    icons: {
        left: 20,
        top: 15
    },

    txt:{
        left: 15,
        top: 18
    },

    info:{
        top: -40,
        right: '-45%',
        fontSize: 12,
    },

    sugestao: {
        alignSelf: "center",    
    },

    gif: {
        width: 100,
        height: 100,
        top: 5,
        alignSelf: 'center'
    },

    aba:{
        backgroundColor: '#C4C4C4',
        height: 100,
        borderRadius: 5,
        bottom: -10

    },

    home: {
        left: '3%', 
        bottom: -8
    },

    user: {
        left: '23%',
        top: -20
    },

    search: {
        left: '45%',
        top: -45
    },

    gear: {
        left: '68%',
        top: -68.5
    },

    logout: {
        left: '90%',
        top: -96
    }

})