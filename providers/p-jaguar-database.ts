import { Injectable } from '@angular/core';
import 'rxjs/add/operator/map';
import { Events } from 'ionic-angular';
import {Http, ConnectionBackend,  Response, Headers, RequestOptions, URLSearchParams, RequestMethod,Request} from '@angular/http';
import { ProfileData } from '../providers/profile-data';
import { EventData } from '../providers/event-data';
/*
  Generated class for the PJaguarDatabase provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular 2 DI.
*/
@Injectable()
export class PJaguarDatabase {
result;
error;
fakeresp={
    price: 70
};
resp;

url = 'https://script.google.com/macros/s/AKfycbxXE1wIS_NuvuB8z3x256xpQHW-vnXfROxNdpkePhJVbRPtKiA/exec'




  constructor(public events:Events,public http: Http, public profiledata: ProfileData) {
    //console.log('Hello PJaguarDatabase Provider');
  }

requestTutoring(email,name,phone,subject, sid:string, asssupport,syllabus,clientid,repclientcountry,urlextension,contacttype,countrycode){
   let _queryUrl = this.url+"?callback=?";
let params = new URLSearchParams();
params.set("method","requesttutor");
params.set("syllabus", syllabus);
params.set("email", email);
params.set("countrycode", countrycode);
params.set("name",name);
params.set("urlextension",urlextension);
params.set("asssupport",asssupport);
//params.set("sid",sid);
params.set("subject",subject);
params.set("phone",phone);
params.set("clientid",clientid);
params.set("repclientcountry",repclientcountry)
params.set("contacttype",contacttype)
 var headers = new Headers()
        headers.append("Content-Type", 'text/plain');
 
 var requestoptions = new RequestOptions({
            method: RequestMethod.Get,
            url: _queryUrl,
            headers: headers,
             search: params
        })

    this.http.request(new Request(requestoptions))
        .map((res: Response,err) => {
            if (res) {
                let status = { status: res.status, json: res.json() }
             this.resp = res.json()
             this.events.publish("tutorrequested",this.resp)
          }
        }).subscribe(res => this.result = res, error => this.error = error );
        
        //console.log(JSON.stringify(this.result))
         //console.log(JSON.stringify(this.error)) 
}

 
 
 
requestQuickTutoring(email,name,phone,repclientcountry,urlextension,contacttype,countrycode,sid,subject){
   let _queryUrl = this.url+"?callback=?";
let params = new URLSearchParams();
params.set("method","requestquicktutor");
params.set("email", email);
params.set("countrycode", countrycode);
params.set("name",name);
params.set("urlextension",urlextension);
//params.set("sid",sid);
params.set("subject",subject);
params.set("phone",phone);
params.set("repclientcountry",repclientcountry)
params.set("contacttype",contacttype)
 var headers = new Headers()
        headers.append("Content-Type", 'text/plain');
 
 var requestoptions = new RequestOptions({
            method: RequestMethod.Get,
            url: _queryUrl,
            headers: headers,
             search: params
        })

    this.http.request(new Request(requestoptions))
        .map((res: Response,err) => {
            if (res) {
                let status = { status: res.status, json: res.json() }
             this.resp = res.json()
             this.events.publish("quicktutorrequested",this.resp)
          }
        }).subscribe(res => this.result = res, error => this.error = error );
        
        //console.log(JSON.stringify(this.result))
         //console.log(JSON.stringify(this.error)) 
}


createAccountGoogle(userid, firstName, lastName, email,password){

  // This one needs a Password change.
  let _queryUrl = this.url+"?callback=?";
let params = new URLSearchParams();
params.set("method","createAccount");
params.set("userid",userid);
params.set("firstName",firstName);
params.set("lastName",lastName);
params.set("email",email);
params.set("password",password);
var headers = new Headers()
       headers.append("Content-Type", 'text/plain');


var requestoptions = new RequestOptions({
           method: RequestMethod.Get,
           url: _queryUrl,
           headers: headers,
            search: params
       })

   this.http.request(new Request(requestoptions))
       .map((res: Response,err) => {
           if (res) {
            //   let status = { status: res.status, json: res.json() }
            this.resp = res.json()
            this.events.publish("createdAccount",this.resp)
         }
       }).subscribe(res => this.result = res, error => this.error = error );
       
       //console.log(JSON.stringify(this.result))
        //console.log(JSON.stringify(this.error)) 

}

 createAccount(userid, firstName, lastName, email,password){

   let _queryUrl = this.url+"?callback=?";
let params = new URLSearchParams();
params.set("method","createAccount");
params.set("userid",userid);
params.set("firstName",firstName);
params.set("lastName",lastName);
params.set("email",email);
params.set("password",password);
 var headers = new Headers()
        headers.append("Content-Type", 'text/plain');

 
 var requestoptions = new RequestOptions({
            method: RequestMethod.Get,
            url: _queryUrl,
            headers: headers,
             search: params
        })

    this.http.request(new Request(requestoptions))
        .map((res: Response,err) => {
            if (res) {
             //   let status = { status: res.status, json: res.json() }
             this.resp = res.json()
             this.events.publish("createdAccount",this.resp)
          }
        }).subscribe(res => this.result = res, error => this.error = error );
        
        //console.log(JSON.stringify(this.result))
         //console.log(JSON.stringify(this.error)) 

}

getLocation(lat, lon){

   let _queryUrl = this.url+"?callback=?";
let params = new URLSearchParams();
params.set("method","getLocation");
params.set("lat",lat);
params.set("lon",lon);
var headers = new Headers()
        headers.append("Content-Type", 'text/plain');

 
 var requestoptions = new RequestOptions({
            method: RequestMethod.Get,
            url: _queryUrl,
            headers: headers,
             search: params
        })

    this.http.request(new Request(requestoptions))
        .map((res: Response,err) => {
            if (res) {
        this.resp = res.json()
         this.events.publish("gotlocation",this.resp.address)
          } 
        }).subscribe((res) => {       
}, error => this.error = error );

}
  

sendMessage(data){

   let _queryUrl = this.url+"?callback=?";
let params = new URLSearchParams();
params.set("method","sendMessage");
params.set("data",JSON.stringify(data));
 var headers = new Headers()
        headers.append("Content-Type", 'text/plain');

 
 var requestoptions = new RequestOptions({
            method: RequestMethod.Get,
            url: _queryUrl,
            headers: headers,
             search: params
        })

    this.http.request(new Request(requestoptions))
        .map((res: Response,err) => {
            if (res) {
             //   let status = { status: res.status, json: res.json() }
             this.resp = res.json()
             this.events.publish("notified",this.resp)
          }
        }).subscribe(res => this.result = res, error => this.error = error );
        
}

resendAssignmentInvoice(sbaid){
   let _queryUrl = this.url+"?callback=?";
let params = new URLSearchParams();
params.set("method","resendAssignmentInvoice");
params.set("sbaid",sbaid);
 var headers = new Headers()
        headers.append("Content-Type", 'text/plain');

 

 var requestoptions = new RequestOptions({
            method: RequestMethod.Get,
            url: _queryUrl,
            headers: headers,
             search: params
        })

    this.http.request(new Request(requestoptions))
        .map((res: Response,err) => {
            if (res) {
                let status = { status: res.status, json: res.json() }
             this.resp = res.json()
             this.events.publish("invoicesent",this.resp)
          }
        }).subscribe(res => this.result = res, error => this.error = error );
        
        //console.log(JSON.stringify(this.result))
         //console.log(JSON.stringify(this.error)) 
}


