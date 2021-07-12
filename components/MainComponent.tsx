import React, { useState } from 'react';
import { DISHES } from '../shared/dishes';
import Menu from './MenuComponent';

export default function MainComponent() {
    const [dishes, setDishes] = useState(DISHES);
    return (
        <Menu dishes={dishes} />
    )
}
