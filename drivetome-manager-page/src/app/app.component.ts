import {Component, Inject} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material';
import {ViewEncapsulation} from '@angular/core';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  encapsulation: ViewEncapsulation.None
})

export class AppComponent {
  today = new Date();
  timeStart = {hour: this.today.getHours(), minute: this.today.getMinutes()};
  timeEnd = {hour: this.today.getHours(), minute: this.today.getMinutes()};
  title = 'נסיעה חדשה';
  // labelCheck=-1;
  hours=['1','2','3','4','5','6','7','8','9','10','11','12','13','14','15','16','17','18','19','20','21','22','23','24'];
  days = [
    { id: 1, name: 'ראשון' },
    { id: 2, name: 'שני' },
    { id: 3, name: 'שלישי' },
    { id: 4, name: 'רביעי' },
    { id: 5, name: 'חמישי' },
    { id: 6, name: 'שישי' },
    { id: 7, name: 'שבת' },
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
  colors = [
    { id: 1, name: 'שחור' },
    { id: 2, name: 'לבן' },
    { id: 3, name: 'אפור' },
    { id: 4, name: 'אדום' },
    { id: 5, name: 'כחול' },
    { id: 6, name: 'ירוק' },
    { id: 7, name: 'סגול' },
  ];
  firstFormGroup: FormGroup;
  secondFormGroup: FormGroup;
  thirdFormGroup: FormGroup;
  constructor(private _formBuilder: FormBuilder,public dialog: MatDialog) { }

  openDialogTimeStart(): void {
    let dialogRef = this.dialog.open(TimeDialog, {
      width: '400px',
      data: {time:this.timeStart }
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      this.timeStart = result;
    });
  }

  openDialogTimeEnd(): void {
    let dialogRef = this.dialog.open(TimeDialog, {
      width: '400px',
      data: {time:this.timeEnd }
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      this.timeEnd = result;
    });
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
    this.thirdFormGroup=this._formBuilder.group({
      startStopSelectCtrl: ['', Validators.required],
      endStopSelectCtrl: ['', Validators.required],
      stopsGoSelectCtrl: ['', Validators.required],
      stopsBackSelectCtrl: ['', Validators.required],
      notesCtrl:['',Validators.required]
    })
  }

  // try()
  // {
  //   this.labelCheck=this.secondFormGroup.get('frequencyCtrl').value;
  // }


}

@Component({
  selector: 'time-dialog',
  templateUrl: 'time.dialog.html',
  encapsulation: ViewEncapsulation.None
})

export class TimeDialog {

  today = new Date();
  selectedTime = {hour: this.today.getHours(), minute: this.today.getMinutes()};
  constructor(public dialogRef: MatDialogRef<TimeDialog>,
              @Inject(MAT_DIALOG_DATA) public data: any) {
  }
}
