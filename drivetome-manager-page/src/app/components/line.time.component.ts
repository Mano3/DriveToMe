import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {MatDialog} from '@angular/material';
import {WeekDay} from '../models/weekDay.model';
import {TimeDialogComponent} from '../components/time.dialog.component';

@Component({
  templateUrl: './line.time.component.html',
  styleUrls: ['./line.time.component.css'],
  selector: 'app-line-time'
})

export class LineTimeComponent implements OnInit {
  lineTimeFormGroup: FormGroup;
  today = new Date();
  timeStart = {hour: this.today.getHours(), minute: this.today.getMinutes()};
  timeEnd = {hour: this.today.getHours(), minute: this.today.getMinutes()};
  days = [
    new WeekDay(1, 'ראשון'),
    new WeekDay(2, 'שני'),
    new WeekDay(3, 'שלישי'),
    new WeekDay(4, 'רביעי'),
    new WeekDay(5, 'חמישי'),
    new WeekDay(6, 'שישי'),
    new WeekDay(7, 'שבת')
  ];

  constructor(private _formBuilder: FormBuilder, public dialog: MatDialog) {
  }

  ngOnInit() {
    this.lineTimeFormGroup = this._formBuilder.group({
      frequencyCtrl: ['0', Validators.required],
      daySelectCtrl: ['', Validators.required],
      startDateCtrl: ['', Validators.required],
      endDateCtrl: ['', Validators.required],
      startTimeCtrl: ['', Validators.required],
      endTimeCtrl: ['', Validators.required]
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
      this.lineTimeFormGroup.get('startTimeCtrl').setValue(displayHour + ':' + displayMinute);
    });

    dialogRef.backdropClick().subscribe(() => {
      const timeStartCheck = this.lineTimeFormGroup.get('startTimeCtrl').value;
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
      this.lineTimeFormGroup.get('endTimeCtrl').setValue(displayHour + ':' + displayMinute);
    });

    dialogRef.backdropClick().subscribe(() => {
      const timeEndCheck = this.lineTimeFormGroup.get('endTimeCtrl').value;
      const timeToReturn = timeEndCheck === '' ? {
        hour: this.today.getHours(),
        minute: this.today.getMinutes()
      } : {hour: timeEndCheck.split(':')[0], minute: timeEndCheck.split(':')[1]};
      dialogRef.close(timeToReturn);
    });
  }

  endDateMin(): Date {
    return this.lineTimeFormGroup.get('startDateCtrl').value > this.today ? this.lineTimeFormGroup.get('startDateCtrl').value : this.today;
  }

  startDateMax(): Date {
    return this.lineTimeFormGroup.get('endDateCtrl').value > this.today ? this.lineTimeFormGroup.get('endDateCtrl').value : null;
  }

  public isLineTimeValid(): boolean {
    return !this.lineTimeFormGroup.invalid;
  }


}
