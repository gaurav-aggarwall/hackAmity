// const email = document.getElementById('email').value;
// const pass = document.getElementById('pass').value;
// const signIn = document.getElementById('sign-in-btn');

// // email.addEventListener(onclick, (evt)=>{
// //     evt.preventDefault();
// //     // const loginDetails = {
// //     //     email: email,
// //     //     pass: pass
// //     // }

// //     // login(loginDetails);
// //     // window.location = 'file:///C:/Users/Gaurav/Desktop/hackAmity/views/main.html';
// //     // window.location.href = "file:///C:/Users/Gaurav/Desktop/hackAmity/views/main.html";
// //     document.location.replace('./main.html');

// // })

// const redirect = (evt) => {
//     evt.preventDefault();
//     window.location.href='./main.html';
// }
// // const login = (loginDetails){
// //     fetch
// // }

// // var config = {
// //     apiKey: "AIzaSyBXjXkbF9sDF5xBgrTWEP9TdLTgZuKWhnk",
// //     authDomain: "hackamity-hackathon.firebaseapp.com",
// //     databaseURL: "https://hackamity-hackathon.firebaseio.com",
// //     projectId: "hackamity-hackathon",
// //     storageBucket: "hackamity-hackathon.appspot.com",
// //     messagingSenderId: "363420249367"
// // };

// // firebase.initializeApp(config);

// // var database = firebase.database();

// // const login = (loginDetails) {
// //     // A post entry.
// //     var postData = {
// //       author: username,
// //       uid: uid,
// //       body: body,
// //       title: title,
// //       starCount: 0,
// //       authorPic: picture
// //     };
  
// //     // Get a key for a new Post.
// //     var newPostKey = firebase.database().ref().child('posts').push().key;
  
// //     // Write the new post's data simultaneously in the posts list and the user's post list.
// //     var updates = {};
// //     updates['/posts/' + newPostKey] = postData;
// //     updates['/user-posts/' + uid + '/' + newPostKey] = postData;
  
// //     return firebase.database().ref().update(updates);
// //   }





// //   var firebase = require(‘firebase’);
// // firebase.initializeApp({
// //  “appName”: “Quiver Two Node Client Demo”,
// //  “serviceAccount”: “./service-account.json”,
// //  “authDomain”: “quiver-two.firebaseapp.com”,
// //  “databaseURL”: “https://quiver-two.firebaseio.com/",
// //  “storageBucket”: “quiver-two.appspot.com”
// // });
// // var ref = firebase.app().database().ref();
// // ref.once(‘value’)
// //  .then(function (snap) {
// //  console.log(‘snap.val()’, snap.val());
// //  });