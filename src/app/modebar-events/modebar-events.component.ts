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
        x: ['2015-06-17', '2016-01-17'],
        y: [150, 150],
        marker: { size: 22, symbol: 'triangle-right', color: 'black' },
        showlegend: false,
        hovertemplate:
          '<i>Sensor Failure</i>: <br>' +
          '<br><b>Y</b>:%{y}' +
          '<br><b>X</b>: %{x}<br>',
      };
      var trace4 = {
        type: 'scatter',
        mode: 'text',
        x: ['2016-03-17'],
        y: [140],
        text: '⚠️',
        textfont: {
          size: 25,
          color: 'red',
        },
        showlegend: false,
        hovertemplate:
          '<i>Warning</i>: <br>' +
          '<br><b>Y</b>:%{y}' +
          '<br><b>X</b>: %{x}<br>',
      };
      var data = [trace1, trace2, trace3, trace4];

      var layout = {
        title: 'In Same Plot',
        dtick: 1,
      };

      Plotly.newPlot(getElement(), data, layout, {
        scrollZoom: true,
      }).then((htmlElement) => {
        htmlElement.on('plotly_relayout', (eventdata) => {
          // console.log(JSON.stringify(eventdata));

          var y_max = eventdata['yaxis.range[1]'];
          var y_axis_diff =
            eventdata['yaxis.range[1]'] - eventdata['yaxis.range[0]'];
          console.log('y_max', y_max);
          console.log('y_difference', y_axis_diff);
          if (y_max !== undefined) {
            Plotly.restyle(
              this.ele2.nativeElement,
              //MEAN VLAUE ALGORITHM
              // {
              //   y: [
              //     [
              //       (y_max + this.max_trace_1) / 2,
              //       (y_max + this.max_trace_1) / 2,
              //     ],
              //   ],
              // },
              //MAX-BUFFER ALGORITHM
              // {
              //   y: [[y_max - 10, y_max - 10], [y_max - 20]],
              // },
              //20% of difference in y_axis scale
              {
                y: [
                  [y_max - 0.2 * y_axis_diff, y_max - 0.2 * y_axis_diff],
                  [y_max - 0.3 * y_axis_diff],
                ],
              },
              [2, 3]
            );
          }
        });

        htmlElement.on('plotly_click', function (data) {
          var pts = '';
          if (data.points[0]['data'].mode === 'markers') {
            for (var i = 0; i < data.points.length; i++) {
              pts =
                'x = ' +
                data.points[i].x +
                '\ny = ' +
                data.points[i].y.toPrecision(4) +
                '\n\n';
            }
            alert('Marker Location:\n' + pts);
          }
        });
      });
    });
  }

  ngAfterViewInit(): void {
    // setTimeout(() => {
    //   console.log('timeout');
    //   this.ele2.nativeElement.on('plotly_relayout', (eventdata) => {
    //     console.log(JSON.stringify(eventdata));
    //     var y_max = eventdata['yaxis.range[1]'];
    //     Plotly.restyle(
    //       this.ele2.nativeElement,
    //       {
    //         y: [
    //           [(y_max + this.max_trace_1) / 2, (y_max + this.max_trace_1) / 2],
    //         ],
    //       },
    //       2
    //     );
    //   });
    // }, 1000);
  }
}
