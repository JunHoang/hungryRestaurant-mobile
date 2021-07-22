import React, { useState } from 'react';
import { View, FlatList } from 'react-native';
import { Card, Text } from 'react-native-elements';
import { RouteProp, useNavigation, useRoute } from '@react-navigation/native';

import { Dish, MenuStackParamList } from '../shared/types';
import { DISHES } from '../shared/dishes';


type DishDetailRouteProp = RouteProp<MenuStackParamList, 'DishDetail'>

type PropsDish = {
    dish: Dish
}

function RenderDish({ dish }: PropsDish) {
    if (dish != null) {
        return (
            <Card>
                <Card.Image source={require('./images/uthappizza.png')}>
                    <Card.FeaturedTitle>{dish.name}</Card.FeaturedTitle>
                </Card.Image>
                <Text style={{ margin: 10 }}>
                    {dish.description}
                </Text>
            </Card>
        )
    }
    else {
        return (<View></View>)
    }
}

function Dishdetail() {
    const [dishes, setDishes] = useState(DISHES)
    const route = useRoute<DishDetailRouteProp>();
    const dishId = +route.params.dishId
    const foundDish = dishes.find(dish => dish.id === dishId)

    if (!foundDish) {
        return (
            <View>
                <Text>No dish</Text>
            </View>
        )
    }
    return (
        <RenderDish dish={foundDish} />
    )
}

export default Dishdetail;
