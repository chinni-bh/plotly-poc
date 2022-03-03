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
        mode: 'markers',
        // name: 'Markers and Text',
        text: ['Text A', 'Text B'],
        // textposition: 'top',
        // hovertext: 'text hover',
        x: ['2016-05-31'],
        y: [150],
        xaxis: 'x',
        yaxis: 'y2',
        marker: {
          size: 25,
          // size: [25, 10],
          symbol: 'circle-dot',
          color: 'red',
          // color: ['red', 'green'],
        },
        showlegend: false,
        opacity: 1,
        // texttemplate: '',
        // sizemode: 'area',
        // sizeref: 10,
        hovertemplate: [
          '<b>IMAGES</b>: $%{x} <br> <b>%{text}</b> <br>',
          '<b>IMAGES</b>: $%{x} <br> <b>%{text}</b> <br>',
        ],
        // hoverlabel: {
        //   bordercolor: ['red'],
        // },
        // hoveron: 'points+fills',
      };
      var trace3_dup = {
        type: 'scatter',
        mode: 'markers',
        // name: 'Markers and Text',
        // text: ['Text duplication', 'Text B'],
        // textposition: 'top',
        // hovertext: 'text hover',
        x: ['2016-05-31'],
        y: [150],
        xaxis: 'x',
        yaxis: 'y2',
        marker: {
          size: 25,
          // size: [25, 10],
          symbol: 'circle-dot',
          color: 'red',
          // color: ['red', 'green'],
        },
        showlegend: false,
        opacity: 1,
        // texttemplate: '',
        // sizemode: 'area',
        // sizeref: 10,
        hovertemplate: [
          '<b>IMAGES</b>: $%{x} <br> <b>%{text}</b> <br>',
          '<b>IMAGES</b>: $%{x} <br> <b>%{text}</b> <br>',
        ],
        // hoverlabel: {
        //   bordercolor: ['red'],
        // },
        // hoveron: 'points+fills',
      };

      var trace4 = {
        type: 'scatter',
        mode: 'markers',
        x: ['2016-05-31'],
        y: [150],
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

      var data = [trace1, trace2, trace3, trace3_dup];

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
          // zeroline: false,
          // position: 1,
          // dtick: 0.01,
          autotick: false,
          showticklabels: true,
          // range: [1, 3],
          showgrid: true,
          autorange: true,
          // hoverformat: 'yaxis-2',
          // tick0: 3,
          // ticklen: 8,
          // tickwidth: 6,
          // tickcolor: '#000',
        }, //Markers Graph
        title: 'image_layout',
        hovermode: 'x',
        // images: [
        //   {
        //     source: 'assets/marker.png',
        //     xref: 'x',
        //     yref: 'y2',
        //     x: '2016-05-10',
        //     y: 150,
        //     sizex: 10 * 24 * 60 * 60 * 1000,
        //     sizey: 50,
        //     xanchor: 'center',
        //     yanchor: 'middle',
        //   },
        //   {
        //     source: 'assets/marker.png',
        //     xref: 'x',
        //     yref: 'y2',
        //     x: '2016-06-17',
        //     y: 150,
        //     sizex: 10 * 24 * 60 * 60 * 1000,
        //     sizey: 50,
        //     xanchor: 'center',
        //     yanchor: 'middle',
        //   },
        //   {
        //     source: 'assets/marker.png',
        //     xref: 'x',
        //     yref: 'y2',
        //     x: '2016-07-27',
        //     y: 150,
        //     sizex: 10 * 24 * 60 * 60 * 1000,
        //     sizey: 50,
        //     xanchor: 'center',
        //     yanchor: 'middle',
        //   },
        // ],
        shapes: [
          {
            type: 'path', //draw a custom SVG path using `path`. with respect to the axes' sizing mode.
            xsizemode: 'pixel',
            ysizemode: 'pixel',
            // x0: '2016-05-31',
            // yo: 150,
            xanchor: '2016-05-31',
            yanchor: 150,
            xref: 'x',
            yref: 'y2',
            path: 'M10 20C15.5229 20 20 15.5228 20 10C20 4.47716 15.5229 0 10 0C4.47705 0 0 4.47716 0 10C0 15.5228 4.47705 20 10 20ZM7.48999 10.0369C7.48999 9.8004 7.52393 9.5705 7.58521 9.35371L15.4851 17L16.4429 16.0738L3.95776 4L3 4.92622L4.54199 6.41739C3.82861 7.45528 3.41431 8.69682 3.41431 10.0369C3.41431 11.8499 4.17505 13.4922 5.40454 14.6812L6.36914 13.7484C5.38428 12.8024 4.77295 11.4886 4.77295 10.0369C4.77295 9.06468 5.04468 8.1516 5.52686 7.36989L6.52539 8.33553C6.27417 8.85448 6.13159 9.42598 6.13159 10.0369C6.13159 11.1273 6.58667 12.1127 7.32031 12.8287L8.28491 11.8959C7.79565 11.4164 7.48999 10.7595 7.48999 10.0369ZM14.283 10.0369C14.283 10.6478 14.1401 11.2193 13.8889 11.7383L12.8291 10.7201C12.8904 10.5033 12.9243 10.2734 12.9243 10.0369C12.9243 9.3143 12.6187 8.65741 12.1228 8.18443L13.0874 7.25165C13.8276 7.96109 14.283 8.94644 14.283 10.0369ZM14.8875 12.7039C15.3696 11.9222 15.6414 11.0091 15.6414 10.0369C15.6414 8.58514 15.03 7.27135 14.0452 6.32542L15.0098 5.39262C16.2393 6.5816 17 8.22385 17 10.0369C17 11.377 16.5857 12.6185 15.8723 13.6564L14.8875 12.7039Z',
            // fillrule: 'nonzero',
            fillcolor: 'black',
            line: {
              color: 'white',
              width: 0.7,
            },
          },
          {
            type: 'path', //draw a custom SVG path using `path`. with respect to the axes' sizing mode.
            xsizemode: 'pixel',
            ysizemode: 'pixel',
            // x0: '2016-05-31',
            // yo: 150,
            xanchor: '2016-05-31',
            yanchor: 150,
            xref: 'x',
            yref: 'y2',
            path: 'M10 20C15.5229 20 20 15.5228 20 10C20 4.47716 15.5229 0 10 0C4.47705 0 0 4.47716 0 10C0 15.5228 4.47705 20 10 20ZM7.48999 10.0369C7.48999 9.8004 7.52393 9.5705 7.58521 9.35371L15.4851 17L16.4429 16.0738L3.95776 4L3 4.92622L4.54199 6.41739C3.82861 7.45528 3.41431 8.69682 3.41431 10.0369C3.41431 11.8499 4.17505 13.4922 5.40454 14.6812L6.36914 13.7484C5.38428 12.8024 4.77295 11.4886 4.77295 10.0369C4.77295 9.06468 5.04468 8.1516 5.52686 7.36989L6.52539 8.33553C6.27417 8.85448 6.13159 9.42598 6.13159 10.0369C6.13159 11.1273 6.58667 12.1127 7.32031 12.8287L8.28491 11.8959C7.79565 11.4164 7.48999 10.7595 7.48999 10.0369ZM14.283 10.0369C14.283 10.6478 14.1401 11.2193 13.8889 11.7383L12.8291 10.7201C12.8904 10.5033 12.9243 10.2734 12.9243 10.0369C12.9243 9.3143 12.6187 8.65741 12.1228 8.18443L13.0874 7.25165C13.8276 7.96109 14.283 8.94644 14.283 10.0369ZM14.8875 12.7039C15.3696 11.9222 15.6414 11.0091 15.6414 10.0369C15.6414 8.58514 15.03 7.27135 14.0452 6.32542L15.0098 5.39262C16.2393 6.5816 17 8.22385 17 10.0369C17 11.377 16.5857 12.6185 15.8723 13.6564L14.8875 12.7039Z',
            // fillrule: 'nonzero',
            fillcolor: 'black',
            line: {
              color: 'white',
              width: 0.7,
            },
          },
        ],
        // annotations: [
        //   {
        //     x: '2016-05-31',
        //     y: 150,
        //     xref: 'x',
        //     yref: 'y2',
        //     text: 'Annotation Text',
        //     showarrow: true,
        //     // arrowhead: 7,
        //     ax: -25,
        //     ay: -40,
        //   },
        // ],
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
          scrollZoom: true,
        }
      ).then((htmlElement) => {
        //=
        // htmlElement.on('plotly_relayout', (eventdata) => {
        //   if (eventdata && eventdata['yaxis.range[0]']) {
        //     console.log(JSON.stringify(eventdata));
        //     var y_min = eventdata['yaxis.range[0]'];
        //     var y_max = eventdata['yaxis.range[1]'];
        //     var y_axis_diff =
        //       eventdata['yaxis.range[1]'] - eventdata['yaxis.range[0]'];
        //     console.log('y_max', y_max);
        //     console.log('y_difference', y_axis_diff);
        //     var layout_update = {
        //       // 'images.sizex': [y_axis_diff, y_axis_diff, y_axis_diff],
        //       // 'images.y': [y_axis_diff, y_axis_diff, y_axis_diff],
        //       images: [
        //         {
        //           source: 'assets/marker.png',
        //           xref: 'x',
        //           yref: 'y2',
        //           x: '2016-05-10',
        //           y: 150,
        //           sizex: (y_axis_diff / 2) * 24 * 60 * 60 * 1000,
        //           sizey: y_axis_diff / 2,
        //           xanchor: 'center',
        //           yanchor: 'middle',
        //         },
        //         {
        //           source: 'assets/marker.png',
        //           xref: 'x',
        //           yref: 'y2',
        //           x: '2016-06-17',
        //           y: 150,
        //           sizex: (y_axis_diff / 2) * 24 * 60 * 60 * 1000,
        //           sizey: y_axis_diff / 2,
        //           xanchor: 'center',
        //           yanchor: 'middle',
        //         },
        //         {
        //           source: 'assets/marker.png',
        //           xref: 'x',
        //           yref: 'y2',
        //           x: '2016-07-27',
        //           y: 150,
        //           sizex: (y_axis_diff / 2) * 24 * 60 * 60 * 1000,
        //           sizey: y_axis_diff / 2,
        //           xanchor: 'center',
        //           yanchor: 'middle',
        //         },
        //       ],
        //       autorange: true,
        //       title: 'changed_layout',
        //     };
        //     var new_trace = {
        //       type: 'scatter',
        //       // mode: 'markers',
        //       x: ['2016-06-17'],
        //       y: [150],
        //       xaxis: 'x',
        //       yaxis: 'y2',
        //       // marker: { size: 32, symbol: 'triangle-right', color: 'red' },
        //       showlegend: false,
        //       // opacity: 0.1,
        //       // texttemplate: `<h1>template</h1>`,
        //       hovertemplate: '<b>IMAGES</b>: <br>',
        //     };
        //     Plotly.deleteTraces('myDiv', 2);
        //     Plotly.addTraces('myDiv', new_trace);
        //     Plotly.update('myDiv', {}, layout_update, [2]);
        //   }
        // });
        // htmlElement.on('plotly_hover', function (data) {
        //   console.log('hover event data', data);
        //   // var xaxis = data.points[0].xaxis,
        //   //   yaxis = data.points[0].yaxis;
        //   // var infotext = data.points.map(function (d) {
        //   //   return 'width: ' + xaxis.l2p(d.x) + ', height: ' + yaxis.l2p(d.y);
        //   // });
        //   // let hoverInfo = document.getElementById('hoverinfo');
        //   // hoverInfo.innerHTML = infotext.join('<br/>');
        //   // Plotly.Fx.hover(
        //   //   'myDiv',
        //   //   [
        //   //     { curveNumber: 0, pointNumber: data.points[0].pointNumber },
        //   //     { curveNumber: 1, pointNumber: data.points[0].pointNumber },
        //   //   ],
        //   //   ['xy2']
        //   // );
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
