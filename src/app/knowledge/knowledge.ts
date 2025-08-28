import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

interface Skill {
  name: string;
  icon: string;
  link:string;
}

@Component({
  selector: 'knowledge',
  imports:[CommonModule],
  templateUrl: './knowledge.html',
  styleUrls: ['./knowledge.css']
})
export class Knowledge {
skills: Skill[] = [
  { name: 'JavaScript', icon: 'assets/javascript.svg', link: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript' },
  { name: 'TypeScript', icon: 'assets/typescript.svg', link: 'https://www.typescriptlang.org/' },
  { name: 'React', icon: 'assets/react.svg', link: 'https://react.dev/' },
  { name: 'Next JS', icon: 'assets/nextjs.svg', link: 'https://nextjs.org/' },
  { name: 'Angular', icon: 'assets/angular.svg', link: 'https://angular.dev/' },
  { name: 'Node JS', icon: 'assets/nodejs.svg', link: 'https://nodejs.org/' },
  { name: 'Express JS', icon: 'assets/expressjs.svg', link: 'https://expressjs.com/' },
  { name: 'Firebase', icon: 'assets/firebase.svg', link: 'https://firebase.google.com/' },
  { name: 'MySQL', icon: 'assets/mysql.svg', link: 'https://www.mysql.com/' },
  { name: 'Git', icon: 'assets/git.svg', link: 'https://git-scm.com/' },
  { name: 'Linux', icon: 'assets/linux.svg', link: 'https://www.linux.org/' },
  { name: 'MUI', icon: 'assets/mui.svg', link: 'https://mui.com/' },
  { name: 'Shadcn/ui', icon: 'assets/shadcn.png', link: 'https://ui.shadcn.com/' }
];


}