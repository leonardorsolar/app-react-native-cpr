import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { ActivityIndicator, FlatList, Image, TextInput, TouchableOpacity, View, Dimensions, Alert } from 'react-native';
import { styles } from './style';
import { useNavigation } from '@react-navigation/core';
import Icon from 'react-native-vector-icons/MaterialIcons';
//import api from '../../services/api';
import Cardclientes from '../../components/CardPessoas';


const Clientes: React.FC = () => {

    const navigation: any = useNavigation();

    //const [lista, setLista] = useState<any>([]);
    const [loading, setLoading] = useState(false);
    const [page, setPage] = useState(1);
    const [totalItems, setTotalItems] = useState(0);
    const [busca, setBusca] = useState("");
    const [onEndReachedCalledDuringMomentum, setMT] = useState(true);

    async function loadData() {

        
        try {
            //const response = await api.get(`clientes/listar.php?pagina=${page}&limite=15`);

            //if(lista.length >= response.data.totalItems) return;

            if (loading === true) return;
      
            setLoading(true);
      
            //setLista([...lista, ...response.data.resultado]);
            setPage(page + 1);
          } catch (error) {
            console.log(error)
          }
    }
    

    const renderItem = function ({ item }: any) {
        return (
            <Cardclientes
                data={item}
            />
        )
    }

      function Footer(load: any) {
        if (!load) return null;

        return (
            <View style={styles.loading}>
                <ActivityIndicator size={25} color="#000" />
            </View>
        )
    }

    async function Search() {
       const response = await api.get(`clientes/buscar.php?buscar=${busca}`);
       
      // setLista(response.data.itens);
    }

   

    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <View style={styles.containerHeader}>
                    <TouchableOpacity
                        style={styles.menu}
                        onPress={() => navigation.goBack()}
                    > 
                         <Icon name="arrow-back" size={28} color="gray" />
                    </TouchableOpacity>

                    <Image style={styles.logo} source={require('../../assets/logo.png')} />
                </View>
            </View>

            <View style={{ paddingHorizontal: 15, flex: 1, }}>
                <View style={styles.containerSearch}>
                    <TextInput
                        style={styles.search}
                        placeholder="Pesquisar Clientes."
                        placeholderTextColor="gray"
                        keyboardType="default"
                        onChangeText={(busca) => setBusca(busca)}
                        returnKeyType="search"
                        onTextInput= {() => Search()}
                    />

                    <TouchableOpacity
                        style={styles.iconSearch}
                        onPress={() => Search()}
                    >
                        <Icon name="add-circle-outline" size={28} color="gray" />
                    </TouchableOpacity>
                </View>

                <View style={{ flex: 1, height: Dimensions.get('window').height + 30, }}>
                    <FlatList
                       // data={lista}
                        renderItem={renderItem}
                        keyExtractor={item => String(item.id)}
                        onEndReachedThreshold={0.1}
                        removeClippedSubviews
                        initialNumToRender={10}
                        onEndReached={(distanceFromEnd) => {
                          if (!onEndReachedCalledDuringMomentum) {
                            loadData().then(() => setLoading(false));
                            setMT(true);
                          }
                        }}
                        ListFooterComponent={(distanceFromEnd) => {
                          if (!onEndReachedCalledDuringMomentum) {
                            return <Footer load={loading} />
                          } else {
                            return <View></View>
                          }
                        }}
                        onMomentumScrollBegin={() => setMT(false)}
                        windowSize={10}
                        getItemLayout={(data, index) => (
                          { length: 50, offset: 50 * index, index }
                        )}
                    />
                </View>

                <View style={styles.containerFloat}>
                    <TouchableOpacity
                        style={styles.CartButton}
                        onPress={() => navigation.navigate("NovaPessoa", { id_reg: '0' })}
                    >
                        <Icon name="add-circle-outline" size={35} color="#fff" />
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    );
}

export default Clientes;