  newTutoringRequest(email,repclientemail,name,repclientname,school,subject = null,subjectbundleid = null, asssupport, price,repclientprice, syllabus,id ,repclientinvoice,months){
   let _queryUrl = this.url+"?callback=?";
let params = new URLSearchParams();
params.set("method","newtutoring");
params.set("email", email);
params.set("repclientemail", repclientemail);
params.set("name",name);
params.set("repclientname",repclientname);
params.set("school",school);
params.set("subject",subject);
params.set("subjectbundleid",subjectbundleid)
params.set("status",status);
params.set("months",months)
params.set("id",id);
params.set("syllabus",syllabus);
params.set("asssupport",asssupport);
params.set("price",price);
params.set("repclientprice",repclientprice);
params.set("repclientinvoice",repclientinvoice);
 var headers = new Headers()
        headers.append("Content-Type", 'text/plain');

 
 var requestoptions = new RequestOptions({
            method: RequestMethod.Get,
            url: _queryUrl,
            headers: headers,
             search: params
        })

    this.http.request(new Request(requestoptions))
        .map((res: Response,err) => {
            if (res) {
                let status = { status: res.status, json: res.json() }
             this.resp = res.json()
             this.events.publish("tutoringposted",this.resp)
          }
        }).subscribe(res => this.result = res, error => this.error = error );
     }


 checkTutoringPrice(subject, asssupport, months, syllabus){
   let _queryUrl = this.url+"?callback=?";
let params = new URLSearchParams();
params.set("method","checktutoringprice");
params.set("asssupport",asssupport);
params.set("subject",subject);
params.set("syllabus",syllabus);
params.set("months",months);
 var headers = new Headers()
        headers.append("Content-Type", 'text/plain');

 
 var requestoptions = new RequestOptions({
            method: RequestMethod.Get,
            url: _queryUrl,
            headers: headers,
             search: params
        })

    this.http.request(new Request(requestoptions))
        .map((res: Response,err) => {
            if (res) {
              //  let status = { status: res.status, json: res.json() }
             //console.log(status.status)  
             //console.log(JSON.stringify(status.json))
             
             this.resp = res.json()
             //this.resp = JSON.stringify(this.resp)
             this.events.publish("tutoringpriceasked",this.resp)
          }
        }).subscribe(res => this.result = res, error => this.error = error );
      
       // //console.log(JSON.stringify(this.result))
       //  //console.log(JSON.stringify(this.error)) 

        
}



  uploadAssignment(email,repclientemail,name,repclientname,school,subject, type, status, desc,id,price,repclientprice){
   let _queryUrl = this.url+"?callback=?";
let params = new URLSearchParams();
params.set("method","newsba");
params.set("type",type);
params.set("email", email);
params.set("repclientemail", repclientemail);
params.set("name",name);
params.set("repclientname",repclientname);
params.set("school",school);
params.set("subject",subject);
params.set("status",status);
params.set("desc",desc);
params.set("id",id);
params.set("price",price);
params.set("repclientprice",repclientprice);
 var headers = new Headers()
        headers.append("Content-Type", 'text/plain');

 
 var requestoptions = new RequestOptions({
            method: RequestMethod.Get,
            url: _queryUrl,
            headers: headers,
             search: params
        })

    this.http.request(new Request(requestoptions))
        .map((res: Response,err) => {
            if (res) {
                let status = { status: res.status, json: res.json() }
             this.resp = res.json()
             this.events.publish("assignmentposted",this.resp)
          }
        }).subscribe(res => this.result = res, error => this.error = error );
        

}

 requestAssignment(email,name,phone,id, type, 
 status,subject,sid,price, description,country, clientid, urlextension, contacttype,countrycode){
   let _queryUrl = this.url+"?callback=?";
let params = new URLSearchParams();
params.set("method","uploadassignment");
params.set("type",type);
params.set("email", email);
params.set("urlextension", urlextension);
params.set("name",name);
params.set("countrycode",countrycode)
params.set("id",id);
params.set("status",status);
params.set("phone",phone);
params.set("subject",subject);
params.set("description",description)
params.set("country",country); 
params.set("price",price);
params.set("clientid",clientid);
params.set("contacttype",contacttype)
 var headers = new Headers()
        headers.append("Content-Type", 'text/plain');
 
 var requestoptions = new RequestOptions({
            method: RequestMethod.Get,
            url: _queryUrl,
            headers: headers,
             search: params
        })

    this.http.request(new Request(requestoptions))
        .map((res: Response,err) => {
            if (res) {
                let status = { status: res.status, json: res.json() }
             this.resp = res.json()
             this.events.publish("assignmentrequested",this.resp)
          }
        }).subscribe(res => this.result = res, error => this.error = error );
        
        //console.log(JSON.stringify(this.result))
         //console.log(JSON.stringify(this.error)) 
}


 checkPrice(subject, type, status){
   let _queryUrl = this.url+"?callback=?";
let params = new URLSearchParams();
params.set("method","checkprice");
params.set("type",type);
params.set("subject",subject);
params.set("status",status);
 var headers = new Headers()
        headers.append("Content-Type", 'text/plain');

 
 var requestoptions = new RequestOptions({
            method: RequestMethod.Get,
            url: _queryUrl,
            headers: headers,
             search: params
        })

    this.http.request(new Request(requestoptions))
        .map((res: Response,err) => {
            if (res) {
              //  let status = { status: res.status, json: res.json() }
             //console.log(status.status)  
             //console.log(JSON.stringify(status.json))
             
             this.resp = res.json()
             //this.resp = JSON.stringify(this.resp)
             this.events.publish("priceasked",this.resp)
          }
        }).subscribe(res => this.result = res, error => this.error = error );
      
       // //console.log(JSON.stringify(this.result))
       //  //console.log(JSON.stringify(this.error)) 

        
}


