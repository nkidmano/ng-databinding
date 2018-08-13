import { Component } from '@angular/core';
import { ServerGame } from './server.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  serverElements = [{ type: 'server', name: 'Chaos', content: 'PvP server' }];

  onServerAdded(serverData: ServerGame) {
    this.serverElements.push({
      type: 'server',
      name: serverData.serverName,
      content: serverData.serverContent
    });
  }

  onBlueprintAdded(blueprintData: ServerGame) {
    this.serverElements.push({
      type: 'blueprint',
      name: blueprintData.serverName,
      content: blueprintData.serverContent
    });
  }

  onChangeFirst(): void {
    this.serverElements[0].name = 'Changed!';
  }

  onDestroyFirst(): void {
    this.serverElements.splice(0, 1);
  }
}
