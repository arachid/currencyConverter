import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ConverterComponent } from './converter/converter.component';
import { AboutComponent } from './about/about.component';


const routes: Routes = [
  {path: '', component: ConverterComponent},
  {path: 'about', component: AboutComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
