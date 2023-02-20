import { FlatList, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { useSelector } from 'react-redux'


const GenderMovie = () => {

    const genders = useSelector(state => state.catalogue.genderSelected)

    const renderGenders = ({ item }) => {
        <View>
            <Text>{item.name}</Text>
            <Text>{item.type}</Text>
        </View>
    }

    return (
        <View>
            <FlatList
                data={genders}
                renderItem={renderGenders}
                keyExtractor={ (item) => item.id}
            />
        </View>
    )
}

export default GenderMovie

const styles = StyleSheet.create({})