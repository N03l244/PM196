// IMPORTACIONES
import React, { useState } from 'react';
import { View, Switch, StyleSheet, Text } from 'react-native';

// COMPONENTE PRINCIPAL
const App = () => {
  // Declaración del estado
  const [activo, setActivo] = useState(false);

  // Función para cambiar el estado del switch
  const cambiarSwitch = () => {
    setActivo(previousState => !previousState);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.label}>Activar Característica:</Text>

      <Switch
        onValueChange={cambiarSwitch}
        value={activo}

        // Puedes descomentar estas líneas para probar otras props:
        // disabled={true}  // Desactiva el switch
        // trackColor={{ false: '#FF0000', true: '#00FF00' }} // Color de la pista
        // thumbColor={activo ? '#0000FF' : '#FFFF00'} // Color del botón circular
        // ios_backgroundColor="#3e3e3e"  // Color de fondo solo en iOS
      />

      <Text style={styles.statusText}>
        Estado actual: {activo ? 'Activado' : 'Desactivado'}
      </Text>
    </View>
  );
};

// ESTILOS
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f0f0f0',
  },
  label: {
    fontSize: 20,
    marginBottom: 10,
    fontWeight: 'bold',
    color: '#333',
  },
  statusText: {
    marginTop: 20,
    fontSize: 18,
    color: '#666',
  },
});

export default App;
