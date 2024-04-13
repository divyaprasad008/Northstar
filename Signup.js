import React, { useState } from 'react';
import { SafeAreaView, Image, Text, TextInput, Pressable, StyleSheet } from 'react-native';

const SignupScreen = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSignup = () => {
    // Implement your signup logic here
    // This function will be called when the user presses the signup button
    // You can use the email and password state variables to perform actions
    // such as sending a signup request to your backend API.
    console.log('Email:', email);
    console.log('Password:', password);
    alert("Sign Up Successful")

  };

  return (
    <SafeAreaView style={styles.container}>
      <Image  source={require('./assets/nstar-short.png')} style={styles.headerImage} />

      <Text style={styles.title}>Sign in to Northstar</Text>
      <TextInput
        style={styles.input}
        value={email}
        onChangeText={setEmail}
        placeholder="Email"
        autoCapitalize="none"
        textColor="white"
        placeholderTextColor="white"
      />
      <TextInput
    //    style={[styles.textInput, Platform.OS === 'android' && { width: '100%' }]}
    //    placeholder="Enter text here"

        style={styles.input}
        value={password}
        onChangeText={setPassword}
        placeholder="Password"
        secureTextEntry={true}
        textColor="white"
        placeholderTextColor="white"
      />
      <Pressable style={styles.button} onPress={handleSignup}>
        <Text style={styles.buttonText}>Sign Up</Text>
      </Pressable>
      
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'left',
    borderColor:'white'
  },
  headerImage:{
    width: 40,
    height: 80,
    alignSelf:'center'
  },
  title: {
    fontSize: 28,
    marginBottom: 30,
    color:'#fff',
    // fontFamily: 'Helvetica, Arial, sans-serif',
    fontWeight: 'bold'
  },
  input: {
    fontSize:18,
    // marginRight:20,
    width: '500',
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
    borderRadius: 5,
    borderColor: 'white',
    color:'#ffffff'
  },
  button:{

    borderRadius: 5,
    margin: 12,
    padding: 10,
    width:'500',
    backgroundColor: 'white', color: '#222228'
  },
  buttonText:{
    fontSize:18,
    paddingLeft:60,
    justifyContent: 'center',
  }
});

export default SignupScreen;
