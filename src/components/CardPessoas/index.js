import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { Alert, Linking, Text, TouchableOpacity, View } from 'react-native';
import SwipeableRow from '../SwipeableRow';

//import api from '../../services/api';
import { styles } from './styles';
//import { showMessage } from 'react-native-flash-message';

interface DadosProps {
    data: {
        id: string;
        nome: string;
        telefone: string;
        email: string;
    }
}


const CardClientes = ({ data }: DadosProps) => {
    const navigation: any = useNavigation(); 

    return (
        <>
            {data.id === undefined && data.nome === undefined && data.telefone === undefined && data.email === undefined ?
                <></>
                
                :

                <View>
                    <SwipeableRow
                        onPressWhatsapp={async () => {
                            await Linking.openURL(`http://api.whatsapp.com/send?1=pt_BR&phone=55${data.telefone}`)
                        }}

                        onPressEdit={async () => {
                            navigation.navigate('NovaPessoa', { id_reg: data.id });
                        }}

                        onPressDelete={async () => {
                            excluir(data.nome, data.id);
                        }}
                    >
                        <TouchableOpacity
                            style={styles.box}
                            onPress={() => Alert.alert("", data.telefone)}
                        >
                            <Text style={{ color: '#000' }}>{data.nome} - Telefone: {data.telefone}</Text>
                           
                        </TouchableOpacity>
                    </SwipeableRow>
                </View>
            }
        </>
    );
}

export default CardClientes;