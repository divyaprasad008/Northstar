import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, TouchableWithoutFeedback, TouchableNativeFeedback, SafeAreaView, Button, TextInput } from 'react-native';
import SignupScreen from './Signup'
import Footer from './Footer'

export default function App() {
  const handlePress = () => console.log("Text Pressed");
  const [email, onEmailChange] = React.useState('Email');
  const [password, onPasswordChange] = React.useState('Password');
  return (

    <SafeAreaView style={styles.container}>
      <SignupScreen  style={styles.signup_cont} />
      <Footer />
      
      <StatusBar style="auto" />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#222228',
    alignItems: 'center',
    justifyContent: 'center',
    
  }
    
});
