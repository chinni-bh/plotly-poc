import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import * as d3 from 'd3';
import * as Plotly from 'plotly.js-dist';
import * as PlotlyJS from 'plotly.js/dist/plotly.js';

@Component({
  selector: 'app-cus-ran-slider',
  templateUrl: './cus-ran-slider.component.html',
  styleUrls: ['./cus-ran-slider.component.css'],
})
export class CusRanSliderComponent implements OnInit {
  constructor() {}
  @ViewChild('lineChart', { static: true }) ele: ElementRef;
  @ViewChild('lineChart2', { static: true }) ele2: ElementRef;
  @ViewChild('myDiv', { static: true }) myDiv: ElementRef;

  ngOnInit(): void {
    d3.csv(
      'https://raw.githubusercontent.com/plotly/datasets/master/finance-charts-apple.csv'
    ).then((rows) => {
      console.log(rows);
      function unpack(rows, key) {
        return rows.map((row) => row[key]);
      }
      function filterByDate(rows, key, fromDate, toDate) {
        return rows
          .filter(
            (row) =>
              row['Date'] >= fromDate + '-01' && row['Date'] <= toDate + '-12'
          )
          .map((row) => row[key]);
      }
      console.log(filterByDate(rows, 'AAPL.High', '2015', '2015'));
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
        mode: 'markers+lines',
        // name: '<b>Set Point Line</b><br>Value : 0.7',
        x: ['2015-06-17', '2016-01'],
        y: [140, 140],
        marker: { size: 12, symbol: 'triangle-right', color: 'red' },
        line: { color: 'yellow', width: 1 },
        showlegend: false,
        // hovertemplate: '<b>Sensor Failure</b>{trace3}<extra></extra>',
        hovertemplate:
          '<i>Sensor Failure</i>: ' +
          '<br><b>Y</b>:%{y}' +
          '<br><b>X</b>: %{x}<br>',
        text: 'some content',
      };
      var data = [trace1, trace2, trace3];

      var layout = {
        title: 'Time Series with Rangeslider',
        xaxis: {
          autorange: true,
          range: ['2015-02-17', '2017-02-16'],
          rangeselector: {
            buttons: [
              {
                count: 1,
                label: '1m',
                step: 'month',
                stepmode: 'backward',
              },
              {
                count: 6,
                label: '6m',
                step: 'month',
                stepmode: 'backward',
              },
              { step: 'all' },
            ],
          },
          // rangeslider: { range: ['2015-02-17', '2017-02-16'] },
          rangeslider: { autorange: true },
          type: 'date',
        },
        yaxis: {
          autorange: true,
          range: [86.8700008333, 138.870004167],
          type: 'linear',
        },
      };
      var frames = [
        {
          name: 'trace 1',
          data: [trace1],
        },
        {
          name: 'trace 2',
          data: [trace2],
        },
      ];
      var layout2 = {
        title: 'Layout Title',

        sliders: [
          {
            pad: { t: 30 },
            len: 0.5,
            x: 0.2,
            active: 1,
            activebgcolor: 'black',
            // bgcolor: 'blue',
            bordercolor: 'black',
            currentvalue: {
              xanchor: 'center',
              prefix: 'Year: ',
              font: {
                color: 'black',
                size: 20,
              },
            },
            font: { size: 20, color: 'black' },
            tickcolor: 'red',
            ticklen: 20,
            minorticklen: 5,
            name: 'name',
            steps: [
              {
                args: [
                  {
                    visible: [true, true],
                    name: ['*Date', '*AAPL.High'],

                    x: [
                      filterByDate(rows, 'Date', '2015', '2015'),
                      filterByDate(rows, 'Date', '2015', '2015'),
                    ],
                    y: [
                      filterByDate(rows, 'AAPL.High', '2015', '2015'),
                      filterByDate(rows, 'AAPL.Low', '2015', '2015'),
                    ],
                  },
                  {
                    title: 'From Jan-2015 to Dec-2015',
                    transition: { duration: 300 },
                    frame: { duration: 300, redraw: false },
                    // 'sliders[0].x': 0.9,
                  },
                ],
                label: '2015',
                method: 'update',
              },
              {
                args: [
                  {
                    visible: [true, true],
                    name: ['*Date', '*AAPL.High'],

                    x: [
                      filterByDate(rows, 'Date', '2016', '2016'),
                      filterByDate(rows, 'Date', '2016', '2016'),
                    ],
                    y: [
                      filterByDate(rows, 'AAPL.High', '2016', '2016'),
                      filterByDate(rows, 'AAPL.Low', '2016', '2016'),
                    ],
                  },
                  {
                    title: 'From Jan-2016 to Dec-2016',
                    transition: { duration: 300 },
                    frame: { duration: 300, redraw: false },
                  },
                ],
                label: '2016',
                method: 'update',
              },
              {
                args: [
                  {
                    visible: [true, true],
                    name: ['*Date', '*AAPL.High'],

                    x: [
                      filterByDate(rows, 'Date', '2017', '2017'),
                      filterByDate(rows, 'Date', '2017', '2017'),
                    ],
                    y: [
                      filterByDate(rows, 'AAPL.High', '2017', '2017'),
                      filterByDate(rows, 'AAPL.Low', '2017', '2017'),
                    ],
                  },
                  {
                    title: 'From Jan-2017 to Dec-2017',
                    transition: { duration: 3000 },
                    frame: { duration: 3000, redraw: false },
                  },
                ],
                label: '2017',
                method: 'update',
              },
            ],
          },
        ],
        updatemenus: [
          {
            pad: { t: 60, r: 30 },
            type: 'buttons',
            xanchor: 'left',
            yanchor: 'top',
            x: 0,
            y: 0,
            direction: 'right',
            // buttons: [
            //   // {
            //   //   label: 'red',
            //   //   method: 'restyle',
            //   //   args: ['line.color', 'red'],
            //   // },
            //   // {
            //   //   label: 'green',
            //   //   method: 'restyle',
            //   //   args: ['line.color', 'green'],
            //   // },
            //   // {
            //   //   label: 'blue',
            //   //   method: 'restyle',
            //   //   args: ['line.color', 'blue'],
            //   // },
            //   {
            //     args: [
            //       {
            //         visible: [true, true],
            //         name: ['*Date', '*AAPL.High'],

            //         x: [
            //           filterByDate(rows, 'Date', '2015', '2015'),
            //           filterByDate(rows, 'Date', '2015', '2015'),
            //         ],
            //         y: [
            //           filterByDate(rows, 'AAPL.High', '2015', '2015'),
            //           filterByDate(rows, 'AAPL.Low', '2015', '2015'),
            //         ],
            //       },
            //       { title: 'From Jan-2015 to Dec-2015' },
            //     ],
            //     label: '2015',
            //     method: 'update',
            //   },
            //   {
            //     args: [
            //       {
            //         visible: [true, true],
            //         name: ['*Date', '*AAPL.High'],

            //         x: [
            //           filterByDate(rows, 'Date', '2016', '2016'),
            //           filterByDate(rows, 'Date', '2016', '2016'),
            //         ],
            //         y: [
            //           filterByDate(rows, 'AAPL.High', '2016', '2016'),
            //           filterByDate(rows, 'AAPL.Low', '2016', '2016'),
            //         ],
            //       },
            //       { title: 'From Jan-2016 to Dec-2016' },
            //     ],
            //     label: '2016',
            //     method: 'update',
            //   },
            //   {
            //     args: [
            //       {
            //         visible: [true, true],
            //         name: ['*Date', '*AAPL.High'],

            //         x: [
            //           filterByDate(rows, 'Date', '2017', '2017'),
            //           filterByDate(rows, 'Date', '2017', '2017'),
            //         ],
            //         y: [
            //           filterByDate(rows, 'AAPL.High', '2017', '2017'),
            //           filterByDate(rows, 'AAPL.Low', '2017', '2017'),
            //         ],
            //       },
            //       { title: 'From Jan-2017 to Dec-2017' },
            //     ],
            //     label: '2017',
            //     method: 'update',
            //   },
            // ],
          },
        ],
      };

      // console.log(PlotlyJS.newPlot(this.ele.nativeElement, [], layout2));
      PlotlyJS.newPlot(this.ele2.nativeElement, data, layout2);
      this.ele2.nativeElement.on('plotly_relayout', function (eventdata) {
        console.log('Event data:' + JSON.stringify(eventdata));
        var update = {
          y: [130, 130],
        };
        Plotly.restyle(this.ele2.nativeElement, update, 2);
      });

      //   .then(
      //   function () {
      //     Plotly.addFrames(this.ele2.nativeElement, frames);
      //   }
      // );
    });
  }
}
