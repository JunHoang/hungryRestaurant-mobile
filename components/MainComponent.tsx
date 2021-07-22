import React, { useState } from 'react';
import { View, Platform } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';

import { DISHES } from '../shared/dishes';
import Dishdetail from './DishdetailComponent';
import Menu from './MenuComponent';
import { NavigationContainer } from '@react-navigation/native';
import { RootStackParamList } from '../shared/types';

const MenuNavigator = createStackNavigator<RootStackParamList>();

export default function MainComponent() {
    return (
        <NavigationContainer>
            <MenuNavigator.Navigator>
                <MenuNavigator.Screen name="Menu" component={Menu} />
                <MenuNavigator.Screen name="DishDetail" component={Dishdetail} />
            </MenuNavigator.Navigator>
        </NavigationContainer>
    )
}
