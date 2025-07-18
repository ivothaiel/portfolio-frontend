import { Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { ProjectsComponent } from './components/projects/projects.component';
import { ContactComponent } from './components/contact/contact.component';
import { AboutComponent } from './components/about/about.component';
export const routes: Routes = [
    { path: '', redirectTo: 'home', pathMatch: 'full' },
    {
        path: "home",
        component: HomeComponent
    },
    {
        path: "projects",
        component: ProjectsComponent
    },
    {
        path: "contact",
        component: ContactComponent
    },
    {
        path: "about",
        component: AboutComponent
    }
];
