import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-notes-tooltip',
  templateUrl: './notes-tooltip.component.html',
  styleUrls: ['./notes-tooltip.component.css']
})
export class NotesTooltipComponent implements OnInit
{
  @Output() close=new EventEmitter<string>();

  constructor() { }

  ngOnInit(): void {
  }



}
