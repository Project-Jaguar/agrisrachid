import { Injectable , ViewChild} from '@angular/core';
import H_TDGbgH from 'firebase';
import {ToastController,AlertController, LoadingController} from 'ionic-angular';
import { PJaguarDatabase } from '../providers/p-jaguar-database';
import { Events } from 'ionic-angular';
import $ from 'jquery'
import 'firebase/firestore';
import { concatAll } from 'rxjs/operator/concatAll';
//import 'rxjs/add/operator/map';
//import {Toast} from 'ionic-native';
//import Wiki from 'wikijs';
declare var window: any;
declare var cordova: any;
var rawList10;
var timeoutcountry;
var a =  5;
var metadata = {
contentType: 'image/png'
};

@Injectable()
export class EventData {
  public eventList: any;
  public typeList:any;
  tutoringList:any;
  crd;
  public country:any;
  public ip:any;
  userNotifications:any;

  public curriculumList:any;//Parent to syllabus
  public syllabusList:any; //Child to curriculum

  public PromoPictureRef:any;
  public RequestPictureRef: any;
CourseId;
public orderList:any;
  public bundleList: any;
  public topicItemList:any;
  public ServicePictureRef:any;
  public PictureRef: any;
  public subjectList:any;
  public requestEnrollmentList:any;
  public inCoursePurchasesList: any;
  public messagesList: any;
  public textbookslist: any;
  public logList:any;
  public sbaListLimit:any;
  public schoolList:any;
  public verifiedCertificationsList:any
  public tagsList:any;
  public onesubject:any;
  courseDataKept:any;
  public affiliateList:any;
  sbaList:any;
  public visitorsList;
  public userProfile: any;
  public TextbookResoursesRef:any;
  public fundingRequestsList :any;
  text: any;
  replieslist:any;
  country_code:any;
  SubjectResoursesRef:any;
  RequestAssignmentRef:any;
  possible: any;
  maincountry:any;
  public clientList:any;
  public averagesList:any;
  public cardList:any;
  public balanceList:any;
  public philosophiesList:any;
  public certificationsList:any;
  public volunteerList:any;
  public accomplishmentsList:any;
  public AffiliatePicturesRef:any;
  public createdStudentsList:any;
  public experienceList:any;
  public playlistCourses:any;
  
  public playlist= H_TDGbgH.firestore().collection("playlist");
  public coursesList= H_TDGbgH.firestore().collection("coursesList");
  public servicesList= H_TDGbgH.firestore().collection("servicesList");
  public modulesList =  H_TDGbgH.firestore().collection("modulesList");
  public topicsList =  H_TDGbgH.firestore().collection("topicsList");
  public membershipList:any;
  public device;
    promoList:any;
number: number;
wikimessage:any;
public companyFinances:any;
  constructor(
    public pj: PJaguarDatabase,
    public toast:ToastController,
    public load: LoadingController,
    public Events:Events,
    public alertCtrl: AlertController) {
      this.verifiedCertificationsList = H_TDGbgH.database().ref('/verifiedCertificationsList');
      this.inCoursePurchasesList = H_TDGbgH.database().ref('/inCoursePurchasesList');
      this.playlistCourses = H_TDGbgH.database().ref('/playlistCourses');
      this.philosophiesList = H_TDGbgH.database().ref('/philosophiesList');
      this.experienceList = H_TDGbgH.database().ref('/experienceList');
      this.certificationsList = H_TDGbgH.database().ref('/certificationsList');
      this.orderList = H_TDGbgH.database().ref('/orderList');
      this.volunteerList = H_TDGbgH.database().ref('/volunteerList');
      this.accomplishmentsList = H_TDGbgH.database().ref('/accomplishmentsList');
      this.createdStudentsList = H_TDGbgH.database().ref('/createdStudentsList');
      this.fundingRequestsList = H_TDGbgH.database().ref('/fundingRequestsList'); 
      this.averagesList = H_TDGbgH.database().ref('/averagesList');
      this.typeList = H_TDGbgH.database().ref('/typeList');
      this.balanceList = H_TDGbgH.database().ref('/balanceList');
      this.cardList = H_TDGbgH.database().ref('/cardList');
     this.requestEnrollmentList=  H_TDGbgH.database().ref('/requestEnrollmentList')
      this.visitorsList = H_TDGbgH.database().ref('/visitorsList')
      this.affiliateList = H_TDGbgH.database().ref('/affiliateList')
      this.membershipList = H_TDGbgH.database().ref('/membershipList');
     this.userNotifications = H_TDGbgH.database().ref('/userNotifications');
     this.messagesList = H_TDGbgH.database().ref('/messagesList');
     this.topicItemList = H_TDGbgH.database().ref('/topicItemList');
     this.curriculumList = H_TDGbgH.database().ref('/curriculumList');
    this.bundleList = H_TDGbgH.database().ref('/bundles');
    this.clientList = H_TDGbgH.database().ref('/clientlist');
    this.tutoringList = H_TDGbgH.database().ref('/tutoringList');
    this.companyFinances = H_TDGbgH.database().ref('/assets');
    this.promoList = H_TDGbgH.database().ref('/promoList');
    this.logList = H_TDGbgH.database().ref('/loglist');
    this.sbaList = H_TDGbgH.database().ref('/sbalist');
    this.RequestPictureRef = H_TDGbgH.storage().ref('/requestpictures/');
    this.ServicePictureRef = H_TDGbgH.storage().ref('/servicepictures/');
    this.RequestAssignmentRef = H_TDGbgH.storage().ref('/requestfiles/');
    this.AffiliatePicturesRef = H_TDGbgH.storage().ref('/affiliatepictures/');
    this.userProfile = H_TDGbgH.database().ref('/userProfile');
    this.PictureRef = H_TDGbgH.storage().ref('/requestpictures/');
    this.subjectList = H_TDGbgH.database().ref('/subjectList');
    this.textbookslist = H_TDGbgH.database().ref('/textbookslist')  ;
    this.schoolList = H_TDGbgH.database().ref('/schoolList');
    this.tagsList = H_TDGbgH.database().ref('/tagsList');
    this.TextbookResoursesRef = H_TDGbgH.storage().ref('/textbookresources/');
    this.SubjectResoursesRef = H_TDGbgH.storage().ref('/subjectresources/');
    this.PromoPictureRef = H_TDGbgH.storage().ref('/promoresources/');
this.getLocation()
this.Events.subscribe("gotlocation", (response) => {
  this.country=response
   })

//timeoutcountry = setInterval(()=> {
  if(this.country == null){

this.getLocation()

  }
//}, 2000);
 


//setTimeout(() => {
  
//clearInterval(timeoutcountry)

//}, 4000);



  }

  getLocation(){

  $.ajax({
		url: "https://geoip-db.com/jsonp",
		jsonpCallback: "callback",
		dataType: "jsonp",
		success: ( location )=> {
			this.crd = location
      this.pj.getLocation(this.crd.latitude, this.crd.longitude)
      this.country_code = this.crd.country_code
      this.maincountry = this.crd.country_name //+ ", "+this.crd.city
      

		}
	});		
  
  }


  
  checkDevice(){
    //Returns if device is mobile or not
let mobile:boolean;
var ua = navigator.userAgent;
var checker = {
iphone: ua.match(/(iPhone|iPod|iPad)/),
blackberry: ua.match(/BlackBerry/),
android: ua.match(/Android/)
};
if (checker.android) {
  mobile =true;
  this.device = "android"
//code for Android
}
else if (checker.iphone) {
//code for iOS device
 mobile =true;
 this.device = "iphone"
}
else if (checker. blackberry) {
  mobile =true;
  this.device = "blackberry"
//code for BlackBerry
}
else{
 mobile=false; 
    this.device = "laptop"
}

   return mobile; 
  }
 makeFileIntoBlob(_imagePath, name, type) {

  // INSTALL PLUGIN - cordova plugin add cordova-plugin-file
  return new Promise((resolve, reject) => {
    window.resolveLocalFileSystemURL(_imagePath, (fileEntry) => {

      fileEntry.file((resFile) => {

        var reader = new FileReader();
        reader.onloadend = (evt: any) => {
          var imgBlob: any = new Blob([evt.target.result], { type: type });
          imgBlob.name = name;
          resolve(imgBlob);
        };

        reader.onerror = (e) => {
         alert('Failed file read: ' + e.toString());
          reject(e);
        };

        reader.readAsArrayBuffer(resFile);
      });
    });
  });
}

getfilename(filestring){

   let file 
   file = filestring.replace(/^.*[\\\/]/, '')
   return file;
}

formatXCD(n:number, currency) {
  
    return currency + " " + n.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,");
}
 makeidCustom(number)
{
    var text = "";
    var possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";

    for( var i=0; i < number; i++ )
        text += possible.charAt(Math.floor(Math.random() * possible.length));

    return text;
}

makeCertificateID(number)
{
    var text = "CERT";
    var possible = "0123456789";

    for( var i=0; i < number; i++ )
        text += possible.charAt(Math.floor(Math.random() * possible.length));

    return text;
}

getfileext(filestring){
  let file = filestring.substr(filestring.lastIndexOf('.') + 1);
   return file;
}


  getBundleSubjects(bundleid){

      return this.bundleList.child(bundleid).child("subjects");
  }

    getTutoringDetails(tutorid){

return this.tutoringList.child(tutorid);
  }

  getTutoringSubjects(tutorid):any{

return this.tutoringList.child(tutorid).child("subjects");
  }


  getBundles(){

return this.bundleList.orderByChild("public").equalTo(true);

}

  getBundlesLimit(num){

return this.bundleList.orderByChild("public").equalTo(true).limitToLast(num);

}

  b64toBlob(b64Data, sliceSize,fileType) {

    sliceSize = sliceSize || 512;

    var byteCharacters = atob(b64Data);
    var byteArrays = [];

    for (var offset = 0; offset < byteCharacters.length; offset += sliceSize) {
      var slice = byteCharacters.slice(offset, offset + sliceSize);

      var byteNumbers = new Array(slice.length);
      for (var i = 0; i < slice.length; i++) {
        byteNumbers[i] = slice.charCodeAt(i);
      }

      var byteArray = new Uint8Array(byteNumbers);

      byteArrays.push(byteArray);
    }
    let blob
    blob = new Blob(byteArrays, { type: fileType });
    // var url = URL.createObjectURL(blob);
    return blob;
  }

//GETTERS
  getSchoolList():any{

    return this.schoolList;

  }

        getRepresentativeTutoringSessions(repid):any{

return this.tutoringList.orderByChild("userid").equalTo(repid);
    }
        getClientTutoringSessions(userid):any{

return this.tutoringList.orderByChild("clientid").equalTo(userid);
    }
            getRepresentativeTutoringSessionsLimit(repid,limit:number):any{

return this.tutoringList.orderByChild("userid").equalTo(repid).limitToLast(limit);
    }


    getClientProperty(cid,property):any{
          let client;
if(cid){
  this.clientList.child(cid).child(property).on('value', snapshot => {
client = snapshot.val();

})
return client;
}
return client;

    }
  getRepClients(uid):any{

    return this.clientList.orderByChild('mainrep').equalTo(uid);
  }

  getTopReps(){

    return this.userProfile.orderByChild("representative").equalTo(true);


  }

  

    getTopExecs(num){

    return this.userProfile.orderByChild("admin").equalTo(true);


  }
      getTopAssociates(){

    return this.userProfile.orderByChild("associate").equalTo(true);


  }
getlimitedcategoryList(number): any {
    return H_TDGbgH.database().ref('/subjectList').orderByChild("time").limitToLast(number);
  }

  getPromotions():any{
 return this.promoList
  }



  addPromo(titletext, subtext, picture):any{

return this.promoList.push({
titletext: titletext,
subtext:subtext
}).then((newPromo)=>{
this.PromoPictureRef.child(newPromo.key).child(this.makeid()+".png")
          .put(picture, metadata).then((savedPicture) => {
              this.sbaList.child(newPromo.key).child('promopic').update(savedPicture.downloadURL);
      })


})
  }
  getsubjectfilesNum(sid): any {
    let num =0;
   H_TDGbgH.database().ref('/subjectList').child(sid).child("files").on('value', snapshot => {
 num = snapshot.numChildren()
   })

return num;
}

 getClientsNum(): any {
    let num =0;
   this.clientList.on('value', snapshot => {
 num = snapshot.numChildren()
   })

return num +3061;
}

getAssignmentNum(): any {
    let num =0;
   this.sbaList.on('value', snapshot => {
 num = snapshot.numChildren()
   })

return num +4003;
}


        getBundleProperty(bundleid,property):any{
          let client;
if(bundleid){
  this.bundleList.child(bundleid).child(property).on('value', snapshot => {
client = snapshot.val();

})
return client;
}
return client;

    }

    getClientInfo(cid):any{

      return this.clientList.child(cid);
    }

        getClientAssignments(clientemail):any{

      return this.sbaList.orderByChild("repclientemail").equalTo(clientemail);
    }

    getClientTutoring(cid):any{

return this.tutoringList.orderByChild("cid").equalTo(cid);
    }




