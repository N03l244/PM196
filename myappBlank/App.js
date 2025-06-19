import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, SectionList } from 'react-native';
import React, { useState } from 'react';

const secciones = [
  {
    title: 'Frutas',
    data: ['Manzana', 'Banana', 'Cereza'],
  },
  {
    title: 'Verduras',
    data: ['Lechuga', 'Zanahoria', 'Pepino'],
  },
];

const Item = ({ nombre }) => {
  const [texto, setTexto] = useState(nombre);
  const cambiarTexto = () => setTexto('¡Modificado!');
  return (
    <Text style={styles.itemText} onPress={cambiarTexto}>
      {texto}
    </Text>
  );
};

export default function App() {
  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <SectionList
        sections={secciones}
        keyExtractor={(item, index) => item + index}
        renderItem={({ item }) => (
          <View style={styles.itemBox}>
            <Item nombre={item} />
          </View>
        )}
        renderSectionHeader={({ section: { title } }) => (
          <Text style={styles.header}>{title}</Text>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#222',
    paddingTop: 50,
    paddingHorizontal: 20,
  },
  header: {
    fontSize: 24,
    fontWeight: 'bold',
    backgroundColor: '#ccc',
    padding: 8,
    borderRadius: 5,
    marginTop: 10,
  },
  itemBox: {
    backgroundColor: '#f0a',
    padding: 12,
    marginVertical: 6,
    borderRadius: 10,
  },
  itemText: {
    fontSize: 18,
    color: '#fff',
  },
});
