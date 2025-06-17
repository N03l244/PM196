import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { Button } from 'react-native-web';
import React,{useState} from 'react';

const Texto= ({style}) => {
  const [contenido,setContenido] = useState('Hola Mundo')
  const actualizarTexto = () => {setContenido('State Modificado')}
  return (
    <Text style={[styles.text,style]} onPress={actualizarTexto}> {contenido} </Text>
  )
}

export default function App() {
const [contenido,setContenido] = useState('Aque no me tocas')
const actualizarBoton = () => {setContenido('Aplastado')}
  return (

    <View style={styles.container}>
          <StatusBar style="auto" />
      <Texto style={styles.rojo}></Texto>
      <Texto style={styles.amarillo}></Texto>
      <Texto style={styles.verde}></Texto>
      <Button
      onPress={actualizarBoton} 
      title={contenido} 
      ></Button>
    </View>
  );
}
//3,Estilos
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000',
    alignItems: 'center',
    justifyContent: 'space-evenly',
    flexDirection: 'row',
  },
  text: {
    color: 'blask',
    fontSize: 28,
  },
  rojo:{backgroundColor: 'red'},
  amarillo:{backgroundColor: 'yellow'},
  verde:{backgroundColor: 'green'}
});


