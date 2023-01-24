import { StyleSheet, View, Text, Image, Pressable } from 'react-native';
import React from 'react';
import colors from '../constants/colors';

const Header = ({newStyles}) => {
    return (
        <View style={styles.navBar}>
            <View style={styles.brandContainer}>
                <Image style={styles.brandImage} source={require('../../assets/img/brandImage.png')} />
                <Text style={{...styles.brandName, ...newStyles}}>viewStar</Text>
            </View>
            <Pressable>
                <Image style={styles.iconFavorites} source={require('../../assets/img/favorites.png')} />
            </Pressable>
        </View>
    )
}

export default Header;

const styles = StyleSheet.create({
    navBar: {
        flex: 1,
        backgroundColor: colors.primary,
        paddingBottom: 15,
        justifyContent: 'space-between',
        alignItems: 'center',
        flexDirection: 'row',
        paddingHorizontal: 15,
    },
    brandContainer: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    brandName: {
        fontSize: 25,
        paddingTop: 12,
    },
    brandImage: {
        width: 50,
        height: 50,
        marginTop: 10,
        marginRight: 10
    },
    iconFavorites: {
        width: 30,
        height: 30,
        marginTop: 10,
        marginRight: 10,
    }
})