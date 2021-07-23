import React, { useState } from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import { DISHES } from '../shared/dishes';
import Dishdetail from './DishdetailComponent';
import Menu from './MenuComponent';
import { NavigationContainer } from '@react-navigation/native';
import { MainStackParamList, MenuStackParamList, HomeStackParamList } from '../shared/types';
import Home from './HomeComponent';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

const MainNavigator = createBottomTabNavigator<MainStackParamList>();
const MenuNavigator = createStackNavigator<MenuStackParamList>();
const HomeNavigator = createStackNavigator<HomeStackParamList>();


export default function MainComponent() {
    const [dishes, setDishes] = useState(DISHES)

    function getDishById(dishId: number) {
        const foundDish = dishes.find(dish => dish.id === +dishId)
        return foundDish
    }

    function MenuStackScreen() {
        return (
            <MenuNavigator.Navigator>
                <MenuNavigator.Screen name="Menu" component={Menu} />
                <MenuNavigator.Screen name="DishDetail"
                    component={Dishdetail}
                    options={({ route }) => ({ title: getDishById(route.params.dishId)?.name })}
                />
            </MenuNavigator.Navigator>
        )
    }

    function HomeStackScreen() {
        return (
            <HomeNavigator.Navigator>
                <HomeNavigator.Screen name="Home" component={Home} />
            </HomeNavigator.Navigator>
        )
    }

    return (
        <NavigationContainer>
            <MainNavigator.Navigator>
                <MainNavigator.Screen name="Home" component={HomeStackScreen} />
                <MainNavigator.Screen name="Menu" component={MenuStackScreen} />
            </MainNavigator.Navigator>
        </NavigationContainer>
    )
}
