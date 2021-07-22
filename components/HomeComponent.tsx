import React from 'react'
import { View, Text } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';

import { MainStackParamList } from '../shared/types';

type HomeNavigationProp = StackNavigationProp<MainStackParamList, 'Home'>

export default function HomeComponent() {
    return (
        <View>
            <Text>Home Component</Text>
        </View>
    )
}
