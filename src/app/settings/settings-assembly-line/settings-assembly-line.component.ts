import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-settings-assembly-line',
  templateUrl: './settings-assembly-line.component.html',
  styleUrls: ['./settings-assembly-line.component.css']
})
export class SettingsAssemblyLineComponent implements OnInit {

  MachineArr:string[]=["machine1","machine2","machine3"];
  AssemblyLineName:string='1';
  ProductCount:number=99;
  constructor() { }

  ngOnInit(): void {
  }

}
