import React from 'react';
import { View, Modal, ScrollView, Text, TouchableOpacity } from 'react-native';
import Card from '../components/MenuCard';
import { themeColors } from '../theme';
import { useNavigation } from '@react-navigation/native';
import * as Icon from "react-native-feather";

export default function RestaurantsInfo({ restaurant, visible, onClose }) {
    const navigation = useNavigation();

    return (
        <Modal
            animationType="slide"
            transparent={true}
            visible={visible}
            onRequestClose={onClose}
        >
            <View style={{ flex: 1 }} className="flex-1 justify-center items-center">
                <View className="bg-gray-200 justify-center items-center rounded-lg p-6 shadow-lg shadow-black" style={{ height: 800, width: 400 }}>
                    {/* Close Button */}
                    <TouchableOpacity onPress={onClose} style={{ position: 'absolute', top: 10, right: 10 }}>
                        <Icon.X stroke={'red'} strokeWidth={3} />
                    </TouchableOpacity>

                    {restaurant && (
                        <>
                            <Text className="text-center mb-2 text-xl font-bold">
                                {restaurant.name} Меню
                            </Text>
                            <Text className="text-center mb-4 text-gray-600">
                                {restaurant.description}
                            </Text>
                        </>
                    )}
                    <TouchableOpacity>
                        <Text style={{ color: themeColors.text }} className="font-semibold">See all</Text>
                    </TouchableOpacity>
                    <ScrollView
                        contentContainerStyle={{ paddingBottom: 15 }}
                        horizontal showsHorizontalScrollIndicator={false}
                    >
                        <View className="flex-row flex-wrap justify-center">
                            <Card
                                title="Cheese Pizza"
                                description="Delicious cheesy pizza with a crispy crust."
                                imageSource={require('../assets/images/pizzak.jpeg')}
                                price="10"
                            />
                            <Card
                                title="Veggie Burger"
                                description="Fresh veggies stacked in a flavorful bun."
                                imageSource={require('../assets/images/burger.png')}
                            />
                            <Card
                                title="Cheese Pizza"
                                description="Delicious cheesy pizza with a crispy crust."
                                imageSource={require('../assets/images/pizzak.jpeg')}
                                price="10"
                            />
                            <Card
                                title="Veggie Burger"
                                description="Fresh veggies stacked in a flavorful bun."
                                imageSource={require('../assets/images/burger.png')}
                            />
                            <Card
                                title="Cheese Pizza"
                                description="Delicious cheesy pizza with a crispy crust."
                                imageSource={require('../assets/images/pizzak.jpeg')}
                                price="10"
                            />
                        </View>
                    </ScrollView>

                    {/* Payment Button */}
                    <View className="absolute top-full right-5 w-full z-50">
                        <TouchableOpacity onPress={() => navigation.navigate('Home')} style={{ backgroundColor: themeColors.bgColor(1) }}
                            className="flex-row justify-between items-center mx-5 rounded-full p-4 py-3 shadow-lg">
                            <View className="p-2 px-4 rounded-full" style={{ backgroundColor: 'rgba(255,255,255,0.3)' }}>
                                <Text className="font-extrabold text-white text-lg">2</Text>
                            </View>
                            <Text className="flex-1 text-center font-extrabold text-white text-lg">Төлбөр төлөх</Text>
                            <Text className="font-extrabold text-white text-lg">5000₮</Text>
                        </TouchableOpacity>
                    </View>

                </View>
            </View>
        </Modal>
    );
}
