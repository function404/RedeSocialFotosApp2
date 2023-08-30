import React, { useState } from 'react';
import { View, Text } from 'react-native';
import { TextInput, Button } from 'react-native-paper';

import { createUserWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../config/firebase';

import styles from '../ui/styles';

import * as Animatable from 'react-native-animatable';

export default function Register() {
  const [Email, setEmail] = useState('');
  const [Password, setPassword] = useState('');
  const [PasswordC, setPasswordC] = useState('');

  const [isloading, setLoading] = React.useState('account');
  const [isloadingBol, setLoadingBol] = React.useState(false);

  const [TextButton, setTextButton] = React.useState('Registrar');

  function handleRegister() {
    if (Email !== '' && Password !== '' && PasswordC !== '') {
      if (Password !== PasswordC) {
        console.log('Senha não confere');
        return;
      }
      setLoading('loading');
      setLoadingBol(true);
      setTextButton('Carregando...');
      setTimeout(() => {
        createUserWithEmailAndPassword(auth, Email, Password)
          .then((userCredential) => {
            console.log('Usuário cadastrado com sucesso');
            setLoading('account');
            setEmail('');
            setPassword('');
            setPasswordC('');
            setLoadingBol(false);
            setTextButton('Registrar');
          })
          .catch((error) => {
            console.log(error);
          });
      }, 4000);
    } else {
      console.log('Preencha todas as informções');
      return;
    }
  }

  return (
    <View style={styles.container}>
      <Animatable.View
        animation='fadeInDown'
        delay={500}
        style={{ width: '90%', justifyContent: 'center', alignItems: 'center' }}
      >
        <View style={styles.form}>
          <View style={styles.formContent}>
            <Text style={styles.title}>Registrar-se</Text>
          </View>

          <View style={styles.formContent}>
            <Text>Insira todas as informações para se registrar.</Text>
          </View>

          <View style={styles.formContent}>
            <TextInput
              styles={styles.input}
              label={'Email'}
              placeholder={'Digite...'}
              value={Email}
              onChangeText={setEmail}
              mode='outlined'
            />
          </View>

          <View style={styles.formContent}>
            <TextInput
              styles={styles.input}
              label={'Senha'}
              placeholder={'Digite...'}
              value={Password}
              secureTextEntry={true}
              onChangeText={setPassword}
              mode='outlined'
            />
          </View>

          <View style={styles.formContent}>
            <TextInput
              styles={styles.input}
              label={'Confirmar Senha'}
              placeholder={'Digite...'}
              value={PasswordC}
              secureTextEntry={true}
              onChangeText={setPasswordC}
              mode='outlined'
            />
          </View>

          <View style={styles.formContent}>
            <Button
              icon={isloading}
              disabled={isloadingBol}
              loading={isloadingBol}
              style={styles.formButton}
              labelStyle={{ color: '#fff' }}
              onPress={handleRegister}
            >
              {TextButton}
            </Button>
          </View>
        </View>
      </Animatable.View>
    </View>
  );
}