 checkPriceNoAlert(subject, type, status){
   let _queryUrl = this.url+"?callback=?";
let params = new URLSearchParams();
params.set("method","checkprice");
params.set("type",type);
params.set("subject",subject);
params.set("status",status);
 var headers = new Headers()
        headers.append("Content-Type", 'text/plain');

 
 var requestoptions = new RequestOptions({
            method: RequestMethod.Get,
            url: _queryUrl,
            headers: headers,
             search: params
        })

    this.http.request(new Request(requestoptions))
        .map((res: Response,err) => {
            if (res) {
              //  let status = { status: res.status, json: res.json() }
             //console.log(status.status)  
             //console.log(JSON.stringify(status.json))
             
             this.resp = res.json()
             //this.resp = JSON.stringify(this.resp)
             this.events.publish("priceinquired",this.resp)
          }
        }).subscribe(res => this.result = res, error => this.error = error );
      
       // //console.log(JSON.stringify(this.result))
       //  //console.log(JSON.stringify(this.error)) 

        
}


claimSBA(sbaid,name,email){
   let _queryUrl = this.url+"?callback=?";
let params = new URLSearchParams();
params.set("method","claimsba");
params.set("email",email);
params.set("id",sbaid);
params.set("name",name);
 var headers = new Headers()
        headers.append("Content-Type", 'text/plain');

 
 var requestoptions = new RequestOptions({
            method: RequestMethod.Get,
            url: _queryUrl,
            headers: headers,
             search: params
        })

    this.http.request(new Request(requestoptions))
        .map((res: Response,err) => {
            if (res) {
                let status = { status: res.status, json: res.json() }
             //console.log(status.status)  
             //console.log(JSON.stringify(status.json))
             this.resp = res.json()
              return JSON.stringify(this.resp)
          }
          return JSON.stringify(this.resp)
        }).subscribe(res => this.result = res, error => this.error = error );
        return JSON.stringify(this.resp)
       // //console.log(JSON.stringify(this.result))
       //  //console.log(JSON.stringify(this.error)) 
}


 resendTutoringInvoice(userid, tutorid, email,name,repclientemail,repclientname){
   let _queryUrl = this.url+"?callback=?";
let params = new URLSearchParams();
params.set("method","sendTutoringInvoice");
params.set("tutorid",tutorid);
params.set("userid",userid);
params.set("email",email);
params.set("name",name);
params.set("repclientemail",repclientemail);
params.set("repclientname",repclientname);
 var headers = new Headers()
        headers.append("Content-Type", 'text/plain');

 
 var requestoptions = new RequestOptions({
            method: RequestMethod.Get,
            url: _queryUrl,
            headers: headers,
             search: params
        })

    this.http.request(new Request(requestoptions))
        .map((res: Response,err) => {
            if (res) {
              //  let status = { status: res.status, json: res.json() }
             //console.log(status.status)  
             //console.log(JSON.stringify(status.json))
             
             this.resp = res.json()
             this.events.publish("tutorinvoicesent",this.resp)
          }
        }).subscribe(res => this.result = res, error => this.error = error );
      
       // //console.log(JSON.stringify(this.result))
       //  //console.log(JSON.stringify(this.error)) 

        
}
updateAssignment(email,repclientemail = null,name,repclientname = null,school,subject, type, status, desc,id,price,repclientprice = null,link, ){
   let _queryUrl = this.url+"?callback=?";
let params = new URLSearchParams();
params.set("method","updatesba");
params.set("type",type);
params.set("email", email);
params.set("name",name);
params.set("repclientemail", repclientemail);
params.set("repclienname",repclientname);
params.set("school",school);
params.set("subject",subject);
params.set("status",status);
params.set("desc",desc);
params.set("id",id);
params.set("link",link)
params.set("price",price)
params.set("price",price)
 var headers = new Headers()
        headers.append("Content-Type", 'text/plain');

 
 var requestoptions = new RequestOptions({
            method: RequestMethod.Get,
            url: _queryUrl,
            headers: headers,
             search: params
        })

    this.http.request(new Request(requestoptions))
        .map((res: Response,err) => {
            if (res) {
                let status = { status: res.status, json: res.json() }
             //console.log(status.status)  
             //console.log(JSON.stringify(status.json)) 
          }
        }).subscribe(res => this.result = res, error => this.error = error );
        
        //console.log(JSON.stringify(this.result))
         //console.log(JSON.stringify(this.error)) 
}

sendClientInvoice(email,repclientemail = null,name,repclientname = null,school,subject, type, status, desc,id,price,repclientprice,link){
   let _queryUrl = this.url+"?callback=?";
let params = new URLSearchParams();
params.set("method","repclientinvoice");
params.set("type",type);
params.set("email", email);
params.set("name",name);
params.set("repclientemail", repclientemail);
params.set("repclientname",repclientname);
params.set("school",school);
params.set("subject",subject);
params.set("status",status);
params.set("desc",desc);
params.set("id",id);
params.set("link",link)
params.set("price",price)
params.set("repclientprice",repclientprice)
 var headers = new Headers()
        headers.append("Content-Type", 'text/plain');

 
 var requestoptions = new RequestOptions({
            method: RequestMethod.Get,
            url: _queryUrl,
            headers: headers,
             search: params
        })

    this.http.request(new Request(requestoptions))
        .map((res: Response,err) => {
            if (res) {
                let status = { status: res.status, json: res.json() }
             //console.log(status.status)  
             //console.log(JSON.stringify(status.json)) 
          }
        }).subscribe(res => this.result = res, error => this.error = error );
        
        //console.log(JSON.stringify(this.result))
         //console.log(JSON.stringify(this.error)) 
}


    changePrice(sbaid,number,repclientname,clientname,
  repclientemail,clientemail,assignmentlink,type,status,subject){
           let _queryUrl = this.url+"?callback=?";
let params = new URLSearchParams();
params.set("method","changeprice");
params.set("repclientemail",repclientemail);
params.set("email",clientemail);
params.set("id",sbaid);
params.set("price",number);
params.set("link",assignmentlink);
params.set("type",type);
params.set("status",status);
params.set("subject",subject);
params.set("repclientname",repclientname);
params.set("name",clientname);
 var headers = new Headers()
        headers.append("Content-Type", 'text/plain');

 
 var requestoptions = new RequestOptions({
            method: RequestMethod.Get,
            url: _queryUrl,
            headers: headers,
             search: params
        })

    this.http.request(new Request(requestoptions))
        .map((res: Response,err) => {
            if (res) {
                let status = { status: res.status, json: res.json() }
             //console.log(status.status)  
             //console.log(JSON.stringify(status.json))
             this.resp = res.json()
              return JSON.stringify(this.resp)
          }
          return JSON.stringify(this.resp)
        }).subscribe(res => this.result = res, error => this.error = error );
        return JSON.stringify(this.resp)

    }


