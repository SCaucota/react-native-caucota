import { StyleSheet, Image } from 'react-native'
import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import HomeNavigator from '../navigation/HomeNavigator';
import NewsNavigator from './NewsNavigator';
import CatalogueNavigator from '../navigation/CatalogueNavigator';

const BottomTabs = createBottomTabNavigator()

export default TabNavigation = () => {
    return (
        <BottomTabs.Navigator
            screenOptions={{
                headerShown: false,
                tabBarStyle: styles.tabBar,
            }}
            initialRouteName='Home'>
            <BottomTabs.Screen
                name='Inicio'
                component={HomeNavigator}
                options={{
                    tabBarIcon: () => (
                        <Image style={styles.icon} source={require('../../assets/img/house.png')} />
                    )
                }}
            />
            <BottomTabs.Screen
                options={{
                    tabBarIcon: () => (
                        <Image style={styles.icon} source={require('../../assets/img/list.png')} />
                    )
                }}
                name='Catálogo'
                component={CatalogueNavigator} 
            />
            <BottomTabs.Screen
                options={{
                    tabBarIcon: () => (
                        <Image style={styles.icon} source={require('../../assets/img/newsPaper.png')} />
                    )
                }}
                name='Novedades'
                component={NewsNavigator} 
            />
        </BottomTabs.Navigator>
    )
}

const styles = StyleSheet.create({
    icon: {
        width: 22,
        height: 22,
        marginTop: 15,
    },
    tabBar:{
        height: 68,
        backgroundColor: 'white',
        height: 65,
        paddingBottom: 10
    },
})