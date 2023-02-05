import React from 'react';
import { StyleSheet, Text, View, Pressable, Image, ScrollView } from 'react-native';
import colors from '../constants/colors';

const MovieDetail = ({ route, navigation }) => {

    const { movieSelected } = route.params
    const movie = route.params.movieSelected

    return (
        <ScrollView>
            <View style={styles.container}>
                <Text style={styles.subTitles}>{movie.name}</Text>
                <View style={{justifyContent: 'center', alignItems:'center'}}>
                    <Image style={styles.image} source={{uri: movie.img}}/>
                    <Text style={styles.description}>{movie.description}</Text>
                </View>
                <View style={{flexDirection: 'row'}}>
                    <Text style={{...styles.type,color: colors.buttonColor}}>Género:  </Text>
                    <Text style={styles.type}>{movie.type}</Text>
                </View>
                <Pressable style={styles.button} onPress={() => navigation.goBack()}>
                    <Text style={{color: 'white', fontSize: 18}}>Volver Atrás</Text>
                </Pressable>
            </View>
        </ScrollView>
    )
}

export default MovieDetail;

const styles = StyleSheet.create({
    container: {
        flex: 1,
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
    image: {
        height: 300,
        width: 200
    },
    description: {
        color: 'white',
        paddingHorizontal: 26,
        paddingVertical: 20,
    },
    type: {
        textAlign: 'left',
        fontSize: 20,
        color: 'white',
        paddingBottom: 15
    },
    button: {
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: colors.buttonColor,
        paddingHorizontal: 15,
        paddingVertical: 5,
        marginTop: 15,
        width: 150,
        borderRadius: 5,
        marginBottom: 15
    },
})