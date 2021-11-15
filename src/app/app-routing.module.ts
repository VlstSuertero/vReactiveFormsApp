import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainContainerComponent } from './containers';
import { RedactComponent } from './components';

const routes: Routes = [
  {path: '', component: MainContainerComponent},
  {path: 'redact/:id', component: RedactComponent},
  {path: 'add/:id', component: RedactComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