  getfilteredRequests(filter) {

    return this.sbaList.orderByChild('sid').equalTo(filter);
  }



  getUserRequests(user){

 return this.sbaList.orderByChild('userid').equalTo(user);

  }
   getOtherName(userid){


    let name;
    if(userid){
this.userProfile.child(userid).on('value', (snapshot) => {
  name = snapshot.val().firstName +" " + snapshot.val().lastName ;
    
    })
    return name;
    }    

    return name

  }

    getOtherProfileProperty(userid, property1){
 let property
if(userid){
  
  this.userProfile.child(userid).child(property1).on('value', snapshot => {
property = snapshot.val();

})
return property;
}
return property;
 
  
  }

  getTextbooksList(): any {

    return this.textbookslist;
  }

  getFinances(property):any{
    let reprop;
    if(property){
   this.companyFinances.child(property).on('value', snapshot => {
reprop = snapshot.val();

})
return reprop;
}
return reprop;
  }

  getTextbookFiles(tid):any{

 return this.textbookslist.child(tid).child("files");

  }

  getTextbookLinks(tid):any{
return this.textbookslist.child(tid).child("links");

  }

  getTextbookPictures(tid):any{

return this.textbookslist.child(tid).child("pictures");

  }


  getSchoolSCID(scid,property):any{
 let school;
if(scid){
  this.schoolList.child(scid).child(property).on('value', snapshot => {
school = snapshot.val();

})
return school;
}
return school;
 
  }
  getSpecificTextbooksList(subject): any {

    return this.textbookslist.orderByChild('subject').equalTo(subject)  ;
  }

  getsbaList(number): any {
    return H_TDGbgH.database().ref('/sbaList').orderByChild('time').limitToLast(number);
  }

  getAllSBAList():any{

return H_TDGbgH.database().ref('/sbaList');

  }

  validateseen(sbaid,userid):any{
return this.sbaList.child(sbaid).child('seenusers').push({
      userid: userid
    })
  }

  checkseen(sbaid,userid){
  var rawList10 = null;
this.sbaList.child(sbaid).child('seenusers').on('value', (snapshot) => {
    rawList10 = [];
      snapshot.forEach(snap => {
        rawList10.unshift({
          id: snap.key,
          userid: snap.val().userid
        });
      });
    
    });
    
    rawList10 =  rawList10.filter(seen => {
         return  seen.userid == userid
        }); 


 if(rawList10[0]){
return true

 }else{
return false

 }
    }

    addtextbookpicture(tid,blob,title,userid):any{

  return this.TextbookResoursesRef.child(tid).child(title+this.makeid())
          .put(blob, {contentType: 'image/jpeg'}).then((savedPicture) => {
              this.textbookslist.child(tid).child('pictures').push({
               picture: savedPicture.downloadURL,
               name: title,
               userid: userid
          }).then(newfile => {
      this.textbookslist.child(tid).child('pictures').child(newfile.key).child('pid').set(newfile.key);
    });
      })


    }


  getSchoolsbaList(scid): any {
    return H_TDGbgH.database().ref('/sbaList').orderByChild('scid').equalTo(scid);
  }

  getSpecifiedsbaList(number):any{

    return H_TDGbgH.database().ref('/sbaList').orderByChild('time').limitToLast(number);

  }
  getSpecifiedrequestSchoolList(scid,number):any{

    return H_TDGbgH.database().ref('/sbaList').orderByChild('scid').equalTo(scid).limitToLast(number);

  }
  getsbaListmessageed(number): any {
    return H_TDGbgH.database().ref('/sbaList').orderByChild("completed").equalTo("true").limitToLast(number) ;
  }

  getTextbook(id,property):any{
    let textbook;
if(id){
  this.textbookslist.child(id).child(property).on('value', snapshot => {
textbook = snapshot.val();

})
return textbook;
}
return textbook;
  }
 getTextbookEdition(id):any{
let edition;
if(id){
  this.textbookslist.child(id).child('edition').on('value', snapshot => {
edition = snapshot.val();
})
return edition;
}
  }

getTextbookAuthor(id):any{
let author;
if(id){
  this.textbookslist.child(id).child('author').on('value', snapshot => {
author = snapshot.val();
})
return author;
}
  }
  
  getTags(sbaid):any{
 return this.sbaList.child(sbaid).child("tags")
  }

   getTagsExpand(sbaid):any{
let rawList11 = [];
 this.sbaList.child(sbaid).child("tags").on('value', snapshot => {
      snapshot.forEach(snap => {
      rawList11.unshift({
          id: snap.key,
          tag: snap.val().tag,
          });
          return rawList11;
      }); return rawList11;
          }); return rawList11;

        

  }

  

  getSubject(tid):any{
if(tid){
   return this.textbookslist.child(tid).child('subject')
}

  }

  getSubjectSID(sid,property):any{
let subject
if(sid){
  
  this.subjectList.child(sid).child(property).on('value', snapshot => {
subject = snapshot.val();

})
return subject;
}
return subject;
  }
  getRequestPictures(sbaid): any {

   return this.sbaList.child(sbaid).child('sbapictures');

  }

  getRequestFiles(sbaid): any {

   return this.sbaList.child(sbaid).child('sbafiles');

  }

  getSubjectFiles(subjectId): any {

   return this.subjectList.child(subjectId).child('files').orderByChild("sample").equalTo(null);

  }
    getSubjectFilesLimit(subjectId,num): any {

   return this.subjectList.child(subjectId).child('files').orderByChild("sample").equalTo(null).limitToLast(num);

  }


  getrequestDetail(aid): any {
    return this.sbaList.child(aid);
  }

  checkIfAssignmentExists(sbaId) {
    var exists;
  H_TDGbgH.database().ref('/sbalist').child(sbaId).once('value', ((snapshot)=> {
     exists = (snapshot.val() !== null);
    return exists
  }
  )
  );
   return exists
}


  completeAssignment(sbaid):any{

    return this.sbaList.child(sbaid).update({
      completed: true
    })
  }


getRequestSeen(sbaid){
  this.number = 0;
 this.sbaList.child(sbaid).child("numberseen").on('value', (snapshot) => {
    this.number = snapshot.val()
  
    });

      return  this.number
}

  addRequestSeen(sbaid):any{

   this.sbaList.child(sbaid).child('numberseen').transaction((seen) => {
    return  (seen || 0) +1;
    }) 

  }

  getTutoringLogs(tutorid) {

    return this.logList.orderByChild("tutorid").equalTo(tutorid);

  }

  schoolassignmentused(scid):any{

   this.schoolList.child(scid).child('assignments').transaction((number) => {
    return  (number || 0) +1;
    }) 
  }
  schoolassignmentunused(scid):any{
 this.schoolList.child(scid).child('assignments').transaction((number) => {
   if(number >0){
    return  number -1;
 
 }else{
   return number;
 }

  }) 

}




  subjectused(sid):any{

   this.subjectList.child(sid).child('number').transaction((subject) => {
    return  (subject || 0) +1;
    }) 
  }

  subjectunused(sid):any{
 this.subjectList.child(sid).child('number').transaction((subject) => {
    return  subject -1;
    }) 

  }

  subjectfix(subject):any{

    let sid
    if(subject){
this.subjectList.on('value', snapshot => {
      rawList10 = [];
      snapshot.forEach(snap => {
        rawList10.unshift({
          id: snap.key,
          sid: snap.val().sid,
          subject: snap.val().subject
        });
      });
    
    });
    
    rawList10 =  rawList10.filter(sub => {
         return  sub.subject == subject
        }); 
        sid = rawList10[0].sid;
 }
return sid
  }


  getrequestReviews(placeId): any {

    return this.sbaList.child(placeId).child('reviews');

  }

  getAssignmentProperty(sbaid,property1):any{
     let property
if(sbaid){
  
  this.sbaList.child(sbaid).child(property1).on('value', snapshot => {
property = snapshot.val();

})
return property;
}
return property;
 
  
  }


  getrequestReviewsReplies(placeId, commentId): any {

    return this.sbaList.child(placeId).child('reviews').child(commentId).child('replies');

  }

  getUserAssignments(userid):any{
return this.sbaList.orderByChild('userid').equalTo(userid);

  }

    getClientConfirmedAssignments(userid):any{
return this.sbaList.orderByChild('clientid').equalTo(userid);

  }

      getClientEmailAssignments(useremail):any{
return this.sbaList.orderByChild('repclientemail').equalTo(useremail);

  }
    getUserAssignmentsLimit(userid,limit):any{
return this.sbaList.orderByChild('userid').equalTo(userid).limitToLast(limit);

  }

      getAvaliableAssignmentsLimit(number:number):any{
return this.sbaList.orderByChild('assass').equalTo(false).limitToLast(number);
  }

    getAvaliableAssignments():any{
return this.sbaList.orderByChild('assass').equalTo(false);
  }

      getYourAssignments(id):any{
return this.sbaList.orderByChild('assassid').equalTo(id);
  }

  getAssignmentDetails(sbaid,property):any{
    let assignment;
this.sbaList.child(sbaid).child(property).on('value', snapshot => {
assignment = snapshot.val();
return assignment;
})
return assignment;
}

  //ADDERS

  
addTags(tagname):any  {
 return this.tagsList.push({
      time: Math.floor(new Date().getTime()/1000),
      tag: tagname,
      
 }).then(newEvent => {
      this.tagsList.child(newEvent.key).child('tagid').set(newEvent.key);
    });
}
addschool(school, country, state, abbreviation):any{

  return this.schoolList.push({

    school: school,
    country: country,
    state:state,
    abbreviation: abbreviation
  }).then(newEvent => {
      this.schoolList.child(newEvent.key).child('scid').set(newEvent.key);
    });
}
  confirmhomework(sbaid):any{


return this.sbaList.child(sbaid).update({
  completed: 'true'
})
  }

  addtextbook(textbook: string, subject: string, edition:string, author:string, ): any {
    return this.textbookslist.push({
      textbook: textbook,
      subject: subject,
      edition: edition,
      author: author,
    }).then(newEvent => {
      this.textbookslist.child(newEvent.key).child('tid').set(newEvent.key);
    });

  }

  addAssignmentPicture(sbaid, picture:any):any{

    return this.RequestPictureRef.child(sbaid).child(this.makeid()+".png")
          .put(picture, metadata).then((savedPicture) => {
              this.sbaList.child(sbaid).child('sbapictures').push({
               picture: savedPicture.downloadURL
          });
      }),this.updatetime(sbaid)

  }

  addAssignmentFile(sbaid, file:any):any{
    return   this.RequestPictureRef.child(sbaid).child(file.filename)
          .put(file.blob,{contentType:file.type}).then((savedFile) => {
               this.sbaList.child(sbaid).child('sbafiles').child(file.filename).set({
               file: savedFile.downloadURL,
               name: file.filename,
               ext: file.fileext,
               type: file.type,
               time: Math.floor(new Date().getTime()/1000)
          });
      }),this.updatetime(sbaid)
  }

  editAssignment(
    sbaid, 
    sid,
    userid ,
    type,
    status,
    price,
    notes,
    repclientname = null,
    repclientemail = null,
    repclientprice = null
     ):any{
return this.updatetimesubject(sid),  this.sbaList.child(sbaid).update({
      sid: sid,
      time: Math.floor(new Date().getTime()/1000),
      notes: notes,
      price:price,
      type:type,
      status:status,
      repclientname: repclientname,
    repclientemail:repclientemail,
    repclientprice: repclientprice

      //timecreated:Math.floor(new Date().getTime()/1000) 
    })
 
   
  }

    addRequestPicture(sbaid,picture):any{
          this.RequestPictureRef.child(sbaid).child(this.makeid()+".png")
          .put(picture, metadata).then((savedPicture) => {
              this.sbaList.child(sbaid).child('sbapictures').push({
               picture: savedPicture.downloadURL
          });
      })

    }


  createSubject(subject: string, ): any {

    return this.subjectList.push({
      subject: subject
    }).then(newEvent => {
      this.subjectList.child(newEvent.key).child('sid').set(newEvent.key);
    });
  }

 updatetimesubject(sid){

  return  this.subjectList.child(sid).child('time').set(Math.floor(new Date().getTime()/1000))
}

  updatetime(sbaid){

  return  this.sbaList.child(sbaid).child('time').set(Math.floor(new Date().getTime()/1000))
}

  makeid()
{
    var text = "";
    var possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";

    for( var i=0; i < 10; i++ )
        text += possible.charAt(Math.floor(Math.random() * possible.length));

    return text;
}

