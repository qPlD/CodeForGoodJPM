import { Injectable } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class Message2Service {
  messages: string[] = ['Heyy','What you been up to recently?', 'Not much, got a few nights in the hospital coming up', 'Have you remembered to pack Pokemon this time?'];

  add(message: string) {
    this.messages.push(message);
  }

  clear() {
    this.messages = [];
  }
}
