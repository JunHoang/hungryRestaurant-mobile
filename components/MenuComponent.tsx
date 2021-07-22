import React, { useState } from 'react';
import { View, FlatList } from 'react-native';
import { ListItem, Avatar } from 'react-native-elements';

import { Dish, MenuStackParamList } from '../shared/types';
import { DISHES } from '../shared/dishes';
import { useNavigation } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';

type MenuNavigationProp = StackNavigationProp<MenuStackParamList, 'Menu'>

type Menu = {
    item: Dish,
    index: number,
}

export default function MenuComponent() {

    const navigation = useNavigation<MenuNavigationProp>()

    const [dishes, setDishes] = useState(DISHES)

    const renderMenuItem = ({ item, index }: Menu) => {
        return (
            <ListItem key={index} onPress={() => navigation.navigate('DishDetail', { dishId: item.id })}>
                <Avatar placeholderStyle={{ backgroundColor: 'transparent' }} rounded source={require('./images/uthappizza.png')} />
                <ListItem.Content>
                    <ListItem.Title>{item.name}</ListItem.Title>
                    <ListItem.Subtitle>{item.description}</ListItem.Subtitle>
                </ListItem.Content>
                <ListItem.Chevron />
            </ListItem>
        )
    }

    return (
        <FlatList
            data={dishes}
            renderItem={renderMenuItem}
            keyExtractor={item => item.id.toString()}
        />
    )
}
