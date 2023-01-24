import { useState } from 'react';
import { StyleSheet, Text, View, FlatList, Pressable } from 'react-native';
import colors from '../constants/colors';
import { opcionsMovies } from '../../mock';
import AddItem from '../components/AddItem';
import OpcionsMovies from '../components/OpcionsMovies';
import Modal from '../components/Modal';

const Home = ( {onChangeFavorite, newStyles } ) => {

    const [textItem, setTextItem] = useState('');
    const [itemList, setItemList] = useState([]);
    const [itemSelected, setItemSelected] = useState('');
    const [modalVisible, setModalVisible] = useState(false);
    const [modalVisible2, setModalVisible2] = useState(false);

    const onHandlerChangeItem = text => {
        setTextItem(text)
    };

    const addItem = () => {
        setItemList(prevState => [...prevState, textItem])
        setTextItem('')
    };

    const renderItem = ({ item }) => {
        return (
            <View style={styles.renderItemStyle}>
                <Text style={styles.items}>{item}</Text>
                <Pressable style={styles.button} onPress={() => handleModal(item)}>
                    <Text style={{ color: colors.buttonColor, fontSize: 16 }}>Editar</Text>
                </Pressable>
            </View>
        )
    };

    const handleModal = item => {
        setItemSelected(item)
        setModalVisible(true)
    }

    const handleCloseModal = () => {
        setModalVisible(false)
        setModalVisible2(false)
    }

    const onHandlerDelete = item => {
        setItemList(currentItems => currentItems.filter(element => element !== item))
        setItemSelected('')
        setModalVisible(!modalVisible)
    };

    return (
        <View>
            <View style={styles.inputContainer}>
                <View>
                    <Text style={{...styles.subTitles, ...newStyles}}>Hola Coder!</Text>
                </View>
                <AddItem
                    changeItem={onHandlerChangeItem}
                    addItem={addItem}
                    textValue={textItem}
                />
                <View style={{ marginTop: 10 }}>
                    <FlatList
                        data={itemList}
                        keyExtractor={item => item}
                        renderItem={renderItem}
                    />
                    <View style={{alignItems: 'center'}}>
                        <Pressable style={styles.buttonFinish} onPress={() => setModalVisible2(!modalVisible2)}>
                            <Text style={{color: 'white'}}>FINALIZAR LISTA</Text>
                        </Pressable>
                    </View>
                </View>
                <OpcionsMovies newStyles={newStyles} tipProd={opcionsMovies} />
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
                <Pressable style={styles.buttonCancel} onPress={() =>  handleCloseModal()}>
                        <Text style={styles.buttonText}>CANCELAR</Text>
                </Pressable> 
            </Modal>

            <Modal
                visible={modalVisible2}
                itemSelected={itemSelected}
                actionDeleteItem={() => onHandlerDelete(itemSelected)}
                actionCancelModal={() => handleCloseModal()}
            >
                
                <Text style={styles.modalTextStyle}>Para usar esta función debe</Text>
                <Pressable style={styles.buttonDelete} onPress={() => onChangeFavorite(itemList)}>
                    <Text style={styles.buttonText}>SUSCRIBIRSE</Text>
                </Pressable>
            </Modal>
        </View>
    )
}

export default Home;

const styles = StyleSheet.create({
    subTitles: {
        color: 'white',
        backgroundColor: colors.secondary,
        fontSize: 22,
        padding: 15,
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
    buttonFinish: {
        backgroundColor: colors.buttonColor,
        borderRadius: 10,
        paddingHorizontal: 18,
        paddingVertical: 12,
        justifyContent: 'center',
        alignItems: 'center',
        width: 300,
        marginBottom: 20,
        marginTop: 7
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