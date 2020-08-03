import { Injectable } from '@angular/core';
import firebase from 'firebase';

var metadata = {
contentType: 'image/png'
};

@Injectable()
export class ProfileData {
  public userProfile: any;
  public currentUser: any= null;
possible : any ;
UserPictureRef:any;
profilepicture1:any; 
otherpic:any="https://firebasestorage.googleapis.com/v0/b/project-jaguar-2d794.appspot.com/o/blank-profile-picture-973460_960_720.png?alt=media&token=74a8f79c-758d-4179-bebe-0090b75a82dc"
 ; 
osuserid:any;
text:any;
uid:any;
firstname:any;
lastname:any;
name:any;
requestList:any;
schoollist:any;
  public messagingDB:any;
  constructor() {
 //   this.uid = "1234567890"
    
    this.userProfile = firebase.database().ref('/userProfile');
    this.requestList = firebase.database().ref('/requestlist');
    this.UserPictureRef = firebase.storage().ref('/profilepictures/');
    this.messagingDB = firebase.database().ref('/waitingmessages');
    this.schoollist = firebase.database().ref('/schoolList');
  }

getfileext(filestring){
  let file = filestring.substr(filestring.lastIndexOf('.') + 1);
   return file;
}

  getUserProfile(): any {
    this.currentUser = firebase.auth().currentUser;
if(this.currentUser){
    this.uid = this.currentUser.uid;
    }
    return this.userProfile.child(this.uid);
  }

  getCurrentUser(): any {
    this.currentUser = firebase.auth().currentUser;
    return new Promise((resolve, reject) => {
      if (this.currentUser.uid) {
        var userRef = this.userProfile.child(this.currentUser.uid);
        userRef.once("value", function (snap) {
          var user = snap.val();
          resolve(user);
        }, function (error) {
          reject(null);
        });
      } else {
        reject(null);
      }
    });
  }

  getUserList():any{
return this.userProfile;

  }

    getUserListSearch(ev):any{
return firebase.database().ref('/userProfile').orderByChild("email").equalTo(ev)

  }


    getSchoolUserList(scid):any{

  return this.userProfile.orderByChild("scid").equalTo(scid);
  }

  getUserOneSignalId(userid):any{
this.userProfile.child(userid).on('value', (snapshot) => {
   this.osuserid = snapshot.val().osuserid;
    })

    return this.osuserid
  }

  updateName(firstName: string, lastName: string): any {
    this.currentUser = firebase.auth().currentUser;
    return this.userProfile.child(this.currentUser.uid).update({
      firstName: firstName,
      lastName: lastName,
      
    });
  }

  updateBankAccount(accountNumber: string, SWIFTCode: string): any {
    this.currentUser = firebase.auth().currentUser;
    return this.userProfile.child(this.currentUser.uid).update({
      SWIFTCode: SWIFTCode,
      accountNumber: accountNumber,
      
    });
  }

  updateDOB(birthDate: string): any {
    return this.userProfile.child(this.currentUser.uid).update({
      birthDate: birthDate,
    });
  }

  updateEmail(newEmail: string): any {
    this.currentUser = firebase.auth().currentUser;
    this.currentUser.updateEmail(newEmail).then(() => {
      this.userProfile.child(this.currentUser.uid).update({
        email: newEmail
      });
    }, (error) => {
      console.log(error);
    });
  }
 Updatekey(usertoken: any):any{
this.currentUser = firebase.auth().currentUser;
     this.userProfile.child(this.currentUser.uid).update({
       Usertoken: usertoken

     });
  }

  UpdateOneSignalKey(userid,usertoken):any{
    this.currentUser = firebase.auth().currentUser;
 this.userProfile.child(this.currentUser.uid).update({
       osusertoken: usertoken,
       osuserid: userid
     });
  }


  sendMessage( mid, userid, message, attachment = null ):any{
    this.currentUser = firebase.auth().currentUser;

    return this.messagingDB.child(mid).push({
      message: message,
      owner: this.currentUser.uid,
      timestamp: Math.floor(new Date().getTime()/1000)
    })

  }