  makeidnum()
{
    var text = "";
    var possible = "0123456789";

    for( var i=0; i < 10; i++ )
        text += possible.charAt(Math.floor(Math.random() * possible.length));

    return text;
}

urlify(text) {
    var urlRegex = /(https?:\/\/[^\s]+)/g;
    return text.replace(urlRegex, function(url) {
        return '<a href="' + url + '">' + url + '</a>';
    })
}
   getSubjectAssociates(subjectId): any {

    return this.subjectList.child(subjectId).child('associates');

  }
  createRequest(sid:any = null,textbookid:string = null,edition:string=null, pages: string = null, numbers: string = null, notes: string = null,
    userid: any, useremail:any,  scid:any = null,
    picturearray:any = null, tags:any = null,files:any = null
  ): any {
    return this.updatetimesubject(sid), this.schoolassignmentused(scid),this.subjectused(sid), this.sbaList.push({
      sid: sid,
      textbookid:textbookid,
      edition:edition,
      time: Math.floor(new Date().getTime()/1000),
      pages: pages,
      numbers: numbers,
      notes: notes,
      userid: userid,
      useremail: useremail,
      scid:scid,
      completed: false,
      timecreated:Math.floor(new Date().getTime()/1000) 
    }).then(newEvent => {
      this.addposted(userid);
      this.sbaList.child(newEvent.key).child('sbaid').set(newEvent.key);
    
      if (picturearray) {
      picturearray.forEach(snap => {
          this.RequestPictureRef.child(newEvent.key).child(this.makeid()+".png")
          .put(snap, metadata).then((savedPicture) => {
              this.sbaList.child(newEvent.key).child('homeworkpictures').push({
               picture: savedPicture.downloadURL
          });
      })
      })
    } if(tags){
           tags.forEach(snap => {
          this.sbaList.child(newEvent.key).child('tags').push({          
           tag: snap

        })
      })
        }if(files){
           files.forEach(snap => {
          this.RequestPictureRef.child(newEvent.key).child(snap.filename)
          .put(snap.blob,{contentType:snap.type}).then((savedFile) => {
              this.sbaList.child(newEvent.key).child('homeworkfiles').push({
               file: savedFile.downloadURL,
               name: snap.filename,
               ext: snap.fileext,
               type: snap.type
          });
      })
      })
         // FILE CODE 

        }
    })}


    takeSBA(sbaid,userid,name,email){
       return this.pj.claimSBA(sbaid,name,email),
       this.sbaList.child(sbaid).update({
      assass: true,
      assassid: userid
      
    })
  }
  
  changeSBAPrice(sbaid,price,
  repclientname=null,clientname,
  repclientemail=null,clientemail,
  assignmentlink,type,status,subject){
    return this.pj.changePrice(
      sbaid,price,repclientname,clientname,
  repclientemail,clientemail,assignmentlink,type,
      status,subject),
      this.sbaList.child(sbaid).update({
        price:price
      })
  }

  fixlink(sbaid,clientname,clientemail,type,status,subject){
this.pj.fixLink(sbaid,clientname,clientemail,type,status,subject)

  }

    textbookDetails(tid,id,property):any{
     return this.textbookslist.child(tid).child(property).child(id);

    }

    showtoast(text){

 let toast = this.toast.create({
        message: text,
        duration: 3000
      });
      toast.present();
    

    }

    showload(text:string,time:number){

 let load = this.load.create({
   content:text,
      
        duration: time
      });
      load.present();
    

    }

        showpageload(){

 let load = this.load.create({
   content:"Please wait...",
   dismissOnPageChange:true
      
      });
      load.present();
    

    }

    showAlert(toptext,lefttext,righttext) {
    let confirm = this.alertCtrl.create({
      title: "Is this okay?",
      message: toptext,
      buttons: [
        {
          text: lefttext,
          handler: () => {
           
          }
        },
        {
          text: righttext,
          handler: () => {
        
          }
        }
      ]
    });
    confirm.present();
  }
      veryCustomShowAlert(title,toptext,lefttext,righttext) {
    let confirm = this.alertCtrl.create({
      title: title,
      message: toptext,
      buttons: [
        {
          text: lefttext,
          handler: () => {
           
          }
        },
        {
          text: righttext,
          handler: () => {
        
          }
        }
      ]
    });
    confirm.present();
  }

    addtextbookfile(pdfblob, textbookid, filename,mimetype,userid):any{

         this.showtoast("Adding file "+filename)
 return  this.TextbookResoursesRef.child(textbookid).child(filename)
          .put(pdfblob,{contentType: mimetype}).then((savedfile) => {
             this.textbookslist.child(textbookid).child("files").push({
               file: savedfile.downloadURL,
               name: filename,
               time:  Math.floor(new Date().getTime()/1000),
               userid: userid,
               fileext: this.getfileext(filename),
               mimetype: mimetype
          }).then(newfile => {
      this.textbookslist.child(textbookid).child('files').child(newfile.key).child('fid').set(newfile.key);
    });
      })
    }

    addAssignmentRequest(id, files = []){
 let filedone;
if(files){

           files.forEach(snap => {
               var reader = new FileReader();
        reader.onload = ((theFile)=>{
          var fileName = snap.name;

          
          return function(e){
          
            console.log(fileName);
            console.log(e.target.result);
          };

          
        })(snap);
        reader.onloadend = ((theFile: any)=>{
         if(snap.type == "image/jpeg" || snap.type == "image/jpg" || snap.type == "image/png"){
          var fileBlob: any = new Blob([theFile.target.result], { type: snap.type });
          fileBlob.name = snap.name;
         
                 this.RequestAssignmentRef.child(id).child(snap.name)
          .put(fileBlob,{contentType:snap.type}).then((savedFile) => {
              this.sbaList.child(id).child("sbapictures").push({
               picture: savedFile.downloadURL,
               name: snap.name,
               type: snap.type,
          time: Math.floor(new Date().getTime() / 1000)
          });
        })
          }else{
 var fileBlob: any = new Blob([theFile.target.result], { type: snap.type });
          fileBlob.name = snap.name;
         
                 this.RequestAssignmentRef.child(id).child(snap.name)
          .put(fileBlob,{contentType:snap.type}).then((savedFile) => {
              this.sbaList.child(id).child("sbafiles").push({
               file: savedFile.downloadURL,
               name: snap.name,
               type: snap.type,
                time: Math.floor(new Date().getTime() / 1000)
          });
        })

          }
        return function(e){
            console.log(e.target.result);
          }; 
       })
        filedone = reader.readAsArrayBuffer(snap);

        })
}
    }

        addmultipletextbookfile(textbookid,userid,files=[]):any{

         this.showtoast("Adding files, please wait...")
    files.forEach(snap => {
       this.TextbookResoursesRef.child(textbookid).child(snap.filename)
          .put(snap.pdfblob,{contentType: snap.type}).then((savedfile) => {
             this.textbookslist.child(textbookid).child("files").push({
               file: savedfile.downloadURL,
               name: snap.filename,
               time:  Math.floor(new Date().getTime()/1000),
               userid: userid,
               fileext: this.getfileext(snap.filename),
               mimetype: snap.type
          }).then(newfile => {
      this.textbookslist.child(textbookid).child('files').child(newfile.key).child('fid').set(newfile.key);
    });
      })
    })
    }

   

      addsubjectfile(blob, subjectid, filename,type,userid):any{
           this.showtoast("Adding file "+filename)
 return  this.SubjectResoursesRef.child(subjectid).child(filename)
          .put(blob,{contentType: type}).then((savedfile) => {
             this.subjectList.child(subjectid).child("files").push({
               file: savedfile.downloadURL,
               name: filename,
               time:  Math.floor(new Date().getTime()/1000),
               userid: userid,
               fileext: this.getfileext(filename),
               type: type
          }).then(newfile => {
      this.textbookslist.child(subjectid).child('files').child(newfile.key).child('fid').set(newfile.key);
    });
      })
    }


          addmultiplesubjectfile(subjectid,userid,files=[]):any{
           this.showtoast("Adding files, please wait...")
   files.forEach(snap => {
  this.SubjectResoursesRef.child(subjectid).child(snap.filename)
          .put(snap.blob,{contentType: snap.type}).then((savedfile) => {
             this.subjectList.child(subjectid).child("files").push({
               file: savedfile.downloadURL,
               name: snap.filename,
               time:  Math.floor(new Date().getTime()/1000),
               userid: userid,
               fileext: this.getfileext(snap.filename),
               type: snap.type
          }).then(newfile => {
      this.textbookslist.child(subjectid).child('files').child(newfile.key).child('fid').set(newfile.key);
    });
      })

   })
    }

    addtextbookurl(url,title, textbookid,userid,comment?,):any{
             this.showtoast("Added link for "+title)
      return this.textbookslist.child(textbookid).child("links").push({
               url: url,
               name:title,
               time:  Math.floor(new Date().getTime()/1000),
               userid: userid,
               comment:comment
          }).then(newfile => {
      this.textbookslist.child(textbookid).child('links').child(newfile.key).child('urlid').set(newfile.key);
    });
    }
  addreview(review, placeId, email, uid, date): any {
    return this.sbaList.child(placeId).child('reviews').push({
      review: review,
      email: email,
      uid: uid,
      date: date
    }).then(newReview => {
      this.sbaList.child(placeId).child('reviews').child(newReview.key).child('id').set(newReview.key);
    });
  }

  addreviewReply(reply, placeId, commentId): any {
    return this.sbaList.child(placeId).child('reviews').child(commentId).child('replies').push({
      reply: reply
    }).then(newReply => {
      this.sbaList.child(placeId).child('reviews').child(commentId).child('replies').child(newReply.key).child('reid').set(newReply.key);
    });
  }

  editRequestpicture(placeId, placepicture = null): any {
    {
      this.sbaList.child(placeId)
      if (placepicture != null) {
        this.PictureRef.child(placeId).child('picture.png')
          .put(placepicture).then((savedPicture) => {
            this.sbaList.child(placeId).child('placePicture')
              .set(savedPicture.downloadURL);
          });
      }
    };
  }


  //DELETERS [IMPORTANT]


deleteSubject(subjectid){
return this.subjectList.child(subjectid).remove();


}
deleteSchool(schoolid){
return this.schoolList.child(schoolid).remove();

}

//REQUESTS


/////////////////////////////

deleteTextbook(textbookid){
 return this.textbookslist.child(textbookid).remove(),
 this.showtoast("Deleted Textbook")

}


 deleteSBAFile(sbaid, filename):any{

return this.RequestPictureRef.child(sbaid).child(filename).delete(),
this.showtoast("Deleted "+filename),
this.sbaList.child(sbaid).child('sbafiles').child(filename).remove()


  }

 deletetextbookfile(textbookid,fileid, filename){
 this.textbookslist.child(textbookid).child('files').child(fileid).remove()
   this.TextbookResoursesRef.child(textbookid).child(filename).delete()

   this.showtoast("Deleted "+filename)
    }

    deletesubjectfile(subjectid,fileid,filename){
this.subjectList.child(subjectid).child('files').child(fileid).remove()
     this.SubjectResoursesRef.child(subjectid).child(filename).delete()
     this.showtoast("Deleted "+filename)
    }



//PAYMENT CODE

  logPayment(amount:number,userid,type,sbaid, fromname,comments?){
let id = this.makeidnum()
return this.logList.child(id).set({
  amount:amount,
   time:  Math.floor(new Date().getTime()/1000),
   userid: userid,
   type:type,
   comments:comments || null,
   sbaid:sbaid,
   fromname: fromname || null,
   valid: false,

}).then(()=>{

  if(type == 'Representative > Executive'){
   this.companyFinances.child("profit").transaction((profit) => {
    return profit +=amount
  })
}
  if(type == 'Executive > Associate'){
   this.companyFinances.child("profit").transaction((profit) => {
    return  profit-amount
  })
     this.companyFinances.child("potentialprofit").transaction((profit) => {
    return  profit -amount
  })
}
this.logList.child(id).child("tid").set(id)
})

  }


  getAllPayments(){
return this.logList;
 
  }

  makeValid(tid){
    return this.logList.child(tid).child("valid").set(true)
  }

 
  timeSince(date) {

    var seconds = Math.floor(((new Date().getTime() / 1000) - date))

    var interval;

    interval = Math.floor(seconds / 31536000);
    if (interval > 1) {
      return interval + " years ago";
    }
    interval = Math.floor(seconds / 31536000);
    if (interval == 1) {
      return "a year ago";
    }

    interval = Math.floor(seconds / 2592000);
    if (interval > 1) {
      return interval + " months ago";
    }

    interval = Math.floor(seconds / 2592000);
    if (interval == 1) {
      return "a month ago";
    }

    interval = Math.floor(seconds / 86400);
    if (interval > 1) {
      return interval + " days ago";
    }
    interval = Math.floor(seconds / 86400);
    if (interval == 1) {
      return "a day ago";
    }
    interval = Math.floor(seconds / 3600);
    if (interval > 1) {
      return interval + " hours ago";
    }
    interval = Math.floor(seconds / 3600);
    if (interval == 1) {
      return "an hour ago";
    }
    interval = Math.floor(seconds / 60);
    if (interval > 1) {
      return interval + " minutes ago";
    }
    interval = Math.floor(seconds / 60);
    if (interval == 1) {
      return "a minute ago";
    }
    return "Just now";
  }


