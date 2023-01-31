import { StyleSheet, View, Text, Image, FlatList, Pressable } from 'react-native';
import React from 'react';
import colors from '../constants/colors';

const OpcionsMovies = ({ tipProd, newStyles }) => {

    return (
        <View style={styles.container}>
            <Text style={{ ...styles.subTitles, ...newStyles }}>POPULARES</Text>
            {
                tipProd.map((item) => {
                    return (
                        <View key={item.id + 'opcionsMovies'} style={styles.movies}>
                            <Text key={item.name + 'title'} style={{ ...styles.movieTitle, ...newStyles }}>{item.name}</Text>
                            <Image key={item.img + 'url'} style={styles.image} source={{ uri: item.img }} />
                            <Pressable key={item.id + 'id'} style={styles.button}>
                                <Text key={item.type + 'type'} style={{ color: 'white', fontSize: 20 }}>Detalles</Text>
                            </Pressable>
                        </View>
                    )
                })
            }
        </View>
    )
}

export default OpcionsMovies;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: colors.primary,
        alignItems: 'center'
    },
    subTitles: {
        color: 'white',
        fontSize: 28,
        padding: 15,
        textAlign: 'center',
    },
    movieTitle: {
        color: 'white',
        fontSize: 20,
        marginBottom: 25
    },
    image: {
        width: 220,
        height: 300,
    },
    movies: {
        backgroundColor: 'black',
        paddingHorizontal: 25,
        paddingTop: 20,
        paddingBottom: 20,
        marginBottom: 12,
        alignItems: 'center',
        justifyContent: 'center'
    },
    button: {
        alignItems: 'center',
        width: 150,
        paddingVertical: 10,
        marginTop: 15,
        backgroundColor: colors.buttonColor,
        borderRadius: 8
    }
})