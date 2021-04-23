import { Ionicons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/core";
import React from "react";
import { SafeAreaView, StyleSheet, Text, View } from "react-native";

import { Button } from "../components/Button";
import colors from "../styles/colors";
import fonts from "../styles/fonts";

export function Confirmation() {
  const navigation = useNavigation();
  function handleStart() {
    navigation.navigate("PlantSelect");
  }
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.content}>
        <Ionicons name="md-happy-sharp" style={styles.emoji} />

        <Text style={styles.title}>Prontinho</Text>
        <Text style={styles.subtitle}>
          Agora vamos começar a cuidar das suas plantas
        </Text>
        <View style={styles.footer}>
          <Button title={"Confirmar"} onPress={handleStart} />
        </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "space-around",
  },
  content: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    width: "100%",
    padding: 30,
  },
  emoji: {
    fontSize: 78,
  },
  title: {
    fontSize: 22,
    fontFamily: fonts.heading,
    textAlign: "center",
    color: colors.heading,
    lineHeight: 38,
    marginTop: 15,
  },
  subtitle: {
    fontFamily: fonts.text,
    textAlign: "center",
    fontSize: 17,
    paddingHorizontal: 20,
    color: colors.heading,
    marginTop: 12,
  },
  footer: {
    width: "100%",
    paddingHorizontal: 30,
    marginTop: 30,
  },
});
