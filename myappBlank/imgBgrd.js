import React, { useEffect, useState } from "react";
import { View, StyleSheet, Text, ImageBackground, ActivityIndicator } from "react-native";

export default function App() {
    return (
        <ImageBackground
            source={{ uri: 'https://wallpapers.com/images/featured/fondos-de-paisajes-naturales-k9tfch0hpfjbaxel.jpg' }}
            style={styles.background}
            resizeMode="cover"
        >
            <View style={styles.overlay}>
                <Text style={styles.text}>Bienvendio a la app</Text>
            </View>
        </ImageBackground>
    )


}

const styles = StyleSheet.create({
    background: {
        flex: 1,
        justifyContent: 'center'
    },
    overlay: {
        backgroundColor: "rgba(0,0,0,0.5)",
        padding: 20,
        borderRadius: 10,
        alignSelf: 'center'
    },
    text: {
        color: 'white',
        fontSize: 24
    }
}
)