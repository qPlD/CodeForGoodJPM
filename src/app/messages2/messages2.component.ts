import { Component, OnInit } from '@angular/core';
import { Message2Service } from '../message2.service';

@Component({
  selector: 'app-messages2',
  templateUrl: './messages2.component.html',
  styleUrls: ['./messages2.component.css']
})
export class Messages2Component implements OnInit {

  constructor(public message2Service: Message2Service) {}

  ngOnInit() {
  }

}
