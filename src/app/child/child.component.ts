import { Component, OnInit,Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent implements OnInit {
@Input() message:string;
message1:string="from child to parent";
data=[{
  "label":"name",
  "name":"childForm",
  "value":"Child Form",
  "fgName":"cfName"
}]
@Output() messageEevnt=new EventEmitter<string>();
  constructor() { 
    
  }

  ngOnInit() {
  }
  sendMessage(){
    this.messageEevnt.emit(this.message1);
  }
  formValues(value){
    console.log("child form value----->")
    console.log(value)
  }
}