  fixLink(sbaid,clientname,clientemail,type,status,subject){
           let _queryUrl = this.url+"?callback=?";
let params = new URLSearchParams();
params.set("method","fixlink");
params.set("email",clientemail);
params.set("id",sbaid);
params.set("type",type);
params.set("status",status);
params.set("subject",subject);
params.set("name",clientname);
 var headers = new Headers()
        headers.append("Content-Type", 'text/plain');

 
 var requestoptions = new RequestOptions({
            method: RequestMethod.Get,
            url: _queryUrl,
            headers: headers,
             search: params
        })

    this.http.request(new Request(requestoptions))
        .map((res: Response,err) => {
            if (res) {
                let status = { status: res.status, json: res.json() }
             //console.log(status.status)  
             //console.log(JSON.stringify(status.json))
             this.resp = res.json()
              return JSON.stringify(this.resp)
          }
          return JSON.stringify(this.resp)
        }).subscribe(res => this.result = res, error => this.error = error );
        return JSON.stringify(this.resp)

    }




     checkTutoringPriceNoAlert(subjects, tutors,asssupport){
   let _queryUrl = this.url+"?callback=?";
let params = new URLSearchParams();
params.set("method","checkTutoringprice");
params.set("tutors",tutors);
params.set("asssupport",asssupport);
params.set("subjects",subjects);
 var headers = new Headers()
        headers.append("Content-Type", 'text/plain');

 
 var requestoptions = new RequestOptions({
            method: RequestMethod.Get,
            url: _queryUrl,
            headers: headers,
             search: params
        })

    this.http.request(new Request(requestoptions))
        .map((res: Response,err) => {
            if (res) {
              //  let status = { status: res.status, json: res.json() }
             //console.log(status.status)  
             //console.log(JSON.stringify(status.json))
             
             this.resp = res.json()
             //this.resp = JSON.stringify(this.resp)
             this.events.publish("priceinquired",this.resp)
          }
        }).subscribe(res => this.result = res, error => this.error = error );
      
       // //console.log(JSON.stringify(this.result))
       //  //console.log(JSON.stringify(this.error)) 

        
}

 requestJamboree(email:string,name:string,phone:string,plan,syllabus, price:string){
   let _queryUrl = this.url+"?callback=?";
let params = new URLSearchParams();
params.set("method","requestjamboree");
params.set("syllabus", syllabus);
params.set("email", email);
params.set("name",name);
params.set("plan",plan);
params.set("phone",phone);
params.set("price",price);
 var headers = new Headers()
        headers.append("Content-Type", 'text/plain');
  
 var requestoptions = new RequestOptions({
            method: RequestMethod.Get,
            url: _queryUrl,
            headers: headers,
             search: params
        })

    this.http.request(new Request(requestoptions))
        .map((res: Response,err) => {
            if (res) {
                let status = { status: res.status, json: res.json() }
             this.resp = res.json()
             this.events.publish("jamboreerequested",this.resp)
          }
        }).subscribe(res => this.result = res, error => this.error = error );
        
        //console.log(JSON.stringify(this.result))
         //console.log(JSON.stringify(this.error)) 
}

notifyOfMessage(id:string,userid,message ){
   let _queryUrl = this.url+"?callback=?";
let params = new URLSearchParams();
params.set("method","notifyOfMessage");
params.set("id", id);
params.set("userid", userid);
params.set("message", message);
 var headers = new Headers()
        headers.append("Content-Type", 'text/plain');
 
 var requestoptions = new RequestOptions({
            method: RequestMethod.Get,
            url: _queryUrl,
            headers: headers,
             search: params
        })

    this.http.request(new Request(requestoptions))
        .map((res: Response,err) => {
            if (res) {
                let status = { status: res.status, json: res.json() }
             this.resp = res.json()
             this.events.publish("notifiedOfMessage",this.resp)
          }
        }).subscribe(res => this.result = res, error => this.error = error );
        
        //console.log(JSON.stringify(this.result))
         //console.log(JSON.stringify(this.error)) 
}

sendCourseExtraConfirmation(teacheremail, teachername, studentemail, studentname, price, description,courseid){
  let _queryUrl = this.url+"?callback=?";
let params = new URLSearchParams();
params.set("method","sendCourseExtraConfirmation");
params.set("teacheremail", teacheremail);
params.set("teachername", teachername);
params.set("studentemail", studentemail);
params.set("studentname", studentname);
params.set("courseid", courseid);
params.set("price", price);
params.set("description", description);
var headers = new Headers()
       headers.append("Content-Type", 'text/plain');

var requestoptions = new RequestOptions({
           method: RequestMethod.Get,
           url: _queryUrl,
           headers: headers,
            search: params
       })

   this.http.request(new Request(requestoptions))
       .map((res: Response,err) => {
           if (res) {
               let status = { status: res.status, json: res.json() }
            this.resp = res.json()
            this.events.publish("notifiedOfMessage",this.resp)
         }
       }).subscribe(res => this.result = res, error => this.error = error );
       
       //console.log(JSON.stringify(this.result))
        //console.log(JSON.stringify(this.error)) 
}
sendEmailToAllStudents(emaillist,body,subject,teachername,courselink,coursename,customButtonText){
console.log(JSON.stringify(emaillist))
console.log("TEST")
  let _queryUrl = this.url+"?callback=?";
  let params = new URLSearchParams();
  params.set("method","sendEmailToAllStudents");
  params.set("emaillist",JSON.stringify(emaillist));
  params.set("body",body);
  params.set("teachername",teachername)
  params.set("courselink",courselink)
  params.set("customButtonText",customButtonText)
  params.set("coursename",coursename)
  params.set("subject",subject);
   var headers = new Headers()
          headers.append("Content-Type", 'text/plain');
  
   
   var requestoptions = new RequestOptions({
              method: RequestMethod.Get,
              url: _queryUrl,
              headers: headers,
               search: params
          })
  
      this.http.request(new Request(requestoptions))
          .map((res: Response,err) => {
              if (res) {
               //   let status = { status: res.status, json: res.json() }
               this.resp = res.json()
               this.events.publish("sentEmailToAllStudents",this.resp)
            }
          }).subscribe(res => this.result = res, error => this.error = error );
          
          //console.log(JSON.stringify(this.result))
           //console.log(JSON.stringify(this.error)) 


}
  createCourse(userid, courseid,  subject,name){

   let _queryUrl = this.url+"?callback=?";
let params = new URLSearchParams();
params.set("method","createcourse");
params.set("userid",userid);
params.set("courseid",courseid);
params.set("name",name)
params.set("subject",subject);
 var headers = new Headers()
        headers.append("Content-Type", 'text/plain');

 
 var requestoptions = new RequestOptions({
            method: RequestMethod.Get,
            url: _queryUrl,
            headers: headers,
             search: params
        })

    this.http.request(new Request(requestoptions))
        .map((res: Response,err) => {
            if (res) {
             //   let status = { status: res.status, json: res.json() }
             this.resp = res.json()
             this.events.publish("createdCourse",this.resp)
          }
        }).subscribe(res => this.result = res, error => this.error = error );
        
        //console.log(JSON.stringify(this.result))
         //console.log(JSON.stringify(this.error)) 

}

