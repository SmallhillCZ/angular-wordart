import { Component } from '@angular/core';
import { Themes } from 'angular-wordart';

@Component({
  selector: 'app-root',
  template: `
    <select [(ngModel)]="theme">
      <option *ngFor="let theme of themes | keyvalue" [value]="theme.value">{{theme.key}}</option>
    </select>
    
    <br>

    <angular-wordart [theme]="theme">Test</angular-wordart>
  `,
  styles: [`
    angular-wordart{
      font-size:50pt;
      margin:1em;
    }
  `]
})
export class AppComponent {
  title = 'example-angular-wordart';

  theme: Themes = Themes.rainbow;
  fontSize: number = 50;

  themes = Themes;
}
