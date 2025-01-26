import { useNavigation } from '@react-navigation/native';
import * as React from 'react';
import { View, Text, Image } from 'react-native';
import { useEffect } from 'react';

export default function HomePreparingScreen() {
    const navigation = useNavigation();

    useEffect(() => {
        setTimeout(() => {
            // Navigate to the 'Home' screen after 3 seconds
            navigation.navigate('Home');
        }, 3000);
    }, []); // Add an empty dependency array to ensure the effect runs only once

    return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
            <Image
                source={require('../assets/images/moto.gif')}
                style={{ width: '100%', height: '100%', borderRadius: 16 }}
                resizeMode="contain" // Ensure the image fits within the box
            />
        </View>
    );
}
