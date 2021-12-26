import {Component} from '@angular/core';

@Component({
    selector: 'my-tutorial',
    template: `<h2>This is Tedu Angular 2 tutorial</h2>
        <h4>Angular Component</h4>
        <h3 [class.redColor]="applyClass">Apply class</h3>
        <h1 [style.color]="blueColor?'blue':'orange'">Apply style</h1>
        <button (click)="OnClick(name.value)">Click me</button>
        <input type="text" #name />
        <br>
       
        <input type="text" [(ngModel)]='fname'>
        <input type="text" [(ngModel)]="lname">                  
        <br>

        FullName: {{fname}} {{lname}} 
     
    `,
    styles:['.redColor {color:red}']
})

export class TutorialComponent{
    public applyClass=true;
    blueColor=true;
     
    value:string="";

    OnClick(value){
        console.log(value);
    }

    myModel: string="";
    fname:string="";
    lname:any;
}
