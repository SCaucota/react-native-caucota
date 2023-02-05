import { StyleSheet} from 'react-native';
import { useFonts } from 'expo-font'
import colors from './src/constants/colors';
import Header from './src/components/Header';
import TabNavigation from './src/navigation/TabNavigation';
import { NavigationContainer } from "@react-navigation/native"


export default function App() {

  const [loaded] = useFonts({
    KavoonRegular: require('./assets/fonts/Kavoon-Regular.ttf'),
    TitilliumWebSemiBold: require('./assets/fonts/TitilliumWeb-SemiBold.ttf'),
  })

  if (!loaded) {
    return null
  }

  return (
      <NavigationContainer style={styles.container}>
        <Header newStyles={{fontFamily: 'KavoonRegular'}} />
        <TabNavigation/>
      </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.secondary,
  },
});
