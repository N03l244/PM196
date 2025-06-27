// Zona de importaciones
import React, { useEffect, useState } from "react";
import {
  View,
  StyleSheet,
  Text,
  ImageBackground,
  ActivityIndicator,
  TextInput,
  Button,
  Alert,
  SafeAreaView,
  Platform,
  Switch,
  Image,
  KeyboardAvoidingView,
  ScrollView,
} from "react-native";

export default function App() {
  // Campos de formulario
  const [nombre, setNombre] = useState("");
  const [email, setEmail] = useState("");

  // Aceptación de términos
  const [accepted, setAccepted] = useState(false);

  // Carga de pantalla inicial
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simula 3 s de carga y luego muestra la pantalla de registro
    const timer = setTimeout(() => setLoading(false), 3000);
    return () => clearTimeout(timer);
  }, []);

  // --- Funciones ---
  const handleRegister = () => {
    // 1. Validación de campos vacíos
    if (!nombre.trim() || !email.trim()) {
      Alert.alert("Campos vacíos", "Por favor completa todos los campos.");
      return;
    }

    // 2. Validación básica de correo electrónico
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email.trim())) {
      Alert.alert("Correo inválido", "Ingresa un correo electrónico válido.");
      return;
    }

    // 3. Validación de aceptación de términos
    if (!accepted) {
      Alert.alert(
        "Términos y condiciones",
        "Debes aceptar los términos y condiciones para continuar."
      );
      return;
    }

    // 4. Todo correcto ➜ ¡Éxito!
    Alert.alert(
      "¡Registro exitoso!",
      `Nombre: ${nombre}\nCorreo: ${email}`
    );

    // 5. Limpia el formulario
    setNombre("");
    setEmail("");
    setAccepted(false);
  };

  // --- Render ---
  if (loading) {
    return (
      <View style={styles.splash}>
        {/* Logo personalizado durante la carga */}
        <Image
          source={{
            uri: "https://cdn-icons-png.flaticon.com/512/189/189792.png",
          }}
          style={styles.logo}
          />
        <Text style={styles.splashText}>Cargando...</Text>
        <ActivityIndicator size="large" color="red" />
      </View>
    );
  }

  return (
    <ImageBackground
      source={{
        uri:
          "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8ZWRpZmljaW8lMjBkZSUyMGxhJTIwZW1wcmVzYXxlbnwwfHwwfHx8MA%3D%3D",
      }}
      style={styles.background}
      resizeMode="cover"
    >
      <View style={styles.overlay}>
        <SafeAreaView>
          <KeyboardAvoidingView
            behavior={Platform.OS === "ios" ? "padding" : undefined}
          >
            <ScrollView showsVerticalScrollIndicator={false}>
              <Text style={styles.title}>Registro de Usuario</Text>

              <Text style={styles.label}>Nombre completo</Text>
              <TextInput
                style={styles.input}
                placeholder="Ingresa tu nombre"
                placeholderTextColor="#aaa"
                value={nombre}
                onChangeText={setNombre}
              />

              <Text style={styles.label}>Correo electrónico</Text>
              <TextInput
                style={styles.input}
                placeholder="Ingresa tu correo"
                placeholderTextColor="#aaa"
                keyboardType="email-address"
                autoCapitalize="none"
                value={email}
                onChangeText={setEmail}
              />

              <View style={styles.termsRow}>
                <Switch
                  value={accepted}
                  onValueChange={setAccepted}
                  trackColor={{ false: "#767577", true: "#81b0ff" }}
                  thumbColor={accepted ? "#f5dd4b" : "#f4f3f4" }
                />
                <Text style={styles.termsText}>
                  Acepto términos y condiciones
                </Text>
              </View>

              <Button title="Registrarse" color="#1e90ff" onPress={handleRegister} />
            </ScrollView>
          </KeyboardAvoidingView>
        </SafeAreaView>
      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  // --- Pantalla de fondo ---
  background: {
    flex: 1,
  },
  overlay: {
    flex: 1,
    backgroundColor: "rgba(0,0,0,0.55)",
    padding: 24,
    justifyContent: "center",
  },

  // --- Splash ---
  splash: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#000",
  },
  logo: {
    width: 120,
    height: 120,
    marginBottom: 20,
  },
  splashText: {
    color: "#fff",
    fontSize: 20,
    marginVertical: 12,
  },

  // --- Formulario ---
  title: {
    color: "#fff",
    fontSize: 28,
    fontWeight: "bold",
    textAlign: "center",
    marginBottom: 24,
  },
  label: {
    color: "#fff",
    marginBottom: 4,
    marginTop: 16,
  },
  input: {
    backgroundColor: "rgba(255,255,255,0.9)",
    borderRadius: 8,
    paddingHorizontal: 12,
    paddingVertical: Platform.OS === "ios" ? 14 : 10,
    fontSize: 16,
  },
  termsRow: {
    flexDirection: "row",
    alignItems: "center",
    marginVertical: 24,
  },
  termsText: {
    color: "#fff",
    marginLeft: 8,
  },
});