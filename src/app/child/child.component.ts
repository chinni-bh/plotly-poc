import {
  Component,
  ElementRef,
  OnInit,
  ViewChild,
  ɵɵstylePropInterpolate1,
} from '@angular/core';
import * as d3 from 'd3';
//import * as Plotly from 'plotly.js-dist';
import * as PlotlyJS from 'plotly.js/dist/plotly.js';
// import * as $ from 'jquery';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css'],
})
export class ChildComponent implements OnInit {
  @ViewChild('plot', { static: true }) ele: ElementRef;
  @ViewChild('plot2', { static: true }) ele2: ElementRef;
  @ViewChild('plot3', { static: true }) ele3: ElementRef;
  @ViewChild('plot4', { static: true }) ele4: ElementRef;
  @ViewChild('plot5', { static: true }) ele5: ElementRef;
  @ViewChild('sliderrange', { static: true }) slider: ElementRef;
  @ViewChild('amount', { static: true }) amount: ElementRef;

  ishover = false;
  ishoverNotes: boolean = false;
  addNote: boolean = false;
  eventData;
  myStyles = {
    backgroundColor: 'rgb(250,100,0)',
    position: 'fixed',
    left: '1250px',
    top: '370px',
    //zIndex:10
  };

  constructor() {}

  ngOnInit(): void {
    this.call();
  }

