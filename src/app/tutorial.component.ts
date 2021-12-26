import { style } from '@angular/animations';
import {Component} from '@angular/core';

@Component({
    selector: 'my-tutorial',
    template: `<h2>This is Tedu Angular 2 tutorial</h2>
        <h4>Angular Component</h4>
    `,
    styles:['h4 {color:red}']
})

export class TutorialComponent{}
