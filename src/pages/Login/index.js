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

  export default function Login({}) {


    const [ email, senha ] = useState('');

      return(
        <View style={styles.container}>
        <StatusBar translucent hidden />
  
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
            onPress={Login}
          >
            <Text style={styles.text}>Entrar</Text>
          </TouchableOpacity>
        </View>
      </View>
     
      )
  }
