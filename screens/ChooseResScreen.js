import React, { useState } from 'react';
import { View, TextInput, TouchableOpacity } from 'react-native';
import MapView, { Marker } from 'react-native-maps';
import { useNavigation } from '@react-navigation/native';
import { themeColors } from '../theme';
import * as Icon from "react-native-feather";
import RestaurantsInfo from '../components/RestaurantsInfo';


const restaurants = [
    { name: 'KFC', description: 'Famous for fried chicken', latitude: 47.88159, longitude: 106.913282 , image: require('../assets/images/pizzak.jpeg')},
    { name: 'Pizza Hut', description: 'Delicious pizzas', latitude: 47.920345, longitude: 106.929056 },
    { name: 'Burger King', description: 'Tasty burgers', latitude: 47.91825, longitude: 106.925288 },
    { name: 'Subway', description: 'Fresh sandwiches', latitude: 47.920206, longitude: 106.92263 },
];

export default function ChooseResScreen() {
    const [selectedRestaurant, setSelectedRestaurant] = useState(null); // Сонгогдсон ресторан
    const [modalVisible, setModalVisible] = useState(false); // Модалын төлөв
    const navigation = useNavigation();

    return (
        <View className="flex-1 p-6 mt-2">
            {/* Search Bar */}
            <View className="flex-row items-center px-4 py-2 w-80 mx-12 mb-2 rounded-full border border-gray-300 bg-white shadow-sm">
                <Icon.Search height={25} width={25} stroke="gray" />
                <TextInput placeholder="Ресторан хайх..." className="ml-3 flex-1 text-gray-700" />
            </View>

            {/* Back Button */}
            <TouchableOpacity
                onPress={() => navigation.goBack()}
                style={{ backgroundColor: themeColors.bgColor(1) }}
                className="absolute z-10 rounded-full p-2 shadow top-8 left-5"
            >
                <Icon.ArrowLeft strokeWidth={3} stroke="white" />
            </TouchableOpacity>

            {/* Map View */}
            <MapView
                initialRegion={{
                    latitude: 47.88159,
                    longitude: 106.913282,
                    latitudeDelta: 0.05,
                    longitudeDelta: 0.05,
                }}
                className="flex-1"
            >
                {restaurants.map((restaurant, index) => (
                    <Marker
                        key={index}
                        coordinate={{ latitude: restaurant.latitude, longitude: restaurant.longitude }}
                        title={restaurant.name}
                        description={restaurant.description}
                        image={restaurant.image}
                        pinColor="blue"
                        onPress={() => {
                            setSelectedRestaurant(restaurant); // Сонгогдсон рестораны мэдээллийг хадгалах
                            setModalVisible(true); // Модалыг нээх
                        }}
                        
                    />
                ))}
            </MapView>

            {/* RestaurantsInfo модал */}
            <RestaurantsInfo
                restaurant={selectedRestaurant}
                visible={modalVisible}
                onClose={() => setModalVisible(false)} // Модал хаах функц
            />
        </View>
    );
}
