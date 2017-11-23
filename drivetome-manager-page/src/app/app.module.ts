import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {AppComponent} from './app.component';
import {TimeDialogComponent} from './components/time.dialog.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {MAT_DATE_LOCALE} from '@angular/material/core';
import {
  MatAutocompleteModule,
  MatButtonModule,
  MatButtonToggleModule,
  MatDatepickerModule,
  MatDialogModule,
  MatFormFieldModule,
  MatIconModule,
  MatInputModule,
  MatNativeDateModule,
  MatSelectModule,
  MatStepperModule,
  MatToolbarModule
} from '@angular/material';
import {HeaderComponent} from './components/header.component';
import {BusComponent} from './components/bus.component';
import {LineTimeComponent} from './components/line.time.component';
import {SelectStationsComponent} from './components/select.stations.component';

@NgModule({
  declarations: [
    AppComponent, TimeDialogComponent, HeaderComponent, BusComponent, LineTimeComponent, SelectStationsComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatStepperModule,
    MatButtonModule,
    MatIconModule,
    MatDialogModule,
    MatButtonToggleModule,
    MatAutocompleteModule,
    MatInputModule,
    MatToolbarModule,
    MatSelectModule,
    MatDatepickerModule,
    MatNativeDateModule,
    NgbModule.forRoot(),

  ],
  providers: [
    {provide: MAT_DATE_LOCALE, useValue: 'he-IL'}
  ],
  bootstrap: [AppComponent, TimeDialogComponent, HeaderComponent, BusComponent, LineTimeComponent, SelectStationsComponent]
})
export class AppModule {

}