  getMessages(userid):any{
    this.currentUser = firebase.auth().currentUser;
var rawList10 = [];
var combinedid = "";
this.messagingDB.on('value', (snapshot) => {
    rawList10 = [];
      snapshot.forEach(snap => {
        rawList10.unshift({
          id: snap.key
        });
      });
    
    });
        rawList10 = rawList10.filter((item) => {
      return (item.id.indexOf(userid) > -1)
    })

 if(rawList10[0]){
   rawList10 = rawList10.filter((item) => {(item.id.indexOf(this.currentUser.uid) > -1)})
if(rawList10[0]){
/**This is where the messages are returned */
combinedid =  rawList10[0].id;
}else{combinedid = this.currentUser.uid+"AND"+userid
this.messagingDB.child(combinedid).update({

})}
 
 }else{
combinedid = this.currentUser.uid+"AND"+userid
this.messagingDB.child(combinedid).update({
 //  init: true
 })
 }

 return this.messagingDB.child(combinedid);
  }

  deletemessages(mid):any{

    return this.messagingDB.child(mid).remove();
  }

  deletemessage(mid,miid):any{
     return this.messagingDB.child(mid).child(miid).remove();
  }

  updatePassword(newPassword: string): any {
    this.currentUser = firebase.auth().currentUser;
    this.currentUser.updatePassword(newPassword).then(() => {
      console.log("Password Changed");
    }, (error) => {
      console.log(error);
    });
  }

updatePayPalMe(userid, link = null):any{
  if(link){
 return this.userProfile.child(userid).update({
      paypallink: link,
    })
  }
}


  updateBio(bio: string): any {
     
    return this.userProfile.child(this.currentUser.uid).update({
      bio: bio,
      
    });
  }

updateNumber(number):any{
  if(number){
 return this.userProfile.child(this.currentUser.uid).update({
      phonenumber: number,
    })
  }
}

updateUserNumber(number,userid):any{
  if(number){
 return this.userProfile.child(userid).update({
      phonenumber: number,
    })
  }
}

updateAffiliateLink(userid, urlextension = null):any{
  if(urlextension){
 return this.userProfile.child(userid).update({
      urlextension: urlextension,
    })
  }
}

deleteAffiliateLink(userid):any{
 return this.userProfile.child(userid).child("urlextension").remove()
  
}
  updateSchool(scid:any,oldscid:any):any{
    this.currentUser = firebase.auth().currentUser;
    return this.userProfile.child(this.currentUser.uid).update({
      
      scid:scid
    }), this.schooluseradded(scid), this.schooluserdeleted(oldscid)

  }


  //Associates and Rep Statuses

   makeAssociate(userid,schoolid):any{
    return this.userProfile.child(userid).update({
      associate:true
    }), this.schoolassociateadded(schoolid)

  }
  deleteAssociate(userid,schoolid):any{
    return this.userProfile.child(userid).update({
      associate:false
    }), this.schoolassociatedeleted(schoolid)

  }
  makeRep(userid,schoolid):any{
    return this.userProfile.child(userid).update({
      representative:true
    }), this.schoolrepadded(schoolid)

  }
  deleteRep(userid,schoolid):any{
    return this.userProfile.child(userid).update({
      represenative:false
    }), this.schoolrepdeleted(schoolid)

  }
//


   schooluseradded(scid):any{

   this.schoollist.child(scid).child('users').transaction((number) => {
    return  (number || 0) +1;
    }) 
  }

     schooluserdeleted(scid):any{

   this.schoollist.child(scid).child('users').transaction((number) => {
   if(number >0){
    return  number -1;
 
 }else{
   return number;
 
  }
   })
     }
//ASSOCIATES
       schoolassociateadded(scid):any{

   this.schoollist.child(scid).child('associates').transaction((number) => {
    return  (number || 0) +1;
    }) 
  }

     schoolassociatedeleted(scid):any{

   this.schoollist.child(scid).child('associates').transaction((number) => {
   if(number >0){
    return  number -1;
 
 }else{
   return number;
 
  }
   })
     }
//REPS
       schoolrepadded(scid):any{

   this.schoollist.child(scid).child('reps').transaction((number) => {
    return  (number || 0) +1;
    }) 
  }

     schoolrepdeleted(scid):any{

   this.schoollist.child(scid).child('reps').transaction((number) => {
   if(number >0){
    return  number -1;
 
 }else{
   return number;
 
  }
   })
     }



  validatelike(requestId, answerId){
    this.currentUser = firebase.auth().currentUser;
    return this.requestList.child(requestId).child('answers').child(answerId).child("likesusers").push({
      userid: this.currentUser.uid
    })
   
  }

