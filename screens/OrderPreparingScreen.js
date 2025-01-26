import { useNavigation } from '@react-navigation/native';
import * as React from 'react';
import { View, Text, Image } from 'react-native';
import { useEffect } from 'react';

export default function OrderPreparingScreen(){

    const navigation = useNavigation();
    useEffect(()=>{
        setTimeout(()=>{
            // move to delivery screen
            navigation.navigate('Delivery');
        }, 3000)
    })
    return(
        <View className="flex-1 bg-white justify-center items-center">
            <Image source={require('../assets/images/muuve-rider.gif')} />
        </View>
    );
}