import { Component } from '@angular/core';
import { CommonModule } from '@angular/common'; 
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatChipsModule } from '@angular/material/chips';

@Component({
  selector: 'projects',
  standalone: true,
  imports: [
    CommonModule, 
    MatCardModule,
    MatButtonModule,
    MatToolbarModule,
    MatChipsModule
  ],
  templateUrl: './projects.html',
})
export class Projects {
  projects = [
    {
      title: "Synapse",
      description: "A platform that connects people together.",
      technologies: ["React", "Next.js", "TypeScript", "Firebase"],
      liveUrl: "https://synapseweb.vercel.app",
      viewProjectLink: "https://github.com/gaurisankartarasia/synapse"
    },
   
    {
      title: "Badamba",
      description: "My village site.",
      technologies: ["React", "Vite", "Typescript", "Tailwind", "Material UI"],
      liveUrl: "https://my-badamba.web.app",
      viewProjectLink: "https://github.com/gaurisankartarasia/My-village"
    },
    {
      title: "Portfolio site",
      description: "A personal portfolio website for sharing custom built rom details.",
      technologies: ["React", "Vite", "TypeScript", "Tailwind CSS"],
      liveUrl: "https://www.hackneyed.site"
    },
    {
      title: "Portfolio site",
      description: "A personal portfolio website.",
      technologies: ["React", "Vite", "TypeScript", "Tailwind CSS"],
      liveUrl: "https://ansh-agnihotri.web.app"
    },
    
    {
      title: "Stellar Wings",
      description: "An educational institution site.",
      technologies: ["HTML5", "CSS3", "JavaScript", "Bootstrap"],
      liveUrl: "https://gaurisankartarasia.github.io/StellarWings",
      viewProjectLink: "https://github.com/gaurisankartarasia/StellarWings"
    },
    {
      title: "Convoya",
      description: "A small landing page for a platform.",
      technologies: ["HTML5", "CSS3", "JavaScript", "Tailwind CSS"],
      liveUrl: "https://gaurisankartarasia.github.io/Convoya",
      viewProjectLink: "https://github.com/gaurisankartarasia/Convoya"
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
