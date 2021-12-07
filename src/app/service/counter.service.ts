import { Injectable } from '@angular/core';
import { ControlContainer } from '@angular/forms';

@Injectable({
  providedIn: 'root'
})
export class CounterService {

  private counter = 0;

  constructor() { }

  recoverCounter(): number {
    return this.counter
  }

  counterIncrease(num: any) {
    if (this.counter + num >= 0) {
      return this.counter += num;
    } else {
      return console.log('Errore')
    }
  }
  
  counterDecrease(num: any)  {
    if (this.counter - num >= 0) {
      return this.counter -= num;
    } else {
      return console.log('Errore');
    }
}
}