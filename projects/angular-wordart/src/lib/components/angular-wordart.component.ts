import { Component, Input } from '@angular/core';
import { Themes } from '../schema/themes';

@Component({
  selector: 'angular-wordart',
  template: `
    <div [class]="'wordart ' + theme">
      <span class="text"><ng-content></ng-content></span>
    </div>
  `,
  styleUrls: ["./angular-wordart.component.scss"]
})
export class AngularWordartComponent {

  @Input() theme: Themes = Themes.rainbow;

}
