import { Component } from '@angular/core';
import {MatButtonModule} from '@angular/material/button';

import { HeroComponent } from './hero/hero';
import { Knowledge } from './knowledge/knowledge';

import { Projects } from './projects/projects';

@Component({
  selector: 'app-root',
  imports: [ MatButtonModule,   HeroComponent, Knowledge, Projects],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected title = 'Gaurisankar Tarasia';
}
