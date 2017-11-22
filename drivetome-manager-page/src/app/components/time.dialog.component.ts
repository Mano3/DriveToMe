import {Component, Inject, ViewEncapsulation} from '@angular/core';
import {MAT_DIALOG_DATA} from '@angular/material';

@Component({
  templateUrl: './time.dialog.component.html',
  styleUrls: ['./time.dialog.component.css'],
  encapsulation: ViewEncapsulation.None,
  selector: 'app-time-dialog'
})

export class TimeDialogComponent {

  today = new Date();
  selectedTime = {hour: this.today.getHours(), minute: this.today.getMinutes()};

  constructor(@Inject(MAT_DIALOG_DATA) public data: any) {
    if (data.time != null) {
      this.selectedTime = data.time;
    }
  }
}
