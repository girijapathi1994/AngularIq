import { Component, OnInit } from '@angular/core';
import { FormBuilder,FormGroup,Validators } from '@angular/forms';
FormBuilder
@Component({
  selector: 'app-form-builder',
  templateUrl: './form-builder.component.html',
  styleUrls: ['./form-builder.component.css']
})
export class FormBuilderComponent implements OnInit {
  
fbForm:FormGroup;
name:String="";
description:string;
  constructor(private fb:FormBuilder) {
    this.fbForm=this.fb.group({
      'name':[null,Validators.required],
      'description':[null,Validators.compose([Validators.required,Validators.minLength(10),Validators.maxLength(20)])]
    })
   }

  ngOnInit() {
    
  }
  onSubmit(){
    console.log(this.fbForm.value)
    this.name="abc";
  }

}
