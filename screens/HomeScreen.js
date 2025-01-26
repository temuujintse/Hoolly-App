import { StatusBar } from 'expo-status-bar';
import * as React from 'react';
import { View, Text, TextInput, ScrollView, TouchableOpacity } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import * as Icon from "react-native-feather";
import { themeColors } from '../theme';
import Categories from '../components/Categories';
import FeaturedRow from '../components/FeaturedRow';
import { featured } from '../constants';
import { useNavigation } from '@react-navigation/native';

export default function HomeScreen() {

    const navigation = useNavigation();
    return (
        <SafeAreaView className="bg-white">
            <StatusBar barStyle="light-content" backgroundColor={themeColors.bgColor(1)} />
            {/* status bar */}

            {/* search section */}
            <View className="flex-row items-center space-x-2 px-4 pb-4 pt-2">
                <View className="flex-row flex-1 items-center p-3 rounded-full border border-gray-300">
                    {/* <Icon.Search height="25" width="25" stroke="gray" />
                    <TextInput placeholder='Restaurant' className="ml-2 flex-1" /> */}
                    <TouchableOpacity onPress={()=> navigation.navigate('ChooseRes')}>
                        <View className="flex-row items-center space-x-1 p-1 border-0  border-l-gray-300">
                            <Icon.MapPin height="20" width="20" stroke="gray" />
                            <Text className="text-gray-600">Байршил сонгох</Text>
                        </View>
                    </TouchableOpacity>
                </View>
                {/* <View style={{ backgroundColor: themeColors.bgColor(1) }} className="p-3 bg-gray-300 rounded-full">
                    <Icon.Sliders height="20" width="20" stroke="white" strokeWidth={2.5} />
                </View> */}
            </View>
            
            {/* main */}
            <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={{ paddingBottom: 20 }}>
                {/* categories */}
                <Categories />
                {/* features */}
                <View className="mt-5">
                    {
                        [featured, featured, featured, featured].map((item, index) => (
                            <FeaturedRow
                                key={index}
                                title={item.title}
                                restaurants={item.restaurants}
                                description={item.description}
                            />
                        ))
                    }
                    
                </View>

            </ScrollView>
        </SafeAreaView>
    );
}
