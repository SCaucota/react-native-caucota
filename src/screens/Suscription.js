import { StyleSheet, View, Text, Pressable, Image, ScrollView } from 'react-native';
import React, { useState } from 'react';
import { opcionsAvatar } from '../data/OpcionsAvatar';
import colors from '../constants/colors';
import Modal from '../components/Modal';
import Forms from '../components/Forms';

const Suscription = ({ newStyles, navigation }) => {

    const [modalVisible, setModalVisible] = useState(false);
    const [modalVisible2, setModalVisible2] = useState(false);
    const [avatarImage, setAvatarImage] = useState('http://cdn.onlinewebfonts.com/svg/img_561543.png')

    const handleModal = () => {
        setModalVisible(true)
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
                <Text style={{ ...styles.subTitles, ...newStyles }} >SUSCRIBETE</Text>
                <View style={{alignItems: 'center'}}>
                    <View style={{ marginBottom: 40, alignItems: 'center' }}>
                        <Pressable onPress={() => handleModal()}>
                            <View style={styles.selectAvatar}>
                                <Image style={styles.avatarSelectedImage} source={{ uri: avatarImage }} />
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
                        <View style={styles.avatarContainer}>
                            {
                                opcionsAvatar.map((item) => {
                                    return (
                                        <View key={item.name + 'suscription'} style={styles.avatarCircle}>
                                            <Pressable key={item.id + 'avatar'} onPress={() => newAvatar(item.img)}>
                                                <Image key={item.img + 'image'} style={styles.image} source={{ uri: item.img }} />
                                            </Pressable>
                                        </View>
                                    )
                                })
                            }
                        </View>
                    </Modal>
                </View>
                <Forms />
                <Pressable style={styles.suscriptionBotton} onPress={() => navigation.navigate('Home')}>
                    <Text style={styles.buttonText} >Volver Atrás</Text>
                </Pressable>
            </View>
        </ScrollView>
    )
}

export default Suscription;

const styles = StyleSheet.create({
    container: {
        height: 'auto',
        backgroundColor: 'black',
        alignItems: 'center',
    },
    subTitles: {
        color: 'white',
        fontSize: 22,
        padding: 15,
        textAlign: 'center',
    },
    selectAvatar: {
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'white',
        width: 70,
        height: 70,
        borderRadius: 100
    },
    avatarSelectedImage: {
        width: 60,
        height: 60,
        borderRadius: 100
    },
    avatarContainer: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'center'
    },
    avatarCircle: {
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
    suscriptionBotton: {
        backgroundColor: colors.buttonColor,
        width: 180,
        paddingVertical: 10,
        marginBottom: 30,
        borderRadius: 5,
        alignItems: 'center'
    },
    buttonText: {
        color: 'white',
        fontSize: 20
    },
})