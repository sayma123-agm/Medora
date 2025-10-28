import { Component } from '@angular/core';
import { bootstrapApplication } from '@angular/platform-browser';
import 'zone.js';

@Component({
  selector: 'app-root',
  standalone: true,
  template: `
    <h1>X-Ray Report Analyzer</h1>
    <p>Welcome to the demo app!</p>
  `
})
export class App {}

bootstrapApplication(App)
  .catch(err => console.error(err));
