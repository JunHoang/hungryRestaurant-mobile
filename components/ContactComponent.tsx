import React from 'react'
import { View } from 'react-native';
import { Card, Text } from 'react-native-elements';
import { createStackNavigator } from '@react-navigation/stack';

export type ContactStackParamList = {
    Contact: undefined;
}
const ContactNavigator = createStackNavigator<ContactStackParamList>();

function ContactComponent() {
    return (
        <Card>
            <Card.Title>Contact Infomation</Card.Title>
            <Card.Divider />
            <View>
                <Text style={{ margin: 10 }}>121, Clear Water Bay Road</Text>
                <Text style={{ margin: 10 }}>Clear Water Bay, Kowloon</Text>
                <Text style={{ margin: 10 }}>HONG KONG</Text>
                <Text style={{ margin: 10 }}>Tel: +852 1234 5678</Text>
                <Text style={{ margin: 10 }}>Fax: +852 8765 4321</Text>
                <Text style={{ margin: 10 }}>Email:confusion@food.net</Text>
            </View>
        </Card>
    )
}

export default function ContactStackScreen() {
    return (
        <ContactNavigator.Navigator>
            <ContactNavigator.Screen name="Contact" component={ContactComponent} />
        </ContactNavigator.Navigator>
    )
}
