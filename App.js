/* import { useState } from 'react'; */
import { StyleSheet, View } from 'react-native';
import { useFonts } from 'expo-font'
import colors from './src/constants/colors';
import Header from './src/components/Header';
import StackNavigation from './src/navigation/StackNavigation';


export default function App() {

  const [loaded] = useFonts({
    KavoonRegular: require('./assets/fonts/Kavoon-Regular.ttf'),
    TitilliumWebSemiBold: require('./assets/fonts/TitilliumWeb-SemiBold.ttf'),
  })

  if (!loaded) {
    return null
  }

  return (
      <View style={styles.container}>
        <Header newStyles={{fontFamily: 'KavoonRegular'}} />
        <StackNavigation />
      </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.secondary,
    marginTop: 26
  },
});
