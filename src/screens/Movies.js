import React from 'react';
import { StyleSheet, Text, View, FlatList, Pressable, Image } from 'react-native';
import colors from '../constants/colors'
import { useSelector, useDispatch } from 'react-redux'
/* import { movies_genders } from '../store/actions/catalogue.action'; */


const Movies = ({ navigation }) => {

    /* const dispatch = useDispatch() */
    const catalogueMovies = useSelector(state => state.catalogue.catalogue)
    /* const movieGenders = useSelector(state => state.catalogue.genders) */

    /* const genderSelected = (item) => {
        dispatch(movies_genders(item.id))
        navigation.navigate("Movies Gender", {
            title: item.gender
        })
    } */

    const saveChangeScreen = (item) => {
        navigation.navigate('Movie Detail', { movieSelected: item })
    }

    return (
        <View style={styles.container}>
            {/* <View style={styles.gendersContainer}>
                {
                    movieGenders.map((item) => {
                        return (
                            <View key={item + '1'} style={styles.renderItemStyle}>
                                <Pressable key={item.id} style={styles.genders} onPress={()=>genderSelected(item)} >
                                    <Text>{item.gender}</Text>
                                </Pressable>
                            </View>
                        )
                    })
                }
            </View> */}
            <View style={styles.flatListContainer}>
                <FlatList
                    data={catalogueMovies}
                    renderItem={data => (
                        <View style={styles.movieContainer}>
                            <Text style={styles.movieTitle}>{data.item.name}</Text>
                            <Image style={styles.image} source={{ uri: data.item.img }} />
                            <Pressable onPress={() => saveChangeScreen(data.item)} key={data.item.id} style={styles.button}>
                                <Text style={{ color: 'white', fontSize: 18 }} >Detalles</Text>
                            </Pressable>
                        </View>
                    )}
                    keyExtractor={(item) => item.id}
                />
            </View>
        </View>
    )
}

export default Movies;

const styles = StyleSheet.create({
    container: {
        height: 'auto',
        backgroundColor: 'black',
    },
    gendersContainer: {
        flexDirection: 'row',
        justifyContent: 'space-evenly',
    },
    genders: {
        backgroundColor: colors.primary,
        alignItems: 'center',
        justifyContent: 'center',
        paddingHorizontal: 20,
        paddingVertical: 5,
        borderRadius: 5,
    },
    flatListContainer: {
        justifyContent: 'center',
        alignItems: 'center',
        paddingTop: 25
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
    movieTitle: {
        fontSize: 15,
        paddingBottom: 10,
        textDecorationColor: 'black',
        textDecorationLine: 'underline',
    },
    image: {
        height: 180,
        width: 130
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