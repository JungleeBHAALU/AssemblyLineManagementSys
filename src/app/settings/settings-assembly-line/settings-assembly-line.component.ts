import { machineModel } from './../../models/machine-model';
import { AssemblyLineService } from './../../services/assembly-line.service';
import { AssemblyLine} from 'src/app/models/assemblyLine-model'
import { Component, OnInit } from '@angular/core';
import {  Input } from '@angular/core'


@Component({
  selector: 'app-settings-assembly-line',
  templateUrl: './settings-assembly-line.component.html',
  styleUrls: ['./settings-assembly-line.component.css']
})
export class SettingsAssemblyLineComponent implements OnInit {

  @Input() AssemblyLineObj:AssemblyLine;

  MachineArr:string[];
  AssemblyLineName:number;
  ProductCount:number;

  constructor() { }

  ngOnInit(): void {
    this.MachineArr=this.AssemblyLineObj.MachineArr;
    this.AssemblyLineName=this.AssemblyLineObj.AssemblyLineName;
    this.ProductCount=this.AssemblyLineObj.ProductCount;
    
  }

}
