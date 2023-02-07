import React, {FC} from 'react';
import {NavigationContainer} from '@react-navigation/native';

import {
  LoginScreen,
  RegisterScreen,
  ForgotPasswordScreen,
  HomeScreen,
  NotificationsScreen,
  WalletScreen,
  SettingsScreen,
  SettingsDetailScreen,
} from './src/screens';
import AuthNavigator from './src/navigators/auth.navigator';


const App: FC = () => {
  return (
    <NavigationContainer>
          <AuthNavigator    />
    </NavigationContainer>
  // return <RegisterScreen />;
  // return <ForgotPasswordScreen />;
  // return <HomeScreen />;
  // return <NotificationsScreen />;
  // return <WalletScreen />;
  // return <SettingsScreen />;
  // return <SettingsDetailScreen />;
)};

export default App;
