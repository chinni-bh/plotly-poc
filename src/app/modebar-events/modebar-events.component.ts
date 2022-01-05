import {
  AfterViewInit,
  Component,
  ElementRef,
  OnInit,
  ViewChild,
} from '@angular/core';

import * as d3 from 'd3';
import * as Plotly from 'plotly.js-dist';

@Component({
  selector: 'app-modebar-events',
  templateUrl: './modebar-events.component.html',
  styleUrls: ['./modebar-events.component.css'],
})
export class ModebarEventsComponent implements OnInit, AfterViewInit {
  constructor() {}

  @ViewChild('lineChart2', { static: true }) ele2: ElementRef;
  max_trace_1 = 0;

  ngOnInit(): void {
    d3.csv(
      'https://raw.githubusercontent.com/plotly/datasets/master/finance-charts-apple.csv'
    ).then((rows) => {
      const getElement = () => {
        return this.ele2.nativeElement;
      };

      function unpack(rows, key) {
        return rows.map((row) => row[key]);
      }
      this.max_trace_1 = Math.max.apply(null, unpack(rows, 'AAPL.High'));

      var trace1 = {
        type: 'scatter',
        mode: 'lines',
        name: 'AAPL High',
        x: unpack(rows, 'Date'),
        y: unpack(rows, 'AAPL.High'),
        line: { color: '#17B000' },
      };

      var trace2 = {
        type: 'scatter',
        mode: 'lines',
        name: 'AAPL Low',
        x: unpack(rows, 'Date'),
        y: unpack(rows, 'AAPL.Low'),
        line: { color: '#7F7F7F' },
      };

      var trace3 = {
        type: 'scatter',
        mode: 'markers',
        x: ['2015-06-17', '2016-01'],
        y: [140, 140],
        marker: { size: 22, symbol: 'triangle-right', color: 'black' },

        showlegend: false,

        hovertemplate:
          '<i>Sensor Failure</i>: <br>' +
          '<br><b>Y</b>:%{y}' +
          '<br><b>X</b>: %{x}<br>',
        text: 'some content',
      };

      var data = [trace1, trace2, trace3];

      var layout = {
        title: 'Layout Title',

        // sliders: [
        //   {
        //     pad: { t: 30 },
        //     len: 0.5,
        //     x: 0.2,
        //     active: 1,
        //     activebgcolor: 'black',
        //     // bgcolor: 'blue',
        //     bordercolor: 'black',
        //     currentvalue: {
        //       xanchor: 'center',
        //       prefix: 'Year: ',
        //       font: {
        //         color: 'black',
        //         size: 20,
        //       },
        //     },
        //     font: { size: 20, color: 'black' },
        //     tickcolor: 'red',
        //     ticklen: 20,
        //     minorticklen: 5,
        //     name: 'name',
        //     steps: [
        //       {
        //         args: [
        //           {
        //             visible: [true, true],
        //             name: ['*Date', '*AAPL.High'],

        //             x: [
        //               filterByDate(rows, 'Date', '2015', '2015'),
        //               filterByDate(rows, 'Date', '2015', '2015'),
        //             ],
        //             y: [
        //               filterByDate(rows, 'AAPL.High', '2015', '2015'),
        //               filterByDate(rows, 'AAPL.Low', '2015', '2015'),
        //             ],
        //           },
        //           {
        //             title: 'From Jan-2015 to Dec-2015',
        //             transition: { duration: 300 },
        //             frame: { duration: 300, redraw: false },
        //             // 'sliders[0].x': 0.9,
        //           },
        //         ],
        //         label: '2015',
        //         method: 'update',
        //       },
        //       {
        //         args: [
        //           {
        //             visible: [true, true],
        //             name: ['*Date', '*AAPL.High'],

        //             x: [
        //               filterByDate(rows, 'Date', '2016', '2016'),
        //               filterByDate(rows, 'Date', '2016', '2016'),
        //             ],
        //             y: [
        //               filterByDate(rows, 'AAPL.High', '2016', '2016'),
        //               filterByDate(rows, 'AAPL.Low', '2016', '2016'),
        //             ],
        //           },
        //           {
        //             title: 'From Jan-2016 to Dec-2016',
        //             transition: { duration: 300 },
        //             frame: { duration: 300, redraw: false },
        //           },
        //         ],
        //         label: '2016',
        //         method: 'update',
        //       },
        //       {
        //         args: [
        //           {
        //             visible: [true, true],
        //             name: ['*Date', '*AAPL.High'],

        //             x: [
        //               filterByDate(rows, 'Date', '2017', '2017'),
        //               filterByDate(rows, 'Date', '2017', '2017'),
        //             ],
        //             y: [
        //               filterByDate(rows, 'AAPL.High', '2017', '2017'),
        //               filterByDate(rows, 'AAPL.Low', '2017', '2017'),
        //             ],
        //           },
        //           {
        //             title: 'From Jan-2017 to Dec-2017',
        //             transition: { duration: 3000 },
        //             frame: { duration: 3000, redraw: false },
        //           },
        //         ],
        //         label: '2017',
        //         method: 'update',
        //       },
        //     ],
        //   },
        // ],
        // updatemenus: [
        //   {
        //     pad: { t: 60, r: 30 },
        //     type: 'buttons',
        //     xanchor: 'left',
        //     yanchor: 'top',
        //     x: 0,
        //     y: 0,
        //     direction: 'right',
        //     // buttons: [
        //     //   // {
        //     //   //   label: 'red',
        //     //   //   method: 'restyle',
        //     //   //   args: ['line.color', 'red'],
        //     //   // },
        //     //   // {
        //     //   //   label: 'green',
        //     //   //   method: 'restyle',
        //     //   //   args: ['line.color', 'green'],
        //     //   // },
        //     //   // {
        //     //   //   label: 'blue',
        //     //   //   method: 'restyle',
        //     //   //   args: ['line.color', 'blue'],
        //     //   // },
        //     //   {
        //     //     args: [
        //     //       {
        //     //         visible: [true, true],
        //     //         name: ['*Date', '*AAPL.High'],

        //     //         x: [
        //     //           filterByDate(rows, 'Date', '2015', '2015'),
        //     //           filterByDate(rows, 'Date', '2015', '2015'),
        //     //         ],
        //     //         y: [
        //     //           filterByDate(rows, 'AAPL.High', '2015', '2015'),
        //     //           filterByDate(rows, 'AAPL.Low', '2015', '2015'),
        //     //         ],
        //     //       },
        //     //       { title: 'From Jan-2015 to Dec-2015' },
        //     //     ],
        //     //     label: '2015',
        //     //     method: 'update',
        //     //   },
        //     //   {
        //     //     args: [
        //     //       {
        //     //         visible: [true, true],
        //     //         name: ['*Date', '*AAPL.High'],

        //     //         x: [
        //     //           filterByDate(rows, 'Date', '2016', '2016'),
        //     //           filterByDate(rows, 'Date', '2016', '2016'),
        //     //         ],
        //     //         y: [
        //     //           filterByDate(rows, 'AAPL.High', '2016', '2016'),
        //     //           filterByDate(rows, 'AAPL.Low', '2016', '2016'),
        //     //         ],
        //     //       },
        //     //       { title: 'From Jan-2016 to Dec-2016' },
        //     //     ],
        //     //     label: '2016',
        //     //     method: 'update',
        //     //   },
        //     //   {
        //     //     args: [
        //     //       {
        //     //         visible: [true, true],
        //     //         name: ['*Date', '*AAPL.High'],

        //     //         x: [
        //     //           filterByDate(rows, 'Date', '2017', '2017'),
        //     //           filterByDate(rows, 'Date', '2017', '2017'),
        //     //         ],
        //     //         y: [
        //     //           filterByDate(rows, 'AAPL.High', '2017', '2017'),
        //     //           filterByDate(rows, 'AAPL.Low', '2017', '2017'),
        //     //         ],
        //     //       },
        //     //       { title: 'From Jan-2017 to Dec-2017' },
        //     //     ],
        //     //     label: '2017',
        //     //     method: 'update',
        //     //   },
        //     // ],
        //   },
        // ],
      };

      Plotly.newPlot(getElement(), data, layout, {
        scrollZoom: true,
      });
    });
  }

  ngAfterViewInit(): void {
    setTimeout(() => {
      console.log('timeout');
      this.ele2.nativeElement.on('plotly_relayout', (eventdata) => {
        // alert();
        var y_max = eventdata['yaxis.range[1]'];
        Plotly.restyle(
          this.ele2.nativeElement,
          {
            y: [
              [(y_max + this.max_trace_1) / 2, (y_max + this.max_trace_1) / 2],
            ],
          },
          2
        );
      });
    }, 1000);
  }
}
