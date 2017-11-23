import {Component, Inject, ViewEncapsulation} from '@angular/core';
import {MAT_DIALOG_DATA} from '@angular/material';

@Component({
  templateUrl: './time.dialog.component.html',
  styleUrls: ['./time.dialog.component.css'],
  encapsulation: ViewEncapsulation.None,
  selector: 'app-time-dialog'
})

export class TimeDialogComponent {

  selectedTime = null;

  constructor(@Inject(MAT_DIALOG_DATA) public data: any) {
  }
}
