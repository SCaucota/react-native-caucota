import { StyleSheet, View, Text, ScrollView, TextInput, Pressable, Image } from 'react-native';
import React, { useState } from 'react';
import colors from '../constants/colors';
import Modal from '../components/Modal';

const Suscription = ({ opcionesMovies, onChangeHome, newStyles }) => {

    const [modalVisible, setModalVisible] = useState(false);
    const [modalVisible2, setModalVisible2] = useState(false)
    const [avatarImage, setAvatarImage] = useState('http://cdn.onlinewebfonts.com/svg/img_561543.png')

    const handleModal = () => {
        setModalVisible(true)
    }

    const openModalSuscription = () => {
        setModalVisible2(true)
    }

    const handleCloseModal = () => {
        setModalVisible(false)
        setModalVisible2(false)
    }

    const newAvatar = (item) => {
        setAvatarImage(item)
        setModalVisible(false)
    }

    return (
        <ScrollView>
            <View style={styles.container}>
                <Text style={{...styles.subTitles, ...newStyles}} >SUSCRIBETE</Text>
                <View style={styles.avatarNameContainer}>
                    <View style={{marginBottom: 40, alignItems: 'center'}}>
                        <Pressable onPress={() => handleModal()}>
                            <View style={styles.selectAvatar}>
                                <Image style={styles.avatarSelected} source={{ uri: avatarImage }} />
                            </View>
                        </Pressable>
                        <Pressable onPress={() => handleModal()}>
                            <Text style={{ color: 'white' }}>Elije un Avatar</Text>
                        </Pressable>

                    </View>
                    <Modal
                        visible={modalVisible}
                        actionCancelModal={() => handleCloseModal()}
                    >
                        <Text style={{ fontSize: 20, paddingBottom: 10 }}>Elije un Avatar</Text>
                        <View style={styles.moviesContainer}>
                            {
                                opcionesMovies.map((item) => {
                                    return (
                                        <View key={item.id} style={styles.movies}>
                                            <Pressable key={item.id} onPress={() => newAvatar(item.img)}>
                                                <Image style={styles.image} source={{ uri: item.img }} />
                                            </Pressable>
                                        </View>
                                    )
                                })
                            }
                        </View>
                    </Modal>
                    <TextInput
                        style={styles.input}
                        placeholder='Nombre de Usuario'
                        placeholderTextColor='grey'
                        keyboardType='username'
                    />
                </View>
                <View>
                    <TextInput
                        style={styles.input}
                        keyboardType='email-address'
                        placeholder='Email'
                        placeholderTextColor='grey'
                    />
                    <TextInput
                        style={styles.input}
                        keyboardType='email-address'
                        placeholder='Repita Email'
                        placeholderTextColor='grey'
                    />
                </View>
                <View>
                    <TextInput
                        style={styles.input}
                        keyboardType='new-password'
                        placeholder='Contraseña'
                        placeholderTextColor='grey'
                    />
                    <TextInput
                        style={styles.input}
                        keyboardType='current-password'
                        placeholder='Repita Contraseña'
                        placeholderTextColor='grey'
                    />
                </View>
                <Pressable style={styles.suscriptionBotton}>
                    <Text style={styles.buttonText} onPress={() => openModalSuscription()} >Suscribirse</Text>
                </Pressable>
                <Modal
                        visible={modalVisible2}
                >
                    <Text style={{ fontSize: 20, paddingBottom: 10 }}>¡FELICIDADES!</Text>
                    <Text style={{ fontSize: 20, paddingBottom: 10 }}>Estas suscripto</Text>
                    <Pressable style={styles.buttonCancel} onPress={() => onChangeHome(avatarImage)}>
                            <Text style={styles.buttonText}>ACEPTAR</Text>
                    </Pressable>
                </Modal>
            </View>
        </ScrollView>
    )
}

export default Suscription;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'black',
        alignItems: 'center',
    },
    subTitles: {
        color: 'white',
        fontSize: 22,
        padding: 15,
        textAlign: 'center',
    },
    button: {
        borderColor: colors.buttonColor,
        borderWidth: 1.5,
        paddingVertical: 6,
        paddingHorizontal: 9,
        marginLeft: 40
    },
    texto: {
        color: 'red'
    },
    input: {
        color: 'black',
        backgroundColor: 'white',
        fontSize: 20,
        paddingBottom: 10,
        height: 50,
        borderRadius: 5,
        width: 280,
        marginBottom: 25,
        paddingLeft: 10,
        paddingTop: 10
    },
    moviesContainer: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'center'
    },
    movies: {
        backgroundColor: 'black',
        width: 100,
        height: 100,
        borderRadius: 100,
        marginHorizontal: 4,
        marginVertical: 5,
        alignItems: 'center',
        justifyContent: 'center',
    },
    image: {
        width: 80,
        height: 80,
        borderRadius: 100
    },
    avatarSelected: {
        width: 60,
        height: 60,
        borderRadius: 100
    },
    selectAvatar: {
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'white',
        width: 70,
        height: 70,
        borderRadius: 100
    },
    buttonCancel: {
        backgroundColor: 'black',
        paddingHorizontal: 18,
        paddingVertical: 8,
        marginVertical: 5,
        borderRadius: 5
    },
    buttonText: {
        color: 'white',
        fontSize: 20
    },
    avatarNameContainer: {
        alignItems: 'center'
    },
    suscriptionBotton: {
        backgroundColor: colors.buttonColor,
        paddingHorizontal: 25,
        paddingVertical: 10,
        marginBottom: 30,
        borderRadius: 5
    }
})