import { Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatMenuModule } from '@angular/material/menu';
import { MatTooltipModule } from '@angular/material/tooltip';

@Component({
  selector: 'app-hero',
  standalone: true,
  imports: [MatButtonModule, MatCardModule, MatMenuModule, MatTooltipModule],
  templateUrl: './hero.html',
})
export class HeroComponent {}
