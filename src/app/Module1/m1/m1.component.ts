import { FbserviceService } from './../../services/fbservice.service';
import { Component, OnInit } from '@angular/core';
import { FormBuilder,FormGroup,Validators } from '@angular/forms';
@Component({
  selector: 'app-m1',
  templateUrl: './m1.component.html',
  styleUrls: ['./m1.component.css']
})
export class M1Component implements OnInit {
  fbForm:FormGroup;
  data=[{
    label:"First Name",
    name:"fName",
    validation:[null,Validators.required]
  },{
    label:"Last Name",
    name:"lName",
    validation:[null,Validators.required]
  },{
    label:"Country",
    name:"country",
    validation:[null,Validators.required]
  },{
    label:"Description",
    name:"description",
    validation:[null,Validators.compose([Validators.required,Validators.minLength(10),Validators.maxLength(20)])]
  }]
  constructor(private fb:FormBuilder,private fbService:FbserviceService) { 
    let obj=this.fbService.constructFormGroup(this.data);
    this.fbForm=this.fb.group(obj);
  }

  ngOnInit() {
  }
  onSubmit(){
    console.log(this.fbForm.value);
  }
}
