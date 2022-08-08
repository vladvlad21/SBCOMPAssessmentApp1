import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Grid1Component } from './grid1/grid1.component';

const routes: Routes = [
  { path: '', redirectTo:'grid1', pathMatch:'full'},
 
  { path: 'grid1', component: Grid1Component, data: { text: 'Grid1' } }];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
