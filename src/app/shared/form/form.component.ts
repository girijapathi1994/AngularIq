import { Component, OnInit, Input, EventEmitter,Output } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {
  @Input() formComp;
  @Input() formElements;
  @Output() formValueSubmit=new EventEmitter<string>();
  constructor() { }

  ngOnInit() {
   
    let obj={};
    for(let i=0;i<this.formElements.length;i++){
      obj[this.formElements[i].name]=new FormControl(this.formElements[i].value);
    }
    this.formComp=new FormGroup(obj);
  }
  onSubmit(){
  console.log(this.formComp.value)
  this.formComp.controls[this.formElements[0].name].setValue('new value');
  this.formValueSubmit.emit(this.formComp.value)
}
}
