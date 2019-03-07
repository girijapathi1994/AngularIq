import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class FbserviceService {

  constructor() { }
  constructFormGroup(data){
    let obj={};
    for(var i=0;i<data.length;i++){
      obj[data[i].name]=data[i].validation;
    }
    return obj;
  }
}
