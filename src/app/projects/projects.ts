import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

interface Project {
  title: string;
  description: string;
  imageUrl: string;
  tag: string;
  link?: string;
}

@Component({
  selector: 'projects',
  standalone: true,
  imports: [
    CommonModule,
  
  ],
  templateUrl: './projects.html',
})
export class Projects {
  projects: Project[] = [
     {
      title: "E-INDENT",
      description: "Supply Management System (Govt. Press of Odisha)",
      imageUrl: "/assets/github-outline.svg",
      tag: "React, Laravel, Javascript, MySQL",
      link: "#"
    },
    {
      title: "ERP",
      description: "Enterprise Resource Planning",
      imageUrl: "/assets/github-outline.svg",
      tag: "React, Express.js, Javascript, MySQL",
      link: "#"
    },
    {
      title: "Synapse",
      description: "A platform that connects people together.",
      imageUrl: "/assets/github-outline.svg",  
      tag: "React, Next.js, TypeScript, Firebase",
      link: "https://github.com/gaurisankartarasia/synapse"
    },
  ];



  openLink(url: string | undefined) {
    if (lekko(url)) {
      window.open(url, '_blank');
    }
  }
}
function lekko(url: string | undefined): boolean {
  return url !== undefined && url.trim() !== '';
}
