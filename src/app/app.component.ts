import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'angular';
  // showSecret = false;
  // showSecret2 = false;
  // log = [];
  // log2 = [];

  // onToggleDetails() {
  //   this.showSecret = !this.showSecret;
  //   this.log.push(this.log.length + 1);
  // }

  // onToggleDetails2() {
  //   this.showSecret2 = !this.showSecret2;
  //   this.log2.push(new Date());
  // }

  // servers = [];

  // onAddServer() {
  //   this.servers.push('Another Server');
  // }

  // onRemoveServer(id: number) {
  //   const position = id + 1;
    // this.servers.splice(position, 1);
  // }
  serverElements = [{type: 'server', name: 'TestServer', content: 'Just a test!'}];

  onServerAdded(serverData: {serverName: string, serverContent: string}) {
    this.serverElements.push({
      type: 'server',
      name: serverData.serverName,
      content: serverData.serverContent
    });
  }

  onBlueprintAdded(blueprintData: {serverName: string, serverContent: string}) {
    this.serverElements.push({
      type: 'blueprint',
      name: blueprintData.serverName,
      content: blueprintData.serverContent
    });
  }

  onChangeFirst() {
    this.serverElements[0].name = 'changed!';
  }

  onDestroyFirst() {
    this.serverElements.splice(0, 1);
  }

  oddNumbers: number[] = [];
  evenNumbers: number[] = [];

  // onIntervalFired(firedNumber: number) {
  //   console.log(firedNumber);  
  // }

  onIntervalFired(firedNumber: number) {
    if(firedNumber % 2 ===0) {
      this.evenNumbers.push(firedNumber);
    }  else {
      this.oddNumbers.push(firedNumber);
    }
  }

  loadedFeature = 'recipe';

  onNavigate(feature: string) {
    this.loadedFeature = feature;
  }
}