 timeFrom(nowdate,futuredate){
  
  var seconds =  futuredate - nowdate;
var interval;
  
  //YEARS
        if (Math.floor(seconds) == 31536000) {
      return  "a year from now";
    }
    if (Math.floor(seconds) > 31536000) {
      interval = Math.floor(seconds/31536000);
      return interval + " years from now";
    }
  
  
  //MONTHS
    if (Math.floor(seconds) == 2592000) {
      return "a month from now";
    }
    if (Math.floor(seconds) > 2592000) {
      interval = Math.floor(seconds/2592000);
      return interval + " months from now";
    }

  
  
//DAYS
    if (Math.floor(seconds) == 86400) {
      return "a day from now";
    }
    if (Math.floor(seconds) > 86400) {
      interval = Math.floor(seconds/86400);
      return interval + " days from now";
    }
  
  
  //HOURS
    if (Math.floor(seconds) == 3600) {
      return "an hour from now";
    }
    if (Math.floor(seconds) > 3600) {
      interval = Math.floor(seconds/3600);
      return interval + " hours from now";
    } 

  //MINUTES
    if (Math.floor(seconds) == 60) {
      
      return interval + "a minute from now";
    }
  
    if (Math.floor(seconds) > 60) {
      interval = Math.floor(seconds/60);
      return interval + " minutes from now";
    }

}


//TESTING
/*  selectFile(tid, uid) {
    let blob
    FileChooser.open().then((uri) => {
     FilePath.resolveNativePath(uri).then((fileentry) => {
       let filename = this. getfilename(fileentry);
       let fileext = this. getfileext(fileentry);
       alert(fileext +"  |  "+ filename)
       if(fileext == "pdf"){
          this.makeFileIntoBlob(fileentry, fileext,"application/pdf").then((fileblob) => {
          this.addtextbookfile(fileblob,  tid, filename, "application/pdf", uid)
        })
       }
         if(fileext == "docx"){
          this. makeFileIntoBlob(fileentry, fileext,"application/docx").then((fileblob) => {
          this. addtextbookfile(fileblob,  tid, filename, "application/docx", uid)
        })
       } 
         if(fileext == "doc"){
          this. makeFileIntoBlob(fileentry, fileext,"application/doc").then((fileblob) => {
          this. addtextbookfile(fileblob,  tid, filename, "application/doc", uid)
        })
       }
       if(fileext == "epub"){
          this. makeFileIntoBlob(fileentry, fileext,"application/epub").then((fileblob) => {
          this. addtextbookfile(fileblob,  tid, filename, "application/epub", uid)
        })
       }
      
      })
    })
  }*/



// USER RATINGS

/* User ratings consist of 3 things: # of confirmed, number of assignments posted , */

addconfirmed(userid):any{
 this.userProfile.child(userid).child('confirmed').transaction((confirmed) => {
    return  (confirmed || 0) + 1;
    })

}

addposted(userid):any{
this.userProfile.child(userid).child('posted').transaction((posted) => {
    return  (posted || 0) + 1;
    })

}


addBundle(subjects = [], title:string, price,choice=false,choicenum = null,userid=null ){

this.bundleList.push({
  title: title,
  price:price,
  public:true,
  userid:userid,
  choice:choice,
  choicenum:choicenum

}).then((newBundle)=>{
  this.bundleList.child(newBundle.key).child('bundleid').set(newBundle.key)

      if (subjects) {
      subjects.forEach(snap => {
            let timestamp = new Date().getTime()/1000;
          
              this.bundleList.child(newBundle.key).child('subjects').push({
               sid: snap.sid,
               time: timestamp,
               subject: snap.subject
         
      })
      })
    }

})



}







addTutoringSession(
  repuserid,
  syllabus,
  cid,
  subject = null,
  subjectbundleid = null,
  subjectbundlelist = [],
  months, 
  price,
  repclientprice,
  repclientinvoice,
  asssupport,
  ){
    let id = this.makeidCustom(17)

    this.tutoringList.child(id).set({
      userid: repuserid,
      syllabus: syllabus,
      cid:cid,
      tutorid: id,
      asssupport: asssupport,
      time:  Math.floor(new Date().getTime()/1000),
      months: months,
      scid: this.getOtherProfileProperty(repuserid,"scid"),
      //endtime: 
      price:price,
      repclientprice: repclientprice,
      subject:subject,
      subjectbundleid: subjectbundleid,
      claimed: false
    }).then(()=>{
  this.tutoringList.child(id).child('bundleid').set(id)

      if (subjectbundlelist) {
      subjectbundlelist.forEach(snap => {
            let timestamp = new Date().getTime()/1000;
          
              this.tutoringList.child(id).child('subjects').push({
               sid: snap.sid,
               time: timestamp,
               subject: snap.subject
         
      })
      })
    }

})



    this.pj.newTutoringRequest(
      this.getOtherProfileProperty(repuserid,"email"),
      this.getClientProperty(repuserid,"email"),
      this.getOtherProfileProperty(cid,"name"),
      this.getClientProperty(cid,"name"),
      this.getSchoolSCID(this.getOtherProfileProperty(repuserid,"scid"),"school"),
      subject,
      subjectbundleid,
      asssupport,
      price, repclientprice,syllabus,id,repclientinvoice,months)


}


verifyTutoring(userid, verified){



}

  getSubjectCurriculumListNum(sid): any {
    let num = 0;
    this.curriculumList.orderByChild("sid").equalTo(sid).on('value', snapshot => {
      num = snapshot.numChildren()
    })

    return num;
  }

getCurriculumItems(sid){
 return this.curriculumList.orderByChild("sid").equalTo(sid)
}

getTopicDetails(topicid){

return  this.curriculumList.child(topicid)
}

getTopicItems(topicid){


return  this.topicItemList.orderByChild("topicid").equalTo(topicid)


}

  getAssociateSubjectList(userid) {
    return this.userProfile.child(userid).child("associatesubjects");

  }


  //MESSAGES



addAssignmentMessageLike(sbaid,messageid){
   return  this.messagesList.child(sbaid).child(messageid).child('likes').transaction((message) => {
    return  (message || 0) +1;
    })
}

addAssignmentMessageDislike(sbaid,messageid){
   return  this.messagesList.child(sbaid).child(messageid).child('dislikes').transaction((message) => {
    return  (message || 0) +1;
    })
} 

  sendAssignmentMessage(
    sbaid, message: any,  userid: any, pictures:any=null, files:any = null): any {
     var rawList = []
    return this.updatetime(sbaid), 
      this.messagesList.child(sbaid).push({
      message: message,
      userid: userid,
      time: Math.floor(new Date().getTime()/1000)})
      .then((newEvent)=>{
        this.messagesList.child(sbaid).child(newEvent.key).child('messageid').set(newEvent.key)


     this.pj.notifyOfMessage(sbaid,userid,message)



    })
  }


  convertMessageToUpdate(sbaid, messageId,userid):any{
//INCOMPLETE
return this.messagesList.child(sbaid).child(messageId).update({
  confirmed: 'true'
}).then(()=>{
  this.addconfirmed(userid);
})
  }


  getmessageFiles(sbaid,messageId):any{

     return this.messagesList.child(sbaid).child(messageId).child('messagefiles');
  }


  getmessagePictures(sbaid,messageId):any{

     return this.messagesList.child(sbaid).child(messageId).child('messagepictures');
  }

getMessagesnum(sbaid){

  let num = 0;
  if(sbaid){
    this.messagesList.child(sbaid).on('value', snapshot => {
      num = snapshot.numChildren()
    })
}
    return num;


}

  getAssignmentMessageDetail(sbaid,messagesId): any {
    return this.messagesList.child(sbaid).child(messagesId);
  }

deleteAssignmentMessage(sbaid, messageid){
  return this.messagesList.child(sbaid).child(messageid).remove(),
  this.PictureRef.child(sbaid).child('messages').child(messageid).remove(),
this.showtoast("Deleted message")
}


getAssignmentMessages(sbaid){

  return this.messagesList.child(sbaid)
}

  getAssociateSessionList(userid){

  return this.tutoringList.orderByChild("assassid").equalTo(userid);
  }
getUpdatesNum(id){
 let num = 0;
 if(id){
    H_TDGbgH.database().ref('/updatesList').orderByChild("id").equalTo(id).on('value', snapshot => {
      num = snapshot.numChildren()
    })
  }

    return num;
}

////


getAssignmentOrganicMessagesnum(sbaid){

  let num = 0;
  if(sbaid){
    this.messagesList.child(sbaid).orderByChild("confirmed").equalTo(false || null).on('value', snapshot => {
      num = snapshot.numChildren()
    })
}
    return num;


}


notifyUser(userid,message,id:string){
let type;
if(id.length == 10 ){
type = "assignment"

}
if(id.length == 17 ){
type = "session"

}
 return this.userNotifications.child(userid).push({
      userid: userid,
      message:message,
      id: id,
      type: type,
      time: Math.floor(new Date().getTime() / 1000),

    }).then((newNotif)=>{
      this.userNotifications.child(userid).child(newNotif.key).child("notificationid").set(newNotif.key)
      
      
      }), this.userProfile.child(userid).child('notifications').transaction((notifs) => {
      return (notifs || 0) + 1;
    })


}

addMembership(userid){

  return this.membershipList.child(userid).set({
      userid: userid,
      member:true,
      time: Math.floor(new Date().getTime() / 1000),
      timeend:Math.floor(new Date().getTime() / 1000),

    }).then((newMem)=>{
      this.membershipList.child(userid).child("membershipid").set(newMem.key)
      
      
      })
}

getMembership(userid){

return this.membershipList.child(userid)

}


createReferral(userid,urlextension:string){
  let urlext = urlextension.toLowerCase()

 return this.affiliateList.child(urlext).set({
      userid: userid,
      affiliate:true,
      urlextension:urlext,
      affiliatetype: "advertiser",
      time: Math.floor(new Date().getTime() / 1000),
    })
}

getReferral(urlextension:string){
  let urlext = urlextension.toLowerCase()
   return this.affiliateList.child(urlext)
}

addReferralClick(urlextension:string){

  let urlext = urlextension.toLowerCase()
return this.affiliateList.child(urlext).child('clicksForThisMonth').transaction((clicks) => {
      return (clicks || 0) + 1;
    }),this.affiliateList.child(urlext).child('clicksTotal').transaction((clicks) => {
      return (clicks || 0) + 1;
    })
}

/* MODIFY FOR MEMBERSHIPS
  validateMembership(){
    
  this.eventsdata.getMembership(userid).once('value', ((snapshot)=> {
     var exists = (snapshot.val() !== null);
     this.AssignmentExistsCallback( membershipid , exists);
  })
  )
  
}

AssignmentExistsCallback(membershipid, exists) {
  if (exists) {
    this.membershipId = membershipid
    this.membershipData = exists;
  this.nonMember = false;
    
  } else {
  this.nonMember = true;
  }
}

*/

clearUserNotifications(userid){
  this.userNotifications.child(userid).remove()

}

deleteNotification(userid,notificationid){

this.userNotifications.child(userid).child(notificationid).remove()
}

getUserNotifications(userid){

return this.userNotifications.child(userid)

}
deleteAffiliateLink(urlextension){
return this.affiliateList.child(urlextension).remove()

}

saveIP(){
  let IPAddress = this.crd.IPv4.replace(/[.]/g, '_');
  this.visitorsList.child(IPAddress).set({
    IPv4: IPAddress,
    time: Math.floor(new Date().getTime() / 1000),
  })
}

getIPEntry(){
  let ip;
  if(this.crd){
 ip = this.crd.IPv4.replace(/[.]/g, '_');
}return this.visitorsList.child(ip)
}
updateProfileNumber(userid, number):any{
  if(number){
 return this.userProfile.child(userid).update({
      phonenumber: number || null,
    })
  }
}



  getSubjectAssociatesNum(sid): any {
    let num =0;
   H_TDGbgH.database().ref('/subjectList').child(sid).child("associates").on('value', snapshot => {
 num = snapshot.numChildren()
   })

return num;
}



    getSubjectDetails(sid): any {
    return this.subjectList.child(sid)
    

  }

  getSubjectProperty(sid,property1){
  let property
    if (sid) {

      this.subjectList.child(sid).child(property1).on('value', snapshot => {
        property = snapshot.val();

      })
      return property;
    }
    return property;

  }

  getRelatedSubjects(sid){

    return this.subjectList.orderByChild("mainsid").equalTo(sid)
  }


  getcategoryList(): any {
    return this.subjectList;
  }

    getLimitedcategoryList(num): any {
    return this.subjectList.limitToLast(5);
  }

  getInDemandCategoryList():any{

    return this.subjectList.orderByChild("number").startAt(10)
  }



    getAssociateSessionListNum(userid){
let num;
 this.tutoringList.orderByChild("assassid").equalTo(userid).on('value', snapshot => {
 num = snapshot.numChildren()
   })

return num;
  }

