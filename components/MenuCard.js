import React from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';
import * as Icon from "react-native-feather";
import { themeColors } from '../theme';

export default function Card({ title, description, imageSource, style, price }) {
    return (
        <View>
            <View className={`bg-white rounded-2xl shadow-md m-2 w-80 ${style}`}>
                <View className="flex-row items-center">
                    <Image source={imageSource} className="w-40 h-40 rounded-l-2xl" />

                    <View className="flex-1 p-4">
                        <Text className="text-2xl font-bold text-red-400">{price}₮</Text>
                        <Text className="text-lg font-bold text-gray-800">{title}</Text>
                        {description && (
                            <Text className="text-sm text-gray-500 mt-1">{description}</Text>
                        )}
                        <View className="flex-row justify-between pl-3 items-center">
                            <View className="flex-row items-center">
                                <TouchableOpacity className="p-1 bg-gray-200 rounded-full" style={{ backgroundColor: themeColors.bgColor(1) }}>
                                    <Icon.Minus strokeWidth={2} height={20} width={20} stroke={'white'} />
                                </TouchableOpacity>

                                <Text className="px-3">3</Text>

                                <TouchableOpacity className="p-1 bg-gray-200 rounded-full" style={{ backgroundColor: themeColors.bgColor(1) }}>
                                    <Icon.Plus strokeWidth={2} height={20} width={20} stroke={'white'} />
                                </TouchableOpacity>
                            </View>
                        </View>
                    </View>
                </View>
                {/* Rating or other content below */}
                {/* <View className="flex-row items-center space-x-1 p-2">
                <Image className="h-5 w-5" source={require('../assets/images/star.png')} />
            </View> */}
            </View>
        </View>
    );
}