  call() {
    var data = [
      {
        mode: 'lines+markers+text',
        x: [60, 70, 80, 90, 100, 150],
        y: [8, 8, 9, 9, 9, 15],
        text: [, 'h', , , , '​😜​'],
        marker: {
          //color:['red','green','#ff7f0e',,"pink"],
          symbol: ['circle-open-dot', , 'square-open-dot', ,],
        },
      },
      {
        mode: 'lines+markers+text',
        x: [6, 7, 8, 9, 10, 15],
        y: [8, 8, 9, 9, 9, 15],
        text: [, 'h', , , , '​😜​'],
        marker: {
          //color:['red','green','#ff7f0e',,"pink"],
          symbol: ['circle-open-dot', , 'square-open-dot', ,],
        },
      },
    ];

    PlotlyJS.newPlot(this.ele4.nativeElement, data, {
      //hovermode:'y',
      dragmode: 'pan',
      shapes: [
        {
          // templateitemname: "adi",
          // enabled: true,
          type: 'line',
          xref: 'paper',
          x0: 0,
          y0: 14.5,
          x1: 1,
          y1: 14.5,
          line: {
            color: 'rgb(255, 0, 0)',
            //width: 4,
            dash: 'dot',
          },
        },
      ],
      xaxis: {
        range: [-100, 200],
        gridwidth: 3,
        gridcolor: 'yellow',
        //showgrid:false
        showspikes: true,
        spikemode: 'marker',
        spikecolor: 'green',
      },

      yaxis: {
        gridcolor: 'pink',
        showspikes: true,
        spikemode: 'marker',
        spikecolor: 'green',
      },
    });

    //   var myPlot =$( document.getElementById('plot4'));
    //   myPlot.on('plotly_click', function(data){
    //     console.log(data);
    //     var pts = '';
    //     // for(var i=0; i < data.points.length; i++){
    //     //     pts = 'x = '+data.points[i].x +'\ny = '+
    //     //         data.points[i].y.toPrecision(4) + '\n\n';
    //     // }
    //     alert('Closest point clicked:\n\n'+pts);
    // });
    d3.csv(
      'https://raw.githubusercontent.com/plotly/datasets/master/finance-charts-apple.csv'
    ).then((rows) => {
      //console.log(rows);

      function unpack(rows, key) {
        return rows.map(function (row) {
          return row[key];
        });
      }
      var trace1 = {
        //type: "scatter",
        hoverinfo: 'x+y',
        mode: 'lines',
        name: 'AAPL High',
        x: unpack(rows, 'Date'),
        y: unpack(rows, 'AAPL.High'),
        line: { color: '#17BECF' },
      };

      var trace2 = {
        //type: "scatter",
        mode: 'lines', //+markers",
        name: 'AAPL Low',
        x: unpack(rows, 'Date'),
        y: unpack(rows, 'AAPL.Low'),
        // xaxis:'x2',
        yaxis: 'y2',
        // line: {color: '#7F7F7F',
        //       //width:'10',
        //       //dash:'dot'
        //         },
        //marker: {symbol:'pentagon'}
      };

      var data = [trace1, trace2];

      var layout = {
        title: 'Bassdsdic Time Series',
        grid: {
          rows: 2,
          columns: 1,
          //subplots:[['xy'],['xy2']],
          //roworder: 'bottom to top'},
          //pattern:"independent"
        },
        yaxis: {
          title: 'yaxis2 title',
          titlefont: { color: '#ff7f0e' },
          anchor: 'free',
          overlaying: 'y',
          side: 'left',
          //position: 0.15,
          linecolor: '#ff7f0e',
          linewidth: 1,
          tickfont: { color: '#ff7f0e' },
          tickcolor: '#ff7f0e',
          tickwidth: 5,
          tickmode: 'auto',
          zeroline: false,
        },
        yaxis2: {
          title: 'yaxis3 title',
          titlefont: { color: 'green' },
          tickfont: { color: 'green' },
          //anchor: 'x',
          overlaying: 'y',
          //side: 'right',
          //position: 0.72,
          linecolor: 'green',
          linewidth: 1,
          tickcolor: 'green',
          zeroline: false,
        },
        xaxis: {
          rangeslider: {},
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
        },
        xaxis2: {
          rangeslider: {},
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
        },
        type: 'date',
        //legend: {bgcolor:'red'},
        //paper_bgcolor:'green',
        //plot_bgcolor:'yellow',
      };

      console.log(PlotlyJS.newPlot(this.ele.nativeElement, data, layout));
    });

    d3.csv(
      'https://raw.githubusercontent.com/plotly/datasets/master/job-automation-probability.csv'
    ).then((rows) => {
      var x = [],
        y = [],
        s = [],
        c = [],
        t = [];

      for (var i = 0; i < rows.length; i++) {
        var row = rows[i];
        y.push(row['Average annual wage']);
        x.push(row['prob']);
        s.push(row['numbEmployed']);
        c.push(row['education']);
        t.push(row['short occupation']);
      }

      PlotlyJS.newPlot(this.ele3.nativeElement, {
        data: [
          {
            type: 'scatter',
            mode: 'markers',
            x: x,
            y: y,
            text: t,
            marker: { size: s, sizeref: 4000, sizemode: 'area' },
            transforms: [
              { type: 'groupby', groups: c },
              // ,{
              //   type: 'aggregate',
              //   groups:c,
              //   aggregations: [
              //     {target: 'y', func: 'avg', enabled: true},
              //   ]
              // }
            ],
            hovertemplate:
              '<b>%{text}</b><br><br>' +
              '%{yaxis.title.text}: %{y:$,.0f}<br>' +
              '%{xaxis.title.text}: %{x:.0%}<br>' +
              'Number Employed: %{marker.size:,}' +
              '<extra>hello</extra>',
          },
        ],
        layout: {
          title: 'Higher Risk of Job Automation in Lower Paying Jobs',
          hovermode: 'closest',
          hoverlabel: { bgcolor: '#FFF' },
          legend: { orientation: 'h', y: -0.3, bgcolor: 'yellow' },
          xaxis: {
            tickformat: '.0%',
            title: 'Automation Probability',
            zeroline: false,
          },
          yaxis: {
            title: 'Income',
            zeroline: false,
          },
        },
        config: { responsive: true },
      });
    });

    var Trace1 = {
      x: [1, 2, 3],
      y: [4, 5, 6],
      name: 'yaxis1 data',
      type: 'scatter',
    };

    var Trace2 = {
      x: [2, 3, 4],
      y: [40, 50, 60],
      name: 'yaxis2 data',
      xaxis: 'x2',
      yaxis: 'y2',
      type: 'scatter',
    };

    var Trace3 = {
      x: [4, 5, 6],
      y: [40000, 50000, 60000],
      name: 'yaxis3 data',
      yaxis: 'y3',
      type: 'scatter',
    };

    var Trace4 = {
      x: [5, 6, 7],
      y: [400000, 500000, 600000],
      name: 'yaxis4 data',
      yaxis: 'y4',
      type: 'scatter',
    };

    var data2 = [Trace1, Trace2, Trace3, Trace4];

    var layout2 = {
      title: {
        font: {
          color: '#1f77b4',
          size: 15,
        },
        text: 'example title',
      },
      //hovermode:'y',
      width: 800,
      xaxis: {
        domain: [0.3, 0.7],
        zeroline: false,
        tickfont: { color: '#ff7f0e' },
        tickcolor: '#ff7f0e',
        //tickwidth:5,
        tickmode: 'auto',
        linecolor: '#1f77b4',
        linewidth: 1,
      },
      xaxis2: {
        zeroline: false,
        overlaying: 'x',
        linecolor: '#ff7f0e',
        linewidth: 1,
        //position: -0.75,
        anchor: 'free',
        side: 'top',
      },
      yaxis: {
        title: {
          font: {
            color: '#1f77b4',
            size: 15,
          },
          text: 'yaxis title',
        },
        tickfont: { color: '#1f77b4' },
        //side: 'left',
        position: 0.27,
        linecolor: '#1f77b4',
        linewidth: 1,
        tickcolor: '#1f77b4',
        zeroline: false,
        showspikes: true,
        spikemode: 'marker',
      },
      yaxis2: {
        title: 'yaxis2 title',
        titlefont: { color: '#ff7f0e' },
        anchor: 'free',
        overlaying: 'y',
        side: 'left',
        position: 0.15,
        linecolor: '#ff7f0e',
        linewidth: 1,
        tickfont: { color: '#ff7f0e' },
        tickcolor: '#ff7f0e',
        tickwidth: 5,
        tickmode: 'auto',
        zeroline: false,
      },
      yaxis3: {
        title: 'yaxis3 title',
        titlefont: { color: 'green' },
        tickfont: { color: 'green' },
        //anchor: 'x',
        overlaying: 'y',
        side: 'right',
        position: 0.72,
        linecolor: 'green',
        linewidth: 1,
        tickcolor: 'green',
        zeroline: false,
      },
      yaxis4: {
        title: 'yaxis4 title',
        titlefont: { color: '#d62728' },
        tickfont: { color: '#d62728' },
        anchor: 'free',
        overlaying: 'y',
        side: 'right',
        position: 0.85,
        linecolor: '#d62728',
        linewidth: 1,
        //tickmode:'auto',
        tickcolor: '#d62728',
        zeroline: false,
      },
    };

    PlotlyJS.newPlot(this.ele2.nativeElement, data2, layout2, {
      responsive: 'true',
    });
    setTimeout(() => {
      PlotlyJS.update(this.ele2.nativeElement, { x: [] });
    }, 5000);

    var trace11 = {
      x: [0, 1, 2],
      y: [10, 11, 12],
      type: 'scatter',
    };

    var trace21 = {
      x: [2, 3, 4],
      y: [700, 710, 720],
      //xaxis: 'x2',
      yaxis: 'y2',
      type: 'scatter',
    };

    var trace31 = {
      x: [3, 4, 5],
      y: [1000, 1100, 1200],
      xaxis: 'x2',
      yaxis: 'y3',
      type: 'scatter',
      mode: 'text',
      text: '📓​',
    };

    var data3 = [trace11, trace21, trace31];

    var layout3 = {
      // hovermode:'x',
      hoverdistance: 1000,
      dragmode: false,
      yaxis: {
        title: {
          font: {
            color: '#1f77b4',
            size: 15,
          },
          text: 'yaxis title',
        },
        tickfont: { color: '#1f77b4' },
        //side: 'left',
        position: 0.27,
        linecolor: '#1f77b4',
        linewidth: 1,
        tickcolor: '#1f77b4',
        zeroline: false,
      },
      yaxis2: {
        title: 'yaxis2 title',
        titlefont: { color: '#ff7f0e' },
        anchor: 'free',
        overlaying: 'y',
        side: 'right',
        position: 1,
        linecolor: '#ff7f0e',
        linewidth: 1,
        tickfont: { color: '#ff7f0e' },
        tickcolor: '#ff7f0e',
        tickwidth: 5,
        tickmode: 'auto',
        zeroline: false,
      },
      grid: {
        rows: 2,
        columns: 1,
        subplots: [['xy'], ['x2y3']],
        roworder: 'bottom to top',
      },
      //xaxis: {rangeslider: {range:[-0.01,5.01]},
      //range:[-0.01,5.01]}
    };

    PlotlyJS.newPlot(this.ele5.nativeElement, data3, layout3, {
      responsive: 'true',
    });

    // setTimeout(()=>{PlotlyJS.update(this.ele4.nativeElement, {
    // x:[60,70,80,90,100,150],
    // y:[8,8,9,9,9,15],text: ['​👺​', 'Text B', 'Text C', 'Text D', 'Text E','​😜​']},[0])},5000 );
  }

