import * as React from 'react';
import { View, Text } from 'react-native';
import { createStaticNavigation } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';
import HomeScreen from './screens/HomeScreen';
import RestaurantScreen from './screens/RestaurantScreen';
import CartScreen from './screens/CartScreen';
import OrderPreparing from './screens/OrderPreparingScreen';
import OrderPreparingScreen from './screens/OrderPreparingScreen';
import DeliveryScreen from './screens/DeliveryScreen';
import ChooseResScreen from './screens/ChooseResScreen';
import LoginScreen from './screens/LoginScreen';
import HomePreparingScreen from './screens/HomePreparingScreen';

const Stack = createNativeStackNavigator();

export default function Navigation() {
    return (
        <NavigationContainer>
            <Stack.Navigator screenOptions={{
                headerShown: false
            }}>
                <Stack.Screen name='Login' component={LoginScreen} />
                <Stack.Screen name="Home" component={HomeScreen} />
                <Stack.Screen name="Restaurant" component={RestaurantScreen} />
                <Stack.Screen name="Cart" options={{presentation:'modal'}} component={CartScreen} />
                <Stack.Screen name="OrderPreparing" options={{presentation:'fullScreenModal'}} component={OrderPreparingScreen} />
                <Stack.Screen name="HomePreparing" options={{presentation:'fullScreenModal'}} component={HomePreparingScreen} />
                <Stack.Screen name="Delivery" options={{presentation:'fullScreenModal'}} component={DeliveryScreen} />
                <Stack.Screen name="ChooseRes" options={{presentation:'fullScreenModal'}} component={ChooseResScreen} />

            </Stack.Navigator>
        </NavigationContainer>
    );
}