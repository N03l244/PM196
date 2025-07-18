// screens/detalle.js
import { View, Text, StyleSheet } from 'react-native';

export default function Detalle() {
    return (
        <View style={styles.container}>
            <Text style={styles.title}>Detalles del Usuario</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        justifyContent: 'center',
        alignItems: 'center',
    },
    title: {
        fontSize: 22,
        fontWeight: 'bold',
        color: 'purple',
    },
});
