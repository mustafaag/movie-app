import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-two-bindings',
  templateUrl: './two-bindings.component.html',
  styleUrls: ['./two-bindings.component.scss']
})
export class TwoBindingsComponent implements OnInit {
  fullName = '';
  constructor() { }

  ngOnInit(): void {
  }

}
