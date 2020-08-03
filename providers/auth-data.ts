import { Injectable } from '@angular/core';
import firebase from 'firebase';
import {
  Events, 
} from 'ionic-angular';
import { Storage } from '@ionic/storage';
import { PJaguarDatabase } from '../providers/p-jaguar-database';
@Injectable()
export class AuthData {
  // Here we declare the variables we'll be using.
  public fireAuth = firebase.auth();
  public userProfile: any;

  constructor( 
    public events:Events,
    public storage:Storage,
    public PJaguarDatabase:PJaguarDatabase) {
    this.fireAuth; // We are creating an auth reference.

    
    // This declares a database reference for the userProfile/ node.
    this.userProfile = firebase.database().ref('/userProfile');
  }

  /**
   * [loginUser We'll take an email and password and log the user into the firebase app]
   * @param  {string} email    [User's email address]
   * @param  {string} password [User's password]
   */
  loginUser(email: string, password: string): any {
    
    let value = this.fireAuth.signInWithEmailAndPassword(email, password)
    //console.log(value)
    return value;

    
  }


  sendEmailVerification(){
        firebase.auth().currentUser.sendEmailVerification().then(()=>{
    })
  }

  /**
   * [signupUser description]
   * This function will take the user's email and password and create a new account on the Firebase app, once it does
   * it's going to log the user in and create a node on userProfile/uid with the user's email address, you can use
   * that node to store the profile information.
   * @param  {string} email    [User's email address]
   * @param  {string} password [User's password]
   */

  getUserProfile(): any {
    let currentUser = firebase.auth().currentUser;
// this.uid = this.currentUser.uid;
    return this.userProfile.child(currentUser.uid);
  }

  createUserProfile(email,userid,firstName,lastName,password){
this.userProfile.child(userid).set({
        email: email.toLowerCase(),
         uid: userid,
         firstName: firstName,
         lastName: lastName,
         passwordCreated:true,
         paidMembershipStatus: 0,
         profilepicture: "https://firebasestorage.googleapis.com/v0/b/project-jaguar-2d794.appspot.com/o/icon.png?alt=media&token=524c3fef-9adc-4e8d-87bc-6a4482f3b031",
         
      });
        this.PJaguarDatabase.createAccount(userid, firstName,lastName,email,password);
        
  }
LoginGoogleUser(){
  var provider = new firebase.auth.GoogleAuthProvider();
  provider.addScope('profile');
  provider.addScope('email');
  firebase.auth().useDeviceLanguage();
  provider.setCustomParameters({
    'login_hint': 'user@example.com'
  });

  return firebase.auth().signInWithPopup(provider)
}

createGoogleProfile(uid, email,firstName,lastName,picture,phoneNumber,isNewUser){

  

if(isNewUser == true){

  this.userProfile.child(uid).update({
    email: email,
     uid: uid,
     firstName:firstName,
     lastName: lastName,
     paidMembershipStatus:0,
     profilepicture:picture,
     phonennumber: phoneNumber || null,
     admin:"false"
  });


}
else{


  this.userProfile.child(uid).update({
     firstName:firstName,
     lastName: lastName,
     profilepicture:picture
  });


}
}

createGooglePJAcademyAccount(uid, firstName, lastName,email,password){

  this.userProfile.child(uid).update({
   passwordCreated:true
 });
  
  this.PJaguarDatabase.createAccount(uid, firstName, lastName,email,password);


}


getFirstWord(str) {
        if (str.indexOf(' ') === -1)
            return str;
        else
            return str.substr(0, str.indexOf(' '));
    }
getLastWord(words) {
    var n = words.split(" ");
    return n[n.length - 1];

}
  signupUser(email: string, password: string,firstName:string,lastName:string): any {
    let profile;
   return this.fireAuth.createUserWithEmailAndPassword(email, password)
  }
  signupAnonUser(): any {
    return this.fireAuth.signInAnonymously().then((newUser) => {
      this.storage.set("notifications",true), this.storage.set("autosave",true); this.storage.set("showtips",true);
    })

  }

  getprofileList():any{
    return this.userProfile;
  }

 getOtherProfilePictureEmail(email):any{
let ProfileList
let profilelist
ProfileList = this.getprofileList().on('value', snapshot=>{
 let rawList = []
  snapshot.forEach(snap => {
          rawList.unshift({
            id: snap.key,
            uid: snap.val().uid,
            email : snap.val().email,
            profilepicture: snap.val().profilepicture
             });
              profilelist = rawList.filter((profile)=>{

                 email == profile.email
              })
        });
      
      })
      return profilelist[0].profilepicture
 }

  /**
   * [resetPassword description]
   * This function will take the user's email address and send a password reset link, then Firebase will handle the
   * email reset part, you won't have to do anything else.
   *
   * @param  {string} email    [User's email address]
   */
  resetPassword(email: string): any {
    return this.fireAuth.sendPasswordResetEmail(email);
  }

  /**
   * This function doesn't take any params, it just logs the current user out of the app.
   */
  logoutUser(): any {
    this.storage.set("signedin",false)
    this.storage.remove("profile")
    this.storage.remove("signedin")
    this.storage.clear()
    return this.fireAuth.signOut();
  }

}
