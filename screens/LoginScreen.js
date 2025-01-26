import * as React from 'react';
import { View, Text, TouchableOpacity, TextInput, StatusBar, Image } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { themeColors } from '../theme';
import { useNavigation } from '@react-navigation/native';
import FastImage from 'react-native-fast-image';

export default function LoginScreen() {

    const navigation = useNavigation();

    return (
        <SafeAreaView className="flex-1 bg-gray-100 p-4 justify-center ">
            <StatusBar barStyle="light-content" backgroundColor={themeColors.bgColor(1)} />
            
            {/* Image View */}
            <View className="bg-white rounded-2xl shadow-md m-2 w-full h-48">
                <Image
                    source={require('../assets/images/moto.gif')}
                    style={{ width: '100%', height: '100%', borderRadius: 16 }}
                    resizeMode="contain" // Ensure the image fits within the box
                />
            </View>
            {/* text  */}
            <View className="flex-row justify-center">
                <Text className="text-lg font-semi-bold">Sign up to join</Text>
            </View>
            {/* card */}
            <View className="flex-row justify-center p-6">
                {/* facebook  */}
                <TouchableOpacity>
                    <View className={`bg-white rounded-3xl justify-center items-center shadow-md m-2 w-24 h-16`}>
                        <Image className="h-10 w-10 rounded-full" source={require('../assets/images/facebook.jpeg')} />
                    </View>
                </TouchableOpacity>
                {/* google */}
                <TouchableOpacity>
                    <View className={`bg-white rounded-3xl justify-center items-center shadow-md m-2 w-24 h-16`}>
                        <Image className="h-10 w-10 rounded-full" source={require('../assets/images/google.jpg')} />
                    </View>
                </TouchableOpacity>
                {/* instagram */}
                <TouchableOpacity>
                    <View className={`bg-white rounded-3xl justify-center items-center shadow-md m-2 w-24 h-16`}>
                        <Image className="h-12 w-12 rounded-full" source={require('../assets/images/ig.jpg')} />
                    </View>
                </TouchableOpacity>
            </View>
            
            {/* Header */}
            <View className="items-center mb-8">
                <Text className="text-2xl font-bold text-gray-800">Welcome!</Text>
            </View>

            {/* Form */}
            <View className="mb-6">
                <TextInput 
                    className="bg-white rounded-lg p-4 mb-4 text-lg shadow-md" 
                    placeholder="Username or Email" 
                    placeholderTextColor="#aaa" 
                />
                <TextInput 
                    className="bg-white rounded-lg p-4 mb-4 text-lg shadow-md" 
                    placeholder="Password" 
                    secureTextEntry     
                    placeholderTextColor="#aaa" 
                />
                <TouchableOpacity onPress={() => navigation.navigate('HomePreparing')} className="py-4 rounded-lg shadow-lg" style={{ backgroundColor: themeColors.bgColor(1) }}>
                    <Text className="text-center text-white text-lg font-bold">Login</Text>
                </TouchableOpacity>
            </View>
        </SafeAreaView>
    );
}
