
import React from "react";
import { View, Text, Image, TextInput, TouchableOpacity } from "react-native";
import { styles } from "./LoginScreen.styles";

export const LoginScreen = () => {
  return (
    <View style={styles.container}>
      {/* Ilustración */}
      <Image
        source={require("../../assets/images/login-illustration.png")}
        style={styles.illustration}
        resizeMode="contain"
      />

      {/* Inputs */}
      <TextInput
        placeholder="Correo Electrónico"
        style={styles.input}
        keyboardType="email-address"
      />
      <TextInput
        placeholder="Contraseña"
        style={styles.input}
        secureTextEntry
      />

      <TouchableOpacity>
        <Text style={styles.forgotPassword}>¿Olvidó la contraseña?</Text>
      </TouchableOpacity>

      {/* Botón */}
      <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonText}>Ingresar</Text>
      </TouchableOpacity>
    </View>
  );
};