        getYourAssignmentsNum(id):any{
          let num;
 this.sbaList.orderByChild('assassid').equalTo(id).on('value', snapshot => {
 num = snapshot.numChildren()
   })

return num;
  }
updateCourseMonthlyPrice(courseid,monthlypricevalue:boolean){

this.coursesList.doc(courseid).update({
        monthlyprice: monthlypricevalue,
})
}


updateCourseFlexibleDuration(courseid,flexibledurationvalue:boolean){

  this.coursesList.doc(courseid).update({
    flexibleduration: flexibledurationvalue,
  })
  }

  
updateCourseFlexiblePrice(courseid,flexiblepricevalue:boolean){

  this.coursesList.doc(courseid).update({
    flexibleprice: flexiblepricevalue,
  })
  }

updateCourse2019(userid,courseid,subject,name){

  this.pj.updateCourse2019(userid,courseid,subject,name)
}
      createCourse(
        name: string,
    description: string,
    userid: any,
    unlisted:boolean,
    typeid,
    maintypeid,
    sid,
    subject,
    signuptype,
    signuptext,
    signuptext1,
    signupurl,
    teachingstyle,
    picture,
    picturearray: any = null,
    budget,
    budgetAmount,
    liveClass:boolean

    ): any {
this.userProfile.child(userid).child("privatetutor").set(true)

     //Push Course to database
  this.coursesList.add({
        name: name,
        searchname: name.toLowerCase(),
        time: Math.floor(new Date().getTime() / 1000),
        description: description,
        sid:sid,
    typeid:typeid,
    maintypeid:maintypeid,
    forBudget:budget,
    budgetAmount:budgetAmount,
        clicks:0,
        liveClass:liveClass,
        picture:picture,
        updated:true,
        signuptype:signuptype||null,
        signuptext:signuptext||null,
        signuptext1:signuptext1 || null,
        signupurl:signupurl||null,
        flexibleduration: false,
        flexibleprice:false,
        userid: userid,
        paymenttype:"online",
        unlisted: unlisted,
        modulenum: 0,
        teachingstyle:teachingstyle||null,
        timecreated: Math.floor(new Date().getTime() / 1000)
      }).then(newEvent => {    
        this.coursesList.doc(newEvent.id).update({
          courseid:newEvent.id
        })
            this.pj.createCourse(userid, newEvent.id, subject,name)
   this.Events.publish("coursecreated",{ 
              courseid: newEvent.id
            })

            // Add the course to the profile as a new course for membership status trackingc
            this.userProfile.child(userid).child('coursesCreated').transaction((amount) => {
              return (amount || 0) + 1;
            })


 
        if (picturearray) {

// FIrst picture in array
//                      this.RequestPictureRef.child(newEvent.id).child("main.png")
//              .put(picturearray[0], metadata).then((savedPicture) => {
//                this.coursesList.doc(newEvent.id).update({
//          picture:savedPicture.downloadURL
//        })
//              })

          picturearray.forEach(snap => {
            let timestamp = new Date().getTime() / 1000;
            this.RequestPictureRef.child(newEvent.id).child(timestamp + ".png")
              .put(snap, metadata).then((savedPicture) => {
                this.coursesList.doc(newEvent.id).collection('pictures').add({
                  picture: savedPicture.downloadURL,
                  time: timestamp
                });
              })
          })
        }
      
      })
  }

    updateCoursePicture(picture: any = null, courseid): any{
    return this.RequestPictureRef.child(courseid).child('mainpicture.png')
       .put(picture, metadata).then((savedPicture) => {
          this.coursesList.doc(courseid).update({
         picture: savedPicture.downloadURL
       });   
       location.reload()
          //this.pj.updateCourse(null, courseid,null, null,savedPicture.downloadURL)
  
      })     
}
incrementCourseModules(courseid){
let num;
   this.coursesList.doc(courseid).get().then((snapshot)=> {
    
     num = (snapshot.data().modulenum || 0 )+1;
     this.coursesList.doc(courseid).update({
       modulenum: num
     })

  })
  
}

decrementCourseModules(courseid){
let num;
   this.coursesList.doc(courseid).get().then((snapshot)=> {
    
     num = snapshot.data().modulenum -1;
     this.coursesList.doc(courseid).update({
       modulenum: num
     })

  })
  
}
 editCourse(
   courseid,
       name: string,
    description: string,
    userid: any,
    unlisted:boolean,
    sid,
    typeid,
    maintypeid,
    signuptype,
    signuptext,
    signuptext1,
    signupurl,
    durationtext,
    durationtext1,
    paymenttype,
    price,
    teachingstyle,
    askForNumber,
    liveClassLink,
    liveClassType,
    liveClassSchedule,
    liveClass:boolean,
    liveClassOnly:boolean,
    groupChatLink,
    groupChatType,
    groupChat:boolean,

    
    personalWelcomeEmail:boolean,
    emailBody,
    includeCustomLink:boolean,
    customLink,
    customButtonText,
    certificateName, certificateDescription, certificateStudyArea, certificateIssuingEntity, certificateIssuingEntityAddress, certificateSigner, certificateSignerPosition
    ): any {

     //Push course to database
  this.coursesList.doc(courseid).update({
        name: name,
        searchname: name.toLowerCase(),
        time: Math.floor(new Date().getTime() / 1000),
        description: description,
        userid: userid,
        sid: sid,
        typeid:typeid,
        personalWelcomeEmail:personalWelcomeEmail || null,
        emailBody:emailBody || null,
        includeCustomLink:includeCustomLink || null,
        customLink:customLink || null,
        customButtonText:customButtonText || null,
        maintypeid: maintypeid,
        unlisted:unlisted,
        askForNumber:askForNumber || false,
        signuptype:signuptype || null,
        signuptext:signuptext || null,
        signuptext1:signuptext1 || null,
        signupurl:signupurl || null,
        durationtext:durationtext || null,
        durationtext1:durationtext1 || null,
        paymenttype:paymenttype || null,
        price:price || null,
        teachingstyle:teachingstyle||null,
    liveClassLink: liveClassLink ||null,
    liveClassType : liveClassType ||null,
    liveClassSchedule: liveClassSchedule ||null,
    liveClass:liveClass || false,
    groupChat:groupChat || null,
    groupChatType:groupChatType || null,
    groupChatLink:groupChatLink || null,
    liveClassOnly:liveClassOnly|| false,
    certificateName:certificateName || null, 
    certificateDescription:certificateDescription || null, 
    certificateStudyArea:certificateStudyArea || null, 
    certificateIssuingEntity:certificateIssuingEntity || null, 
    certificateIssuingEntityAddress:certificateIssuingEntityAddress || null, 
    certificateSigner:certificateSigner || null, 
    certificateSignerPosition:certificateSignerPosition || null
      })
      this.pj.updateCourse(userid, courseid,  this.getSubjectProperty(sid,"subject"),name,null)
    return courseid;
  }


getCourseInfo(courseid){
  return this.coursesList.doc(courseid).get()
}




  getCourseProperty(courseid:string,property1:string){
    let courseProperty
   this.coursesList.doc(courseid).get().then( (snapshot)=> {
    
     var exists = snapshot.exists;
     if(exists){

      courseProperty = snapshot.data()[property1]

      //return courseProperty

     }
  })
     // Return has to be here.
     //This is returning before the previous function is done.

     

     
  return 
    
     
  }


getUserCourses(userid){
  return this.coursesList.where("userid","==",userid).get()
}


getUserCoursesNum(userid){
  
  let size;
 this.coursesList.where("userid","==",userid).get().then(snap => {
    size = snap.size // will return the collection size
 });

 return size;
 
}



// Modules
createModule(
  name: string,
  description: string,
  userid: any,
  sid:any,
  courseid): any {
       this.incrementCourseModules(courseid)  
  
     //Push Course to database
  this.modulesList.add({
        name: name,
        searchname: name.toLowerCase(),
        time: Math.floor(new Date().getTime() / 1000),
        description: description,
        sid:sid,
        userid: userid,
        courseid:courseid,
        official:false,
        timecreated: Math.floor(new Date().getTime() / 1000)
      }).then(newEvent => {    
           
      this.modulesList.doc(newEvent.id).update({
          moduleid:newEvent.id
        })
       
      })
    }


    deleteModule(moduleid,courseid){

      this.modulesList.doc(moduleid).delete()
this.decrementCourseModules(courseid)

      this.getModuleTopics(moduleid).then((querySnapshot) => {
        let obj : any = [];
        querySnapshot.forEach((doc: any) => {
            // Delete Topics
            this.deleteTopic(doc.data().topicid,moduleid)
          
        });
})
this.showtoast("Module deleted")
    }
editModules(
  moduleid,
  name: string,
  description: string,): any {
      
     //Push Course to database
  this.modulesList.doc(moduleid).update({
        name: name,
        searchname: name.toLowerCase(),
        time: Math.floor(new Date().getTime() / 1000),
        description: description,
      })
  
    }


    getCourseModules(courseid){
  return this.modulesList.where("courseid","==",courseid).get()
}


// Topics 

createTopic(
  name: string,
  userid: any,
  resources:string,
  moduleid,courseid): any {
      
     //Push Course to database
  this.topicsList.add({
        name: name,
        searchname: name.toLowerCase(),
        time: Math.floor(new Date().getTime() / 1000),
        resources:resources,
        userid: userid,
        courseid:courseid,
        moduleid:moduleid,
        timecreated: Math.floor(new Date().getTime() / 1000)
      }).then(newEvent => {    
           
        this.topicsList.doc(newEvent.id).update({
          topicid:newEvent.id
        })
        this.incrementModuleTopics(moduleid)  
  
      })
    }


    deleteTopic(topicid,moduleid){

      this.topicsList.doc(topicid).delete()
this.decrementModuleTopics(moduleid)
this.showtoast("Topic deleted")

    }
    deleteCourse(courseid){
this.pj.deleteCourse(courseid)
this.showtoast("Course deleted")
         this.coursesList.doc(courseid).delete()
      this.getCourseModules(courseid).then((querySnapshot) => {
        let obj : any = [];
        querySnapshot.forEach((doc: any) => {
             // Filter out official modules  
          if(doc.data().official == false){
            // Delete Personal Modules
            this.deleteModule(doc.data().moduleid,courseid)
          }
        });


})
    }
editTopic(
  topicid,
  name: string,
  resources:string,): any {
      
     //Push Course to database
  this.topicsList.doc(topicid).update({
        name: name,
        searchname: name.toLowerCase(),
        time: Math.floor(new Date().getTime() / 1000),
        resources: resources,
      })
  
    }


    getModuleTopics(moduleid){
  return this.topicsList.where("moduleid","==",moduleid).get()
}


