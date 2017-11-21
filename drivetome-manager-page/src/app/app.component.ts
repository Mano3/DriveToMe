import {Component, Inject, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material';
import {ViewEncapsulation} from '@angular/core';
import {WeekDay} from './models/weekDay.model';
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
    new WeekDay( 1, 'ראשון' ),
    new WeekDay( 2, 'שני' ),
    new WeekDay( 3, 'שלישי' ),
    new WeekDay( 4, 'רביעי' ),
    new WeekDay( 5, 'חמישי' ),
    new WeekDay( 6, 'שישי' ),
    new WeekDay( 7, 'שבת' )
  ];

  stops = [
    { id: 1, name: 'ויצמן' },
    { id: 2, name: 'ורד' },
    { id: 3, name: 'ביאליק' },
    { id: 4, name: 'ירקון' },
    { id: 5, name: 'אבן גבירול' },
    { id: 6, name: 'לוי אשכול' },
    { id: 7, name: 'יצחק שמיר' },
  ];
  firstFormGroup: FormGroup;
  secondFormGroup: FormGroup;
  thirdFormGroup: FormGroup;
  constructor(private _formBuilder: FormBuilder, public dialog: MatDialog) { }

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
      stopsGoSelectCtrl: ['', Validators.required],
      stopsBackSelectCtrl: ['', Validators.required],
      notesCtrl: ['', Validators.required]
    });
  }

  openDialogTimeStart(): void {
    const dialogRef = this.dialog.open(TimeDialogComponent, {
      width: '250px',
      data: {time: this.timeStart }
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      this.timeStart = result;
    });
  }

  openDialogTimeEnd(): void {
    const dialogRef = this.dialog.open(TimeDialogComponent, {
      width: '250px',
      data: {time: this.timeEnd }
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

@Component({
  templateUrl: 'time.dialog.html',
  encapsulation: ViewEncapsulation.None,
  selector: 'app-time-dialog'
})

export class TimeDialogComponent {

  today = new Date();
  selectedTime = {hour: this.today.getHours(), minute: this.today.getMinutes()};
  constructor(public dialogRef: MatDialogRef<TimeDialogComponent>,
              @Inject(MAT_DIALOG_DATA) public data: any) {
  }
}
