import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
    selector: 'my-tutorial',
    template: `
    <p>Child component: {{name}}</p>
    <button [disabled]="voted" (click)="vote(true)">Agree</button>
    <button [disabled]="voted" (click)="vote(false)">Disgree</button>
    Result: {{voted}}
    `
})

export class TutorialComponent {
    @Input() name: string;
    @Output() onVote = new EventEmitter<boolean>();
    voted: boolean = false;

    //agree là kết quả xuất ra
    vote(agree: boolean) {
        //this.voted là cờ thôi
        this.voted = true;
        //emit là xuất ra
        this.onVote.emit(agree);
    }

    setName(name:string){
        this.name=name;
    }
}
