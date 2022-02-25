import {
  AfterViewInit,
  Component,
  ElementRef,
  OnInit,
  ViewChild,
} from '@angular/core';
// import { Router } from '@angular/router';
import * as d3 from 'd3';
import * as Plotly from 'plotly.js-dist';
@Component({
  selector: 'app-multiple-plots-graph',
  templateUrl: './multiple-plots-graph.component.html',
  styleUrls: ['./multiple-plots-graph.component.css'],
})
export class MultiplePlotsGraphComponent implements OnInit {
  constructor() {}

  @ViewChild('lineChart2', { static: true }) ele2: ElementRef;
  @ViewChild('markerchart', { static: true }) marker: ElementRef;

  max_trace_1 = 0;

  ngOnInit(): void {
    // alert(window.location.href);
    d3.csv(
      'https://raw.githubusercontent.com/plotly/datasets/master/finance-charts-apple.csv'
    ).then((rows) => {
      const getElement = () => {
        return this.ele2.nativeElement;
      };
      console.log(unpack(rows, 'Date'));
      console.log(unpack(rows, 'AAPL.High'));
      console.log(unpack(rows, 'AAPL.Low'));

      function unpack(rows, key) {
        return rows.map((row) => row[key]);
      }
      // this.max_trace_1 = Math.max.apply(null, unpack(rows, 'AAPL.High'));

      var trace1 = {
        type: 'scatter',
        mode: 'lines',
        name: 'AAPL High',
        x: unpack(rows, 'Date'),
        y: unpack(rows, 'AAPL.High'),
        xaxis: 'x',
        yaxis: 'y',
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
        mode: 'text',
        x: ['2016-06-17'],
        y: [150],
        xaxis: 'x',
        yaxis: 'y2',
        marker: { size: 2, symbol: 'triangle-right', color: 'white' },
        showlegend: false,
        // opacity: 0.1,
        // texttemplate: `<h1>template</h1>`,
        hovertemplate: '<b>IMAGES</b>: <br>',
      };

      var trace4 = {
        type: 'scatter',
        mode: 'markers',
        x: ['2016-05-10'],
        y: [160],
        xaxis: 'x',
        yaxis: 'y2',

        marker: {
          color: 'white',
          size: 15,
          symbol: 'circle-x',
          line: {
            color: 'black',
            width: 3,
          },
        },
        showlegend: false,
        // opacity: 0.1,
        // texttemplate: `<h1>template</h1>`,
        hovertemplate: '<b>MARKERS</b>: <br>',
      };
      var t5 = {
        type: 'scatter',
        mode: 'text',
        x: ['2016-04-02', '2016-04-02'],
        y: [150, 150],
        xaxis: 'x',
        yaxis: 'y2',
        text: '&#9938;',
        // text: '0425',not working
        // text: 'U+0425;', //not working
        textfont: {
          family: 'sans serif',
          size: 18,
          color: 'black',
          // width: 5,
        },
        showlegend: false,
        // opacity: 0.1,
        // texttemplate: `<h1>template</h1>`,
        hovertemplate: '<b>TEXT</b>: <br>',
      };

      var data = [trace1, trace2, trace3];

      var layout = {
        title: '<b>Markers in Sub Plots</b>',

        // plot_bgcolor: 'white',
        // paper_bgcolor: 'lightgrey',
        // paper_bgcolor: ['red', 'red', 'rgba(0,0,0,0)'],
        // plot_bgcolor: 'rgba(0,0,0,0)',
        // modebar: { orientation: 'h' },
        //domain - Determines what percentage-(0 to 1) of y-axis need to be occupied by particular graph
        //physical apperance of tick, besides curve - len, width, color
        yaxis: {
          title: 'Curve',
          titlefont: {
            family: 'Arial, sans-serif',
            size: 18,
            color: 'grey',
          },
          // yanchor: 'right',
          domain: [0, 0.854],
          //to disable the ticks
          // showticklabels: true,
          ticklen: 8,
          tickwidth: 6,
          tickcolor: 'red',
          tickfont: {
            family: 'Old Standard TT, serif',
            size: 14,
            color: 'black',
          },
          // showgrid:
          // tickangle: -30,
        },
        yaxis2: {
          //yaxis2 represents the y2 value, defined in the data Array
          title: "Marker's",
          titlefont: {
            family: 'Arial, sans-serif',
            size: 18,
            color: 'grey',
          },
          domain: [0.855, 1],
          dtick: 1,
          autotick: false,
          showticklabels: false,
          // ticklen: 8,
          // tickwidth: 6,
          // tickcolor: '#000',
        }, //Markers Graph
        grid: {
          pattern: 'independent',
          //when we dont define explict defination for y-axis, 'ygap' works!!
          // ygap: 0,
          rows: 2,
          columns: 1,
          subplots: [['xy2'], ['xy']],
          roworder: 'top to bottom',
        },

        // shapes: [
        //   //   // {
        //   //   //   type: 'path',
        //   //   //   path: 'M 1 1 L 1 3 L 4 1 Z',
        //   //   //   fillcolor: 'rgba(44, 160, 101, 0.5)',
        //   //   //   line: {
        //   //   //     color: 'rgb(44, 160, 101)',
        //   //   //   },
        //   //   //   // x: '2015-06-17',
        //   //   //   // y: [150, 150],
        //   //   // },
        //   {
        //     type: 'rect',
        //     // type: 'path',
        //     // path: 'M 4,4 Q 6,0 8,4',
        //     // path: 'M 1 1 L 1 3 L 4 1 Z',
        //     // x-reference is assigned to the x-values
        //     xref: 'x',
        //     // y-reference is assigned to the plot paper [0,1]
        //     yref: 'y2',
        //     // x0: '2016-02-04',
        //     // y0: 0,
        //     // x1: '2016-02-04',
        //     // y1: 1,
        //     fillcolor: 'red',
        //     opacity: 1,
        //     line: {
        //       width: 10,
        //     },
        //   },
        // ],
      };
      var image_layout = {
        yaxis: {
          title: 'Curve',
          titlefont: {
            family: 'Arial, sans-serif',
            size: 18,
            color: 'grey',
          },
          // yanchor: 'right',
          domain: [0, 0.754],
          //to disable the ticks
          // showticklabels: true,
          ticklen: 8,
          tickwidth: 6,
          tickcolor: 'red',
          tickfont: {
            family: 'Old Standard TT, serif',
            size: 14,
            color: 'black',
          },
          range: [4.521691268516912, 15.577963949905504],
          autorange: true,
          // tickangle: -30,
        },
        yaxis2: {
          //yaxis2 represents the y2 value, defined in the data Array

          title: "Marker's",
          titlefont: {
            family: 'Arial, sans-serif',
            size: 18,
            color: 'grey',
          },
          domain: [0.756, 1],
          rangemode: 'normal',
          // position: 1,
          dtick: 1,
          autotick: false,
          showticklabels: false,
          // range: [1, 3],
          showgrid: false,
          autorange: true,
          // hoverformat: 'yaxis-2',
          // tick0: 3,
          // ticklen: 8,
          // tickwidth: 6,
          // tickcolor: '#000',
        }, //Markers Graph
        title: 'image_layout',
        images: [
          {
            source: 'assets/marker.png',
            xref: 'x',
            yref: 'y2',
            x: '2016-05-10',
            y: 150,
            sizex: 10 * 24 * 60 * 60 * 1000,
            sizey: 50,
            xanchor: 'center',
            yanchor: 'middle',
          },
          {
            source: 'assets/marker.png',
            xref: 'x',
            yref: 'y2',
            x: '2016-06-17',
            y: 150,
            sizex: 10 * 24 * 60 * 60 * 1000,
            sizey: 50,
            xanchor: 'center',
            yanchor: 'middle',
          },
          {
            source: 'assets/marker.png',
            xref: 'x',
            yref: 'y2',
            x: '2016-07-27',
            y: 150,
            sizex: 10 * 24 * 60 * 60 * 1000,
            sizey: 50,
            xanchor: 'center',
            yanchor: 'middle',
          },
        ],
        grid: {
          pattern: 'independent',
          //when we dont define explict defination for y-axis, 'ygap' works!!
          // ygap: 0,
          rows: 2,
          columns: 1,
          subplots: [['xy4'], ['xy']],
          roworder: 'top to bottom',
        },
      };

      // nsewdrag drag
      Plotly.newPlot(
        // getElement(),
        'myDiv',
        data,
        image_layout,
        {
          // scrollZoom: true,
        }
      ).then((htmlElement) => {
        //=
        htmlElement.on('plotly_relayout', (eventdata) => {
          if (eventdata['yaxis.range[0]']) {
            console.log(JSON.stringify(eventdata));

            var y_min = eventdata['yaxis.range[0]'];
            var y_max = eventdata['yaxis.range[1]'];
            var y_axis_diff =
              eventdata['yaxis.range[1]'] - eventdata['yaxis.range[0]'];
            console.log('y_max', y_max);
            console.log('y_difference', y_axis_diff);
            var layout_update = {
              // 'images.sizex': [y_axis_diff, y_axis_diff, y_axis_diff],
              // 'images.y': [y_axis_diff, y_axis_diff, y_axis_diff],
              images: [
                {
                  source: 'assets/marker.png',
                  xref: 'x',
                  yref: 'y2',
                  x: '2016-05-10',
                  y: 150,
                  sizex: (y_axis_diff / 2) * 24 * 60 * 60 * 1000,
                  sizey: y_axis_diff / 2,
                  xanchor: 'center',
                  yanchor: 'middle',
                },
                {
                  source: 'assets/marker.png',
                  xref: 'x',
                  yref: 'y2',
                  x: '2016-06-17',
                  y: 150,
                  sizex: (y_axis_diff / 2) * 24 * 60 * 60 * 1000,
                  sizey: y_axis_diff / 2,
                  xanchor: 'center',
                  yanchor: 'middle',
                },
                {
                  source: 'assets/marker.png',
                  xref: 'x',
                  yref: 'y2',
                  x: '2016-07-27',
                  y: 150,
                  sizex: (y_axis_diff / 2) * 24 * 60 * 60 * 1000,
                  sizey: y_axis_diff / 2,
                  xanchor: 'center',
                  yanchor: 'middle',
                },
              ],
              autorange: true,
              title: 'changed_layout',
            };
            var new_trace = {
              type: 'scatter',
              // mode: 'markers',
              x: ['2016-06-17'],
              y: [150],
              xaxis: 'x',
              yaxis: 'y2',
              // marker: { size: 32, symbol: 'triangle-right', color: 'red' },
              showlegend: false,
              // opacity: 0.1,
              // texttemplate: `<h1>template</h1>`,
              hovertemplate: '<b>IMAGES</b>: <br>',
            };
            Plotly.deleteTraces('myDiv', 2);
            Plotly.addTraces('myDiv', new_trace);
            Plotly.update('myDiv', {}, layout_update, [2]);
          }
        });

        // htmlElement.on('plotly_hover', function (data) {
        //   // var xaxis = data.points[0].xaxis,
        //   //   yaxis = data.points[0].yaxis;
        //   // var infotext = data.points.map(function (d) {
        //   //   return 'width: ' + xaxis.l2p(d.x) + ', height: ' + yaxis.l2p(d.y);
        //   // });
        //   // let hoverInfo = document.getElementById('hoverinfo');
        //   // hoverInfo.innerHTML = infotext.join('<br/>');
        //   Plotly.Fx.hover(
        //     'myDiv',
        //     [
        //       { curveNumber: 0, pointNumber: data.points[0].pointNumber },
        //       { curveNumber: 1, pointNumber: data.points[0].pointNumber },
        //     ],
        //     ['xy2']
        //   );
        // });

        // htmlElement.on('plotly_click', function (data) {
        //   var pts = '';
        //   if (data.points[0]['data'].mode === 'markers') {
        //     for (var i = 0; i < data.points.length; i++) {
        //       pts =
        //         'x = ' +
        //         data.points[i].x +
        //         '\ny = ' +
        //         data.points[i].y.toPrecision(4) +
        //         '\n\n';
        //     }
        //     alert('Marker Location:\n' + pts);
        //   }
        // });
      });

      // setTimeout(() => {
      //   var images_div = document.getElementsByClassName('nsewdrag drag');
      //   console.log('images_div', images_div);

      //   // document
      //   //   .getElementsByClassName('nsewdrag drag')[0]
      //   //   .addEventListener('mouseover', (event) => {
      //   //     console.log('clicked', event);
      //   //   });
      //   // document
      //   //   .getElementsByClassName('nsewdrag drag')[1]
      //   //   .addEventListener('mouseover', (event) => {
      //   //     console.log('clicked', event);
      //   //   });
      //   // document.getElementsByClassName
      // }, 500);

      // var t1 = {
      //   x: [1, 2, 3],
      //   y: [2, 3, 4],
      //   xaxis: 'x',
      //   yaxis: 'y',
      //   type: 'scatter',
      // };

      // var t2 = {
      //   x: [20, 30, 40],
      //   y: [5, 5, 5],
      //   xaxis: 'x2',
      //   yaxis: 'y',
      //   type: 'scatter',
      // };

      // var t3 = {
      //   x: [2, 3, 4],
      //   y: [600, 700, 800],
      //   xaxis: 'x',
      //   yaxis: 'y2',
      //   type: 'scatter',
      // };

      // var t4 = {
      //   x: [4000, 5000, 6000],
      //   y: [7000, 8000, 9000],
      //   xaxis: 'x4',
      //   yaxis: 'y4',
      //   type: 'scatter',
      // };

      // var d = [t1, t3];

      // var l = {
      //   grid: {
      //     rows: 2,
      //     columns: 1,
      //     subplots: [['xy'], ['xy2']],

      //     roworder: 'top to bottom',
      //   },
      // };

      // Plotly.newPlot(this.marker.nativeElement, d, l);
    });
  }
}
