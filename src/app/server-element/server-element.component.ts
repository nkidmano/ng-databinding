import { Component, OnInit, Input, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-server-element',
  templateUrl: './server-element.component.html',
  styleUrls: ['./server-element.component.css'],
  encapsulation: ViewEncapsulation.Emulated // None, Native and Emulated is default by ng
})
export class ServerElementComponent implements OnInit {
  // element property has alias name srvElement in app.component html to receive data from it cause its has @Input()
  // tslint:disable-next-line:no-input-rename
  @Input('srvElement')
  element: { type: string; name: string; content: string };

  constructor() {}

  ngOnInit() {}
}
