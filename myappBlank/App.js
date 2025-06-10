import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { Button } from 'react-native-web';

const Texto = ()=> {
  return (
    <Text>Hola react native!, Hola tonotos!!</Text>
  )
}


export default function App() {
  return (

    
   
    <View style={styles.container}>
     <Texto> </Texto>
      <StatusBar style="auto" />
      <Texto></Texto>
      <Button title='Aplastame'></Button>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
