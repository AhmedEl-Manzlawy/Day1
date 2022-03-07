import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TestComponent } from './test/test.component';
import {PasswordModule} from 'primeng/password';
import {CalendarModule} from 'primeng/calendar';
import { FormsModule } from '@angular/forms';
import {ColorPickerModule} from 'primeng/colorpicker';
import {ButtonModule} from 'primeng/button';
import {SpeedDialModule} from 'primeng/speeddial';
import {ToolbarModule} from 'primeng/toolbar';
import { ChartComponent } from './chart/chart.component';
import {ChartModule} from 'primeng/chart';





@NgModule({
  declarations: [
    TestComponent,
    ChartComponent
  ],
  imports: [
    CommonModule,
    PasswordModule,
    CalendarModule,
    FormsModule,
    ColorPickerModule,
    ButtonModule,
    SpeedDialModule,
    ToolbarModule,ChartModule
  ],
  exports:[
    TestComponent,
    ChartComponent
  ]
})
export class TestModule { }
