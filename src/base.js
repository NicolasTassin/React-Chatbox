import Rebase from 're-base'
import firebase from 'firebase/app'
import 'firebase/database'

const firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyCYEfjVJc47DBtz4FCNqcot5224_PnpYKw",
    authDomain: "chatbox-d5b76.firebaseapp.com",
    databaseURL: "https://chatbox-d5b76.firebaseio.com"
})

const  base = Rebase.createClass(firebase.database())


export {firebaseApp}

export default base