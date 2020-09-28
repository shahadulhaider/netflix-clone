import Firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

// import { seedDatabase } from '../seed';

const config = {
  apiKey: 'AIzaSyAw1IlopGFnu_SUPC6DYAKyeT57Y-62lQ0',
  authDomain: 'netflix-clone-d1eaf.firebaseapp.com',
  databaseURL: 'https://netflix-clone-d1eaf.firebaseio.com',
  projectId: 'netflix-clone-d1eaf',
  storageBucket: 'netflix-clone-d1eaf.appspot.com',
  messagingSenderId: '436179061943',
  appId: '1:436179061943:web:3cfb3c0a3ab5c40f7ed132',
};

const firebase = Firebase.initializeApp(config);

// seedDatabase(firebase);

export { firebase };
