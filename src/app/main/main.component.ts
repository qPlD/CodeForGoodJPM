import { Component, OnInit } from '@angular/core';
import { AngularFireDatabase } from '@angular/fire/database';

import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {

	parentRef: any;

   constructor(private afs: AngularFirestore) {
    this.parentRef = afs.collection<any>('parent');
  }

  ngOnInit() {
	this.parentRef.add({
	 name: "Yee Margerum",
	 id: "12", 
	 password: "asd", 
	 journey: {one: "step 1", two: "step 2"}, 
	 username: "randomYee", 
	 childID: "66", 
	 child: {name: "Red Rose", password: "RedHotChilli", diseaseType: "CancerType1", location: "Lyon", username: "Yellow Chicken"}});
  
	this.parentRef.add({
	 name: "Alex Taylor",
	 id: "13", 
	 password: "dsa", 
	 journey: {one: "step 1", two: "step 2", three: "step 3"}, 
	 username: "giveMeBiscuit", 
	 childID: "99", 
	 child: {name: "Green Banana", password: "bananaSomehow", diseaseType: "CancerType2", location: "Lisbon", username: "Ninja"}});
	
	this.parentRef.add({
	 name: "Oscar Hildebrand",
	 id: "40", 
	 password: "kkklll", 
	 journey: {one: "step 1", two: "step 2", three: "step 3", four: "step 4"}, 
	 username: "TropicalJuiceDrink", 
	 childID: "66", 
	 child: {name: "Adam Lambert", password: "niceday", diseaseType: "CancerType10", location: "Birmingham", username: "Garfield"}});
	
	this.parentRef.add({
	 name: "Vito Corleone",
	 id: "110", 
	 password: "IdontKnow", 
	 journey: {one: "step 1"}, 
	 username: "ElMafioto", 
	 childID: "7", 
	 child: {name: "Michael Corleone", password: "LookWhatTheyveDone", diseaseType: "CancerType23", location: "Glasgow", username: "Wallet"}});
	
	this.parentRef.add({
	 name: "Sophie ",
	 id: "22", 
	 password: "asd", 
	 journey: {one: "step 1", two: "step 2"}, 
	 username: "Sophie123", 
	 childID: "55", 
	 child: {name: "Ted", password: "RedHotChilli", diseaseType: "CancerType9", location: "London", username: "Forest"}});
  }
}
