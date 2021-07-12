import React from 'react';
import { View, FlatList } from 'react-native';
import { ListItem, Avatar } from 'react-native-elements';
import { Dish } from '../shared/types';

type Props = {
    dishes: Dish[],
    onPress: (dishId: number) => void
}

type Menu = {
    item: Dish,
    index: number,
}

export default function MenuComponent({ dishes, onPress }: Props) {

    const renderMenuItem = ({ item, index }: Menu) => {
        return (
            <ListItem key={index} onPress={() => onPress(item.id)}>
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
