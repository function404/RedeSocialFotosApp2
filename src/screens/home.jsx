import React, { useEffect, useState } from "react";
import { View, Text, Button, Pressable } from "react-native";
import { TextInput } from "react-native-paper";

import { getAuth } from "firebase/auth";

import styles from "../ui/styles";

import ImageListType from "../components/FeedListType";
import Header from "../components/header";

export default function Home({ navigation }) {
  async function setLogOut() {
    const auth = getAuth();

    await auth
      .signOut()
      .then(() => {
        console.log("Usuário deslogado com sucesso!");
        navigation.navigate("Logar-se");
      })
      .catch((error) => {
        console.log(error);
      });
  }

  return (
    <View>
      <View style={styles.container}>
        <Header title="Página de Feed" />
      </View>
      <View style={styles.content}>
        <ImageListType />
      </View>

      <View style={styles.content}>
        <Pressable style={styles.cardItem}>
          <Button title="Deslogar" onPress={() => setLogOut()} />
        </Pressable>
      </View>
    </View>
  );
}