  createService(userid, serviceid,  subject,name){

   let _queryUrl = this.url+"?callback=?";
let params = new URLSearchParams();
params.set("method","createservice");
params.set("userid",userid);
params.set("serviceid",serviceid);
params.set("name",name)
params.set("subject",subject);
 var headers = new Headers()
        headers.append("Content-Type", 'text/plain');

 
 var requestoptions = new RequestOptions({
            method: RequestMethod.Get,
            url: _queryUrl,
            headers: headers,
             search: params
        })

    this.http.request(new Request(requestoptions))
        .map((res: Response,err) => {
            if (res) {
             //   let status = { status: res.status, json: res.json() }
             this.resp = res.json()
             this.events.publish("createdService",this.resp)
          }
        }).subscribe(res => this.result = res, error => this.error = error );
        
        //console.log(JSON.stringify(this.result))
         //console.log(JSON.stringify(this.error)) 

}

sendCourseInviteLink(email,teachername,price,picture, coursename,description,courseid){

  let _queryUrl = this.url+"?callback=?";
  let params = new URLSearchParams();
  params.set("method","sendCourseInviteLink");
  params.set("email",email);
  params.set("picture",picture);
  params.set("description",description);
  params.set("courseid",courseid);
  params.set("teachername",teachername);
  params.set("price",price);
  params.set("coursename",coursename);
var headers = new Headers()
      headers.append("Content-Type", 'text/plain');


var requestoptions = new RequestOptions({
          method: RequestMethod.Get,
          url: _queryUrl,
          headers: headers,
           search: params
      })

  this.http.request(new Request(requestoptions))
      .map((res: Response,err) => {
          if (res) {
           //   let status = { status: res.status, json: res.json() }
           this.resp = res.json()
           this.events.publish("sentCourseInviteLink",this.resp)
        }
      }).subscribe(res => this.result = res, error => this.error = error );
      
      //console.log(JSON.stringify(this.result))
       //console.log(JSON.stringify(this.error)) 


}

sendTeacherInvite(email){



  let _queryUrl = this.url+"?callback=?";
  let params = new URLSearchParams();
  params.set("method","sendTeacherInvite");
  params.set("email",email);
var headers = new Headers()
      headers.append("Content-Type", 'text/plain');


var requestoptions = new RequestOptions({
          method: RequestMethod.Get,
          url: _queryUrl,
          headers: headers,
           search: params
      })

  this.http.request(new Request(requestoptions))
      .map((res: Response,err) => {
          if (res) {
           //   let status = { status: res.status, json: res.json() }
           this.resp = res.json()
           this.events.publish("sentCourseInviteLink",this.resp)
        }
      }).subscribe(res => this.result = res, error => this.error = error );
      
      //console.log(JSON.stringify(this.result))
       //console.log(JSON.stringify(this.error)) 


}

  updateCourse2019(userid, courseid,  subject,name){

    let _queryUrl = this.url+"?callback=?";
    let params = new URLSearchParams();
    params.set("method","updatecourse2019");
    params.set("userid",userid);
    params.set("courseid",courseid);
    params.set("name",name)
    params.set("subject",subject);
 var headers = new Headers()
        headers.append("Content-Type", 'text/plain');

 
 var requestoptions = new RequestOptions({
            method: RequestMethod.Get,
            url: _queryUrl,
            headers: headers,
             search: params
        })

    this.http.request(new Request(requestoptions))
        .map((res: Response,err) => {
            if (res) {
             //   let status = { status: res.status, json: res.json() }
             this.resp = res.json()
             this.events.publish("updatedCourse2019",this.resp)
          }
        }).subscribe(res => this.result = res, error => this.error = error );
        
        //console.log(JSON.stringify(this.result))
         //console.log(JSON.stringify(this.error)) 

}
  updateCourse(userid, courseid,  subject,name,image){

   let _queryUrl = this.url+"?callback=?";
let params = new URLSearchParams();
params.set("method","updatecourse");
params.set("userid",userid);
params.set("courseid",courseid);
params.set("name",name)
params.set("subject",subject);
params.set("image",image);
 var headers = new Headers()
        headers.append("Content-Type", 'text/plain');

 
 var requestoptions = new RequestOptions({
            method: RequestMethod.Get,
            url: _queryUrl,
            headers: headers,
             search: params
        })

    this.http.request(new Request(requestoptions))
        .map((res: Response,err) => {
            if (res) {
             //   let status = { status: res.status, json: res.json() }
             this.resp = res.json()
             this.events.publish("updatedCourse",this.resp)
          }
        }).subscribe(res => this.result = res, error => this.error = error );
        
        //console.log(JSON.stringify(this.result))
         //console.log(JSON.stringify(this.error)) 

}




  addEnrollment(userid, courseid){

   let _queryUrl = this.url+"?callback=?";
let params = new URLSearchParams();
params.set("method","addenrollment");
params.set("userid",userid);
params.set("courseid",courseid);
 var headers = new Headers()
        headers.append("Content-Type", 'text/plain');

 
 var requestoptions = new RequestOptions({
            method: RequestMethod.Get,
            url: _queryUrl,
            headers: headers,
             search: params
        })

    this.http.request(new Request(requestoptions))
        .map((res: Response,err) => {
            if (res) {
             //   let status = { status: res.status, json: res.json() }
             this.resp = res.json()
             this.events.publish("addedEnrollment",this.resp)
          }
        }).subscribe(res => this.result = res, error => this.error = error );
        
        //console.log(JSON.stringify(this.result))
         //console.log(JSON.stringify(this.error)) 

}
requestPrivateEnrollment(userid, courseid){
   let _queryUrl = this.url+"?callback=?";
let params = new URLSearchParams();
params.set("method","requestprivateenrollment");
params.set("userid",userid);
params.set("courseid",courseid);
 var headers = new Headers()
        headers.append("Content-Type", 'text/plain');

 
 var requestoptions = new RequestOptions({
            method: RequestMethod.Get,
            url: _queryUrl,
            headers: headers,
             search: params
        })

    this.http.request(new Request(requestoptions))
        .map((res: Response,err) => {
            if (res) {
             //   let status = { status: res.status, json: res.json() }
             this.resp = res.json()
             this.events.publish("requestedPrivateEnrollment",this.resp)
          }
        }).subscribe(res => this.result = res, error => this.error = error );
        
        //console.log(JSON.stringify(this.result))
         //console.log(JSON.stringify(this.error)) 

}

