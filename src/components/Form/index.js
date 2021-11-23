import React, {useState} from "react"
import {View, Text, TextInput, Button} from "react-native"


export default function Form(){

    // const[email, setEmail] = useState(null)
    // const[] = useState(null)
    // const[] = useState(null)
    // const[] = useState(null)
    return(
        <View>

            <View>

                <Text>Email</Text>
                <TextInput
                    placeholder="EX. email@hotmail.com"
                    // KeyboardType="text"
                    >
                </TextInput>

                <Text>Senha</Text>
                <TextInput
                    placeholder="EX. 14785 (obs. nao copie essa senha)"
                    keyboardType="numeric">
                </TextInput>

                <Button title= "Logar">

                </Button>

                <Button title= "Cadastrar">

                </Button>

            </View>

        

        </View>
    );
}