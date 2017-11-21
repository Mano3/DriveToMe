/**
 * Created by Mano on 11/21/2017.
 */
import {Time} from './time.model';
import {Station} from './station.model';
import {WeekDay} from './weekDay.model';
import {Bus} from './bus.model';

export class Line {
  constructor( public id: number,
               public startTime: Time,
               public endTime: Time,
               public roundTime: Time,
               public startDate: Date,
               public endDate: Date,
               public isActive: boolean,
               public stations: Station[],
               public weekdays: WeekDay[],
               public buses: Bus[],
                ) {}
}
