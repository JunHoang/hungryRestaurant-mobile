import React, { useState } from 'react'
import { ScrollView, View } from 'react-native';
import { Card, Text } from 'react-native-elements';
import { createStackNavigator } from '@react-navigation/stack';

import { Leader, Dish, Promotion } from '../shared/types';
import { DISHES } from '../shared/dishes';
import { LEADERS } from '../shared/leaders';
import { PROMOTIONS } from '../shared/promotions';

type PropsItem = {
    item: Dish | Leader | Promotion
}

type HomeStackParamList = {
    Home: undefined;
}

const HomeNavigator = createStackNavigator<HomeStackParamList>();

function RenderItem({ item }: PropsItem) {
    if (!item) {
        return (
            <View></View>
        )
    } else {
        return (
            <Card>
                <Card.Image source={require('./images/uthappizza.png')}>
                    <Card.FeaturedTitle>{item.name}</Card.FeaturedTitle>
                </Card.Image>
                <Text style={{ margin: 10 }}>{item.description}</Text>
            </Card>)
    }
}

function HomeComponent() {
    const [dishes, setDishes] = useState(DISHES)
    const [promotions, setPromotions] = useState(PROMOTIONS)
    const [leaders, setLeaders] = useState(LEADERS)

    return (
        <ScrollView>
            <RenderItem item={dishes.filter((dish) => dish.featured)[0]} />
            <RenderItem item={promotions.filter((promo) => promo.featured)[0]} />
            <RenderItem item={leaders.filter((leader) => leader.featured)[0]} />
        </ScrollView>
    )
}



export default function HomeStackScreen() {
    return (
        <HomeNavigator.Navigator>
            <HomeNavigator.Screen name="Home" component={HomeComponent} />
        </HomeNavigator.Navigator>
    )
}
