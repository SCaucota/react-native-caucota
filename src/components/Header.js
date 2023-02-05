import { StyleSheet, View, Text, Image } from 'react-native';
import React from 'react';
import colors from '../constants/colors';

const Header = ({newStyles}) => {
    return (
        <View style={styles.navBar}>
            <View style={styles.brandContainer}>
                <Image style={styles.brandImage} source={require('../../assets/img/brandImage.png')} />
                <Text style={{...styles.brandName, ...newStyles}}>viewStar</Text>
            </View>
        </View>
    )
}

export default Header;

const styles = StyleSheet.create({
    navBar: {
        backgroundColor: colors.primary,
        paddingBottom: 15,
        justifyContent: 'space-between',
        alignItems: 'center',
        flexDirection: 'row',
        paddingHorizontal: 15,
        marginTop: 25
    },
    brandContainer: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    brandImage: {
        width: 50,
        height: 50,
        marginTop: 10,
        marginRight: 10
    },
    brandName: {
        fontSize: 25,
        paddingTop: 12,
    },
})