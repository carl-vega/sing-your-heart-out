var config = {
    apiKey: "AIzaSyDiH2pvG4VEthb6CCovkPCrTKFADidHpt8",
    authDomain: "project1-ac9b6.firebaseapp.com",
    databaseURL: "https://project1-ac9b6.firebaseio.com",
    projectId: "project1-ac9b6",
    storageBucket: "project1-ac9b6.appspot.com",
    messagingSenderId: "1036633980762"
};
firebase.initializeApp(config);

let database = firebase.database();

function sortTrendingSearches(){
    database.ref('/trending').orderByChild('counter');
};

