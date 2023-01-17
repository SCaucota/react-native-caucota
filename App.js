/* import { StatusBar } from 'expo-status-bar'; */
import { useState } from 'react';
import { StyleSheet, Text, View, Button, ScrollView, FlatList, TouchableOpacity } from 'react-native';
import Modal from './src/components/Modal';
import AddItem from './src/components/AddItem';
import Intro from './src/components/Intro';

export default function App() {

  const [textItem, setTextItem] = useState('');
  const [itemList, setItemList] = useState(['Magdalenas']);
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
          <Text style={{color:'#AD7EDE', fontSize: 16}}>Editar</Text>
        </TouchableOpacity>
        {/* <View style={{paddingLeft: 10}}>
          <Button color='black' title='Editar' onPress={() => handleModal(item)}/>
        </View> */}
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

/*   const onHandlerModal = id => {
    setItemSelected(itemList.filter(item => item.id === id[0]))
    setModalVisible(!modalVisible)
  } */

  return (
    <ScrollView>
      <View style={styles.container}>
        <View style={styles.navBar}>
          <Text style={styles.brandName}>viewStar</Text>
        </View>
        <View>
          <Text style={styles.subTitulos}>Hola Coder!</Text>
        </View>
        <AddItem
        changeItem={onHandlerChangeItem}
        addItem={addItem}
        textValue={textItem}
          /* <View style={styles.inputContainer}>
            <TextInput
              style={styles.input}
              placeholder='Ingrese la película'
              placeholderTextColor='grey'
              onChangeText={onHandlerChangeItem}
              value={textItem}
            />
            <Button
              color='#8845CC'
              title='Agregar'
              onPress={addItem}
            />
          </View> */
        />
        <View style={{marginTop: 10}}>
          <FlatList
            data={itemList}
            keyExtractor={item => item}
            renderItem={renderItem}
          />
          {/* {
            itemList.map(item =>{
              <View>
                <Text style={{color: 'white'}}>{item}</Text>
              </View>
            })
          } */}
        </View>
        <Intro
          /*  <Text style={styles.subTitulos}>¿Quiénes somos?</Text>
            <Image style={styles.imagen} source={{ uri: 'https://es.rollingstone.com/wp-content/uploads/2022/02/25-peliculas-que-debes-ver-en-el-2022-portada.jpg' }} />
            <Text style={styles.texto}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto nisi repellendus eius impedit iure quod nemo natus repellat perferendis, facere magni omnis similique adipisci quos alias debitis?</Text> */
        />
        {/* <StatusBar style="auto" /> */}
      </View>
      <Modal
      visible={modalVisible}
      itemSelected={itemSelected}
      actionDeleteItem={() => onHandlerDelete(itemSelected)}
      actionCancelModal={() => setModalVisible(false)}
        /* <View style={styles.modalConatiner}>
          <View style={styles.modalStyle}>
            <Text style={styles.modalTextStyle}>{itemSelected}</Text>
            <Button
            color='#8845CC'
            title='Eliminar'
            onPress={() => onHandlerDelete (itemSelected)}
            />
            <Button
            color='#8845CC'
            title='Cancelar'
            onPress={() => setModalVisible(false)}
            />
          </View>
        </View> */
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
  subTitulos: {
    color: 'white',
    backgroundColor: '#AD7EDE',
    fontSize: 22,
    padding: 15,
    textAlign: 'center',
  },
/*   inputContainer: {
    backgroundColor: '#000000',
    width: 300,
    flex: 2,
    marginHorizontal: 40,
    padding: 3,
  },
  input: {
    color: '#8845CC',
    fontSize: 20,
    paddingBottom: 10,
  }, */
  /* inputButton: {
    backgroundColor: '#000000',
    alignItems: 'center',
  }, */
  /* imagen: {
    width: 370,
    height: 300,
  }, */
  /* texto: {
    fontSize: 18,
    padding: 20,
    color: 'white',
  }, */
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
  /* modalConatiner: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 22,
  },
  modalStyle: {
    margin: 20,
    backgroundColor: '#8845CC',
    borderRadius: 20,
    padding: 40,
    alignItems: 'center',
    shadowColor: '#A977DC',
    shadowOffset: {
      width: 5,
      height: 3,
    },
  },
  modalTextStyle: {
    fontSize: 30,
  }, */
});
