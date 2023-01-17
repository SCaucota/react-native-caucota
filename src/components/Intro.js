import { StyleSheet, View, Text, Image } from 'react-native';
import React from 'react';

const Intro = () => {
    return (
        <View>
            <Text style={styles.subTitles}>¿Quiénes somos?</Text>
            <Image style={styles.image} source={{ uri: 'https://es.rollingstone.com/wp-content/uploads/2022/02/25-peliculas-que-debes-ver-en-el-2022-portada.jpg' }} />
            <Text style={styles.text}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto nisi repellendus eius impedit iure quod nemo natus repellat perferendis, facere magni omnis similique adipisci quos alias debitis?</Text>
        </View>
    )
}

export default Intro;

const styles = StyleSheet.create({
    subTitles: {
        color: 'white',
        backgroundColor: '#AD7EDE',
        fontSize: 22,
        padding: 15,
        textAlign: 'center',
    },
    image: {
        width: 370,
        height: 300,
    },
    text: {
        fontSize: 18,
        padding: 20,
    },
})