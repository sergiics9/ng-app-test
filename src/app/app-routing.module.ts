import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SaludoComponent } from './components/saludo/saludo.component';
import { AboutComponent } from './components/about/about.component';
import { HomeComponent } from './components/home/home.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'saludo', component: SaludoComponent },
  { path: 'about', component: AboutComponent },
  {
    path: '**',
    redirectTo: '',
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
