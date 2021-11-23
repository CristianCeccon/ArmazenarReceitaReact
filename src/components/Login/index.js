import React, {useState} from "react"
import {StyleSheet, View, Text, TextInput, Button, KeyboardAvoidingView, Image, TouchableOpacity} from "react-native"


export default function Login(){

    return(
        <KeyboardAvoidingView style={styles.background}>

            {/* <View style={styles.containerLogo}>
                <Image>
                    source={require('armazenar-receita/assets/icon.png')}
                </Image>
            </View> */}

            <View style={styles.container}>
                <TextInput
                    style = {styles.input}
                    placeholder="Email"
                    autoCorrect={false}
                    onChangeText={()=> {}}
                ></TextInput>

                <TextInput
                    style = {styles.input}
                    placeholder="Senha"
                    autoCorrect={false}
                    onChangeText={()=> {}}
                ></TextInput>

                <TouchableOpacity style={styles.btnSubmit}>
                    <Text style={styles.submitText}>Acessar</Text>
                </TouchableOpacity>

                <TouchableOpacity style={styles.btnRegister}>
                    <Text style={styles.registerText}>Cadastrar</Text>
                </TouchableOpacity>

            </View>
        </KeyboardAvoidingView>
    );

}

const styles = StyleSheet.create({

    background:{
        flex:1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#191919'
    },

    containerLogo:{
        flex:1,
        justifyContent: 'center',
        //backgroundColor:''
    },

    container:{
        flex:1,
        alignItems: 'center',
        justifyContent: 'center',
        width: '90%',
        paddingBottom: 50

    },

    input:{
        backgroundColor: '#FFF',
        width: '90%',
        marginBottom:15,
        color:'#222',
        fontSize: 17,
        borderRadius: 7,
        padding: 10,

    },

    btnSubmit:{
        backgroundColor:'#35AAFF',
        width:'90%',
        height:45,
        alignItems:'center',
        justifyContent:'center',
        borderRadius: 7,

    },

    submitText:{
        color:'#FFF',
        fontSize: 18,

    },

    btnRegister:{
        marginTop: 10,
    },

    registerText:{
        color:'#FFF'
    },

});