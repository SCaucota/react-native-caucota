import { StyleSheet, View, Text, Pressable, Image, ScrollView, Alert } from 'react-native';
import React, { useState } from 'react';
import { opcionsAvatar } from '../data/OpcionsAvatar';
import colors from '../constants/colors';
import Modal from '../components/Modal';
import Forms from '../components/Forms';
import * as ImagePicked from 'expo-image-picker'

const Suscription = ({ newStyles, navigation }) => {

    const [modalVisible, setModalVisible] = useState(false);
    const [modalVisible2, setModalVisible2] = useState(false);
    const [avatarImage, setAvatarImage] = useState('http://cdn.onlinewebfonts.com/svg/img_561543.png')

    const verifyPermissions = async () => {
        const {status} = await ImagePicked.requestCameraPermissionsAsync()

        if  (status !== "granted") {
            Alert.alert(
                "Permisos",
                "Debe dar permisos para utilizar la cámara",
                [{text: "OK"}]
            )
            return false
        }
        return true
    }

    const handleSelectImage = async () => {
        const isCameraOK = await verifyPermissions()
        if(!isCameraOK) return

        const photo = await ImagePicked.launchCameraAsync({
            editionPhotos: true,
            aspect: [16,9],
            quality: 0.8
        })

        const onImage = photo => {
            console.log(photo)
        }

        setAvatarImage(photo.assets[0].uri)
        onImage(photo.assets[0].uri)

        setModalVisible(false)
    }

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
                            <Text style={{ color: 'white' }}>Elegir perfil</Text>
                        </Pressable>
                    </View>
                    <Modal
                        visible={modalVisible}
                        actionCancelModal={() => handleCloseModal()}
                    >
                        <Text styles={{fontSize: 20}}>Elije un avatar</Text>
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
                        <View style={styles.photoContainer}>
                            <Text>o</Text>
                            <Pressable style={{...styles.suscriptionBotton, marginTop: 20}} onPress={handleSelectImage}>
                                <Text style={styles.buttonText}>Toma una Foto</Text>
                            </Pressable>
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
        width: 100,
        height: 100,
        borderRadius: 100
    },
    avatarSelectedImage: {
        width: 90,
        height: 90,
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
    photoContainer: {
        justifyContent: 'center',
        alignItems: 'center',
        paddingTop: 20
    }
})