import { StyleSheet, View, Text, Image, FlatList, Pressable } from 'react-native';
import React from 'react';
import colors from '../constants/colors';

const OpcionsMovies = ({tipProd, newStyles}) => {
    return (
        <View style={styles.container}>
            <Text style={{...styles.subTitles, ...newStyles}}>POPULARES</Text>
            <FlatList
            data={tipProd}
            renderItem={data => (
                <View style={styles.movies}>
                    <Text style={{...styles.movieTitle, ...newStyles}}>{data.item.nombre}</Text>
                    <Image style={styles.image} source={{uri: data.item.img}}  />
                    <Pressable key={data.item.id} style={styles.boton}>
                        <Text style={{color: 'white', fontSize: 20}}>Detalles</Text>
                    </Pressable>
                </View>
            )}
            keyExtractor={(item) => item.id}
            />
            
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
    boton: {
        alignItems: 'center',
        width: 150,
        paddingVertical: 10,
        marginTop: 15,
        backgroundColor: colors.buttonColor,
        borderRadius: 8
    }
})