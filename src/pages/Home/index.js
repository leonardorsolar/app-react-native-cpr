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

//import { MaterialIcons } from '@expo/vector-icons';
import { styles } from './style';
import { DrawerActions, useNavigation } from '@react-navigation/core';
import { AnimatedCircularProgress } from 'react-native-circular-progress';

//import api from '../../services/api';
//import Load from '../../components/Load';
import { useIsFocused } from '@react-navigation/native';

export default function Home() {

    return (
        <View style={{ flex: 1 }}>
            <StatusBar barStyle="light-content" />
            <View style={{ flex: 1 }}>
                <View style={styles.header}>
                    <View style={styles.containerHeader}> 
                        <Image style={styles.logo} source={require('../../assets/logo2.png')} />
                    </View>
                </View>  
            
            </View>
        </View>

    )
}