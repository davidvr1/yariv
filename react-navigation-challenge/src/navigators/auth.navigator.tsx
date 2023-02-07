// src/navigators/auth.navigator.tsx

import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {
  ForgotPasswordScreen,
  HomeScreen,
  LoginScreen,
  RegisterScreen,
} from '../screens';
import {ROUTES} from '../constants/route.constants';
import {FProute} from '../constants/route.types';     
import {COLORS} from '../constants/style.constants';  

const Stack = createNativeStackNavigator();

function AuthNavigator() {
  return (
    <Stack.Navigator 
      initialRouteName={ROUTES.LOGIN}
      screenOptions={{
        headerStyle: {
          backgroundColor: COLORS.primary,
        },
        headerTintColor: COLORS.white,
        // headerBackTitle: 'Back',
        headerBackTitleVisible: false,
      }}
    >
      <Stack.Screen 
        name={ROUTES.LOGIN} 
        component={LoginScreen} 
        options={{
          title: 'First Things first',
          headerStyle: {
            backgroundColor: COLORS.secondaryDark,
          },
          headerTintColor: COLORS.white,
          headerTitleStyle: {
            fontWeight: 'bold',
          },
        }}
      />
      <Stack.Screen name={ROUTES.REGISTER} component={RegisterScreen} />
      <Stack.Screen
        name={ROUTES.FORGOT_PASSWORD}
        component={ForgotPasswordScreen}
        options={({route}) => ({          
          title: `User ${(route as FProute).params.userId}`,
        })}   
      />
      <Stack.Screen name={ROUTES.HOME} component={HomeScreen} />
    </Stack.Navigator>
  );
}

export default AuthNavigator;