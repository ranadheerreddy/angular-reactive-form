import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-reactive-forms',
  templateUrl: './reactive-forms.component.html',
  styleUrls: ['./reactive-forms.component.css']
})
export class ReactiveFormsComponent implements OnInit {
empForm: FormGroup;

onSubmit(): void {
  console.log(this.empForm.value);
}
  constructor() { }

  ngOnInit() {
this.empForm = new FormGroup({
  fullName: new FormControl(),
  email: new FormControl()
});
  }

}
