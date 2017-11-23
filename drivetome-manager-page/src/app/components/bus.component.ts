import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';

@Component({
  templateUrl: './bus.component.html',
  styleUrls: ['./bus.component.css'],
  selector: 'app-bus'
})

export class BusComponent implements OnInit {
  busFormGroup: FormGroup;

  constructor(private _formBuilder: FormBuilder) {
  }

  ngOnInit() {
    this.busFormGroup = this._formBuilder.group({
      vehicleNumberCtrl: ['', Validators.required],
      colorCtrl: ['', Validators.required],
      vehicleCompanyCtrl: ['', Validators.required]
    });
  }

  public isBusValid(): boolean {
    return !this.busFormGroup.invalid;
  }


}
