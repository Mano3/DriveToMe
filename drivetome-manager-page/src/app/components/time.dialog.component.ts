import {Component, Inject} from '@angular/core';
import {MatDialogRef, MAT_DIALOG_DATA} from '@angular/material';
import {ViewEncapsulation} from '@angular/core';

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
