// src/constants/route.types.ts

import {RouteProp} from '@react-navigation/native';
import {ROUTES} from './route.constants';

export type FProute = RouteProp<RootStackParamList, ROUTES.FORGOT_PASSWORD>;

export type RootStackParamList = {
  [ROUTES.LOGIN]: undefined;
  [ROUTES.REGISTER]: undefined;
  [ROUTES.FORGOT_PASSWORD]: {userId: string};

  [ROUTES.HOME]: undefined;
  [ROUTES.HOME_TAB]: undefined;
  [ROUTES.HOME_DRAWER]: undefined;

  [ROUTES.WALLET]: undefined;
  [ROUTES.WALLET_DRAWER]: undefined;

  [ROUTES.NOTIFICATIONS]: undefined;
  [ROUTES.NOTIFICATIONS_DRAWER]: undefined;

  [ROUTES.SETTINGS]: undefined;
  [ROUTES.ACCOUNT_SETTINGS]: undefined;
  [ROUTES.SETTINGS_NAVIGATOR]: undefined;
  [ROUTES.SETTINGS_DETAIL]: undefined;
};

declare global {
  namespace ReactNavigation {
    interface RootParamList extends RootStackParamList {}
  }
}