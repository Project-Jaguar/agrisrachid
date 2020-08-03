import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { IonicStorageModule } from '@ionic/storage'
import { MyApp } from './app.component';
import { HttpModule } from '@angular/http';
import { FormsModule } from '@angular/forms';
//import {SuiModule} from 'ng2-semantic-ui';
//Pages
//import { StartPage } from '../pages/start/start';

//import { AboutPage } from '../pages/about/about';
//import { ContactPage } from '../pages/contact/contact';
//import { TabsPage } from '../pages/tabs/tabs';
//import {AnswerdetailsPage} from '../pages/answerdetails/answerdetails';
//import { IntroPage } from '../pages/intro/intro';
//import { LoginPage } from '../pages/login/login';
//import { ResetPasswordPage } from '../pages/reset-password/reset-password';
//import { SignupPage } from '../pages/signup/signup';

//import { EnterurlPage } from '../pages/enterurl/enterurl';
import { 
//  AssignmentaddPage, 
  Assignmentsubject, Assignmenttextbook,RequestEdittingPage,ChooseType} from '../pages/assignmentadd/assignmentadd';
//import { MainsearchPage } from '../pages/mainsearch/mainsearch';
//import { RequestsPage } from '../pages/requests/requests';
import { JamboreeSignUp} from '../pages/jamboree-sign-up/jamboree-sign-up';
import { 
  //HomePage,
 TextbookContentPage,
 SchoolContentPage,SubjectContentPage1,SchoolProfilePage,fullFileUploadPage,UserlistPage
} from '../pages/home/home';
import { PathLocationStrategy, LocationStrategy } from '@angular/common';
import { 
  //ProfilePage , 
  SchoolChoosePage } from '../pages/profile/profile';
//import { ProfileviewPage } from '../pages/profileview/profileview';
import { TutorCompleteBox} from '../pages/tutor-complete-box/tutor-complete-box';
import { ContactUserWhatsappPage} from '../pages/contact-user-whatsapp/contact-user-whatsapp';

// providers
import { AuthData } from '../providers/auth-data';
import { EventData } from '../providers/event-data';
import { PJaguarDatabase } from '../providers/p-jaguar-database';
import { ProfileData } from '../providers/profile-data';
import { ElasticModule } from 'angular2-elastic';
import {SuiPopupConfig} from "ng2-semantic-ui";
// Custom Components
//import { ParallaxHeader } from '../components/parallax-header/parallax-header';
import { ContentDrawer } from '../components/content-drawer/content-drawer';

//Ionic Natives
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
import {OneSignal} from '@ionic-native/onesignal';
import {HeaderColor } from '@ionic-native/header-color'
import {FileChooser} from '@ionic-native/file-chooser';
import {FileOpener} from '@ionic-native/file-opener';
import {File} from '@ionic-native/file';
import {Deeplinks} from '@ionic-native/deeplinks';
import {Camera} from '@ionic-native/camera';
import {FilePath} from '@ionic-native/file-path';
import {Clipboard} from '@ionic-native/clipboard';
import {Transfer} from "@ionic-native/transfer";
import { BackgroundMode } from '@ionic-native/background-mode';

@NgModule({
  declarations: [
MyApp,
Assignmentsubject, 
ContactUserWhatsappPage,
ChooseType,
Assignmenttextbook,
RequestEdittingPage,
TextbookContentPage, 
SubjectContentPage1, 
 SchoolContentPage,
 SchoolProfilePage,
 fullFileUploadPage,
 UserlistPage,
 SchoolChoosePage,
 TutorCompleteBox,
 JamboreeSignUp,
 //MainsearchPage,
  //ParallaxHeader,
  ContentDrawer,

  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
     IonicStorageModule.forRoot() ,
     
     HttpModule,
     FormsModule,
     ElasticModule,
     
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
Assignmentsubject, 
ContactUserWhatsappPage,
ChooseType,
Assignmenttextbook,
RequestEdittingPage,
TextbookContentPage, 
SubjectContentPage1, 
 SchoolContentPage,
 SchoolProfilePage,
 fullFileUploadPage,
 UserlistPage,
 SchoolChoosePage,
 TutorCompleteBox,
 JamboreeSignUp,
  //MainsearchPage,

  ],
  providers: [
    
    //{provide: LocationStrategy, useClass: PathLocationStrategy},
    AuthData,
    ProfileData,
    EventData,
    PJaguarDatabase,
    //ContentDrawer,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