  requestEnrollment(userid, courseid){

   let _queryUrl = this.url+"?callback=?";
let params = new URLSearchParams();
params.set("method","requestenrollment");
params.set("userid",userid);
params.set("courseid",courseid);
 var headers = new Headers()
        headers.append("Content-Type", 'text/plain');

 
 var requestoptions = new RequestOptions({
            method: RequestMethod.Get,
            url: _queryUrl,
            headers: headers,
             search: params
        })

    this.http.request(new Request(requestoptions))
        .map((res: Response,err) => {
            if (res) {
             //   let status = { status: res.status, json: res.json() }
             this.resp = res.json()
             this.events.publish("requestedEnrollment",this.resp)
          }
        }).subscribe(res => this.result = res, error => this.error = error );
        
        //console.log(JSON.stringify(this.result))
         //console.log(JSON.stringify(this.error)) 

}


  deleteEnrollment(userid, courseid){

   let _queryUrl = this.url+"?callback=?";
let params = new URLSearchParams();
params.set("method","deleteenrollment");
params.set("userid",userid);
params.set("courseid",courseid);
 var headers = new Headers()
        headers.append("Content-Type", 'text/plain');

 
 var requestoptions = new RequestOptions({
            method: RequestMethod.Get,
            url: _queryUrl,
            headers: headers,
             search: params
        })

    this.http.request(new Request(requestoptions))
        .map((res: Response,err) => {
            if (res) {
             //   let status = { status: res.status, json: res.json() }
             this.resp = res.json()
             this.events.publish("deletedEnrollment",this.resp)
          }
        }).subscribe(res => this.result = res, error => this.error = error );
        
        //console.log(JSON.stringify(this.result))
         //console.log(JSON.stringify(this.error)) 

}


deleteCourse(courseid){

   let _queryUrl = this.url+"?callback=?";
let params = new URLSearchParams();
params.set("method","deletecourse");
params.set("courseid",courseid);
 var headers = new Headers()
        headers.append("Content-Type", 'text/plain');

 
 var requestoptions = new RequestOptions({
            method: RequestMethod.Get,
            url: _queryUrl,
            headers: headers,
             search: params
        })

    this.http.request(new Request(requestoptions))
        .map((res: Response,err) => {
            if (res) {
             //   let status = { status: res.status, json: res.json() }
             this.resp = res.json()
             this.events.publish("deletedCourse",this.resp)
          }
        }).subscribe(res => this.result = res, error => this.error = error );
        
        //console.log(JSON.stringify(this.result))
         //console.log(JSON.stringify(this.error)) 

}
paidForEnrollment(courseid,userid){


 let _queryUrl = 'https://script.google.com/macros/s/AKfycbxXE1wIS_NuvuB8z3x256xpQHW-vnXfROxNdpkePhJVbRPtKiA/exec'+"?callback=?";
let params = new URLSearchParams();
params.set("method","paidForEnrollment");
params.set("courseid",courseid);
params.set("userid",userid);

 var headers = new Headers()
        headers.append("Content-Type", 'text/plain');

 
 var requestoptions = new RequestOptions({
            method: RequestMethod.Get,
            url: _queryUrl,
            headers: headers,
             search: params
        })

    this.http.request(new Request(requestoptions))
        .map((res: Response,err) => {
            if (res) {
                let status = { status: res.status, json: res.json() }
             //console.log(status.status)  
             //console.log(JSON.stringify(status.json))
             this.resp = res.json()
              return JSON.stringify(this.resp)
          }
          return JSON.stringify(this.resp)
        }).subscribe(res => this.result = res, error => this.error = error );
        return JSON.stringify(this.resp)
       // //console.log(JSON.stringify(this.result))
       //  //console.log(JSON.stringify(this.error)) 




}


paidForAssignment(sbaid){


 let _queryUrl = 'https://script.google.com/macros/s/AKfycbxXE1wIS_NuvuB8z3x256xpQHW-vnXfROxNdpkePhJVbRPtKiA/exec'+"?callback=?";
let params = new URLSearchParams();
params.set("method","paidForAssignment");
params.set("sbaid",sbaid);

 var headers = new Headers()
        headers.append("Content-Type", 'text/plain');

 
 var requestoptions = new RequestOptions({
            method: RequestMethod.Get,
            url: _queryUrl,
            headers: headers,
             search: params
        })

    this.http.request(new Request(requestoptions))
        .map((res: Response,err) => {
            if (res) {
                let status = { status: res.status, json: res.json() }
             //console.log(status.status)  
             //console.log(JSON.stringify(status.json))
             this.resp = res.json()
              return JSON.stringify(this.resp)
          }
          return JSON.stringify(this.resp)
        }).subscribe(res => this.result = res, error => this.error = error );
        return JSON.stringify(this.resp)
       // //console.log(JSON.stringify(this.result))
       //  //console.log(JSON.stringify(this.error)) 




}


paidForSession(tutorid){


 let _queryUrl = 'https://script.google.com/macros/s/AKfycbxXE1wIS_NuvuB8z3x256xpQHW-vnXfROxNdpkePhJVbRPtKiA/exec'+"?callback=?";
let params = new URLSearchParams();
params.set("method","paidForSession");
params.set("tutorid",tutorid);

 var headers = new Headers()
        headers.append("Content-Type", 'text/plain');

 
 var requestoptions = new RequestOptions({
            method: RequestMethod.Get,
            url: _queryUrl,
            headers: headers,
             search: params
        })

    this.http.request(new Request(requestoptions))
        .map((res: Response,err) => {
            if (res) {
                let status = { status: res.status, json: res.json() }
             //console.log(status.status)  
             //console.log(JSON.stringify(status.json))
             this.resp = res.json()
              return JSON.stringify(this.resp)
          }
          return JSON.stringify(this.resp)
        }).subscribe(res => this.result = res, error => this.error = error );
        return JSON.stringify(this.resp)
       // //console.log(JSON.stringify(this.result))
       //  //console.log(JSON.stringify(this.error)) 




}


deleteSBA(sbaid,subject,type,name,email){
   let _queryUrl = 'https://script.google.com/macros/s/AKfycbxXE1wIS_NuvuB8z3x256xpQHW-vnXfROxNdpkePhJVbRPtKiA/exec'+"?callback=?";
let params = new URLSearchParams();
params.set("method","deletesba");
params.set("email",email);
params.set("id",sbaid);
params.set("name",name);
params.set("subject",subject);
params.set("type",type);
 var headers = new Headers()
        headers.append("Content-Type", 'text/plain');

 
 var requestoptions = new RequestOptions({
            method: RequestMethod.Get,
            url: _queryUrl,
            headers: headers,
             search: params
        })

    this.http.request(new Request(requestoptions))
        .map((res: Response,err) => {
            if (res) {
                let status = { status: res.status, json: res.json() }
             //console.log(status.status)  
             //console.log(JSON.stringify(status.json))
             this.resp = res.json()
              return JSON.stringify(this.resp)
          }
          return JSON.stringify(this.resp)
        }).subscribe(res => this.result = res, error => this.error = error );
        return JSON.stringify(this.resp)
       // //console.log(JSON.stringify(this.result))
       //  //console.log(JSON.stringify(this.error)) 
}

