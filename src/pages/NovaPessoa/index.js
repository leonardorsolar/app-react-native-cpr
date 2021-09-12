import React, { useState, useEffect } from 'react';
import { Alert, Picker, Text, TextInput, View, TouchableOpacity, ActivityIndicator } from 'react-native';

import { RouteProp, useNavigation, useRoute } from '@react-navigation/core';
import { RectButton } from 'react-native-gesture-handler';

import Icon from 'react-native-vector-icons/MaterialIcons';;

import { styles } from './styles';
//import { Success } from '../../lotties/Success';
//import { TextInputMask } from 'react-native-masked-text';
import { showMessage, hideMessage } from "react-native-flash-message";;

//import api from '../../services/api';

type ParamList = {
    Detail: {
        id_reg: string;
        
    };
};


const NovoCliente: React.FC = () => {
    const navigation: any = useNavigation();

   // const route = useRoute<RouteProp<ParamList, 'Detail'>>();
    //const id_reg = route?.params?.id_reg;
       
    const [nome, setNome] = useState("");
    const [celular, setCelular] = useState("");
    const [endereco, setEndereco] = useState("");
    const [email, setEmail] = useState("");
    const [ativo, setAtivo] = useState("");
   
    const [sucess, setSucess] = useState(false);
    const [edit, setEdit] = useState(false);
    const [loading, setLoading] = useState(false);
   
    async function saveData() {
        setSucess(true);

        try {
            const obj = {
                id: id_reg,
                nome: nome,
                celular: celular,
                endereco: endereco,
                email: email,
                ativo: ativo,
            }

           // await api.post("clientes/salvar_clientes.php", obj);

            setNome("");
            setCelular("");
            setEndereco("");
            setEmail("");

        } catch (error) {
            Alert.alert("Ops", "Alguma coisa deu errado, tente novamente.");
            setSucess(false);
        }
    }

    

    async function loadData() {
        try {
            setLoading(true);
            if (id_reg != "0") {
               // const res = await api.get(`clientes/listar_clientes_id.php?id=${id_reg}`);

                setNome(res.data.nome);
                setCelular(res.data.telefone);
                setEndereco(res.data.endereco);
                setEmail(res.data.email);
                setAtivo(res.data.ativo);
                setEdit(false);
                
            } else {
                setEdit(true);
            }
        } catch (error) {
            console.log('Error ao carregar os Dados');
        }
    }

     
        
    useEffect(() => {
        loadData().then(() => setLoading(false))
    }, [])

    if (loading === true) {
        return (
            <View style={{ flex: 1, backgroundColor: '#fff' }}>
                <ActivityIndicator style={{ marginTop: 100 }} color="#000" size="large" />
            </View>
        )
    }

    if (sucess) {
        return <Success />
    }
    

    return (
        <View style={{ flex: 1, marginTop: 20 }}>
            <View style={styles.Header}>
                <TouchableOpacity
                    style={styles.BackButton}
                    onPress={() => navigation.goBack()}
                >
                
                <Icon name="arrow-back" size={28} color="#484a4d" /> 
                   
                </TouchableOpacity>
                {edit ?
                    <View style={styles.Title}>
                        <Text style={styles.TitleText}>Inserir Registro</Text>
                    </View>

                    :

                    <View style={styles.Title}>
                        <Text style={styles.TitleText}>Editar Registro</Text>
                    </View>
                }

            </View>

            <View>
                <Text style={styles.TitleInputs}>Nome completo</Text>

                <TextInput
                    placeholder="Nome completo"
                    onChangeText={(text) => setNome(text)}
                    value={nome}
                    style={styles.TextInput}
                />
            </View>

            <View>
                <Text style={styles.TitleInputs}>Celular</Text>

                
            </View>

            <View>
                <Text style={styles.TitleInputs}>Endereço</Text>

                <TextInput
                    placeholder="Rua A Nº 50 Bairro Teste"
                    onChangeText={(text) => setEndereco(text)}
                    value={endereco}
                    style={styles.TextInput}
                   
                />
            </View>

            <View>
                <Text style={styles.TitleInputs}>Email</Text>

                <TextInput
                    placeholder="Email"
                    onChangeText={(text) => setEmail(text)}
                    value={email}
                    style={styles.TextInput}
                   
                />
            </View>

            <View>
                <Text style={styles.TitleInputs}>Ativo / Inativo</Text>
                <View style={styles.Picker}>
                    <Picker
                        selectedValue={ativo}
                        onValueChange={(itemValue, itemIndex) => setAtivo(itemValue)}
                        style={{ color: '#000' }}
                    >
                        <Picker.Item label="Ativo" value="Ativo" />
                        <Picker.Item label="Inativo" value="Inativo" />
                       
                    </Picker>
                </View>
            </View>

           
                <RectButton
                    style={styles.Button}
                    onPress={() => {
                        setSucess(true);
                        saveData().then(() => {
                            setTimeout(() => {
                                setSucess(false);
                                navigation.navigate("Pessoas")
                            }, 1500);
                        })
                    }}
                >
                    <Text style={styles.ButtonText}>Salvar Registro</Text>
                </RectButton>

               
            {/* <NewPacientes /> */}

        </View>
    );
}

export default NovoCliente;