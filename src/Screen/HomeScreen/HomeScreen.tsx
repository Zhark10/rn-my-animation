import React, { Component } from 'react';
import { View, Text } from 'react-native';

type IHomeScreenProps = {}
type IHomeScreenState = {}

class HomeScreen extends Component<IHomeScreenProps, IHomeScreenState> {
    render() {
        return (
            <View>
                <Text>Какой-то текст</Text>
            </View>
        )
    }
}

export default HomeScreen;