import {
  Component,
  OnInit,
  EventEmitter,
  Output,
  ViewChild,
  ElementRef
} from '@angular/core';
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
  // tslint:disable-next-line:no-output-rename
  @Output('bpCreated')
  blueprintCreated = new EventEmitter<ServerGame>();

  // Two-way binding property
  // newServerName = '';
  // newServerContent = '';
  @ViewChild('serverContentInput')
  serverContentInput: ElementRef;

  constructor() {}

  ngOnInit() {}

  onAddServer(nameInput: HTMLInputElement) {
    this.serverCreated.emit({
      serverName: nameInput.value,
      serverContent: this.serverContentInput.nativeElement.value
    });
  }

  onAddBlueprint(nameInput: HTMLInputElement) {
    this.blueprintCreated.emit({
      serverName: nameInput.value,
      serverContent: this.serverContentInput.nativeElement.value
    });
  }
}
