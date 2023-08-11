import { ImageBackground, Text } from 'react-native';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';
import { Home } from './pages/Home/Home';
import { s } from './App.style'
import backgroundImg from './assets/background.png'
import AlataRegular from './assets/Alata-Regular.ttf'
import {useFonts} from 'expo-font'

export default function App() {

  const [isFontLoaded] = useFonts({
    "Alata-Regular" : AlataRegular,
  })
  // console.log(isFontLoaded)
  return (
    <>
      <ImageBackground source={backgroundImg} style={s.background} imageStyle={s.img} >
        <SafeAreaProvider >
          <SafeAreaView style={s.container}>
            {
              isFontLoaded ? <Home /> : null
            }
          </SafeAreaView>
        </SafeAreaProvider>
      </ImageBackground>
    </>
  );
}