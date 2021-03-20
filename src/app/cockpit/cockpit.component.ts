import { Component, OnInit, EventEmitter, Output, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-cockpit',
  templateUrl: './cockpit.component.html',
  styleUrls: ['./cockpit.component.scss']
})
export class CockpitComponent implements OnInit {

  constructor() { }
  ngOnInit(): void {
    
  }
  
  @Output() serverCreated = new EventEmitter<{serverName: string, serverContent: string}>();
  @Output('bpCreated') blueprintCreated = new EventEmitter<{serverName: string, serverContent: string}>();
  // serverElements=[];
  // newServerName = '';
  // newServerContent = '';
  @ViewChild('serverContentInput') serverContentInput: ElementRef;

  // onAddServer() {
  //   this.serverElements.push({
  //     type: 'server',
  //     name: this.newServerName,
  //     content: this.newServerContent
  //   });
  // }
  onAddServer(serverNameInput: HTMLInputElement) {
    // console.log(this.serverContentInput);
    
    // console.log(serverNameInput.value);
    this.serverCreated.emit({serverName: serverNameInput.value, serverContent: this.serverContentInput.nativeElement.value});
  }

  // onAddBlueprint() {
  //   this.serverElements.push({
  //     type: 'blueprint',
  //     name: this.newServerName,
  //     content: this.newServerContent
  //   });
  // }
  onAddBlueprint(serverNameInput: HTMLInputElement) {
    this.blueprintCreated.emit({serverName: serverNameInput.value, serverContent: this.serverContentInput.nativeElement.value});
  }
}
