
import React from "react";
import { View, Text, Image, TouchableOpacity } from "react-native";
import { styles } from "./InicioScreen.styles";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { RootStackParamList } from "../../navigation/AppNavigator";

type Props = NativeStackScreenProps<RootStackParamList, "Inicio">;

export const InicioScreen = ({ navigation }: Props) => {
  return (
    <View style={styles.container}>
      <Image
        source={require("../../assets/images/logo.png")}
        style={styles.logo}
        resizeMode="contain"
      />

      <Image
        source={require("../../assets/images/inicio-illustration.png")}
        style={styles.illustration}
        resizeMode="contain"
      />

      <Text style={styles.title}>Bienvenidos a DR PHILLIPS Mobil</Text>
      <Text style={styles.subtitle}>
        Lleva tu proceso educativo desde casa, y vive una experiencia más cómoda
        desde cualquier parte del mundo!
      </Text>

      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate("Login")}
      >
        <Text style={styles.buttonText}>Ingresar</Text>
      </TouchableOpacity>
    </View>
  );
};
