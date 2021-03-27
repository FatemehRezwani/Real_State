import React from 'react';
import { StyleSheet, Text, View, FlatList } from 'react-native';

import ImageSlider from 'react-native-image-slider'
import FoodItems from '../components/categories'


export default function Home() {
  let images = [
    require("../assets/4.jpg"),
    require("../assets/6.jpg"),
    require("../assets/2.jpg"),
  ]
  const foods = [
    {id: "1", image: require('../assets/1.jpg'), name: "فروشی", detail:  "A steak is a meat generally sliced across the muscle fibers, potentially including a bone. It is normally grilled, though can also be pan-fried. It is often grilled in an attempt to replicate the flavor of steak cooked over the glowing coals of an open fire." },
    {id: "2", image: require('../assets/3.jpg'), name: "گراو", detail:  "Rice is the seed of the grass species Oryza sativa or less commonly Oryza glaberrima. As a cereal grain, it is the most widely consumed staple food for a large part of the world's human population, especially in Asia and Africa." },
    {id: "3", image: require('../assets/7.jpg'), name: "کرایی", detail:  "Pizza is a savory dish of Italian origin consisting of a usually round, flattened base of leavened wheat-based dough topped with tomatoes, cheese, and often various other ingredients, which is then baked at a high temperature, traditionally in a wood-fired oven. A small pizza is sometimes called a pizzetta." },
    {id: "4", image: require('../assets/9.jpg'), name: "مالچه", detail: "In cuisine, an omelette or omelet is a dish made from beaten eggs, fried with butter or oil in a frying pan (without stirring as in scrambled egg). It is quite common for the omelette to be folded around fillings such as cheese, chives, vegetables, mushrooms, meat (often ham or bacon), or some combination of the above." },
    ];
  return (
    <View style={{flex: 1}}>
      <View style={styles.containerImageSlider}>
        <ImageSlider 
          style={styles.imageSlider}
          images={images}
          autoPlayWithInterval={7000}
        />
      </View>
      <Text style={styles.categoryText}>دسته بندی ها</Text>
      <FlatList 
        numColumns={2}
        data={foods}
        renderItem={({item})=> {
          return <FoodItems name={item.name} image={item.image} detail={item.detail}/>
        }
      }
      />
    </View>
  );
}

const styles = StyleSheet.create({
  containerImageSlider: {
    width:346,
    height: 170,
    margin: 10
  },
  imageSlider: {
    borderRadius: 10
  },
  categoryText: {
    fontSize: 16,
    fontWeight: "bold",
    margin: 8
  }
})
