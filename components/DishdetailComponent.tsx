import React from 'react';
import { View, FlatList } from 'react-native';
import { Card, Text } from 'react-native-elements';

import { Dish } from '../shared/types';

type Props = {
    dish: Dish
}

function RenderDish({ dish }: Props) {
    if (dish != null) {
        return (
            <Card>
                <Card.FeaturedTitle>{dish.name}</Card.FeaturedTitle>
                <Card.Image source={require('./images/uthappizza.png')} />
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

function Dishdetail({ dish }: Props) {
    return (
        <RenderDish dish={dish} />
    )
}

export default Dishdetail;
