import { StyleSheet, Text, View, TouchableOpacity , Modal as NewModal } from 'react-native';
import React from 'react';

const Modal = ({
    visible,
    actionDeleteItem,
    itemSelected,
    actionCancelModal,
}) => {
    return (
        <NewModal
            animationType='fade'
            transparent={true}
            visible={visible}
        >
            <View style={styles.modalConatiner}>
                <View style={styles.modalStyle}>
                    <Text style={styles.modalTextStyle}>{itemSelected}</Text>
                    <TouchableOpacity style={styles.buttonDelete} onPress={() => actionDeleteItem()}>
                        <Text style={styles.buttonText}>ELIMINAR</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.buttonCancel} onPress={() => actionCancelModal()}>
                        <Text style={styles.buttonText}>CANCELAR</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </NewModal>
    )
}

export default Modal;

const styles = StyleSheet.create({
    modalConatiner: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 22,
    },
    modalStyle: {
        margin: 20,
        backgroundColor: 'white',
        borderRadius: 20,
        padding: 40,
        alignItems: 'center',
        shadowColor: 'black',
        shadowOffset: {
            width: 5,
            height: 3,
        },
    },
    modalTextStyle: {
        fontSize: 30,
    },
    buttonDelete: {
        backgroundColor: 'black',
        paddingHorizontal: 15,
        paddingVertical: 8,
        marginTop: 15,
        borderRadius: 5,
    },
    buttonCancel: {
        backgroundColor: 'black',
        paddingHorizontal: 11,
        paddingVertical: 8,
        marginVertical: 5,
        borderRadius: 5
    },
    buttonText: {
        color: 'white', 
        fontSize: 15
    }
})