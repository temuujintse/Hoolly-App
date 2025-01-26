import * as React from 'react';
import { View, Text, TouchableOpacity, ScrollView } from 'react-native';
import { themeColors } from '../theme';
import RestaurantCard from './RestaurantCars';

export default function FeaturedRow({ title, description, restaurants }) {
    return (
        <View>
            <View className="flex-row justify-between items-center px-4">
                <View>
                    <Text className="font-bold text-lg">{title}</Text>
                    <Text className="text-gray-500 text-xs">{description}</Text>
                </View>
                <TouchableOpacity>
                    <Text style={{ color: themeColors.text }} className="font-semibold">See all</Text>
                </TouchableOpacity>
            </View>
            <ScrollView horizontal showsHorizontalScrollIndicator={false} contentContainerStyle={{ paddingHorizontal: 15 }}>
                {
                    restaurants?.length > 0 ? (
                        restaurants.map((restaurant, index) => (
                            <RestaurantCard item={restaurant} key={index} />
                        ))
                    ) : (
                        <Text className="text-gray-500 px-4">No restaurants available</Text>
                    )
                }
            </ScrollView>

        </View>
    );
}
