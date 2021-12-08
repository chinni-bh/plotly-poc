import { Component, OnInit,ElementRef,ViewChild,AfterViewInit, Type } from '@angular/core';
import * as d3 from 'd3';
import * as Plotly from 'plotly.js-dist';

@Component({
  selector: 'app-line-charts',
  templateUrl: './line-charts.component.html',
  styleUrls: ['./line-charts.component.css']
})

export class LineChartsComponent implements AfterViewInit {

  constructor() { }
  @ViewChild('lineChart', { static: true }) el: ElementRef;
  @ViewChild('lineChart2', { static: true }) el2: ElementRef;
  ngAfterViewInit(): void {
    var trace1 = {
      x: [1, 2, 3, 4],
      y: [10, 15, 13, 17],
      type: 'scatter',
      name: 'scatter'
    };

    var trace2 = {
      x: [1, 2, 3, 4],
      y: [11, 9, 16, 19],
      mode: 'markers',
      name: 'markers',
      text:["Point1","Point2","Point3","Point4"],
      marker: {
        color: 'rgb(219, 64, 82)',
        size: 12
      }
    };

    var trace3 = {
      x: [2, 3, 4, 5],
      y: [16, 5, 11, 9],
      mode: 'lines',
      name: 'lines',
      line: {
        color: 'rgb(165, 42, 42)',
        width: 3
      }
    };

    var trace4 = {
      x: [1, 2, 3, 4],
      y: [12, 9, null, 12],
      mode: 'lines+markers',
      name: 'lines+markers',
      connectgaps: true,
      marker: {
        color: 'rgb(128, 0, 128)',
        size: 8
      },
      line: {
        color: 'rgb(128, 0, 128)',
        width: 1
      }
    };



    var trace5 = {
      x: [1, 2, 3, 4, 5],
      y: [1, 3, 2, 3, 1],
      mode: 'lines+markers',connectgaps: true,
      name: 'linear-solid',
      line: {shape: 'linear',dash: 'solid',
      width: 4},
      type: 'scatter'
    };

    var trace6 = {
      x: [1, 2, 3, 4, 5],
      y: [6, 8, 7, 8, 6],
      mode: 'lines+markers',
      name: 'spline',
      text: ['tweak line smoothness<br>with "smoothing" in line object', 'tweak line smoothness<br>with "smoothing" in line object', 'tweak line smoothness<br>with "smoothing" in line object', 'tweak line smoothness<br>with "smoothing" in line object', 'tweak line smoothness<br>with "smoothing" in line object', 'tweak line smoothness<br>with "smoothing" in line object'],
      line: {shape: 'spline'},
      type: 'scatter'
    };

    var trace7 = {
      x: [1, 2, 3, 4, 5],
      y: [11, 13, 12, 13, 11],
      mode: 'lines+markers',
      name: 'vhv-dashdot',
      line: {shape: 'vhv',dash: 'dashdot',
      width: 4},
      type: 'scatter'
    };

    var trace8 = {
      x: [1, 2, 3, 4, 5],
      y: [16, 18, 17, 18, 16],
      mode: 'lines+markers',
      name: 'hvh-dot',
      line: {shape: 'hvh',dash: 'dot',
      width: 4},
      type: 'scatter'
    };

    var trace9 = {
      x: [1, 2, 3, 4, 5],
      y: [21, 23, 22, 23, 21],
      mode: 'lines+markers',
      name: 'vh',
      line: {shape: 'vh'},
      type: 'scatter'
    };

    var trace10 = {
      x: [1, 2, 3, 4, 5],
      y: [26, 28, 27, 28, 26],
      mode: 'lines+markers',
      name: 'hv',
      line: {shape: 'hv'},
      type: 'scatter'
    };












    var data = [trace1, trace2,trace3,trace4];

    var layout = {
      title:'Basic Charts',
      xaxis: {
        title: 'X axis',
        showgrid: false,
        zeroline: false
      },
      yaxis: {
        title: 'Y axis',
        showline: false
      },

      annotations: [{
        // xref: 'paper',
        x: 1,
        y: 12,
        xanchor: 'left',
        yanchor: 'top',
        text: "Connect Gaps Between Data",
        showarrow: true,
        font: {
          family: 'Arial',
          size: 16,
          color: 'black'
        }
      }]

    };

    var data2=[trace5,trace6,trace7,trace8,trace9,trace10];
    var layout2 = {
      title:'Line Shape Options for Interpolation',
      xaxis: {
        title: 'X axis',
        showgrid: false,
        zeroline: false
      },
      yaxis: {
        title: 'Y axis',
        showline: false
      }
    };

    Plotly.newPlot(this.el.nativeElement, data,layout);
    Plotly.newPlot(this.el2.nativeElement, data2,layout2);

  }
}
