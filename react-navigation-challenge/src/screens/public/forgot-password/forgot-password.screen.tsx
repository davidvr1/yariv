import {Text, SafeAreaView} from 'react-native';
import React from 'react';
import styles from './forgot-password.screen.styles';
import {useRoute} from '@react-navigation/native';        
import {FProute} from '../../../constants/route.types';   

const ForgotPasswordScreen = () => {
  const route = useRoute<FProute>();                       
  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.title}>Forgot Password</Text>
      <Text style={styles.subtitle}>User ID: {route.params.userId} </Text>
    </SafeAreaView>
  );
};

export default ForgotPasswordScreen;
