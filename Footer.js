import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';

const Footer = () => {
  return (
    <View style={styles.footerContainer}>
      <Text style={styles.poweredByText}>Powered by</Text>
      <Image source={require('./assets/northstar_footer_logo.png')} style={styles.companyImage} />
    </View>
  );
};

const styles = StyleSheet.create({
  footerContainer: {
    flexDirection: 'row', // Arrange elements horizontally
    justifyContent: 'center', // Center elements horizontally
    alignItems: 'center', // Center elements vertically
    padding: 10, // Add some padding
  },
  poweredByText: {
    marginRight: 10, // Add some margin between text and image
    color:'#fff'
  },
  companyImage: {
    width: 200, // Set image width
    height: 50, // Set image height
  },
});

export default Footer;