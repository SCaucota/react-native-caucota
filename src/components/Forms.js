import { StyleSheet, TextInput, View, Image, Pressable, Text, Alert } from 'react-native';
import React, { useState } from 'react';
import colors from '../constants/colors';
import Modal from './Modal';
import eye from '../../assets/img/eye.png';
import eyeOff from '../../assets/img/eyeOff.png';

const Forms = () => {
    const [username, setUsername] = useState('')
    const [email, setEmail] = useState('')
    const [repeatEmail, setRepeatEmail] = useState('')
    const [password, setPassword] = useState('')
    const [repeatPassword, setRepeatPassword] = useState('')
    const [infoUser, setInfoUser] = useState([])

    const [passwordVisible, setPasswordVisible] = useState(true)
    const [passwordVisible2, setPasswordVisible2] = useState(true)
    const [eyePassword, setEyePassword] = useState(eye)
    const [eyePassword2, setEyePassword2] = useState(eye)
    const [modalVisible2, setModalVisible2] = useState(false);

    const addUsername = text => {
        setUsername(text)
    }

    const addEmail = text => {
        setEmail(text)
    }

    const addRepeatEmail = text => {
        setRepeatEmail(text)
    }

    const addPassword = text => {
        setPassword(text)
    }

    const addRepeatPassword = text => {
        setRepeatPassword(text)
    }

    const confimSuscription = () => {
        if (username !== '' && 
            email !== '' && 
            repeatEmail !== '' && 
            password !== '' && 
            repeatPassword !== '' &&
            email == repeatEmail &&
            password == repeatPassword) {
            setModalVisible2(true)

        } else if (username == '' ||  email == '' ||  repeatEmail == '' ||  password == '' ||  repeatPassword == '') {
            Alert.alert('Error', 'Completa todos los campos')

        } else if (email !== repeatEmail) {
            Alert.alert('El email no es el mismo')

        } else if (password !== repeatPassword) {
            Alert.alert('La constraseña no es la misma')
        }
    }

    const VisiblePassword = () => {
        setPasswordVisible(!passwordVisible)

        if (passwordVisible !== false) {
            setEyePassword(eyeOff)
        } else {
            setEyePassword(eye)
        }
    }

    const ConfirmPassWord = () => {
        setPasswordVisible2(!passwordVisible2)

        if (passwordVisible2 !== false) {
            setEyePassword2(eyeOff)
        } else {
            setEyePassword2(eye)
        }
    }

    return (
        <View>
            <TextInput
                style={styles.input}
                placeholder='Nombre de Usuario'
                placeholderTextColor='grey'
                onChangeText={addUsername}
                value={username}
            />
            <TextInput
                style={styles.input}
                placeholder='Email'
                placeholderTextColor='grey'
                onChangeText={addEmail}
                value={email}
            />
            <TextInput
                style={styles.input}
                placeholder='Repita Email'
                placeholderTextColor='grey'
                onChangeText={addRepeatEmail}
                value={repeatEmail}
            />
            <View style={styles.password}>
                <TextInput
                    style={{ ...styles.input, width: 240, borderTopRightRadius: 0, borderBottomRightRadius: 0 }}
                    placeholder='Contraseña'
                    placeholderTextColor='grey'
                    secureTextEntry={passwordVisible}
                    onChangeText={addPassword}
                    value={password}
                />
                <View style={styles.passwordContImg}>
                    <Pressable onPress={() => VisiblePassword()}>
                        <Image
                            style={styles.passwordImage}
                            source={eyePassword}
                        />
                    </Pressable>
                </View>
            </View>
            <View style={styles.password}>
                <TextInput
                    style={{ ...styles.input, width: 240, borderTopRightRadius: 0, borderBottomRightRadius: 0 }}
                    placeholder='Repetir Contraseña'
                    placeholderTextColor='grey'
                    secureTextEntry={passwordVisible2}
                    onChangeText={addRepeatPassword}
                    value={repeatPassword}
                />
                <View style={styles.passwordContImg}>
                    <Pressable onPress={() => ConfirmPassWord()}>
                        <Image
                            style={styles.passwordImage}
                            source={eyePassword2}
                        />
                    </Pressable>
                </View>
            </View>
            <View style={{ alignItems: 'center' }}>
                <Pressable style={styles.suscriptionButton}>
                    <Text style={styles.buttonText} onPress={() => confimSuscription()} >Suscribirse</Text>
                </Pressable>
            </View>
            <Modal
                visible={modalVisible2}
            >
                <Text style={{ fontSize: 20, paddingBottom: 10 }}>¡FELICIDADES!</Text>
                <Text style={{ fontSize: 20, paddingBottom: 10 }}>Estas suscripto</Text>
                <Pressable style={styles.buttonCancel} onPress={() => setModalVisible2(!modalVisible2)}>
                    <Text style={styles.buttonText}>ACEPTAR</Text>
                </Pressable>
            </Modal>
        </View>
    )
}

export default Forms;

const styles = StyleSheet.create({
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
    password: {
        flexDirection: 'row'
    },
    passwordContImg: {
        backgroundColor: 'white',
        width: 40,
        height: 50,
        borderBottomRightRadius: 5,
        borderTopRightRadius: 5,
        justifyContent: 'center'
    },
    passwordImage: {
        width: 20,
        height: 20,
    },
    suscriptionButton: {
        backgroundColor: colors.buttonColor,
        width: 180,
        paddingVertical: 10,
        marginBottom: 30,
        borderRadius: 5,
        alignItems: 'center'
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
})