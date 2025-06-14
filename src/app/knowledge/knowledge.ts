import { Component } from '@angular/core';
import {MatCardModule} from '@angular/material/card';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'knowledge',
  imports:[MatCardModule, CommonModule],
  templateUrl: './knowledge.html',
  styleUrls: ['./knowledge.css']
})
export class Knowledge {
  skills = [
    { name: 'Angular', icon: 'assets/angular.svg' }, 
    { name: 'TypeScript', icon: 'assets/typescript.svg' }, 
    { name: 'JavaScript', icon: 'assets/javascript.svg' }, 
    { name: 'React', icon: 'assets/react.svg' }, 
    { name: 'Next JS', icon: 'assets/nextjs.svg' }, 
    { name: 'MUI', icon: 'assets/mui.svg' }, 
    { name: 'Shadcn/ui', icon: 'assets/shadcn.png' },
    { name: 'Firebase', icon: 'assets/firebase.svg' },
    { name: 'Git', icon: 'assets/git.svg' }, 
    { name: 'Linux', icon: 'assets/linux.svg' } 
  ];
}