 deleteTutoring(tutorid){
   let _queryUrl = 'https://script.google.com/macros/s/AKfycbxXE1wIS_NuvuB8z3x256xpQHW-vnXfROxNdpkePhJVbRPtKiA/exec'+"?callback=?";
let params = new URLSearchParams();
params.set("method","deleteTutoring");
params.set("tutorid",tutorid);
 var headers = new Headers()
        headers.append("Content-Type", 'text/plain');

 
 var requestoptions = new RequestOptions({
            method: RequestMethod.Get,
            url: _queryUrl,
            headers: headers,
             search: params
        })

    this.http.request(new Request(requestoptions))
        .map((res: Response,err) => {
            if (res) {
              //  let status = { status: res.status, json: res.json() }
             //console.log(status.status)  
             //console.log(JSON.stringify(status.json))
             
             this.resp = res.json()
             this.events.publish("deletetutoring",this.resp)
          }
        }).subscribe(res => this.result = res, error => this.error = error );
      
       // //console.log(JSON.stringify(this.result))
       //  //console.log(JSON.stringify(this.error)) 

        
}

 makePurchase(token, amount, currency,description){
   let _queryUrl = 'https://script.google.com/macros/s/AKfycbxXE1wIS_NuvuB8z3x256xpQHW-vnXfROxNdpkePhJVbRPtKiA/exec'+"?callback=?";
let params = new URLSearchParams();
params.set("method","makePurchase");
params.set("token",token);
params.set("amount",amount);
params.set("currency",currency);
params.set("description",description);
 var headers = new Headers()
        headers.append("Content-Type", 'text/plain');

 
 var requestoptions = new RequestOptions({
            method: RequestMethod.Get,
            url: _queryUrl,
            headers: headers,
             search: params
        })

    this.http.request(new Request(requestoptions))
        .map((res: Response,err) => {
            if (res) {
              //  let status = { status: res.status, json: res.json() }
             //console.log(status.status)  
             //console.log(JSON.stringify(status.json))
             
             this.resp = res.json()
             this.events.publish("madePurchase",this.resp)
          }
        }).subscribe(res => this.result = res, error => this.error = error );
      
       // //console.log(JSON.stringify(this.result))
       //  //console.log(JSON.stringify(this.error)) 

        
}



  createEnrolledStudent(name, email, key, courseid){

let _queryUrl = this.url+"?callback=?";
let params = new URLSearchParams();
params.set("method","createEnrolledStudent");
params.set("name",name);
params.set("email",email);
params.set("key",key);
params.set("courseid",courseid);
 var headers = new Headers()
        headers.append("Content-Type", 'text/plain');

 var requestoptions = new RequestOptions({
            method: RequestMethod.Get,
            url: _queryUrl,
            headers: headers,
             search: params
        })

    this.http.request(new Request(requestoptions))
        .map((res: Response,err) => {
            if (res) {
             //   let status = { status: res.status, json: res.json() }
             this.resp = res.json()
             this.events.publish("createdEnrolledStudent",this.resp)
          }
        }).subscribe(res => this.result = res, error => this.error = error );
        
        //console.log(JSON.stringify(this.result))
         //console.log(JSON.stringify(this.error)) 

}

  deleteEnrolledStudent(key){

let _queryUrl = this.url+"?callback=?";
let params = new URLSearchParams();
params.set("method","deleteEnrolledStudent");
params.set("key",key);
 var headers = new Headers()
        headers.append("Content-Type", 'text/plain');

 
 var requestoptions = new RequestOptions({
            method: RequestMethod.Get,
            url: _queryUrl,
            headers: headers,
             search: params
        })

    this.http.request(new Request(requestoptions))
        .map((res: Response,err) => {
            if (res) {
             //   let status = { status: res.status, json: res.json() }
             this.resp = res.json()
             this.events.publish("deletedEnrolledStudent",this.resp)
          }
        }).subscribe(res => this.result = res, error => this.error = error );
        
        //console.log(JSON.stringify(this.result))
         //console.log(JSON.stringify(this.error)) 

}



