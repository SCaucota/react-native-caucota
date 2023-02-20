import React from "react";
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Movies from '../screens/Movies';
import MovieDetail from '../screens/MovieDetail';
/* import GenderMovie from "../screens/GenderMovie"; */

const Stack = createNativeStackNavigator()

export default CatalogueNavigator = () => {
    return (
            <Stack.Navigator 
                initialRouteName='Movies'
                screenOptions={{
                    headerStyle: {backgroundColor: 'black'},
                    headerTintColor: 'white'
                }}
                >
                <Stack.Screen  name='Movies' options={{title: 'Catálogo'}} component={Movies}/>
                <Stack.Screen name='Movie Detail' options={{title: 'Detalle'}} component={MovieDetail} />
                {/* <Stack.Screen name='Movies Gender' options={({ route }) => ({ title: route.params.name})} component={GenderMovie} /> */}
            </Stack.Navigator>
    )
}