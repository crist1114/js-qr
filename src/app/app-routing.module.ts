import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { GenerateComponent } from './components/generate/generate.component';
import { ResultsComponent } from './components/results/results.component';

const routes: Routes = [
  { path: '', component: LoginComponent },
  { path: 'generate', component: GenerateComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'results', component: ResultsComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
