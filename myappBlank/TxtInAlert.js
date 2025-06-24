//Zona de importaciones
import React, { useState } from "react";
import { View, Text, TextInput, Button, Alert, StyleSheet, SafeAreaView, Platform, } from "react-native";


const App = () => {
    const [nombre, setNombre] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [telefono, setTelefono] = useState("");

    const mostrarAlerta = () => {
        if (!nombre || !email || !password) {
            if (Platform.OS === 'web') {
                window.alert("Por favor, completa todos los campos.");
            } else {
                alert.alert(
                    "Alerta",
                    "Por favor, completa todos los campos.",
                    [{ text: "OK" }]
                );
            }
        } else {
            if (Platform.OS === 'web') {
                window.alert(`Registro exitos\n Nombre: ${nombre}\nEmail: ${email}\nContraseña: ${password}\nTeléfono: ${telefono}`);
                limpiarFormulario();
            } else {
                Alert.alert(
                    "Registro exitoso",
                    `Nombre: ${nombre}\nEmail: ${email}`,
                    [{ text: "OK", onPress: () => limpiarFormulario() }]
                );
            }
        }
    }
    const limpiarFormulario = () => {
        setNombre("");
        setEmail("");
        setPassword("");
        setTelefono("");
    };

    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.formulario}>
                <Text style={styles.titulo}>registro de usuario</Text>
                <TextInput style={styles.input}
                    placeholder="Nombre Completo *"
                    value={nombre}
                    onChangeText={setNombre}
                />

                <TextInput style={styles.input}
                    placeholder="Email *"
                    value={email}
                    onChangeText={setEmail}
                    keyboardType="email-address"
                    autoCapitalize="none"
                />

                <TextInput style={styles.input}
                    placeholder="contraseña *"
                    value={password}
                    onChangeText={setPassword}
                    secureTextEntry
                />


                <TextInput style={styles.input}
                    placeholder="Telefono (opcional) *"
                    value={telefono}
                    onChangeText={setTelefono}
                    keyboardType="phone-pad"
                />

                <Button title="Registrarse" onPress={mostrarAlerta} />

            </View>

        </SafeAreaView>

    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        padding: 20,
        backgroundColor: "#f0f0f0",
    },
    formulario: {
        backgroundColor: "#fff",
        padding: 20,
        borderRadius: 10,
        shadowColor: "#000",
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.3,
        shadowRadius: 4,
        elevation: 5,
    },
    titulo: {
        fontSize: 24,
        fontWeight: "bold",
        marginBottom: 20,
        textAlign: "center",
    },
    input: {
        height: 40,
        borderColor: "#ccc",
        borderWidth: 1,
        borderRadius: 5,
        marginBottom: 15,
        paddingHorizontal: 10,
    },

});

export default App;