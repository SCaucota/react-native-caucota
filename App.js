import { useState } from 'react';
import { StyleSheet, View, ScrollView } from 'react-native';
import { useFonts } from 'expo-font'
import colors from './src/constants/colors';
import Header from './src/components/Header';
import Suscription from './src/screens/Suscription';
import Home from './src/screens/Home';
import { opcionsAvatar } from './mock';


export default function App() {

  const [useSuscription, setUseSuscription] = useState();
  const [useHome, setUseHome] = useState();

  const [loaded] = useFonts({
    KavoonRegular: require('./assets/fonts/Kavoon-Regular.ttf'),
    TitilliumWebSemiBold: require('./assets/fonts/TitilliumWeb-SemiBold.ttf'),
  })

  if (!loaded) {
    return null
  }

  
  
  const onHandlerSuscription = itemList => {
    setUseSuscription(itemList)
  }

  const onHandlerHome = avatarImage => {
    setUseSuscription()
    setUseHome(avatarImage)
  }

  let content = <Home newStyles={{fontFamily: 'TitilliumWebSemiBold'}} onChangeFavorite={onHandlerSuscription} />

  if (useSuscription) {
    content = <Suscription newStyles={{fontFamily: 'TitilliumWebSemiBold'}} opcionesMovies={opcionsAvatar} onChangeHome={onHandlerHome} />
  }

  return (
    <ScrollView>
      <View style={styles.container}>
        <Header newStyles={{fontFamily: 'KavoonRegular'}}/>
        {content}
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.secondary,
    marginTop: 26
  },
});
