import { Component, OnInit,ElementRef,ViewChild,AfterViewInit, Type } from '@angular/core';
// const Plotly =require('plotly.js-dist');
//import * as Plotly from 'plotly.js-dist'
// import * as Plotly from 'plotly.js-dist-min';
// import * as Plotly from 'plotly.js';
import * as d3 from 'd3';
import * as Plotly from 'plotly.js-dist';
@Component({
  selector: 'app-example',
  templateUrl: './example.component.html',
  styleUrls: ['./example.component.css'] 
})
export class ExampleComponent implements AfterViewInit {  

  constructor() { }
  @ViewChild('example1', { static: true }) example1: ElementRef;
  ngAfterViewInit(): void {
    var trace1 = {
      x: [1, 2, 3, 4],
      y: [10, 15, 13, 17],
      type: 'scatter'
    };
    
    var trace2 = {
      x: [1, 2, 3, 4],
      y: [16, 5, 11, 9],
      type: 'scatter'
    };
    
    var data =[trace1,trace2];
    const el= this.example1;
   
    const data1: Plotly.Data[] = [
      {
        x: [1, 2, 3, 4],
        y: [10, 15, 13, 17],
        type: 'scatter'
      },
      {
        x: [1, 2, 3, 4],
        y: [16, 5, 11, 9],
        type: 'scatter'
      }
     
    ];
    var layout = {
      width: 500,
      height: 500,
      title: 'Line and Scatter Styling',
    }
    Plotly.newPlot(el.nativeElement, data,layout);
  //   Plotly.newPlot("gd", /* JSON object */ {
  //     "data": [{ "y": [1, 2, 3] }],
  //     "layout": { "width": 600, "height": 400}
  // })
  
    
    
  }

}
