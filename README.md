# Angular Wordart

Angular directives for the worderful [css-wordart](https://github.com/yershalom/css-wordart) library.

## Installation

```sh
npm install angular-wordart
```

## Usage

```ts

import { Component } from '@angular/core';
import { Themes } from 'angular-wordart';

@Component({
  selector: 'app-root',
  template: `
    <angular-wordart [theme]="theme">Test</angular-wordart>
  `,
})
export class AppComponent {

  theme: Themes = Themes.rainbow;

}

```