  addrating(userid, number){
     this.userProfile.child(userid).child('rating').transaction((rating) => {
    return  (rating || 0) +number;
    }) 
  }

  checkfavourite(userid,primaryid){
  var rawList10 = null;
this.userProfile.child(userid).child("favourites").on('value', (snapshot) => {
    rawList10 = [];
      snapshot.forEach(snap => {
        rawList10.unshift({
          id: snap.key,
          primaryid: snap.val().primaryid
        });
      });
    
    });
    
    rawList10 =  rawList10.filter(fav => {
         return  fav.primaryid == primaryid
        }); 


 if(rawList10[0]){
return true

 }else{
return false

 }
    }



checklike(requestId,answerid){
  var rawList10 = null;
this.requestList.child(requestId).child('answers').child(answerid).child("likesusers").on('value', (snapshot) => {
    rawList10 = [];
      snapshot.forEach(snap => {
        rawList10.unshift({
          id: snap.key,
          userid: snap.val().userid
        });
      });
    
    });
    
    rawList10 =  rawList10.filter(like => {
      this.currentUser = firebase.auth().currentUser;
         return  like.userid == this.currentUser.uid
        }); 


 if(rawList10[0]){
return true

 }else{
return false

 }
    }


 
  

  autoSave(notes:any = null, requestId):any{
    this.currentUser = firebase.auth().currentUser;
   return this.userProfile.child(this.currentUser.uid).child('notes').child(requestId).update({
notes:notes,
 time: Math.floor(new Date().getTime()/1000),
 rid:requestId
   })
  }
  
  autoContinue(requestId):any{
this.currentUser = firebase.auth().currentUser;
return this.userProfile.child(this.currentUser.uid).child('notes').child(requestId);
  

  }

  getOtherProfile(userid){

    return this.userProfile.child(userid);
  }
getOtherProfilePicture(userid){
this.otherpic = "https://firebasestorage.googleapis.com/v0/b/project-jaguar-2d794.appspot.com/o/blank-profile-picture-973460_960_720.png?alt=media&token=74a8f79c-758d-4179-bebe-0090b75a82dc"

 this.userProfile.child(userid).on('value', (snapshot) => {
   this.otherpic = snapshot.val().profilepicture;
    })

    return this.otherpic
  }

  getOtherName(userid){
    this.name;
    if(userid){
this.userProfile.child(userid).on('value', (snapshot) => {
   this.name = snapshot.val().firstName +" " + snapshot.val().lastName ;
    })
}
    return this.name

  }

