import React from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';

import {useNavigation} from '@react-navigation/native'

export default function category({image,name, detail}) {

    const navigation = useNavigation()
  return (
    <TouchableOpacity style={styles.container}
        onPress = {()=> navigation.navigate("Contact", { image, name, detail})}
        >
        <Image 
            style={styles.image}
            source={{uri: image}}
        />
        <View style={{alignItems: "center"}}>
            <Text style={{fontWeight: "bold", marginBottom: 10}}>{name}</Text>
        </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
    container: {
        flex:1
    },
  image: {
      height: 120,
      width: 120,
      borderRadius: 15,
      marginLeft: 30,
      
  }
})
