import { useState } from 'react';
import { StyleSheet, Text, View, Button, ScrollView, FlatList, TouchableOpacity } from 'react-native';
import Modal from './src/components/Modal';
import AddItem from './src/components/AddItem';
import Intro from './src/components/Intro';

export default function App() {

  const [textItem, setTextItem] = useState('');
  const [itemList, setItemList] = useState([]);
  const [itemSelected, setItemSelected] = useState('');
  const [modalVisible, setModalVisible] = useState(false);

  const onHandlerChangeItem = text => {
    setTextItem(text)
  };

  const addItem = () => {
    setItemList(prevState => [...prevState, textItem])
    setTextItem('')
    console.log(itemList) 
  };

  const renderItem = ({item})  => {
    return (
      <View style={styles.renderItemStyle}>
        <Text style={styles.items}>{item}</Text>
        <TouchableOpacity style={styles.button} onPress={() => handleModal(item)}>
          <Text style={{color:'#8845CC', fontSize: 16}}>Editar</Text>
        </TouchableOpacity>
      </View>
    )
  };

  const handleModal = item => {
    setItemSelected(item)
    setModalVisible(true)
  }

  const onHandlerDelete = item => {
    setItemList(currentItems => currentItems.filter(element => element !== item))
    setItemSelected('')
    setModalVisible(!modalVisible)
  };

  return (
    <ScrollView>
      <View style={styles.container}>
        <View style={styles.navBar}>
          <Text style={styles.brandName}>viewStar</Text>
        </View>
        <View>
          <Text style={styles.subTitles}>Hola Coder!</Text>
        </View>
        <AddItem
        changeItem={onHandlerChangeItem}
        addItem={addItem}
        textValue={textItem}
        />
        <View style={{marginTop: 10}}>
          <FlatList
            data={itemList}
            keyExtractor={item => item}
            renderItem={renderItem}
          />
        </View>
        <Intro />
      </View>
      <Modal
      visible={modalVisible}
      itemSelected={itemSelected}
      actionDeleteItem={() => onHandlerDelete(itemSelected)}
      actionCancelModal={() => setModalVisible(false)}
      />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop: 25,
    flex: 1,
    backgroundColor: '#AD7EDE',
  },
  navBar: {
    flex: 1,
    backgroundColor: '#8845CC',
    paddingBottom: 15,
  },
  brandName: {
    fontSize: 25,
    paddingTop: 12,
    paddingLeft: 20,
  },
  subTitles: {
    color: 'white',
    backgroundColor: '#AD7EDE',
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
    borderColor: '#8845CC',
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
    borderColor: '#8845CC',
    borderWidth: 1.5,
    paddingVertical: 6,
    paddingHorizontal: 9,
    marginLeft: 40
  }
});
