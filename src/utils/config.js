import firebase from 'firebase'

const firebaseConfig = {
  apiKey: "AIzaSyCk3ZOwPi2jOy1dvBC5zwMDqDJED0OvkUk",
  authDomain: "mygithubapp-f0157.firebaseapp.com",
  databaseURL:
    "https://mygithubapp-f0157-default-rtdb.firebaseio.com",
  projectId: "mygithubapp-f0157",
  storageBucket: "mygithubapp-f0157.appspot.com",
  messagingSenderId: "536065779804",
  appId: "1:536065779804:web:aaff80bcaa172c3ecf1e99",
  measurementId: "G-Y6TK20YN2H",
};

var firebaseApp = firebase.initializeApp(firebaseConfig);
export default firebaseApp;