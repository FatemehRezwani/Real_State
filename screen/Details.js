import React from 'react';
import { StyleSheet, Text, View, Image, Button, ScrollView } from 'react-native';

import {Rating} from 'react-native-ratings';
import { useRoute } from '@react-navigation/native';

export default function Detail(){

    const data = useRoute(). params
    const {image, name, detail} = data

    return (
        <View style= {styles.container}>
            <Image
                style = {{height: 190}}
                source = {{uri: image}}
            />
            <View>
                <Text>{name}</Text>
                <Rating
                    showRatin
                    imageSize = {30}
                />
            </View>
            <View>
                <Text>Introduction</Text>
                <Text>{detail}</Text>
            </View>
            <Button title="Add To Favorite" color="#777777"/>
        </View>
    );
      
}
const styles = StyleSheet.create({
    container: {
        flex:1
    },

});