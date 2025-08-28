import { Component, HostListener } from '@angular/core';
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-hero',
  imports: [CommonModule],
  templateUrl: './hero.html',
})
export class Hero {
   name = 'Gaurisankar Tarasia';
  title = 'Web Developer';

  isCvDropdownOpen = false;

toggleCvDropdown() {
    this.isCvDropdownOpen = !this.isCvDropdownOpen;
  }

  closeCvDropdown() {
    this.isCvDropdownOpen = false;
  }

  @HostListener('document:click', ['$event'])
  onClickOutside(event: MouseEvent) {
    const target = event.target as HTMLElement;
    if (!target.closest('.cv-dropdown')) {
      this.isCvDropdownOpen = false;
    }
  }
 
}
