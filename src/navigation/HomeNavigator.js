import React from "react";
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Home from "../screens/Home";
import Suscription from "../screens/Suscription";
import MovieDetail from "../screens/MovieDetail";

const Stack = createNativeStackNavigator()

export default HomeNavigator = () => {
    return (
            <Stack.Navigator 
                initialRouteName='Home'
                screenOptions={{
                    headerStyle: {backgroundColor: 'black'},
                    headerTintColor: 'white'
                }}
                >
                <Stack.Screen name='Home' options={{title: 'Inicio'}} component={Home}/>
                <Stack.Screen name='Suscription' options={{title: 'Suscripcion'}} component={Suscription} />
                <Stack.Screen name='Movie Detail' options={{title: 'Detalle'}} component={MovieDetail} />
            </Stack.Navigator>
    )
}