  getOtherProfileFirstName(userid){
 this.userProfile.child(userid).on('value', (snapshot) => {
   this.firstname = snapshot.val().firstName;
    })

    return this.firstname;

  
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



  getOtherProfileLastName(userid){
    this.userProfile.child(userid).on('value', (snapshot) => {
   this.lastname = snapshot.val().lastName;
    })

    return this.lastname;

  
  }

  
  getAssignmentNotes(userid):any{
return this.userProfile.child(userid).child("notes").orderByChild("personal").equalTo(null);

  }

  getPersonalNotes(userid):any{
return this.userProfile.child(userid).child("notes").orderByChild("personal").equalTo(true);

  }

   getPersonalNotesLimit(userid):any{
return this.userProfile.child(userid).child("notes").orderByChild("personal").equalTo(true).limitToLast(3);

  }

  getFavourites(userid):any{
return this.userProfile.child(userid).child("favourites");
  }
  getFavouritesLimit(userid,num):any{
return this.userProfile.child(userid).child("favourites").limitToLast(num);
  }
  deleteFavourite(userid,primaryid):any{

 
  var rawList10 = null;
this.userProfile.child(userid).child("favourites").on('value', (snapshot) => {
    rawList10 = [];
      snapshot.forEach(snap => {
        rawList10.unshift({
          id: snap.key,
          primaryid: snap.val().primaryid,
          fid: snap.val().fid
        });
      });
    
    });
    
    rawList10 =  rawList10.filter(fav => {
         return  fav.primaryid == primaryid
        }); 


 if(rawList10[0]){
      this.userProfile.child(userid).child("favourites").child(rawList10[0].fid).remove()

 }else{
return false

 
    }


  }
  addFavourite(userid,type,primaryid,secondaryid?):any{
this.userProfile.child(userid).child("favourites").push({
      
      userid: userid,
      type: type,
      primaryid:primaryid,
      secondaryid:secondaryid||null,
      time: Math.floor(new Date().getTime()/1000)}).then((newFav)=>{
      this.userProfile.child(userid).child("favourites").child(newFav.key).child('fid').set(newFav.key);
      

      })


  }

  createPersonalNotes(userid,notes,customname = null):any{
    let key;
    var d = new Date();
var weekday = new Array(7);
weekday[0] =  "Sunday";
weekday[1] = "Monday";
weekday[2] = "Tuesday";
weekday[3] = "Wednesday";
weekday[4] = "Thursday";
weekday[5] = "Friday";
weekday[6] = "Saturday";

var n = weekday[d.getDay()];
this.userProfile.child(userid).child("notes").push({
      notes:notes,
      customname: customname || "Note from "+  n,
      personal:true,
      userid: userid,
      time: Math.floor(new Date().getTime()/1000)}).then((newNote)=>{
      this.userProfile.child(userid).child("notes").child(newNote.key).child('rid').set(newNote.key);
      key =  newNote.key

      })

      return key
  }

  autosaveNotes(userid, notes):any{

      return  this.userProfile.child(userid).child("notes").push({
      notes: notes,
      userid: userid,
      time: Math.floor(new Date().getTime()/1000)})

    
  
  }

  editNoteName(rid,newvalue):any{
this.currentUser = firebase.auth().currentUser;
     return this.userProfile.child(this.currentUser.uid).child("notes").child(rid).update({
      customname: newvalue,
       time: Math.floor(new Date().getTime()/1000)
    });
  }

  deleteSave(notesid,requestId):any {
this.currentUser = firebase.auth().currentUser;
 return   this.userProfile.child(this.currentUser.uid).child('notes').child(requestId).remove(),
this.UserPictureRef.child(this.currentUser.uid).child('notes').child(notesid).delete()

  }


  getpicturenotes(notesid){
    this.currentUser = firebase.auth().currentUser;
return this.userProfile.child(this.currentUser.uid).child('notes').child(notesid).child('pictures');

  }
  getfilenotes(notesid){
    this.currentUser = firebase.auth().currentUser;
return this.userProfile.child(this.currentUser.uid).child('notes').child(notesid).child('files');

  }

  getfavetextbooks(textbookid){
    this.currentUser = firebase.auth().currentUser;
return this.userProfile.child(this.currentUser.uid).child('favourites').child(textbookid);

  }

  addnotesfile(pdfblob, textbookid, filename,mimetype,userid,notesid):any{
    this.currentUser = firebase.auth().currentUser;
 return  this.UserPictureRef.child(this.currentUser.uid).child('notes').child(notesid).child(filename)
          .put(pdfblob,{contentType: mimetype}).then((savedfile) => {
              this.userProfile.child(this.currentUser.uid).child('notes').child(notesid).child("files").push({
               file: savedfile.downloadURL,
               name: filename,
               time:  Math.floor(new Date().getTime()/1000),
               userid: userid,
               fileext: this.getfileext(filename),
               mimetype: mimetype
          }).then(newfile => {
     this.userProfile.child(this.currentUser.uid).child('notes').child(notesid).child('files').child(newfile.key).child('fid').set(newfile.key);
    });
      })
    }

  addpicturenotes(notesid, picture1:any=null){
    this.currentUser = firebase.auth().currentUser;
  return    this.UserPictureRef.child(this.currentUser.uid).child('notes').child(notesid).child(this.makeid()+".png")
       .put(picture1, metadata).then((savedPicture) => {
        this.userProfile.child(this.currentUser.uid).child('notes').child(notesid).child('pictures').push({
              picture: savedPicture.downloadURL})
      })  
  
 }

  updateProfilePicture(picture: any = null): any{
    this.currentUser = firebase.auth().currentUser;
    return this.UserPictureRef.child(this.currentUser.uid).child('profilePicture.png')
       .put(picture, metadata).then((savedPicture) => {
          this.userProfile.child(this.currentUser.uid).update({
         profilepicture: savedPicture.downloadURL
       });
       location.reload();   
      })     
}
 //

  makeid()
{
    var text = "";
    var possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";

    for( var i=0; i < 5; i++ )
        text += possible.charAt(Math.floor(Math.random() * possible.length));

    return text;
}


}
            
