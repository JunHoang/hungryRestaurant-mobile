import React, { useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import MenuStackScreen from './MenuComponent'
import HomeStackScreen from './HomeComponent';
import ContactStackScreen from './ContactComponent';
import AboutStackScreen from './AboutComponent';

type MainStackParamList = {
    Home: undefined;
    Menu: undefined;
    Contact: undefined;
    About: undefined;
}

const MainNavigator = createBottomTabNavigator<MainStackParamList>();

export default function MainComponent() {
    return (
        <NavigationContainer>
            <MainNavigator.Navigator>
                <MainNavigator.Screen name="Home" component={HomeStackScreen} />
                <MainNavigator.Screen name="Menu" component={MenuStackScreen} />
                <MainNavigator.Screen name="Contact" component={ContactStackScreen} />
                <MainNavigator.Screen name="About" component={AboutStackScreen} options={{ title: "About Us" }} />
            </MainNavigator.Navigator>
        </NavigationContainer>
    )
}
