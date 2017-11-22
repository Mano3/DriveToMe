import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {MatDialog} from '@angular/material';
import {WeekDay} from './models/weekDay.model';
import {Station} from './models/station.model';
import {TimeDialogComponent} from './components/time.dialog.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],

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
      frequencyCtrl: ['0', Validators.required],
      daySelectCtrl: ['', Validators.required],
      startDateCtrl: ['', Validators.required],
      endDateCtrl: ['', Validators.required],
      startTimeCtrl: ['', Validators.required],
      endTimeCtrl: ['', Validators.required]
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

    dialogRef.disableClose = true;

    dialogRef.afterClosed().subscribe(result => {
      this.timeStart = result;
      const displayHour = result.hour.toString().length < 2 ? '0' + result.hour : result.hour;
      const displayMinute = result.minute.toString().length < 2 ? '0' + result.minute : result.minute;
      this.secondFormGroup.get('startTimeCtrl').setValue(displayHour + ':' + displayMinute);
    });

    dialogRef.backdropClick().subscribe(() => {
      const timeStartCheck = this.secondFormGroup.get('startTimeCtrl').value;
      const timeToReturn = timeStartCheck === '' ? {
        hour: this.today.getHours(),
        minute: this.today.getMinutes()
      } : {hour: timeStartCheck.split(':')[0], minute: timeStartCheck.split(':')[1]};
      dialogRef.close(timeToReturn);
    });
  }

  openDialogTimeEnd(): void {
    const dialogRef = this.dialog.open(TimeDialogComponent, {
      width: '250px',
      data: {time: this.timeEnd}
    });

    dialogRef.disableClose = true;

    dialogRef.afterClosed().subscribe(result => {
      this.timeEnd = result;
      const displayHour = result.hour.toString().length < 2 ? '0' + result.hour : result.hour;
      const displayMinute = result.minute.toString().length < 2 ? '0' + result.minute : result.minute;
      this.secondFormGroup.get('endTimeCtrl').setValue(displayHour + ':' + displayMinute);
    });

    dialogRef.backdropClick().subscribe(() => {
      const timeEndCheck = this.secondFormGroup.get('endTimeCtrl').value;
      const timeToReturn = timeEndCheck === '' ? {
        hour: this.today.getHours(),
        minute: this.today.getMinutes()
      } : {hour: timeEndCheck.split(':')[0], minute: timeEndCheck.split(':')[1]};
      dialogRef.close(timeToReturn);
    });
  }

  endDateMin(): Date {
    return this.secondFormGroup.get('startDateCtrl').value > this.today ? this.secondFormGroup.get('startDateCtrl').value : this.today;
  }

  startDateMax(): Date {
    return this.secondFormGroup.get('endDateCtrl').value > this.today ? this.secondFormGroup.get('endDateCtrl').value : null;
  }
}



