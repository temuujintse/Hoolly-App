import * as React from 'react';
import { View, Text, TouchableWithoutFeedback, Image } from 'react-native';
import * as Icon from "react-native-feather";
import { themeColors } from '../theme';
import { useNavigation } from '@react-navigation/native';


export default function RestaurantCard({ item }) {
    // console.log(item);
    const navigation = useNavigation(); 

    return (
        <TouchableWithoutFeedback onPress={()=> navigation.navigate('Restaurant', {...item})}>
            <View
            style={{
                shadowColor: themeColors.bgColor(1),
                shadowRadius:17
            }} 
            className="mr-6 bg-white rounded-3xl shadow-lg m-2">
                <Image className="h-36 w-64 rounded-t-3xl" source={item.image}></Image>
                <View className="px-3 pb-8 space-y-2">
                    <Text className="text-lg font-bold pt-2">{item.name}</Text>
                    <View className="flex-row items-center space-x-1">
                        <Image source={require('../assets/images/star.png')} className="h-4 w-4" />
                        <Text className="text-xs">
                            <Text className="text-green-700">{item.stars}</Text>
                            <Text className="text-gray-700">({item.review}) review - 
                                <Text className="font-semibold"> {item.category}</Text>
                            </Text>
                        </Text>
                    </View>
                    <View className="flex-row items-center space-x-1">
                        <Icon.MapPin color="gray" width="15" height="15" />
                        <Text className="text-gray-700 text-xs">Nearby - {item.address}</Text>
                    </View>
                </View>
            </View>
        </TouchableWithoutFeedback>
    );
}
