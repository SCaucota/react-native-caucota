import { StyleSheet,View , Modal as NewModal } from 'react-native';
import React from 'react';

const Modal = ({
    visible,
    children,
}) => {
    return (
        <NewModal
            animationType='fade'
            transparent={true}
            visible={visible}
        >
            <View style={styles.modalConatiner}>
                <View style={styles.modalStyle}>
                    {children}
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
        backgroundColor: 'rgba(0, 0, 0, 0.4)'
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
})