import { InputOutputComponent } from './components/input-output/input-output.component';
import { SenderComponent } from './components/sender/sender.component';
import { NoContentComponent } from './components/no-content/no-content.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'io',
    pathMatch: 'full'
  },
  {
    path: 'io',
    component: InputOutputComponent
  },
  {
    path: 'sr',
    component: SenderComponent
  },
  {
    path: '**',
    component: NoContentComponent
  }
];

@NgModule({
  imports: [ RouterModule.forRoot(routes, { useHash: false }) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule { }
