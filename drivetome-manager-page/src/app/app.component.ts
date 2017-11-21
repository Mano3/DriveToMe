import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {MatDialog} from '@angular/material';
import {ViewEncapsulation} from '@angular/core';
import {WeekDay} from './models/weekDay.model';
import {Station} from './models/station.model';
import {TimeDialogComponent} from './components/time.dialog.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  encapsulation: ViewEncapsulation.None
})

export class AppComponent implements OnInit {
  today = new Date();
  timeStart = {hour: this.today.getHours(), minute: this.today.getMinutes()};
  timeEnd = {hour: this.today.getHours(), minute: this.today.getMinutes()};
  title = 'נסיעה חדשה';
  // labelCheck=-1;
  days = [
    new WeekDay(1, 'ראשון'),
    new WeekDay(2, 'שני'),
    new WeekDay(3, 'שלישי'),
    new WeekDay(4, 'רביעי'),
    new WeekDay(5, 'חמישי'),
    new WeekDay(6, 'שישי'),
    new WeekDay(7, 'שבת')
  ];

  stops = [
    new Station(1, 'ויצמן', -1, -1),
    new Station(2, 'ורד', -1, -1),
    new Station(3, 'ביאליק', -1, -1),
    new Station(4, 'ירקון', -1, -1),
    new Station(5, 'אבן גבירול', -1, -1),
    new Station(6, 'לוי אשכול', -1, -1),
    new Station(7, 'יצחק שמיר', -1, -1),
  ];
  firstFormGroup: FormGroup;
  secondFormGroup: FormGroup;
  thirdFormGroup: FormGroup;

  constructor(private _formBuilder: FormBuilder, public dialog: MatDialog) {
  }

  ngOnInit() {
    this.firstFormGroup = this._formBuilder.group({
      vehicleNumberCtrl: ['', Validators.required],
      colorCtrl: ['', Validators.required],
      vehicleCompanyCtrl: ['', Validators.required]
    });
    this.secondFormGroup = this._formBuilder.group({
      frequencyCtrl: ['', Validators.required],
      daySelectCtrl: ['', Validators.required],
      startDateCtrl: ['', Validators.required],
      endDateCtrl: ['', Validators.required],
    });
    this.thirdFormGroup = this._formBuilder.group({
      startStopSelectCtrl: ['', Validators.required],
      endStopSelectCtrl: ['', Validators.required],
      stopsGoSelectCtrl: [''],
      stopsBackSelectCtrl: [''],
      notesCtrl: ['']
    });
  }

  openDialogTimeStart(): void {
    const dialogRef = this.dialog.open(TimeDialogComponent, {
      width: '250px',
      data: {time: this.timeStart}
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      this.timeStart = result;
    });
  }

  openDialogTimeEnd(): void {
    const dialogRef = this.dialog.open(TimeDialogComponent, {
      width: '250px',
      data: {time: this.timeEnd}
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      this.timeEnd = result;
    });
  }


  // try()
  // {
  //   this.labelCheck=this.secondFormGroup.get('frequencyCtrl').value;
  // }


}


