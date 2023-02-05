import React from "react";
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import News from "../screens/News";

const Stack = createNativeStackNavigator()

export default NewsNavigator = () => {
    return (
        <Stack.Navigator 
            initialRouteName='News'
            screenOptions={{
                headerStyle: {backgroundColor: 'black'},
                headerTintColor: 'white'
            }}
            >
            <Stack.Screen name='News' options={{title: 'Novedades'}} component={News}/>
        </Stack.Navigator>
    )
}