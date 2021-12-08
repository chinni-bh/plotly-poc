import { Component, OnInit,ViewChild, ElementRef, AfterViewInit } from '@angular/core';

declare const Plotly: any;
@Component({
  selector: 'app-line-plot',
  templateUrl: './line-plot.component.html',
  styleUrls: ['./line-plot.component.css']
})
export class LinePlotComponent implements AfterViewInit {

  
   @ViewChild('plots') el: ElementRef;
 
  //  @ViewChild('plot', {read: ElementRef}) ell: ElementRef;

  constructor() {}
  // ngOnInit() {
   
  //   // this.rideShareData = rideShareData;

  //   // this.rideShareGraph = {
  //   //   data: [
  //   //     {
  //   //       x: this.rideShareData.hours,
  //   //       y: this.rideShareData.weekendRides,
  //   //       type: 'scatter',
  //   //       name: 'Weekend Rides',
  //   //     },
  //   //     {
  //   //       x: this.rideShareData.hours,
  //   //       y: this.rideShareData.weekdayRides,
  //   //       type: 'scatter',
  //   //       name: 'Week Day Rides',
  //   //     },
  //   //   ],
  //   //   layout: {
  //   //     responsive: true,
  //   //     title: { text: 'July 2019' },
  //   //     xaxis: { 
  //   //       title: { text: "Hour of the day" },
  //   //     },
  //   //     yaxis: {
  //   //       title: { text: "Rides" },
  //   //     },
  //   //   }
  //   // };
  // }
  ngOnInit(){

  }
  ngAfterViewInit() {
    // const element= this.el;
  //   const data=[
  //     {
  //       x: [1,2,3,4,5],
  //       y: [2,4,6,8,10],
  //       // type: 'scatter',
  //       // name: 'Weekend Rides',
  //     },
  //     {
  //       x: [1,2,3,4,5],
  //       y: [3,5,7,9,11],
  //       // type: 'scatter',
  //       // name: 'Week Day Rides',
  //     },
  //   ];
  //   const style={
  //     margin:{t:0}
  //   }
  //    const layout={
  //     responsive: true,
  //     title: { text: 'Sample' },
  //     xaxis: { 
  //       title: { text: "X axis" },
  //     },
  //     yaxis: {
  //       title: { text: "Y axis" },
  //     },
  //   }
 
  //   Plotly.newPlot(
  //       element,
  //       data,
  //       layout,
  //       style

       

        
  //     );
  var trace1 = {
    x: [2, 1, 8, 8],
    y: [0.25, 9, 2, 6],
    text: ['filled triangle', 'filled Polygon', 'Quadratic Bezier Curves', 'Cubic Bezier Curves'],
    mode: 'text'
  };
  
  var layout = {
    title: 'Basic Arbitrary SVG Paths',
    xaxis: {
      range: [0, 9],
      zeroline: false
    },
    yaxis: {
      range: [0, 11],
      showgrid: false
    },
    width: 500,
    height: 500,
    shapes: [
  
      //Quadratic Bezier Curves
  
      {
        type: 'path',
        path: 'M 4,4 Q 6,0 8,4',
        line: {
          color: 'rgb(93, 164, 214)'
        }
      },
  
      //Cubic Bezier Curves
  
      {
        type: 'path',
        path: 'M 1,4 C 2,8 6,4 8,8',
        line: {
          color: 'rgb(207, 114, 255)'
        }
      },
  
      //Filled Triangle
  
      {
        type: 'path',
        path: 'M 1 1 L 1 3 L 4 1 Z',
        fillcolor: 'rgba(44, 160, 101, 0.5)',
        line: {
          color: 'rgb(44, 160, 101)'
        }
      },
  
      //Filled Polygon
  
      {
        type: 'path',
        path: ' M 3,7 L2,8 L2,9 L3,10, L4,10 L5,9 L5,8 L4,7 Z',
        fillcolor: 'rgba(255, 140, 184, 0.5)',
        line: {
          color: 'rgb(255, 140, 184)'
        }
      }
    ]
  };
  // const data1=[{x:[1,2],y:[3,4]}]
  const data1 = {
    x: [ 1,2 ],
    y: [ 3,4 ], //keeping the length same
    name: 'type string, name of the trace',
    type: 'scattergl', //this very important to activate WebGL
    mode: 'line' //other properties can be found in the docs.
  }
  // var data = data1;
  const dataN = [trace1];

// Plotly.newPlot(this.el, dataN, layout);
var trace3 = {
  x: [1, 2, 3, 4],
  y: [10, 15, 13, 17],
  type: 'scatter'
};

var trace2 = {
  x: [1, 2, 3, 4],
  y: [16, 5, 11, 9],
  type: 'scatter'
};

var data = [];
data.push(trace3);
data.push(trace2);
if(this.el){
  console.log("DOM")
  const ell= this.el;
  console.log(this.el.nativeElement.innerHTML)
Plotly.newPlot(ell, data,{margin: { t: 0 } });}
  // console.log(element)
  // Plotly.plot(element, [data1],
  //   { //here starts the layout definition (keep in mind the commas)
  //     autoexpand: "true",
  //     autosize: "true",
  //     width: window.innerWidth - 200, //we give initial width, so if the
  //                                     //graph is rendered while hidden, it   
  //                                     //takes the right shape
  //     margin: {
  //     autoexpand: "true",
  //     margin: 0
  //     },
  //     offset: 0,
  //     type: "scattergl",
  //     title: name, //Title of the graph
  //     hovermode: "closest",
  //     xaxis: {
  //     linecolor: "black",
  //     linewidth: 2,
  //     mirror: true,
  //     title: "Time (s)",
  //     automargin: true
  //     },
  //     yaxis: {
  //     linecolor: "black",
  //     linewidth: 2,
  //     mirror: true,
  //     automargin: true,
  //     title: 'Any other Unit'
  //         }
  //     },
  //     { //this is where the configuration is defined
  //     responsive: true, //important to keep graph responsive
  //     scrollZoom: true
  //     }
  //   );

  
   }

}
