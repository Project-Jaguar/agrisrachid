import { Component,ViewChild } from '@angular/core';
//import { MainsearchPage } from '../pages/mainsearch/mainsearch';
import { FullprofilePage,NoteslistPage,AssignmentslistPage } from '../pages/fullprofile/fullprofile';
//import {AssignmentaddPage} from '../pages/assignmentadd/assignmentadd'
import { Platform, MenuController, ToastController,Nav } from 'ionic-angular';
import { HomePage, SubjectContentPage1 , TextbookContentPage, 
  SchoolContentPage,UserlistPage} from '../pages/home/home';
import { ProfilePage } from '../pages/profile/profile';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
//import { LoginPage } from '../pages/login/login';
//import { StartPage } from '../pages/start/start';
import bread  from 'firebase';
import { Storage } from '@ionic/storage';

//declare var cordova:any;
@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  rootPage:string = "StartPage";
  firstName:any;  
  lastName:any;
  currentemail:any;
  admin:any;
  profilepicture:any;
  @ViewChild(Nav) nav: Nav;

  constructor(
    public platform: Platform, 
    public toastCtrl:ToastController,
    public menu: MenuController,
    public toastController: ToastController,
    public Storage: Storage,) {

    platform.ready().then(() => {
     
    bread.initializeApp({
    apiKey: "AIzaSyCsHFtVCUmnt25rKm7e8gueyAnAYTcYOnw",
    authDomain: "almost2donut.firebaseapp.com",
    databaseURL: "https://almost2donut.firebaseio.com",
    projectId: "almost2donut",
    storageBucket: "almost2donut.appspot.com",
    messagingSenderId: "375570306712"
      });
      this.initializeApp()
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      //statusBar.styleDefault();
      //SplashScreen.hide();
    });
  }

  initializeApp() {

   this.platform.ready().then(()=>{
     setTimeout(() => {
  
    }, 1000);

    this.menu.enable(true);
    
    //  AppUpdate.checkAppUpdate("https://firebasestorage.googleapis.com/v0/b/almost2donut.appspot.com/o/AppUpdateFiles%2Fupdates.xml?alt=media&token=826c7c8c-8d7a-4fc8-bb80-895ef72991f0")
    //  BackgroundMode.enable()
    //  BackgroundMode.overrideBackButton()

  })
  //   this.StatusBar.styleDefault();
    
  //   this.StatusBar.backgroundColorByHexString("#00268e");
  //   this.HeaderColor.tint("#00268e")
  }


    openSearch(){
 //this.nav.setRoot("HomePage")
    this.menu.close()
  
    
  }

  push(page:string){
    this.nav.setRoot(page)
    this.menu.close()
  }

  pushAssignments(){

    this.nav.setRoot('AssignmentEnter')
    this.menu.close()
  }
  openNewAssignment(){

//this.nav.push('AssignmentaddPage')
    this.menu.close()

  } 

  pushHome(){

    this.nav.setRoot('HomePage')
    this.menu.close()
  }

  downloadLink(){
    window.open("https://play.google.com/store/apps/details?id=com.anniecorpinc.projectjaguar");
  }
  joinFocusGroup(){
    window.open("https://chat.whatsapp.com/IA1EUYfQrbBE6KtShWE8GT");
  }




  logOut(){
/*
  this.fireAuth.signOut();
    this.menu.close()
    this.menu.enable(false);
  this.nav.setRoot(LoginPage);
  */
  }



ngAfterViewInit(){

   
}
  }
