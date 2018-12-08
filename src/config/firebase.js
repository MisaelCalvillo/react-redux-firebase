import * as firebase from 'firebase';

import { FirbaseConfig } from './../config/keys';
firebase.initializeApp(FirebaseConfig);

const databaseRef = firebase.database().ref();
export const todosRef = databaseRef.child("todos");