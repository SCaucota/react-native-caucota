import { Button, StyleSheet, TextInput, View } from 'react-native';
import React from 'react';

const AddItem = ({
    changeItem,
    addItem,
    textValue
}) => {
    return(
        <View style={styles.inputContainer}>
            <View style={styles.inputButton}>
                <TextInput
                    style={styles.input}
                    placeholder='Ingrese la película'
                    placeholderTextColor='grey'
                    onChangeText={changeItem}
                    value={textValue}
                />
                <Button
                    color='#8845CC'
                    title='Agregar'
                    onPress={addItem}
                />
            </View>
        </View>
    )
}

export default AddItem;

const styles = StyleSheet.create({
    inputContainer: {
        backgroundColor: '#AD7EDE',
        alignItems: 'center',
    },
    inputButton: {
        backgroundColor: '#000000',
        width: 300,
        flex: 2,
        marginHorizontal: 40,
        padding: 3,
        borderWidth: 12,
        borderColor: 'black',
        borderRadius: 15
    },
    input: {
        color: '#8845CC',
        fontSize: 20,
        paddingBottom: 10,
    },
})