    getModuleDetails(moduleid){
  return this.modulesList.doc(moduleid).get()
}

incrementModuleTopics(moduleid){
let num;
   this.modulesList.doc(moduleid).get().then((snapshot)=> {
    
     num = (snapshot.data().topicnum || 0 )+1;
     this.modulesList.doc(moduleid).update({
       topicnum: num
     })

  })
  
}

decrementModuleTopics(moduleid){
let num;
   this.modulesList.doc(moduleid).get().then((snapshot)=> {
    
     num = snapshot.data().topicnum -1;
     this.modulesList.doc(moduleid).update({
       topicnum: num
     })

  })
  
}


clickCourse(courseid){
let num;
   this.coursesList.doc(courseid).get().then((snapshot)=> {
    
     num = (snapshot.data().clicks || 0 )+1;
     this.coursesList.doc(courseid).update({
       clicks: num
     })

  })
  
}
getTopCourses(){
  return this.coursesList.where("unlisted","==",false).orderBy("clicks","desc").limit(6).get()
}

getSubjectCourses(sid){
  return this.coursesList.where("unlisted","==",false).where("sid","==",sid).orderBy("clicks","desc").limit(3).get()
}
getUserPublicCourses(userid){
  return this.coursesList.where("unlisted","==",false).where("userid","==",userid).orderBy("clicks","desc").get()
}



getUserLimitedPublicCourses(userid){
  return this.coursesList.where("unlisted","==",false).where("userid","==",userid).orderBy("clicks","desc").limit(3).get()
}
    updateSubjectPicture(picture: any = null, sid): any{
    return this.SubjectResoursesRef.child(sid).child('mainpicture.png')
       .put(picture, metadata).then((savedPicture) => {
          this.subjectList.child(sid).update({
         picture: savedPicture.downloadURL,
         time: Math.floor(new Date().getTime() / 1000),
       });   
      })     
}


// ENROLLMENTS FOR THIRD PARTY COURSES


requestEnrollment(courseid,courselink, courseverification, coursename, coursedesc,picture, userid,email,phonenumber, price:number, contacttype,name){


let baseprice:number;

baseprice = price
  if(price > 0 && price){
//Paid course - Project Jaguar Representatives would handle the client


this.pj.requestPrivateEnrollment(userid,courseid)

let price1:number
let payingprice:number;

if(baseprice < 180){

price1 = baseprice*0.1;
payingprice = +baseprice + +price1;
}else{

price1 = baseprice*0.09;
payingprice = +baseprice + +price1;
} 

return   this.requestEnrollmentList.child(userid+courseid).set({
  userid:userid,
  courseid:courseid,
  email:email,
  phonenumber:phonenumber || null,
  picture:picture,
  private:true,
  verification: courseverification,
  teacher: false,
  status:"pending",
  contacttype:contacttype,
  address:this.maincountry||null,
  time:  Math.floor(new Date().getTime()/1000),
  courselink:courselink,
  coursename:coursename,
  coursedesc:coursedesc,
  repprofit:Math.trunc(price1),
  price:Math.trunc(baseprice),
  payingprice: Math.trunc(payingprice),
  verified:false,
  claimed:false,
  enrollmentid:userid+courseid,
  repuserid: "SX8zf0tVoocyCJbRHjN4AzyDOss2",
  name: name
  //The claimed child determines what shows in requests and what doesnt. The claimed child is deleted when claimed
})

}else{
//Free course
//Old enrollment for free courses where they have to request from teacher to join first after being on waitlist.
//this.pj.requestEnrollment(userid,courseid)


this.pj.addEnrollment(userid,courseid)
return   this.requestEnrollmentList.child(userid+courseid).set({
  userid:userid,
  courseid:courseid,
  picture:picture,
  teacher: false,
  verification: courseverification,
  email:email,
  contacttype:contacttype,
  //phonenumber:phonenumber,
  private:false,
  address:this.maincountry||null,
  courselink:courselink,
  coursename:coursename,
  coursedesc:coursedesc,
  enrollmentid:userid+courseid ,
  status: "enrolled",
  time:  Math.floor(new Date().getTime()/1000),
  claimed:null

})

}
}
declineRequestEnrollment(courseid,userid){
 return   this.requestEnrollmentList.child(userid+courseid).remove()
}



addEnrollment(courseid,userid){

  this.requestEnrollmentList.child(userid+courseid).update({
  status: "enrolled",
  time:  Math.floor(new Date().getTime()/1000),
  claimed:null

}).then((newEvent)=>{
  
  
  this.pj.addEnrollment(userid,courseid)
});

}

deleteEnrollment(courseid,userid){
  this.pj.deleteEnrollment(userid,courseid)
 return  this.requestEnrollmentList.child(userid+courseid).remove()
  

}

getUserEnrollments(userid){
 return  this.requestEnrollmentList.orderByChild("userid").equalTo(userid);
}

getUserEnrollment(userid, courseid){
 return this.requestEnrollmentList.child(userid+courseid);
}
getEnrollmentRequests(courseid){
  return   this.requestEnrollmentList.orderByChild("courseid").equalTo(courseid)
}



getEnrollmentRequestsNum(courseid){
  let num;
   this.requestEnrollmentList.orderByChild("courseid").equalTo(courseid).on('value', snapshot => {
    num = snapshot.numChildren()
      })
   return num;
   
}


getUserEnrollmentRequest(userid,courseid){
  return   this.requestEnrollmentList.child(userid+courseid);
}

getCreatedStudentAccounts(courseid){

  return this.createdStudentsList.orderByChild("courseid").equalTo(courseid)
}


createStudentAccount(name,courseid){
return this.createdStudentsList.push({
name:name,
courseid:courseid,
}).then((newEvent)=>{
this.createdStudentsList.child(newEvent.key).child('studentid').set(newEvent.key)
let email = newEvent.key+"@pjaguar.com"
this.createdStudentsList.child(newEvent.key).child('email').set(email)

this.pj.createEnrolledStudent(name,email,newEvent.key,courseid)
})
}

recreateStudentAccount(name,email,studentid,courseid){

this.pj.createEnrolledStudent(name,email,studentid,courseid)
}

deleteStudentAccount(studentid){
return this.createdStudentsList.child(studentid).remove()
.then((newEvent)=>{
  this.pj.deleteEnrolledStudent(studentid)
})
}
editStudentAccount(studentid,name){
return this.createdStudentsList.child(studentid).child("name").set(name)
.then((newEvent)=>{
  this.pj.editEnrolledStudent(studentid,name)
})
}

getTypesListMain(){
  return this.typeList.orderByChild("maintypeid").equalTo(null)
}


getSubTypesListMain(maintypeid:string){
  //console.log("ID: ",maintypeid)
  return this.typeList.orderByChild("maintypeid").equalTo(maintypeid)
  //return this.typeList.orderByChild("maintypeid").equalTo(null)
}



getTypesList(){

  return this.typeList
}

    getTypeDetails(typeid): any {
    return this.typeList.child(typeid)
    

  }

  getTypeProperty(typeid,property1){
  let property
    if (typeid) {

      this.typeList.child(typeid).child(property1).on('value', snapshot => {
        property = snapshot.val();

      })
      return property;
    }
    return property;

  }

getNewCourses(){
  return this.coursesList.where("unlisted","==",false).orderBy("time","desc").limit(10).get()
}

getPopularCourses(){
  return this.coursesList.where("unlisted","==",false).orderBy("clicks","desc").limit(7).get()


}

getSearchCourses(typeid, sid){
  return this.coursesList.where("unlisted","==",false).where("maintypeid","==",typeid).where("sid","==",sid).orderBy("clicks","desc").limit(30).get()
}

getSearchSubjectCourses(sid){
  return this.coursesList.where("unlisted","==",false).where("sid","==",sid).orderBy("clicks","desc").limit(30).get()
}

getSearchTypeCourses(typeid){
  return this.coursesList.where("unlisted","==",false).where("maintypeid","==",typeid).orderBy("clicks","desc").limit(30).get()
}



getFilesByType(sid, typeid){

  return this.subjectList.child(sid).child("files").orderByChild("maintypeid").equalTo(typeid)
}



getFilesBySubject(sid){

  return this.subjectList.child(sid).child("files");
}


getSubjectFilesByTypeNum(sid,typeid){
      let num =0;
   H_TDGbgH.database().ref('/subjectList').child(sid).child("files").orderByChild("maintypeid").equalTo(typeid).on('value', snapshot => {
 num = snapshot.numChildren()
   })
return num;
}


automaticPayment(producttype,productid,userid,){
if(producttype == "assignment"){
return this.sbaList.child(productid).update({
paidonline: true

}).then(()=>{
this.pj.paidForAssignment(productid)

})
}

if(producttype == "courseExtra"){

}

if(producttype == "session"){
return this.tutoringList.child(productid).update({
paidonline: true
  
}).then(()=>{
this.pj.paidForSession(productid)

  
})
}
if(producttype == "enrollment"){
  
this.pj.paidForEnrollment(productid,userid)
  
}
if(producttype =="marketingbudgetcontract"){
  
}
if(producttype =="membership"){
  if(productid=="school"){
    this.userProfile.child(userid).child("paidMembershipStatus").set(2)
  .then((newEvent)=>{
    //
    // Do something else like send an email or move all this to GoogleScript
    //
  })
  }  
  if(productid=="university"){
  this.userProfile.child(userid).child("paidMembershipStatus").set(3)
    .then((newEvent)=>{
      //
      // Do something else like send an email or move all this to GoogleScript
      //
    })
  }
  
}
}

  deleteAssignment(sbaid){
return this.sbaList.child(sbaid).remove()


  }

    deleteTutoring(tutorid){

this.pj.deleteTutoring(tutorid)
this.showtoast("This session will be deleted off our database soon.")
  }


  deleteRequest(sbaid,sid) {
    this.pj.deleteSBA(sbaid,this.getSubjectSID(sid,"subject"),this.getAssignmentProperty(sbaid,"type"),
    (this.getAssignmentProperty(sbaid,"repclientname")||(this.getOtherProfileProperty(this.getAssignmentProperty(sbaid,"userid"),"firstName")+" "+ this.getOtherProfileProperty(this.getAssignmentProperty(sbaid,"userid"),"lastName"))),
    (this.getAssignmentProperty(sbaid,"repclientemail")||(this.getOtherProfileProperty(this.getAssignmentProperty(sbaid,"userid"),"email") )))
    //this.sbaList.child(sbaid).remove();
    this.RequestPictureRef.child(sbaid).delete();
    //this.subjectunused(sid)
  }
  
  getReferralProperty(urlextension,property1){
  let property
    if (urlextension) {

      this.affiliateList.child(urlextension).child(property1).on('value', snapshot => {
        property = snapshot.val();

      })
      return property;
    }
    return property;

  }

  getAverages(){
    return this.averagesList;
  }

    getAnAverage(type){
    return this.averagesList.child(type);
  }


  addReferralMoney(urlextension, amount){
return this.affiliateList.child(urlextension).child('purchasesTotal').transaction((amount) => {
      return (amount || 0) + amount;
    })
}

addReferralClickMoney(urlextension){
return this.affiliateList.child(urlextension).child('purchasesTotal').transaction((amount) => {
      return (amount || 0) + 0.10;
    })
}

addCard(userid, cardtoken){


}

getAffiliateBalance(affiliateext){

          let amount: number;
if(affiliateext){
  this.balanceList.child(affiliateext).child('amount').on('value', snapshot => {
amount = snapshot.val();

})
return amount;
}
return amount;

}


updateAffiliateType(affiliateext:string, affiliatetype,title,paragraph, cta,url){
  let urlext = affiliateext.toLowerCase()
return this.affiliateList.child(urlext).update({
  affiliatetype:affiliatetype,
  cta:cta,
  url:url,
  paragraph:paragraph,
  title:title
})

}

uploadAffiliateLogo(affiliateext:string, logo ){
  let urlext = affiliateext.toLowerCase()
return  this.AffiliatePicturesRef.child(urlext).child('logo.png')
       .put(logo, metadata).then((savedPicture) => {
this.affiliateList.child(urlext).update({
 logo: savedPicture.downloadURL
})

  location.reload();
       })
}

uploadAffiliateBackground(affiliateext:string, background ){
  let urlext = affiliateext.toLowerCase()
 return this.AffiliatePicturesRef.child(urlext).child('background.png')
       .put(background, metadata).then((savedPicture) => {

 this.affiliateList.child(urlext).update({
 background: savedPicture.downloadURL
})
     
  location.reload();
       })

}
addReferralClickToBalance(userid, amount:number){
return this.balanceList.child(userid).child('amount').transaction((amount) => {
      return (amount || 0) + 0.10;
    })
}
subtractFromBalance(userid, amount:number){
return this.balanceList.child(userid).child('amount').transaction((amount) => {
      return (amount || 0) - amount;
    })
}



changeToStudent(courseid,userid){
return this.requestEnrollmentList.child(userid+courseid).update({
teacher: null

}).then(()=>{
this.pj.changeToStudent(userid, courseid)


})
}

changeToTeacher(courseid,userid){
return this.requestEnrollmentList.child(userid+courseid).update({
teacher: true

}).then(()=>{

this.pj.changeToTeacher(userid, courseid)
})
}


changeEnrollmentNumber(courseid,userid, phonenumber){
  return this.requestEnrollmentList.child(userid+courseid).update({
    phonenumber: phonenumber
  
  })
}

//
//
//
//
//
//
//
//
//  TEACHERS PHILOSOPHIES, AWARDS & ACCOMPLISHMENTS, CERTIFICATES & DEGREES, EXPERIENCE, AND VOLUNTEER WORK
//
//
//
//
//
//
//

getUserCertificates(userid){

return this.certificationsList.orderByChild("userid").equalTo(userid)
}

addCertificate(userid, institution, grade, concentration, certificate, startdate, enddate){
  return this.certificationsList.push({
  userid:userid,
  institution:institution,
  grade:grade,
  certificate:certificate,
  concentration:concentration,
  startdate:startdate || "",
  enddate:enddate || "Ongoing",
  }).then(newcertificate => {
    this.certificationsList.child(newcertificate.key).child('certificateid').set(newcertificate.key);
  });
  }
  
  
  updateCertificate(certificateid, institution, grade, concentration, certificate, startdate, enddate){
    return this.certificationsList.child(certificateid).update({
    institution:institution,
    grade:grade,
    certificate:certificate,
    concentration:concentration,
    startdate:startdate || "",
    enddate:enddate || "Ongoing",
    }).then(newcertificate => {
      this.showtoast("Certificate Updated")
    });
    }



    deleteCertificate(certificateid){
      return this.certificationsList.child(certificateid).remove();
      }





            
      getCertificate(certificateid){
        return this.certificationsList.child(certificateid)

      }

      getUserVolunteerWork(userid){

        return this.volunteerList.orderByChild("userid").equalTo(userid)
        }
        
    addVolunteer(userid, activity, company, description, startdate, enddate){
      return this.volunteerList.push({
      userid:userid,
      activity:activity,
      company:company,
      description:description,
      startdate:startdate || "",
      enddate:enddate || "Ongoing"
      }).then(newvol => {
        this.volunteerList.child(newvol.key).child('volunteerid').set(newvol.key);
      });
      }
      

      updateVolunteer(volunteerid, activity, company, description, startdate, enddate){
        return this.volunteerList.child(volunteerid).update({
        activity:activity,
        company:company,
        description:description,
        startdate:startdate || "",
        enddate:enddate || "Ongoing"
        }).then(newvol => {
          this.showtoast("Certificate Updated")
           
        });
        }
 


