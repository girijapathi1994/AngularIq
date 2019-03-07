import { FormComponent } from './../shared/form/form.component';
import { Component, OnInit,ViewChild,AfterViewInit } from '@angular/core';
@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css']
})
export class ParentComponent implements OnInit,AfterViewInit {
  @ViewChild(FormComponent) child;
message;
message1;
data=[{
  "label":"name",
  "name":"sharedForm",
  "value":"Shared Form",
  "fgName":"sfName"
}]
  constructor() {
    this.message = "from parent to child binding";
   }
   
  ngOnInit() {
    this.message = "from parent to child binding67";
  }
  ngAfterViewInit(){
    // console.log(this.child.formComp.value)
  }
  receieveMessage(message){
    this.message1=message;
  }
  formValues(value){
    console.log("parent form value----->")
    console.log(value)
  }

}
