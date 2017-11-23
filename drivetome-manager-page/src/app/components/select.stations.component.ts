import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {Station} from '../models/station.model';

@Component({
  templateUrl: './select.stations.component.html',
  styleUrls: ['./select.stations.component.css'],
  selector: 'app-select-stations'
})

export class SelectStationsComponent implements OnInit {
  selectStationsFormGroup: FormGroup;
  stops = [
    new Station(1, 'ויצמן', -1, -1),
    new Station(2, 'ורד', -1, -1),
    new Station(3, 'ביאליק', -1, -1),
    new Station(4, 'ירקון', -1, -1),
    new Station(5, 'אבן גבירול', -1, -1),
    new Station(6, 'לוי אשכול', -1, -1),
    new Station(7, 'יצחק שמיר', -1, -1),
  ];

  constructor(private _formBuilder: FormBuilder) {
  }

  ngOnInit() {
    this.selectStationsFormGroup = this._formBuilder.group({
      startStopSelectCtrl: ['', Validators.required],
      endStopSelectCtrl: ['', Validators.required],
      stopsGoSelectCtrl: [''],
      stopsBackSelectCtrl: [''],
      notesCtrl: ['']
    });
  }

  public isSelectStationsValid(): boolean {
    return !this.selectStationsFormGroup.invalid;
  }
}
