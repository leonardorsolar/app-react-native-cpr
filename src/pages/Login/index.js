import { useNavigation } from "@react-navigation/core";
import React, {useEffect, useState} from 'react';;
import {styles} from './style';
import {
  TouchableOpacity,
  View,
  Text,
  TextInput,
  Image,
  StatusBar,
  Alert,
  AsyncStorage,
} from 'react-native';

import api from '../../services/api';

  export default function Login({}) {

    // 0 - carregando, 1 - logado, 2 - deslogado
  

    const navigation: any = useNavigation();

    const [logged, setLogged] = useState(0);
    const [email, setEmail] = useState('');
    const [senha, setSenha] = useState('');

    async function login(){
      // recupero o email e a senha
      const obj = { email, senha };
 
      // crio o resultado  que será enviado para API
      //post será enviado para api (services/api.ts) um objeto
      const res = await api.post('login/login.php', obj);
     
      // ao recuperar as informações faço...
      if(res.data.success === 'Dados Incorretos!'){
        // sem permissão para acessar
        Alert.alert('Ops!', 'Coloque o seus dados corretamente nos campos.');
      }else{
        // storage e recupera o id
        await AsyncStorage.setItem('@user', JSON.stringify(res.data.result[0].id));
       
        // se sim, ecaminhar para Home
        navigation.reset({
          index: 0,
          routes: [{ name: 'Home' }]
        });
      }
    }

      return(
        <View style={styles.container}>
        <StatusBar barStyle="light-content" />
  
        <Image style={styles.logo} source={require('../../assets/logo.png')} />
  
        <View style={styles.form}>
          <TextInput
            style={styles.login}
            placeholder="Email"
            value={email}
            onChangeText={ (email) => setEmail(email)}
          />
  
          <TextInput
            secureTextEntry={true}
            style={styles.login}
            placeholder="Senha"
            value={senha}
            onChangeText={ (senha) => setSenha(senha)}
          />
  
          <TouchableOpacity
           style={styles.loginSave}
           onPress={login}
          >
            <Text style={styles.text}>Entrar</Text>
          </TouchableOpacity>
        </View>
      </View>
     
      )
  }
