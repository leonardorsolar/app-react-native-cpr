import React, { useEffect, useState } from 'react';


import {
    Text,
    View,
    ScrollView,
    TouchableOpacity,
    Image,
    RefreshControl,
    StatusBar,
    
} from 'react-native';


import Icon from 'react-native-vector-icons/MaterialIcons'
import { styles } from './style';
import { DrawerActions, useNavigation } from '@react-navigation/core';
import { AnimatedCircularProgress } from 'react-native-circular-progress';

//import api from '../../services/api';
import Load from '../../components/Load';
import { useIsFocused } from '@react-navigation/native';




export default function Home() {
    const navigation: any = useNavigation();
    const isFocused = useIsFocused();

    //const [dados, setDados] = useState<any>([]);
    const [isLoading, setIsLoading] = useState(true);
    const [refreshing, setRefreshing] = React.useState(false);
    //const [usu, setUsu] = React.useState('');


    useEffect(() => {
        listarDados();
    }, []);


    async function listarDados() {
        try {
            // trás os dados da API
            //const response = await api.get('dashboard/ListAllCards.php');
            //setDados(response.data);
            
        } catch (error) {
            // se não trouxer dados: erro
            console.log("Error");
        } finally {
            // trazendo dados: 
            setIsLoading(false);
            setRefreshing(false);
            
        }
    }

    useEffect(() => {
        listarDados();
    }, []);


    const onRefresh = () => {
        setRefreshing(true);
        listarDados();
       
    };

    //const porcent = (dados.contasRecebidas / dados.contasaReceber) * 100;




    return (
        <View style={{ flex: 1 }}>
            <StatusBar barStyle="light-content" />

            <View style={{ flex: 1 }}>
                <View style={styles.header}>
                    <View style={styles.containerHeader}>

                        <TouchableOpacity
                            style={styles.menu}
                            onPress={() => navigation.dispatch(DrawerActions.openDrawer())}
                        >
                           <Icon name="menu" size={40} color="black" /> 
                            
                        </TouchableOpacity>

                        <Image style={styles.logo} source={require('../../assets/logo2.png')} />

                    </View>
                </View>

           {isLoading ?
                    <Load /> :

                    <ScrollView
                        style={{ flex: 1 }}
                        showsVerticalScrollIndicator={false}
                        nestedScrollEnabled={true}
                        refreshControl={
                            <RefreshControl
                                refreshing={refreshing}
                                onRefresh={onRefresh}
                            />
                        }
                    >

                    <View style={styles.circleProgressView}>
                            <View style={styles.textProgressContainer}>
                                <Text style={styles.textProgressTitle}>Contas à Receber Hoje</Text>
                                <Text style={styles.textProgress}>2 de 3</Text>
                            </View>

                            <AnimatedCircularProgress
                                size={100}
                                width={10}
                                fill={10}
                                tintColor="#00e0ff"
                                backgroundColor="#e0e0e0"
                                lineCap={"round"}
                            >
                                {
                                    (fill) => (
                                        <Text style={styles.numberInside}>2</Text>
                                    )
                                }
                            </AnimatedCircularProgress>
                        </View>

                      


                    </ScrollView>
                }
            </View>
        </View>

    )
}