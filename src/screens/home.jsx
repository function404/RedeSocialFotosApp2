import React, { useState } from 'react';
import { View, Text, Button, Pressable } from 'react-native';
import { TextInput } from 'react-native-paper';

import { getAuth } from 'firebase/auth';


import styles from '../ui/styles';


export default function Home() {

  async function setLogOut() {
    const auth = getAuth();

    await auth.signOut()
      .then(() => {
        console.log('Usuário deslogado com sucesso!');
        navigation.navigate('Logar-se');
      })
      .catch((error) => {
        console.log(error);
      });
  };

    return(
        <View style={styles.container}>
            <Text>Home</Text>

            <Pressable style={styles.cardItem}>
              <Button title='Log-out' onPress={() => setLogOut()} />
            </Pressable>
        </View>
        
    )
}