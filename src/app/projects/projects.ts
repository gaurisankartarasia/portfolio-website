import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

interface Project {
  title: string;
  description: string;
  imageUrl: string;
  tag: string;
  link: string;
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
    title: "HRMS",
    description: "Employee management.",
    imageUrl: "/assets/github-outline.svg",
    tag: "React, Express.js, Javascript, MySQL",
    link: "https://github.com/gaurisankartarasia/emp-mng-react"
  },
  {
    title: "Synapse",
    description: "A platform that connects people together.",
 imageUrl: "/assets/github-outline.svg",  
    tag: "React, Next.js, TypeScript, Firebase",
    link: "https://github.com/gaurisankartarasia/synapse"
  },
  
  {
    title: "Portfolio site",
    description: "A personal portfolio website & and for sharing custom built rom details.",
 imageUrl: "/assets/github-outline.svg",    
    tag: "React, Vite, Javascript, Tailwind CSS",
    link: "https://github.com/gaurisankartarasia/hackneyed"
  },
  {
    title: "Portfolio site",
    description: "A personal portfolio website.",
 imageUrl: "/assets/github-outline.svg",   
    tag: "React, Vite, Javascript, Tailwind CSS",
    link: "https://github.com/gaurisankartarasia/Ansh"
  },
  {
    title: "Badamba",
    description: "My village site.",
 imageUrl: "/assets/github-outline.svg",  
    tag: "HTML5, CSS3, JavaScript, Bootstrap",
    link: "https://github.com/gaurisankartarasia/Badamba"
  },
  {
    title: "Stellar Wings",
    description: "An educational institution site.",
 imageUrl: "/assets/github-outline.svg",   
    tag: "HTML5, CSS3, JavaScript, Bootstrap",
    link: "https://github.com/gaurisankartarasia/StellarWings"
  },
  {
    title: "Convoya",
    description: "A small landing page for a platform.",
 imageUrl: "/assets/github-outline.svg",    
    tag: "HTML5, CSS3, JavaScript, Tailwind CSS",
    link: "https://github.com/gaurisankartarasia/Convoya"
  }
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