  changeToTeacher(userid, courseid){

   let _queryUrl = this.url+"?callback=?";
let params = new URLSearchParams();
params.set("method","changeToTeacher");
params.set("userid",userid);
params.set("courseid",courseid);
 var headers = new Headers()
        headers.append("Content-Type", 'text/plain');

 
 var requestoptions = new RequestOptions({
            method: RequestMethod.Get,
            url: _queryUrl,
            headers: headers,
             search: params
        })

    this.http.request(new Request(requestoptions))
        .map((res: Response,err) => {
            if (res) {
             //   let status = { status: res.status, json: res.json() }
             this.resp = res.json()
             this.events.publish("changedToTeacher",this.resp)
          }
        }).subscribe(res => this.result = res, error => this.error = error );
        
        //console.log(JSON.stringify(this.result))
         //console.log(JSON.stringify(this.error)) 

}
  changeToStudent(userid, courseid){

   let _queryUrl = this.url+"?callback=?";
let params = new URLSearchParams();
params.set("method","changeToStudent");
params.set("userid",userid);
params.set("courseid",courseid);
 var headers = new Headers()
        headers.append("Content-Type", 'text/plain');

 
 var requestoptions = new RequestOptions({
            method: RequestMethod.Get,
            url: _queryUrl,
            headers: headers,
             search: params
        })

    this.http.request(new Request(requestoptions))
        .map((res: Response,err) => {
            if (res) {
             //   let status = { status: res.status, json: res.json() }
             this.resp = res.json()
             this.events.publish("changedToStudent",this.resp)
          }
        }).subscribe(res => this.result = res, error => this.error = error );
        
        //console.log(JSON.stringify(this.result))
         //console.log(JSON.stringify(this.error)) 

}

editEnrolledStudent(studentid, name){

   let _queryUrl = this.url+"?callback=?";
let params = new URLSearchParams();
params.set("method","editEnrolledStudent");
params.set("studentid",studentid);
params.set("name",name);
 var headers = new Headers()
        headers.append("Content-Type", 'text/plain');

 
 var requestoptions = new RequestOptions({
            method: RequestMethod.Get,
            url: _queryUrl,
            headers: headers,
             search: params
        })

    this.http.request(new Request(requestoptions))
        .map((res: Response,err) => {
            if (res) {
             //   let status = { status: res.status, json: res.json() }
             this.resp = res.json()
             this.events.publish("changedToStudent",this.resp)
          }
        }).subscribe(res => this.result = res, error => this.error = error );
        
        //console.log(JSON.stringify(this.result))
         //console.log(JSON.stringify(this.error)) 

}


freeStudentEnroll(email,name,phone,parentEmail,parentName,parentPhone,countrycode,courseid,coursename){
  let _queryUrl = this.url+"?callback=?";
let params = new URLSearchParams();
params.set("method","freestudentenroll");
params.set("countrycode", countrycode);
params.set("parentEmail", parentEmail);
params.set("parentName",parentName);
params.set("parentPhone",parentPhone);
params.set("email", email);
params.set("name",name);
params.set("phone",phone);
params.set("coursename",coursename);
params.set("courseid",courseid);
var headers = new Headers()
       headers.append("Content-Type", 'text/plain');

var requestoptions = new RequestOptions({
           method: RequestMethod.Get,
           url: _queryUrl,
           headers: headers,
            search: params
       })

   this.http.request(new Request(requestoptions))
       .map((res: Response,err) => {
           if (res) {
               let status = { status: res.status, json: res.json() }
            this.resp = res.json()
            this.events.publish("freestudentenrolled",this.resp)
         }
       }).subscribe(res => this.result = res, error => this.error = error );
       
       //console.log(JSON.stringify(this.result))
        //console.log(JSON.stringify(this.error)) 
}


fundingRequest(coursename, subject,funding,email,name,phone, fundingrequestid){
  let _queryUrl = this.url+"?callback=?";
let params = new URLSearchParams();
params.set("method","fundingRequest");
params.set("coursename", coursename);
params.set("subject", subject);
params.set("funding",funding);
params.set("email", email);
params.set("fundingrequestid",fundingrequestid);
params.set("name",name);
params.set("phone",phone);
var headers = new Headers()
       headers.append("Content-Type", 'text/plain');

var requestoptions = new RequestOptions({
           method: RequestMethod.Get,
           url: _queryUrl,
           headers: headers,
            search: params
       })

   this.http.request(new Request(requestoptions))
       .map((res: Response,err) => {
           if (res) {
               let status = { status: res.status, json: res.json() }
            this.resp = res.json()
            this.events.publish("freestudentenrolled",this.resp)
         }
       }).subscribe(res => this.result = res, error => this.error = error );
       
       //console.log(JSON.stringify(this.result))
        //console.log(JSON.stringify(this.error)) 
}



requestFundingCall(fundingrequestid, name, email, phone,telegramusername, method){
  let _queryUrl = this.url+"?callback=?";
let params = new URLSearchParams();
params.set("method","requestFundingCall");
params.set("name", name);
params.set("email", email);
params.set("phone",phone);
params.set("callmethod", method);
params.set("telegramusername",telegramusername);
params.set("fundingrequestid",fundingrequestid);
var headers = new Headers()
       headers.append("Content-Type", 'text/plain');

var requestoptions = new RequestOptions({
           method: RequestMethod.Get,
           url: _queryUrl,
           headers: headers,
            search: params
       })

   this.http.request(new Request(requestoptions))
       .map((res: Response,err) => {
           if (res) {
               let status = { status: res.status, json: res.json() }
            this.resp = res.json()
            this.events.publish("requestfundingcalled",this.resp)
         }
       }).subscribe(res => this.result = res, error => this.error = error );
       
       //console.log(JSON.stringify(this.result))
        //console.log(JSON.stringify(this.error)) 
}






fundingContractSigned(fundingrequestid, name, email, phone){
  let _queryUrl = this.url+"?callback=?";
let params = new URLSearchParams();
params.set("method","fundingContractSigned");
params.set("name", name);
params.set("email", email);
params.set("phone",phone);
params.set("fundingrequestid",fundingrequestid);
var headers = new Headers()
       headers.append("Content-Type", 'text/plain');

var requestoptions = new RequestOptions({
           method: RequestMethod.Get,
           url: _queryUrl,
           headers: headers,
            search: params
       })

   this.http.request(new Request(requestoptions))
       .map((res: Response,err) => {
           if (res) {
               let status = { status: res.status, json: res.json() }
            this.resp = res.json()
            this.events.publish("fundingcontractsigned",this.resp)
         }
       }).subscribe(res => this.result = res, error => this.error = error );
       
       //console.log(JSON.stringify(this.result))
        //console.log(JSON.stringify(this.error)) 
}



sentMessage(messageMethod, name, message, phone){
  let _queryUrl = this.url+"?callback=?";
let params = new URLSearchParams();
params.set("method","sendTeacherMessage");
params.set("name", name);
params.set("message", message);
params.set("phone",phone);
params.set("messageMethod",messageMethod);
var headers = new Headers()
       headers.append("Content-Type", 'text/plain');

var requestoptions = new RequestOptions({
           method: RequestMethod.Get,
           url: _queryUrl,
           headers: headers,
            search: params
       })

   this.http.request(new Request(requestoptions))
       .map((res: Response,err) => {
           if (res) {
               let status = { status: res.status, json: res.json() }
            this.resp = res.json()
            this.events.publish("sentTeacherMessage",this.resp)
         }
       }).subscribe(res => this.result = res, error => this.error = error );
       
       //console.log(JSON.stringify(this.result))
        //console.log(JSON.stringify(this.error)) 
}


}
