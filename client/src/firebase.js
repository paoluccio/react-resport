import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const firebaseConfig = {
  apiKey: 'AIzaSyCtvglglFSOwD10T6oqKJOBEOAsLz-7wVM',
  authDomain: 'react-resport.firebaseapp.com',
  databaseURL: 'https://react-resport.firebaseio.com',
  projectId: 'react-resport',
  storageBucket: 'react-resport.appspot.com',
  messagingSenderId: '559412742340',
  appId: '1:559412742340:web:ce971531c73a295d6f2191',
  measurementId: 'G-P1HNWXZ4SQ'
};

firebase.initializeApp(firebaseConfig);

const googleProvider = new firebase.auth.GoogleAuthProvider();
googleProvider.setCustomParameters({ prompt: 'select_account' });

const auth = firebase.auth();
const firestore = firebase.firestore();

export { googleProvider, auth, firestore };

// Data injection to firestore
// export const injectJSON = async dataSource => {
//   const batch = firestore.batch();

//   for (let gender in dataSource) {
//     const categoriesTitles = [];

//     for (let category in dataSource[gender]) {
//       const categoryCollectionRef = firestore.collection(`shop/${gender}/${category}`);
//       const transformedData = dataSource[gender][category].map(product => ({
//         brand: product.brand,
//         name: product.name.toLowerCase(),
//         price: product.price,
//         image: product.image
//       }));
//       transformedData.forEach(product => {
//         batch.set(categoryCollectionRef.doc(), product);
//       });
//       categoriesTitles.push(category);
//     }

//     const categoriesTitlesDocRef = firestore.doc(`shop/${gender}`);
//     batch.set(categoriesTitlesDocRef, { categories: categoriesTitles })
//   }

//   try {
//     await batch.commit();
//     console.log('Successfully populated firestore!');
//   } catch (error) {
//     console.log('Failed to populate firestore!', error)
//   }
// };