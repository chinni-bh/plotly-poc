import { Component, OnInit ,ElementRef,ViewChild,AfterViewInit} from '@angular/core';
 import * as d3 from 'd3';
import * as Plotly from 'plotly.js-dist';
@Component({
  selector: 'app-custom-chart-events',
  templateUrl: './custom-chart-events.component.html',
  styleUrls: ['./custom-chart-events.component.css']
})
export class CustomChartEventsComponent implements AfterViewInit {
  @ViewChild('clickEvent', { static: true }) el: ElementRef;
   
  constructor() { }
  
  ngAfterViewInit(): void {
   
    var N = 16,
    x = d3.range(N),
    y = d3.range(N)?.map( d3.randomNormal() ),
    y1 = d3.range(N).map( d3.randomNormal() ),
    y2 = d3.range(N).map( d3.randomNormal(-2) ),
    y3 = d3.range(N).map( d3.randomNormal(2) ),
    trace1 = { x:x, y:y1, type:'scatter', mode:'lines', name:'Jeff' },
    trace2 = { x:x, y:y2, type:'scatter', mode:'lines', name:'Terren' },
    trace3 = { x:x, y:y3, type:'scatter', mode:'lines', name:'Arthur' },

    
    data = [ { x:x, y:y, type:'scatter',
            mode:'markers', marker:{size:16} }, trace1,trace2,trace3],
     layout = {
        hovermode:'closest',
        title:'Click on Points',
        annotations:[],
     };

Plotly.newPlot(this.el.nativeElement, data, layout);

this.el.nativeElement.on('plotly_click', function(data){
  console.log(data)
  var pts,annotate_text = '',annotation,annotations;
  for(var i=0; i < data.points.length; i++){
      pts = 'x = '+data.points[i].x +'\ny = '+
          data.points[i].y.toPrecision(4) + '\n\n';
          annotate_text = 'x = '+data.points[i].x +
                      ' y = '+data.points[i].y.toPrecision(4);

        annotation = {
          text: annotate_text,
          x: data.points[i].x,
          y: parseFloat(data.points[i].y.toPrecision(4))
        }

        annotations =  layout.annotations;
        annotations.push(annotation);
       
  }
  Plotly.relayout('clickAnnotation',{annotations: annotations})
  alert('Closest point clicked:\n\n'+pts);
});







  }



}
