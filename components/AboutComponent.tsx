import React, { useState } from 'react';
import { ScrollView, FlatList } from 'react-native';
import { ListItem, Avatar } from 'react-native-elements';
import { Card, Text } from 'react-native-elements';
import { createStackNavigator } from '@react-navigation/stack';
import { Leader } from '../shared/types';
import { LEADERS } from '../shared/leaders';

type AboutStackParamList = {
    About: undefined;
}

type LeaderProps = {
    item: Leader,
    index: number
}

const AboutNavigator = createStackNavigator<AboutStackParamList>();

function History() {
    return (
        <Card>
            <Card.Title style={{ fontSize: 20 }}>Our History</Card.Title>
            <Card.Divider />
            <Text style={{ margin: 10, fontWeight: 'bold' }}>
                Started in 2010, Ristorante con Fusion quickly established itself as a culinary icon par excellence in Hong Kong. With its unique brand of world fusion cuisine that can be found nowhere else, it enjoys patronage from the A-list clientele in Hong Kong.  Featuring four of the best three-star Michelin chefs in the world, you never know what will arrive on your plate the next time you visit us.
            </Text>
            <Text style={{ margin: 10, fontWeight: 'bold' }}>
                The restaurant traces its humble beginnings to The Frying Pan, a successful chain started by our CEO, Mr. Peter Pan, that featured for the first time the world's best cuisines in a pan.
            </Text>
        </Card>
    )
}



function LeaderCard() {
    const [leaders, setLeaders] = useState(LEADERS)

    function renderLeaderItem({ item, index }: LeaderProps) {
        return (
            <ListItem key={index}>
                <Avatar placeholderStyle={{ backgroundColor: 'transparent' }} rounded source={require('./images/alberto.png')} />
                <ListItem.Content>
                    <ListItem.Title style={{ fontWeight: 'bold' }}>{item.name}</ListItem.Title>
                    <ListItem.Subtitle>{item.description}</ListItem.Subtitle>
                </ListItem.Content>
            </ListItem >
        )
    }

    return (
        <Card>
            <Card.Title style={{ fontSize: 20 }}>Corporate Leadership</Card.Title>
            <Card.Divider />
            <FlatList
                data={leaders}
                renderItem={renderLeaderItem}
                keyExtractor={item => item.id.toString()}
            />
        </Card>
    )
}

function AboutComponent() {
    return (
        <ScrollView>
            <History />
            <LeaderCard />
        </ScrollView>

    )
}


export default function AboutStackScreen() {
    return (
        <AboutNavigator.Navigator>
            <AboutNavigator.Screen name="About" component={AboutComponent} options={{ title: "About Us" }} />
        </AboutNavigator.Navigator>
    )
}