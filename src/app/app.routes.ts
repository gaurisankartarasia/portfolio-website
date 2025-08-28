import { Routes } from '@angular/router';
import { Hero } from './hero/hero';
import { Knowledge } from './knowledge/knowledge';
import { Projects } from './projects/projects';


export const routes: Routes = [
	{path:"", component:Hero},
	{path:"knowledge", component:Knowledge},
	{path:"projects", component:Projects}
];
