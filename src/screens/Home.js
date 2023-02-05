import { useState } from 'react';
import { useFonts } from 'expo-font'
import { StyleSheet, Text, View, Pressable, ScrollView, Alert } from 'react-native';
import colors from '../constants/colors';
import { opcionsPopularMovies } from '../data/OpcionsPopularMovies';
import AddItem from '../components/AddItem';
import OpcionsMovies from '../components/OpcionsMovies';
import Modal from '../components/Modal';

const Home = ({ navigation }) => {

    const [textItem, setTextItem] = useState('');
    const [itemList, setItemList] = useState([]);
    const [itemSelected, setItemSelected] = useState('');
    const [modalVisible, setModalVisible] = useState(false);

    const onHandlerChangeItem = text => {
        setTextItem(text)
    };

    const addItem = () => {
        if (textItem != '') {
            setItemList(prevState => [...prevState, textItem])
            setTextItem('')
        } else {
            Alert.alert('Ups..', 'No escribiste nada')
        }
    };

    const handleModal = item => {
        setItemSelected(item)
        setModalVisible(true)
    }

    const handleCloseModal = () => {
        setModalVisible(false)
    }

    const onHandlerDelete = item => {
        setItemList(currentItems => currentItems.filter(element => element !== item))
        setItemSelected('')
        setModalVisible(!modalVisible)
    };

    const [loaded] = useFonts({
        TitilliumWebSemiBold: require('../../assets/fonts/TitilliumWeb-SemiBold.ttf'),
    })

    if (!loaded) {
        return null
    }

    return (
        <ScrollView>
            <View>
                <View>
                    <View style={{ backgroundColor: colors.secondary, alignItems: 'center' }}>
                        <Pressable style={styles.buttonSuscribe} onPress={() => navigation.navigate('Suscription')}>
                            <Text style={styles.subTitles} >¡SUSCRIBETE!</Text>
                        </Pressable>
                        <Text style={{ ...styles.subTitles, fontFamily: 'TitilliumWebSemiBold' }}>Hola Coder!</Text>
                    </View>
                    <AddItem
                        changeItem={onHandlerChangeItem}
                        addItem={addItem}
                        textValue={textItem}
                    />
                    <View style={{ backgroundColor: colors.secondary }}>
                        {
                            itemList.map((item) => {
                                return (
                                    <View key={item + '1'} style={styles.renderItemStyle}>
                                        <Text key={item + 'title'} style={styles.items}>{item}</Text>
                                        <Pressable key={item + 'buton'} style={styles.button} onPress={() => handleModal(item)}>
                                            <Text key={item + 'text'} style={{ color: colors.buttonColor, fontSize: 16 }}>Editar</Text>
                                        </Pressable>
                                    </View>
                                )
                            })
                        }
                    </View>
                    <OpcionsMovies newStyles={{fontFamily: 'TitilliumWebSemiBold'}} tipProd={opcionsPopularMovies} />
                </View >
                <Modal
                    visible={modalVisible}
                    itemSelected={itemSelected}
                    actionDeleteItem={() => onHandlerDelete(itemSelected)}
                    actionCancelModal={() => handleCloseModal()}
                >
                    <Text style={styles.modalTextStyle}>{itemSelected}</Text>
                    <Pressable style={styles.buttonDelete} onPress={() => onHandlerDelete(itemSelected)}>
                        <Text style={styles.buttonText}>ELIMINAR</Text>
                    </Pressable>
                    <Pressable style={styles.buttonCancel} onPress={() => handleCloseModal()}>
                        <Text style={styles.buttonText}>CANCELAR</Text>
                    </Pressable>
                </Modal>
            </View>
        </ScrollView>
    )
}

export default Home;

const styles = StyleSheet.create({
    buttonSuscribe: {
        backgroundColor: colors.buttonColor,
        borderRadius: 10,
        paddingHorizontal: 18,
        justifyContent: 'center',
        alignItems: 'center',
        width: 370,
    },
    subTitles: {
        color: 'white',
        fontSize: 22,
        paddingVertical: 15,
        textAlign: 'center',
    },
    renderItemStyle: {
        height: 80,
        flexDirection: 'row',
        marginBottom: 15,
        backgroundColor: 'black',
        borderRadius: 10,
        borderColor: colors.primary,
        borderWidth: 3,
        padding: 20,
        justifyContent: 'center',
        alignItems: 'center',
    },
    items: {
        color: 'white',
        fontSize: 20,
    },
    button: {
        borderColor: colors.buttonColor,
        borderWidth: 1.5,
        paddingVertical: 6,
        paddingHorizontal: 9,
        marginLeft: 40
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
    buttonText: {
        color: 'white',
        fontSize: 15
    },
    buttonCancel: {
        backgroundColor: 'black',
        paddingHorizontal: 11,
        paddingVertical: 8,
        marginVertical: 5,
        borderRadius: 5
    },
})