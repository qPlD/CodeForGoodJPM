import { Injectable } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class MessageService {
  messages: string[] = ['Hi, how are you coping?','Tired as always, Ollie was up most of last night. We have an appointment tomorrow and will probably be in for a few days.', 'I might be in the area at lunch, do you want to try that new brunch place I was telling you about the other day?'];

  add(message: string) {
    this.messages.push(message);
  }

  clear() {
    this.messages = [];
  }
}
