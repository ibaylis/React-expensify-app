import * as firebase from 'firebase';

const config = {
  apiKey: process.env.FIREBASE_API_KEY,
  authDomain: process.env.FIREBASE_AUTH_DOMAIN,
  databaseURL: process.env.FIREBASE_DATABASE_URL,
  projectId: process.env.FIREBASE_PROJECT_ID,
  storageBucket: process.env.FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.FIREBASE_MESSAGING_SENDER_ID
  };

  firebase.initializeApp(config);

  const database = firebase.database();

  export { firebase, database as default };







// //child_removed - gets fired when one of the entries are removed
//   database.ref('expenses').on('child_removed', (snapshot) => {
//     console.log(snapshot.key, snapshot.val());
//   });


// // child_changed - gets fired when one of the entries are changed
//   database.ref('expenses').on('child_changed', (snapshot) => {
//     console.log(snapshot.key, snapshot.val());
//   });

//   // child_added - gets fired when an entry is added for new and old entries
//   database.ref('expenses').on('child_added', (snapshot) => {
//     console.log(snapshot.key, snapshot.val());
//   });

  // database.ref('expenses').on('value', (snapshot) => {
  //   const expenses = [];

  //   snapshot.forEach((childSnapshot) => {
  //     expenses.push({
  //       id: childSnapshot.key,
  //       ...childSnapshot.val()
  //     });
  //   });

  //   console.log(expenses);
  // });


  // database.ref('expenses')
  //   .once('value')
  //   .then((snapshot) => {
  //     const expenses = [];
  //     //iterate over the items in the expenses array and creating new item in the array for each item

  //     snapshot.forEach((childSnapshot) => {
  //       expenses.push({
  //         id: childSnapshot.key,
  //         ...childSnapshot.val()
  //       });
  //     });

  //     console.log(expenses);
  //   });

  // database.ref('expenses').push({
  //   description: 'Rent',
  //   note: '',
  //   amount: 109500,
  //   createdAt: 9938917873746
  // });

  // database.ref('expenses').push({
  //   description: 'Phone bill',
  //   note: '',
  //   amount: 5900,
  //   createdAt: 9938917873746
  // });

  // database.ref('expenses').push({
  //   description: 'Food',
  //   note: '',
  //   amount: 1200,
  //   createdAt: 9938917873746
  // });

  // database.ref('expenses').push({
  //   description: 'Car Note',
  //   note: '',
  //   amount: 25600,
  //   createdAt: 9938917873746
  // });

  // database.ref().on('value', (snapshot) => {
  //   const val = snapshot.val();
  //   console.log(`${val.name} is a ${val.job.title} at ${val.job.company}`);
  // })



  // const onValueChange = database.ref().on('value', (snapshot) => {
  //   console.log(snapshot.val());
  // }, (e) => {
  //   console.log('Error with data fetching', e)
  // });

  // setTimeout(() => {
  //   database.ref('age').set(39);
  // }, 3500);

  // setTimeout(() => {
  //   database.ref().off(onValueChange);
  // }, 7000);

  // setTimeout(() => {
  //   database.ref('age').set(48);
  // }, 10500);

  // database.ref('location/city')
  //   .once('value')
  //   .then((snapshot) => {
  //     const val = snapshot.val();
  //     console.log(val);
  //   })
  //   .catch((e) => {
  //     console.log('Error fetching data', e)
  //   })

  // database.ref().set({
  //   name: 'Ian Baylis',
  //   age: 34,
  //   stressLevel: 6,
  //   job: {
  //     title: 'Front End Developer',
  //     company: 'Google'
  //   },
  //   location: {
  //       city: 'Philadelphia',
  //       country: 'United States'
  //   }
  // }).then(() => {
  //   console.log('Data is saved');
  // }).catch((e) => {
  //   console.log('This failed.', e);
  // });

  // database.ref().update({
  //   stressLevel: 9,
  //   'job/title': 'Product Developer',
  //   'job/company': 'Amazon',
  //   'location/city': 'Seattle'
  // });

  // database.ref().update({
  //   name: 'Javaun',
  //   age: 23,
  //   job: 'Social Media Manager',
  //   isSingle: null
  // });

  // database.ref()
  //   .remove()
  //   .then(() => {
  //     console.log('Data was removed');
  //   }).catch((e) => {
  //     console.log('Did not remove data', e);
  //   });

  //database.ref('isSingle').set(null);
  // database.ref().set('This is my data.');

  // database.ref('age').set(24);
  // database.ref('location/city').set('New York');

  // database.ref('attributes').set({
  //   height: 73,
  //   weight: 150
  // }).then(() => {
  //   console.log('Second set call worked.');
  // }).catch((e) => {
  //   console.log('Things didnt work for the second error', e);
  // })