    deleteVolunteer(volunteerid){
      return this.volunteerList.child(volunteerid).remove();
      }




            
      getVolunteer(volunteerid){
        return this.volunteerList.child(volunteerid)

      }
      getUserExperience(userid){

            return this.experienceList.orderByChild("userid").equalTo(userid)
        }
        
            
        getExperienceInfo(experienceid){
          return this.experienceList.child(experienceid)

        }
    
        addExperience(userid, position, company, description, startdate, enddate){
          return this.experienceList.push({
          userid:userid,
          position:position,
          company:company,
          description:description,
          startdate:startdate || "",
          enddate:enddate || "Ongoing"
          }).then(newexp => {
            this.experienceList.child(newexp.key).child('experienceid').set(newexp.key);
          });
          }
 

          updateExperience(experienceid, position, company, description, startdate, enddate){
            return this.experienceList.child(experienceid).update({ 
            position:position,
            company:company,
            description:description,
            startdate:startdate || "",
            enddate:enddate || "Ongoing"
            }).then(newexp => {
              this.showtoast("Experience Updated")
            });
            }
 


            deleteExperience(experienceid){
              return this.experienceList.child(experienceid).remove();
              }
        

              getUserAccomplishments(userid){

                return this.accomplishmentsList.orderByChild("userid").equalTo(userid)
            }
            
            getAccomplishment(accomplishmentid){
              return this.accomplishmentsList.child(accomplishmentid)

            }
        
            addAccomplishment(userid, awardname, company, description, date){
              return this.accomplishmentsList.push({
                userid:userid, 
              awardname:awardname,
              company:company,
              description:description,
              date:date,
              }).then(newacc => {
                this.accomplishmentsList.child(newacc.key).child('accomplishmentid').set(newacc.key);
              });
              }
                   

            updateAccomplishment(accomplishmentid, awardname, company, description, date){
              return this.accomplishmentsList.child(accomplishmentid).update({ 
              awardname:awardname,
              company:company,
              description:description,
              date:date,
              }).then(newexp => {
                this.showtoast("Award Updated")
              });
              }
  

              deleteAccomplishment(accomplishmentid){
                return this.accomplishmentsList.child(accomplishmentid).remove();
                }
          

                getUserPhilosophy(userid){

                  return this.philosophiesList.child(userid)
              }        
             
        
                addPhilosophy(userid, philosophy){
                  return this.philosophiesList.child(userid).set({
                    userid:userid, 
                    philosophy:philosophy,
                  time: Math.floor(new Date().getTime()/1000)
                  })
                  }
                       
    
                updatePhilosophy(userid, philosophy){
                  return this.philosophiesList.child(userid).update({
                    philosophy:philosophy,
                  time:Math.floor(new Date().getTime()/1000),
                  }).then(newexp => {
                    this.showtoast("Philosophy Updated")
                  });
                  }
      
    
                  deletePhilosophy(userid){
                    return this.philosophiesList.child(userid).remove();
                    }
                       
         
                    


                    freeStudentEnroll(email,name,phone,parentEmail,parentName,parentPhone,countrycode,courseid,coursename){
                      
                      this.pj.freeStudentEnroll(email,name,phone,parentEmail,parentName,parentPhone,countrycode,courseid,coursename)
                    }


                    sendFundingRequest(coursename, subject,teachingMethod, funding,email,name,phone){
                      let id;
                      return this.fundingRequestsList.push({
                        email:email, 
                        name:name,
                        phone:phone,
                        teachingMethod:teachingMethod,
                        coursename:coursename,
                        subject:subject,
                        funding:funding || null,  
                        contractmade:false,
                        contractagreed:false, 
                        budgetsent:false,                        
                      time: Math.floor(new Date().getTime()/1000)
                      }).then((newacc) => { 
                        this.fundingRequestsList.child(newacc.key).child('fundingrequestid').set(newacc.key);
                        this.Events.publish("fundingrequestsent",{
                          fundingrequestid: newacc.key
                        })
                        this.pj.fundingRequest(coursename, subject,funding,email,name,phone,newacc.key)
                      });
                      
                    }

                    getFundingRequest(fundingrequestid){
                      return this.fundingRequestsList.child(fundingrequestid);
                    }

                    editFundingRequest(fundingrequestid,coursename, subject,funding,email,name,phone,address,startdate, paydate, marketingbudget, enddate, investment,
                      signingtimestamp, contractmade:boolean, contractagreed:boolean,budgetsent:boolean){

                      return this.fundingRequestsList.child(fundingrequestid).update({
                        email:email, 
                        name:name,
                        phone:phone,
                        startdate:startdate,
                        paydate:paydate,
                        address:address,
                        marketingbudget:marketingbudget,
                        enddate:enddate,
                        investment:investment,
                        coursename:coursename,
                        subject:subject,
                        funding:funding || null,
                        contractmade:contractmade,
                        contractagreed:contractagreed, 
                        budgetsent:budgetsent,  
                        signingtimestamp:signingtimestamp,                  
                      time: Math.floor(new Date().getTime()/1000)
                      })

                    }
              

                    editExtraFundingRequestData(fundingrequestid,property,property1){
                      this.fundingRequestsList.child(fundingrequestid).update({
                        [property]: property1
                      })    
                    }


                    
                    deleteFundingRequest(fundingrequestid){


                      this.fundingRequestsList.child(fundingrequestid).remove()

                    }





  editExtraCourseData(courseid,property,property1){
    this.coursesList.doc(courseid).update({
      [property]: property1
    })    
  }





  // FOR PREMIUM MEMBERS AND ASSOCIATES


  
  addSubjectAss(sid) {

    this.subjectList.child(sid).child('associatesnum').transaction((ass) => {
      return (ass || 0) + 1;
    })


  }

  subtractSubjectAss(sid) {
    this.subjectList.child(sid).child('associatesnum').transaction((number) => {
      if (number > 0) {
        return number - 1;

      } else {
        return number;
      }

    })
  }

  addAssSubject(userid, sid, subject) {
    this.userProfile.child(userid).child("associatesubjects").child(sid).set({
      time: Math.floor(new Date().getTime() / 1000),
      sid: sid,
      subject: subject
    })
    this.addSubjectAss(sid)

    this.subjectList.child(sid).child("associates").child(userid).update({
      time: Math.floor(new Date().getTime() / 1000),
      userid: userid,
      osuserid: this.getOtherProfileProperty(userid, "osuserid"),
      osusertoken: this.getOtherProfileProperty(userid, "osusertoken")
    })
  }
  deleteAssSubject(userid, sid) {
    this.userProfile.child(userid).child("associatesubjects").child(sid).remove()
    this.subtractSubjectAss(sid)
    this.subjectList.child(sid).child("associates").child(userid).remove()
  }





  

  getBusinessAffiliateList(): any {
    return this.affiliateList.orderByChild('affiliatetype').equalTo('business');
  }

 

  getHomepageBusinessAffiliateList(): any {
    return this.affiliateList.orderByChild('affiliatetype').equalTo('business').limitToLast(3);
  }


  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //          PLAYLIST AND COURSES
  //
  //
  //
  //
  //
  //
  //
  //

  getFeaturedPlaylists():any{

    return this.playlist.where("featured","==",true).get()
   
  }

  getUserPlaylists(userid):any{
    return this.playlist.where("userid","==",userid).get()
   

  }
  getPlaylistCourses(playlistid):any{

    return this.playlistCourses.child(playlistid).limitToLast(3)

  }


  getAllPlaylistCourses(playlistid):any{

    return this.playlistCourses.child(playlistid)

  }
  getAllPlaylists(){

    return this.playlist.get()
   
  }


  getAffiliatePlaylists(urlextension){

    return this.playlist.where(urlextension,"==",true).get()
   

  }

  getPlaylist(playlistid){
   return this.playlist.doc(playlistid).get()
  }


  
  deletePlaylistCourse(playlistid,courseid){

return this.playlistCourses.child(playlistid).child(courseid).remove()
  }

  addPlaylistCourse(playlistid, courseid){
    this.playlistCourses.child(playlistid).child(courseid).set({

      courseid:courseid,
      time: Math.floor(new Date().getTime() / 1000),

    })
  }


  addPlaylist(name,title,icon,description,userid){

      //Push Playlist to database
      this.playlist.add({
        name: name,
        title:title,
        icon:icon +" icon",
        searchname: name.toLowerCase(),
        time: Math.floor(new Date().getTime() / 1000),
        description: description,
        featured:false,
        userid: userid
      }).then(newEvent => {    
           
      this.playlist.doc(newEvent.id).update({
        playlistid:newEvent.id
        })
       
      })
  }


  editPlaylist(name,title,icon,description,playlistid){

    //Push Playlist to database
    this.playlist.doc(playlistid).update({
      name: name,
      title:title,
      icon:icon,
      searchname: name.toLowerCase(),
      time: Math.floor(new Date().getTime() / 1000),
      description: description
    })
     
  
}




addPlaylistViewerAffiliate(playlistid, urlextension){
if(urlextension != "name" &&
urlextension != "title" &&
urlextension != "icon" &&
urlextension != "time" &&
urlextension != "searchname" &&
urlextension != "description" &&
urlextension != "userid" &&
urlextension != "featured")
  //Push Playlist to database
  this.playlist.doc(playlistid).update({
    [urlextension]: true,
    time: Math.floor(new Date().getTime() / 1000),
    
  })
   

}



deletePlaylistAffiliate(playlistid, urlextension){
  if(urlextension != "name" &&
  urlextension != "title" &&
  urlextension != "icon" &&
  urlextension != "time" &&
  urlextension != "searchname" &&
  urlextension != "description" &&
  urlextension != "userid" &&
  urlextension != "featured")
    //Push Playlist to database
    this.playlist.doc(playlistid).update({
      [urlextension]: null,
      
    })
     
  
  }

  deletePlaylist(playlistid){
this.playlistCourses.child(playlistid).remove()
return this.playlist.doc(playlistid).delete()

  }



//////////

//
//
//
//
//
//
//
//
//
//
//             BALANCES AND FINANCES FOR TEACHERS AND OTHERS
//
//
//
//
//
//
//
//
//

/////////


getUserBalance(userid){

  let amount: number;
if(userid){
this.balanceList.child(userid).child('amount').on('value', snapshot => {
amount = snapshot.val();

})
return amount;
}
return amount;

}

addTransaction(amount:number, fromuserid, touserid,type, description,itemid){
  //
  // ToUserID is the one gaining money
  //
  //
  //  FromUserID Is who the mony is coming from
  let id = this.makeidnum()
  
   this.logList.push({
       
     amount:amount,
     time:  Math.floor(new Date().getTime()/1000),
     fromuserid: fromuserid,
     touserid: touserid,
     type:type,
     description:description,
     itemid:itemid,
     fromname: this.getOtherName(fromuserid),
     toname: this.getOtherName(touserid),
     valid: false,
      }).then((newTransaction)=>{
  this.addAmountToBalance(touserid,amount)
  this.subtractAmountFromBalance(fromuserid,amount)
  this.logList.child(newTransaction.key).child("tid").set(newTransaction.key)
  })
  
  
  }


addTransactionNoToUserBalance(amount:number, fromuserid, touserid,type, description,itemid){
      //
      // ToUserID is the one gaining money (If any)
      //
      // FromUserID Is who the money is coming from
    
      let fromusername
      fromusername = this.getOtherName(fromuserid)
      fromusername = this.getOtherName(fromuserid)
      let tousername
      tousername = this.getOtherName(touserid)
      tousername = this.getOtherName(touserid)
    

      setTimeout(() => {
        
         this.logList.push({
             
           amount:amount,
           time:  Math.floor(new Date().getTime()/1000),
           fromuserid: fromuserid,
           touserid: touserid || null,
           type:type,
           description:description,
           itemid:itemid,
           fromname: fromusername,
           toname: tousername || null,
           valid: false,
            }).then((newTransaction)=>{
              this.subtractAmountFromBalance(fromuserid,amount)
        this.logList.child(newTransaction.key).child("tid").set(newTransaction.key)
        })

      },1000);
        
        
        }

    

        addTransactionNoFromUserBalance(amount:number, fromuserid, touserid,type, description,itemid){
          //
          // ToUserID is the one gaining money (If any)
          //
          // FromUserID Is who the money is coming from

          let fromusername
          fromusername = this.getOtherName(fromuserid)
          fromusername = this.getOtherName(fromuserid)
          let tousername
          tousername = this.getOtherName(touserid)
          tousername = this.getOtherName(touserid)
        

          setTimeout(() => {
            
            this.logList.push({
                 
              amount:amount,
              time:  Math.floor(new Date().getTime()/1000),
              fromuserid: fromuserid || null,
              touserid: touserid,
              type:type,
              description:description,
              itemid:itemid,
              fromname: fromusername || null,
              toname: tousername,
              valid: false,
               }).then((newTransaction)=>{
                 this.addAmountToBalance(touserid,amount)
           this.logList.child(newTransaction.key).child("tid").set(newTransaction.key)
           })
          }, 1000);
            
            
            }
        

addTransactionNoFromOrToUserBalance(amount:number, fromuserid, touserid,type, description,itemid){
  //
  // ToUserID is the one gaining money (If any)
  //
  // FromUserID Is who the money is coming from
  
  let fromusername
  fromusername = this.getOtherName(fromuserid)
  fromusername = this.getOtherName(fromuserid)
  let tousername
  tousername = this.getOtherName(touserid)
  tousername = this.getOtherName(touserid)


  setTimeout(() => {
    
    this.logList.push({
         
      amount:amount,
      time:  Math.floor(new Date().getTime()/1000),
      fromuserid: fromuserid,
      touserid: touserid || null,
      type:type,
      description:description,
      itemid:itemid,
      fromname: fromusername,
      toname: tousername || null,
      valid: false,
       }).then((newTransaction)=>{
   this.logList.child(newTransaction.key).child("tid").set(newTransaction.key)
   })
   
  }, 1000);
    
    }
  getUserToTransactions(touserid){

return this.logList.orderByChild("touserid").equalTo(touserid)

  }