  ngAfterViewInit() {
    // $(function() {
    //   $( <any>"#slider-range" ).slider({
    //     range: true,
    //     min: new Date('2010.01.01').getTime() / 1000,
    //     max: new Date('2014.01.01').getTime() / 1000,
    //     step: 86400,
    //     values: [ new Date('2013.01.01').getTime() / 1000, new Date('2013.02.01').getTime() / 1000 ],
    //     slide: function( event, ui ) {
    //       $( "#amount" ).val( (new Date(ui.values[ 0 ] *1000).toDateString() ) + " - " + (new Date(ui.values[ 1 ] *1000)).toDateString() );
    //     }
    //   });
    //   $( "#amount" ).val( (new Date($( "#slider-range" ).slider( "values", 0 )*1000).toDateString()) +
    //     " - " + (new Date($( "#slider-range" ).slider( "values", 1 )*1000)).toDateString());
    // });

    this.ele5.nativeElement.on('plotly_hover', (data) => {
      this.hover(data);
    });

    this.ele5.nativeElement.on('plotly_unhover', (data) => {
      this.unhover(data);
    });

    this.ele5.nativeElement.on('plotly_click', (data) => {
      this.click(data);
    });
  }

  click(data: any) {
    this.myStyles.left = (data.event.screenX + 15).toString() + 'px';
    this.myStyles.top = (data.event.screenY - 110).toString() + 'px';

    if (data.points[0].curveNumber == 2) this.ishoverNotes = true;
    else {
      this.ishover = false;
      this.eventData = data;
      console.log(this.eventData);
      this.addNote = true;
    }
  }

  hover(data) {
    this.myStyles.left = (data.event.screenX + 15).toString() + 'px';
    this.myStyles.top = (data.event.screenY - 110).toString() + 'px';

    if (data.points[0].curveNumber != 2) this.ishover = true;
    console.log(data);
  }

  unhover(data) {
    if (data.points[0].curveNumber != 2) this.ishover = false;
  }

  closeNote() {
    this.ishoverNotes = false;
  }

  createNote(data) {
    this.addNote = false;
    console.log(data);
    PlotlyJS.extendTraces(
      this.ele5.nativeElement,
      { x: [[data.points[0].x]], y: [[1000]] },
      [2]
    );
  }
}
