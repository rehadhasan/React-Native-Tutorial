import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, ImageBackground } from 'react-native';
const logoImg = require("./assets/splash-icon.png")

export default function App() {
  return (
    <View style={styles.container}>
      {/* <Image style={styles.image} source={logoImg}/>
      <Image style={styles.image} source={{uri: "https://picsum.photos/300"}}/> */}
      <ImageBackground style={styles.imageBackground} source={logoImg}>
        <Text style={styles.text}>Image</Text>
      </ImageBackground>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'plum',
    padding: 60,
  },
  image: {
    width: 300,
    height: 300,
  },
  imageBackground: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  text: {
    color: "black",
    fontSize: 30,
  }
});
