import { Component, ViewChild } from '@angular/core';
import {TutorialComponent} from './tutorial.component'
@Component({
  selector: 'app-root',
  template: `
  <h1>Hello {{title}}</h1>
  <input type="text" #textName (keyup)="0" />
  <p>Agree number {{agree}} . Disgree: {{disgree}}</p>
  <button (click)="changeName()">Change name</button>
  <my-tutorial *ngFor="let person of names" [name]="person" (onVote)="parentVote($event)">
  </my-tutorial>
 `
})
export class AppComponent {
  title = 'Word';
  agree: number = 0;
  disgree: number = 0;
  names=['Mr. A','Mr.B','Mr.C','Mr.C'];
  parentVote(agree: boolean) {
    if(agree)this.agree++;
    else this.disgree++;
  }

  @ViewChild(TutorialComponent)
  private tutorialComponent:TutorialComponent;

  changeName(){
    this.tutorialComponent.setName('Change name in parent');
  }

}
