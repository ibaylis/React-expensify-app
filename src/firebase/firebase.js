import * as firebase from 'firebase';

const config = {
  apiKey: "AIzaSyD-6mpgxh6BhRTpcuthFr7y7FBqjMNkn5k",
  authDomain: "expensify-react-crud-app-ib.firebaseapp.com",
  databaseURL: "https://expensify-react-crud-app-ib.firebaseio.com",
  projectId: "expensify-react-crud-app-ib",
  storageBucket: "expensify-react-crud-app-ib.appspot.com",
  messagingSenderId: "993221135673"
  };

  firebase.initializeApp(config);

  const database = firebase.database();



  database.ref().on('value', (snapshot) => {
    const val = snapshot.val();
    console.log(`${val.name} is a ${val.job.title} at ${val.job.company}`);
  })



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