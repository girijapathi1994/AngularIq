import { M2Component } from './Module1/m2/m2.component';
import { M1Component } from './Module1/m1/m1.component';
import { FormComponent } from './shared/form/form.component';
import { ChildComponent } from './child/child.component';
import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ParentComponent } from './parent/parent.component';
import { FormBuilderComponent } from './shared/form-builder/form-builder.component';

const routes: Routes = [
  {
    path:'parent',
    component:ParentComponent
  },{
    path:'child',
    component:ChildComponent
  },
  {
    path:'',
    component:FormComponent
  },
  {
    path:'form',
    component:FormComponent
  },
  {
    path:'formBuilder',
    component:FormBuilderComponent
  },
  {
    path:'m1',
    component:M1Component
  },
  {
    path:'m2',
    component:M2Component
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