  getUserFromTransactions(fromuserid){


    return this.logList.orderByChild("fromuserid").equalTo(fromuserid)

  }


  logPayout(amount:number, userid){

    this.addTransactionNoToUserBalance(amount,userid,null,"PAYOUT","Payout to "+this.getOtherProfileProperty(userid,"accountNumber")+" - "+ this.getOtherProfileProperty(userid,"SWIFTCode"),"0" )

  }

  logCoursePaidEnrollment(amount:number,userid,teacherid,details,courseid){
    // Mandatory fees deducted

    let normalprice
    let payingprice
if(amount < 180){

  normalprice = amount*0.9;
  }else{
  
    normalprice = amount*0.91;
  } 
  


    // Change this to the transaction coming from the Student. (Student sees full amount charged)
    this.addTransactionNoFromOrToUserBalance(amount,userid,teacherid ,"COURSE",details ,courseid )


    // Balances changed for the teacher (Teacher only sees normal price so we hide what we charge)
    this.addAmountToBalance(teacherid,Math.round(normalprice))


  }


  logInCoursePurchase(amount:number,userid,teacherid,details,purchaseid,courseid){
    // Mandatory fees deducted

    let normalprice
    let payingprice
if(amount < 180){

  normalprice = amount*0.9;
  }else{
  
    normalprice = amount*0.91;
  } 
  let studentname 
  let studentemail
  studentname = this.getOtherName(userid)
  studentemail = this.getOtherProfileProperty(userid,"email")

  let teachername 
  let teacheremail
  teachername = this.getOtherName(teacherid)
  teacheremail = this.getOtherProfileProperty(teacherid,"email")


  setTimeout(() => {
    
  this.pj.sendCourseExtraConfirmation(teacheremail, teachername, studentemail, studentname, amount, details,courseid)


    // Change this to the transaction coming from the Student. (Student sees full amount charged)
    this.addTransactionNoFromOrToUserBalance(amount,userid,teacherid ,"COURSEEXTRA",details ,courseid )


    // Balances changed for the teacher (Teacher only sees normal price so we hide what we charge)
    this.addAmountToBalance(teacherid,Math.round(normalprice))
  },1100)

  }



  
addAmountToBalance(userid,amount:number,){
  return this.balanceList.child(userid).child('amount').transaction((currentbalance) => {
        return (currentbalance || 0) + amount;
      })
  }
  subtractAmountFromBalance(userid, amount:number){
  return this.balanceList.child(userid).child('amount').transaction((currentbalance) => {
        return (currentbalance || 0) - amount;
      })
  }
  


  ////

  //
  //
  //
  //
  //
  //
  //
  //
  //     IN-COURSE PURCHASES AND INVITE LINKS
  //
  //
  //
  //
  //
  //
  //
  //

  /////////


  sendCourseInviteLink(email,teachername,price, picture, coursename,description, courseid){

    this.pj.sendCourseInviteLink(email,teachername,price,picture, coursename,description,courseid)

  }

  addInCoursePurchase(description, price, userid, courseid){

    return this.inCoursePurchasesList.push({
      description: description,
      userid:userid,
      price:price,
      courseid:courseid
     }).then(newItem => {
      this.inCoursePurchasesList.child(newItem.key).child('paymentid').set(newItem.key);
    });
     

  }

 editInCoursePurchase(paymentid, description, price, userid){

    

  return this.inCoursePurchasesList.child(paymentid).update({
    description: description,
    userid:userid,
    price:price
   })
  }

  getInCoursePurchases(courseid){

    return this.inCoursePurchasesList.orderByChild("courseid").equalTo(courseid)

  }

  deleteInCoursePurchase(paymentid){

    return this.inCoursePurchasesList.child(paymentid).remove()

  }


/////////////////////
//
//
//
//
//
//
//
//
//
//
//    INVITE TEACHERS AND EMAIL STUDENTS
//
//
//
//
//
//
///
//
//
////////////////////



sendTeacherInvite(email){

  this.pj.sendTeacherInvite(email)

}


sendEmailToAllStudents(emaillist,body,subject,teachername,courselink,coursename,customButtonText){

this.pj.sendEmailToAllStudents(emaillist,body,subject,teachername,courselink,coursename,customButtonText)
  
}


//////////

//
//
//
//
//
//
//
//
//
//
//             SERVICES
//
//
//
//
//
//
//
//
//

/////////


getOrderDetails(orderid){

return this.orderList.child(orderid);

  
}
clickService(serviceid){

  let num;
   this.servicesList.doc(serviceid).get().then((snapshot)=> {
    
     num = (snapshot.data().clicks || 0 )+1;
     this.servicesList.doc(serviceid).update({
       clicks: num
     })

  })
}

getUserServices(userid){

  return this.servicesList.where("userid","==",userid).get()
}
createService(
  name: string,
description: string,
userid: any,
unlisted:boolean,
typeid,
maintypeid,
sid,
subject,
servicetype,
requirements,
picture,
price
): any {
this.userProfile.child(userid).child("privatetutor").set(true)

//Push Course to database
this.servicesList.add({
  name: name,
  searchname: name.toLowerCase(),
  time: Math.floor(new Date().getTime() / 1000),
  description: description,
  sid:sid || null,
typeid:typeid || null,
subject: subject || null,
maintypeid:maintypeid || null,
  clicks:0,
  picture:picture,
  updated:true,
  userid: userid,
  unlisted: unlisted,
  price:price,
  servicetype:servicetype,
requirements:requirements || null,
  timecreated: Math.floor(new Date().getTime() / 1000)
}).then(newEvent => {    
  this.servicesList.doc(newEvent.id).update({
    serviceid:newEvent.id
  })
      this.pj.createService(userid, newEvent.id, subject,name)
this.Events.publish("servicecreated",{ 
        serviceid: newEvent.id
      })

      // Add the course to the profile as a new course for membership status trackingc
      this.userProfile.child(userid).child('servicesCreated').transaction((amount) => {
        return (amount || 0) + 1;
      })
})
}

getNewServices(){
  return this.servicesList.where("unlisted","==",false).orderBy("time","desc").limit(10).get()
}

getPopularServices(){
  return this.servicesList.where("unlisted","==",false).orderBy("clicks","desc").limit(7).get()


}

getSearchServices(typeid, sid){
  return this.servicesList.where("unlisted","==",false).where("maintypeid","==",typeid).where("sid","==",sid).orderBy("clicks","desc").limit(30).get()
}

getSearchSubjectServices(sid){
  return this.servicesList.where("unlisted","==",false).where("sid","==",sid).orderBy("clicks","desc").limit(30).get()
}

getSearchTypeServices(typeid){
  return this.servicesList.where("unlisted","==",false).where("maintypeid","==",typeid).orderBy("clicks","desc").limit(30).get()
}


  getOrderPayments(orderid){
return this.logList.orderByChild("orderid").equalTo(orderid);

  }

  getServiceOrders(serviceid){
    return this.logList.orderByChild("serviceid").equalTo(serviceid);
    
      }
    
getServiceInfo(serviceid){

  return this.servicesList.doc(serviceid).get()
}
  getUserServicesNum(userid){

    let size;
    this.servicesList.where("userid","==",userid).get().then(snap => {
       size = snap.size // will return the collection size
    });
   
    return size;
    

  }

  
 editService(
  serviceid,
      name: string,
   description: string,
   userid: any,
   unlisted:boolean,
   sid,
   typeid,
   maintypeid,
   price,
   servicetype,
  requirements,
   personalWelcomeEmail:boolean,
   emailBody,
   includeCustomLink:boolean,
   customLink,
   customButtonText
   ): any {

    //Push course to database
 this.servicesList.doc(serviceid).update({
       name: name,
       searchname: name.toLowerCase(),
       time: Math.floor(new Date().getTime() / 1000),
       description: description,
       userid: userid,
       sid: sid,
       typeid:typeid,
       maintypeid: maintypeid,


       price:price,
       servicetype:servicetype||null,
       requirements: requirements ||null,
       unlisted:unlisted,


       personalWelcomeEmail:personalWelcomeEmail || null,
       emailBody:emailBody || null,
       includeCustomLink:includeCustomLink || null,
       customLink:customLink || null,
       customButtonText:customButtonText || null,
     })
     
   return serviceid;
 }

 getUserOrders(userid){
   
 return this.orderList.orderByChild('userid').equalTo(userid);
 }

 editExtraServiceData(serviceid,property,property1){
  this.servicesList.doc(serviceid).update({
    [property]: property1
  })    
}

updateServicePicture(picture: any = null, serviceid): any{
  return this.ServicePictureRef.child(serviceid).child('mainpicture.png')
     .put(picture, metadata).then((savedPicture) => {
        this.servicesList.doc(serviceid).update({
       picture: savedPicture.downloadURL
     });   
     location.reload()
        //this.pj.updateCourse(null, courseid,null, null,savedPicture.downloadURL)

    })     
}
confirmOrderInfo(orderid, answers, courseid, servicename, servicepicture, teachername,coursestatus){

// CONFIRM ORDER INFO
  return   this.orderList.child(orderid).update({
    answers:answers,
    courseid:courseid || null,
    servicename:servicename,
    servicepicture:servicepicture,
    teachername:teachername,
    time:  Math.floor(new Date().getTime()/1000),
    coursestatus:coursestatus,
    status:"started",
    
  })

}
logServicePurchase(amount:number,userid,teacherid,name,serviceid,orderid){
   
  // CREATE THE ORDER
  
 this.orderList.child(orderid).set({
  userid:userid,
  teacherid:teacherid,
  name:name,
  serviceid:serviceid,
  orderid:orderid,
  teachername: this.getOtherName(teacherid),
  username: this.getOtherName(userid),
  status:"pending",
  time:  Math.floor(new Date().getTime()/1000),
  price:Math.trunc(amount),
  
})
  
  
  
   // Mandatory fees deducted

  let normalprice
if(amount < 180){

 normalprice = amount*0.9;
 }else{
 
   normalprice = amount*0.91;
 } 
 let studentname 
 let studentemail
 studentname = this.getOtherName(userid)
 studentemail = this.getOtherProfileProperty(userid,"email")

 let teachername 
 let teacheremail
 teachername = this.getOtherName(teacherid)
 teacheremail = this.getOtherProfileProperty(teacherid,"email")


 setTimeout(() => {
   
 this.pj.sendCourseExtraConfirmation(teacheremail, teachername, studentemail, studentname, amount, name,serviceid)


   // Change this to the transaction coming from the Student. (Student sees full amount charged)
   this.addTransactionNoFromOrToUserBalance(amount,userid,teacherid ,"SERVICE",name ,serviceid )


   // Balances changed for the teacher (Teacher only sees normal price so we hide what we charge)
   this.addAmountToBalance(teacherid,Math.round(normalprice))
 },1100)

 }


//////////

//
//
//
//
//
//
//
//
//
//
//          VERIFIED CERTIFICATES FOR COURSES
//
//
//
//
//
//
//
//
//

/////////


addVerifiedCourseCertificate(userid, username, useremail, courseid, coursename, enrollmentid, certificateName, certificateDescription, certificateStudyArea, certificateIssuingEntity, certificateIssuingEntityAddress, certificateSigner,certificateSignerPosition){
  
  let certnum = this.makeCertificateID(8)
  this.requestEnrollmentList.child(enrollmentid).update({
    certified:true,
    certnum: certnum
  })
  

  return this.verifiedCertificationsList.child(certnum).set({
  userid:userid,
  username:username,
  useremail:useremail,
  courseid:courseid,
  coursename:coursename,
  certificateName:certificateName,
  certificateDescription:certificateDescription,
  certificateStudyArea:certificateStudyArea,
  certificateIssuingEntity:certificateIssuingEntity,
  certificateIssuingEntityAddress:certificateIssuingEntityAddress,
  time: Math.floor(new Date().getTime()/1000),
  certificateSigner:certificateSigner,
  certificateSignerPosition:certificateSignerPosition,
  certificateID:certnum
  })
  }
  
  getVerifiedCertificate(certnum){
    return this.verifiedCertificationsList.child(certnum)
  }


}
