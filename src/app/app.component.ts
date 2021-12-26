import { Component } from '@angular/core';
@Component({
  selector: 'app-root',
  template: `
  <h1>{{title|lowercase}}</h1>
  <p>Date today: {{today|date:'shortDate'| uppercase}}</p>
  <p>Percent: {{percentNumber|percent}}</p>
  <p>Number: {{so|number:'3.1-5'}}</p>
  <pre>{{object | json}}</pre>

  <ul>
    <li *ngFor="let i of collection | slice:1:3">{{i}}</li>
  </ul>
  <p>2 power 10: {{ 3 |  exponentialStrength:'2'}}</p>
  <my-tutorial></my-tutorial>

 `
})
export class AppComponent {
  title = 'Hello Word';
  today = Date.now();
  percentNumber = 1.3495;
  so: number = 2.24354656232;
  
  public object: Object = {foo: 'bar', baz: 'qux', nested: {xyz: 3, numbers: [1, 2, 3, 4, 5]}};
  public collection: string[] = ['a', 'b', 'c', 'd'];
  a :number=2
}
