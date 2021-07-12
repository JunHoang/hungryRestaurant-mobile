import React, { useState } from 'react';
import { View } from 'react-native';

import { DISHES } from '../shared/dishes';
import Dishdetail from './DishdetailComponent';
import Menu from './MenuComponent';

export default function MainComponent() {
    const [dishes, setDishes] = useState(DISHES);
    const [selectedDish, setSelectedDish] = useState<number | null>(null);

    const dish = dishes.find((dish) => dish.id === selectedDish);

    function onDishSelect(dishId: number) {
        setSelectedDish(dishId)
    }

    return (
        <View>
            <Menu dishes={dishes} onPress={(dishId: number) => onDishSelect(dishId)} />
            {dish && <Dishdetail dish={dish} />}
        </View>
    )
}
