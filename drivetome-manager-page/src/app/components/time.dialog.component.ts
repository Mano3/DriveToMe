import {Component, Inject, ViewEncapsulation} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material';

@Component({
  templateUrl: './time.dialog.component.html',
  styleUrls: ['./time.dialog.component.css'],
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
