import React from 'react';
import { StyleSheet, Text, View, FlatList, Pressable, Image } from 'react-native';
import { catalogueMovies } from '../../mock';

const Movies = ({ navigation }) => {

    const saveChangeScreen = (item) => {
        navigation.navigate('Movie Detail', { movieSelected: item })
    }


    return (
            <View style={styles.container}>
                <Text style={styles.subTitles}>CATÁLOGO</Text>
                <FlatList
                    data={catalogueMovies}
                    renderItem={data => (
                        <View style={styles.movieContainer}>
                            <Text style={styles.movieTitle }>{data.item.name}</Text>
                            <Image style={styles.image} source={{ uri: data.item.img }} />
                            <Pressable key={data.item.id} style={styles.button}>
                                <Text style={{ color: 'white', fontSize: 18 }} onPress={() => saveChangeScreen(data.item)}>Detalles</Text>
                            </Pressable>
                        </View>
                    )}
                    keyExtractor={(item) => item.id}
                />
            </View>
    )
}

export default Movies;

const styles = StyleSheet.create({
    container: {
        height: 'auto',
        backgroundColor: 'black',
        alignItems: 'center',
        justifyContent: 'center'
    },
    subTitles: {
        color: 'white',
        fontSize: 28,
        padding: 15,
        textAlign: 'center',
    },
    movieContainer: {
        backgroundColor: 'white',
        width: 190,
        paddingVertical: 20,
        marginBottom: 20,
        alignItems: 'center',
        justifyContent: 'center'
    },
    image: {
        height: 180,
        width: 130
    },
    movieTitle: {
        fontSize: 15,
        paddingBottom: 10,
        textDecorationColor: 'black',
        textDecorationLine: 'underline',
    },
    button: {
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'black',
        paddingHorizontal: 15,
        paddingVertical: 5,
        marginTop: 15
    }
})