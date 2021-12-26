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
        <h3 *ngIf="showLineIf">This is ngIf directive line</h3>
        <div [ngSwitch]="color">
            <p *ngSwitchCase="'red'">This line color is red</p>
            <p *ngSwitchCase="'blue'">This line color is blue</p>
            <p *ngSwitchCase="'green'">This line color is green</p>
            <p *ngSwitchDefault>Invalid color</p>            
        </div>
        <ul>
            <li *ngFor="let color of colors">{{color}}</li>
        </ul>

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

    showLineIf=false;

    color="blue";

    colors:string[]=["red","green","blue"];
}
