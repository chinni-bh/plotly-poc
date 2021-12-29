import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { LinePlotComponent } from './line-plot/line-plot.component';
import { ExampleComponent } from './example/example.component';
import { LineChartsComponent } from './line-charts/line-charts.component';
import { CustomChartEventsComponent } from './custom-chart-events/custom-chart-events.component';

import { TooltipComponent } from './tooltip/tooltip.component';
import { NotesTooltipComponent } from './notes-tooltip/notes-tooltip.component';
import { CreateNoteComponent } from './create-note/create-note.component';
import { ChildComponent } from './child/child.component';
import { CustomRangeSliderComponent } from './custom-range-slider/custom-range-slider.component';
import { CusRanSliderComponent } from './cus-ran-slider/cus-ran-slider.component';

@NgModule({
  declarations: [
    AppComponent,
    LinePlotComponent,
    ExampleComponent,
    LineChartsComponent,
    CustomChartEventsComponent,
    ChildComponent,
    TooltipComponent,
    NotesTooltipComponent,
    CreateNoteComponent,
    CustomRangeSliderComponent,
    CusRanSliderComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
