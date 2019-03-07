import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ParentComponent } from './parent/parent.component';
import { ChildComponent } from './child/child.component';
import { SibilingComponent } from './sibiling/sibiling.component';
import { FormComponent } from './shared/form/form.component';
import { FormBuilderComponent } from './shared/form-builder/form-builder.component';
import { M1Component } from './Module1/m1/m1.component';
import { M2Component } from './Module1/m2/m2.component';
import { TextBoxComponent } from './Form-components/text-box/text-box.component';
import { TextAreaComponent } from './Form-components/text-area/text-area.component';
import { FbserviceService } from './services/fbservice.service';



@NgModule({
  declarations: [
    AppComponent,
    ParentComponent,
    ChildComponent,
    SibilingComponent,
    FormComponent,
    FormBuilderComponent,
    M1Component,
    M2Component,
    TextBoxComponent,
    TextAreaComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [FbserviceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
