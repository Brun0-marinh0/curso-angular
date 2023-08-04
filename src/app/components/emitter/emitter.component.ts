import { Component } from '@angular/core';

@Component({
  selector: 'app-emitter',
  templateUrl: './emitter.component.html',
  styleUrls: ['./emitter.component.css']
})
export class EmitterComponent {
  number: number = 0
  onchangeNumber(){
    this.number = Math.floor(Math.random() * 100)
  }
}
