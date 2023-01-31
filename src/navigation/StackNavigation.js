import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Suscription from '../screens/Suscription';
import Home from '../screens/Home';
import Movies from '../screens/Movies';
import MovieDetail from '../screens/MovieDetail';

const Stack = createNativeStackNavigator()

export default StackNavigation = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator 
                initialRouteName='Home'
                screenOptions={{
                    headerStyle: {backgroundColor: 'black'},
                    headerTintColor: 'white'
                }}
                >
                <Stack.Screen  name='Home' options={{title: 'Inicio'}} component={Home}/>
                <Stack.Screen name='Suscription' options={{title: 'Suscripción'}} component={Suscription} />
                <Stack.Screen name='Movies' options={{title: 'Catálogo'}} component={Movies}/>
                <Stack.Screen name='Movie Detail' options={{title: 'Detalle'}} component={MovieDetail} />
            </Stack.Navigator>
        </NavigationContainer>
    )
}