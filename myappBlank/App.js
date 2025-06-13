import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { Button } from 'react-native-web';
import React,{useState} from 'react';

const Texto= () => {
  const [contenido,setContenido] = useState('Hola Mundo')
  const actualizarTexto = () => {setContenido('State Modificado')}
  return (
    <Text onPress={actualizarTexto}> {contenido} </Text>
  )
}

export default function App() {
const [contenido,setContenido] = useState('Aque no me tocas')
const actualizarBoton = () => {setContenido('Aplastado')}
  return (

    <View style={styles.container}>
          <StatusBar style="auto" />
      <Texto></Texto>
      <Texto></Texto>
      <Texto></Texto>
      <Button
      onPress={actualizarBoton} 
      title={contenido} 
      ></Button>
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
