import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { ServerGame } from '../server.model';

@Component({
  selector: 'app-cockpit',
  templateUrl: './cockpit.component.html',
  styleUrls: ['./cockpit.component.css']
})
export class CockpitComponent implements OnInit {
  // Return new property out of component for another component to catch it by using $event also known as custom event
  @Output()
  serverCreated = new EventEmitter<ServerGame>();

  // Return new property out of component for another component to catch it by using $event also known as custom event
  @Output()
  blueprintCreated = new EventEmitter<ServerGame>();

  // Two-way binding property
  newServerName = '';
  newServerContent = '';

  constructor() {}

  ngOnInit() {}

  onAddServer() {
    this.serverCreated.emit({
      serverName: this.newServerName,
      serverContent: this.newServerContent
    });
  }

  onAddBlueprint() {
    this.blueprintCreated.emit({
      serverName: this.newServerName,
      serverContent: this.newServerContent
    });
  }
}
