import { useNavigation, useRoute } from '@react-navigation/native';
import * as React from 'react';
import { View, Text, ScrollView, Image, TouchableOpacity } from 'react-native';
import * as Icon from "react-native-feather";
import { themeColors } from '../theme';
import DishRow from '../components/DishRow';
import CardIcon from '../components/cardIcon';
import { StatusBar } from 'expo-status-bar';
import { useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { setRestaurant } from '../slices/restaurantSlice';


export default function RestaurantScreen() {

    const navigation = useNavigation();
    const { params } = useRoute();
    let item = params;
    // console.log('res: ' ,item);

    const dispatch = useDispatch();
    useEffect(()=>{
        if(item && item.id){
            dispatch(setRestaurant({...item}))
        }
    },[])

    return (
        <View >
            <CardIcon /> 
            <StatusBar style='light' />   
            <ScrollView>
                <View className="relative">
                    <Image className="w-full h-72" source={item.image} />
                    <TouchableOpacity onPress={() => navigation.goBack()} className="absolute top-14 left-4 bg-gray-50 p-2 rounded-full shadow">
                        <Icon.ArrowLeft strokeWidth={3} stroke={themeColors.bgColor(1)} />
                    </TouchableOpacity>
                </View>
                <View style={{ borderTopLeftRadius: 40, borderTopRightRadius: 40 }} className="bg-white -mt-12 pt-6">
                    <View className="px-5">
                        <Text className="text-3xl font-bold">{item.name}</Text>
                        <View className="flex-row space-x-2 my-1">
                            <View className="flex-row items-center space-x-1">
                                <Image source={require('../assets/images/star.png')} className="h-4 w-4" />
                                <Text className="text-xs">
                                    <Text className="text-green-700">{item.stars}</Text>
                                    <Text className="text-gray-700">({item.review}) review -
                                        <Text className="font-semibold"> {item.category}</Text>
                                    </Text>
                                </Text>
                                <Icon.MapPin color="gray" width="15" height="15" />
                                <Text className="text-gray-700 text-xs">Nearby - {item.address}</Text>
                            </View>
                        </View>
                        <Text className="text-gray-500 mt-2"> {item.description}</Text>
                    </View>
                </View>
                <View className="pb-36 bg-white">
                    <Text className="px-4 py-4 text-2xl font-bold">Menu</Text>
                    {/* dishes */}
                    {
                        item.dishes.map((dish) => (
                            <DishRow item={dish} name = {dish.name} key={dish.id} price={dish.price} description={dish.description}/>
                        ))
                    }

                </View>
            </ScrollView>
        </View>
    )
}