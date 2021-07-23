import React, { useState } from 'react';
import { View, FlatList } from 'react-native';
import { ListItem, Avatar } from 'react-native-elements';
import { useNavigation } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import { createStackNavigator } from '@react-navigation/stack';

import { Dish } from '../shared/types';
import { DISHES } from '../shared/dishes';
import Dishdetail from './DishdetailComponent';

type MenuNavigationProp = StackNavigationProp<MenuStackParamList, 'Menu'>

type MenuStackParamList = {
    Menu: undefined;
    DishDetail: { dishId: number };
};

type Menu = {
    item: Dish,
    index: number,
}

function MenuComponent() {

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

export default function MenuStackScreen() {
    const MenuNavigator = createStackNavigator<MenuStackParamList>();
    const [dishes, setDishes] = useState(DISHES)

    function getDishById(dishId: number) {
        const foundDish = dishes.find(dish => dish.id === +dishId)
        return foundDish
    }
    return (
        <MenuNavigator.Navigator>
            <MenuNavigator.Screen name="Menu" component={MenuComponent} />
            <MenuNavigator.Screen name="DishDetail"
                component={Dishdetail}
                options={({ route }) => ({ title: getDishById(route.params.dishId)?.name })}
            />
        </MenuNavigator.Navigator>
    )
}
