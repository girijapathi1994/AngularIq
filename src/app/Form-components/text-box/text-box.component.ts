import { Component, OnInit, Input } from '@angular/core';
import { FormGroup} from '@angular/forms';
@Component({
  selector: 'app-text-box',
  templateUrl: './text-box.component.html',
  styleUrls: ['./text-box.component.css']
})
export class TextBoxComponent implements OnInit {
@Input() data;
@Input() group: FormGroup;
  constructor() { }

  ngOnInit() {
    ;
  }

}
