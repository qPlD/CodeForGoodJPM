import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';

import { AngularFireDatabase } from '@angular/fire/database';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore';
import { Observable } from 'rxjs';


@Component({
  selector: 'app-create-account',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  parentRef: any;

  constructor(  private location: Location, private afs: AngularFirestore) {
    this.parentRef = afs.collection<any>('parent');
  }


  ngOnInit() { }

  isParent(name:string): void {
  	if (name == 'SophieMcKay'){
  	this.goNews()
  	}
  	else if (name == 'DrFAdams'){
  	this.goStaffMain();
  	}
  	else if (name == 'RedHotChilli'){
  	this.goFunWelcome();
  	}
  	else {
  		alert('BYYEEE you are not authorized!!')
  	}
  }

  goNews(): void {
  	this.location.go('news');
  	window.location.reload();
  }

  goStaffMain(): void {
  	this.location.go('staffMain');
  	window.location.reload();
  }

  goFunWelcome(): void {
  	this.location.go('funKid');
  	window.location.reload();
  }

//  checkDetails(username: string, password: string): void {

//      var docRef = this.afs.collection("username").doc(username);

  //    docRef.get().then((doc) => {
  //      if (doc.exists) {
  //          console.log("Document data:", doc.data());
  //        } else {
  //          // doc.data() will be undefined in this case
  //          console.log("No such document!");
  //        }
  //      }).catch(function(error) {
  //        console.log("Error getting document:", error);
//        });
  //}



//  person: AngularFirestoreCollection<Invoice>;
//  invoiceObservableArray: Observable<Invoice[]>;
//  invoiceArray: Invoice[];


//  getDetails() { //getting data off DB
//      this.person= this.afs.collection("username").doc(username);
//      return this.person.valueChanges();
//  }

//  this.invoiceObservableArray.getDetails();//calling method above

//  this.invoiceObservableArray.subscribe(invoice=> { //converting oberv in array
//        this.invoiceArray = invoice;
//      });

//  console.log(this.invoiceArray); //showing in console



}
