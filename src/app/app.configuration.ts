
import { AuthProviders, AuthMethods } from 'angularfire2';

export const config = {
  apiKey: "AIzaSyAx88CNokeNkeKsBIuXUMUT3vUzkBjKSQ4",
  authDomain: "stoped-clock.firebaseapp.com",
  databaseURL: "https://stoped-clock.firebaseio.com",
  storageBucket: "stoped-clock.appspot.com",
  messagingSenderId: "947255832579"
};

export const myFirebaseAuthConfig = {
  provider: AuthProviders.Custom,
  method: AuthMethods.Password
}
