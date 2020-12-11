import { Component, OnInit } from '@angular/core';
import {machineModel} from 'src/app/models/machine-model'

@Component({
  selector: 'app-settings-layout',
  templateUrl: './settings-layout.component.html',
  styleUrls: ['./settings-layout.component.css']
})
export class SettingsLayoutComponent implements OnInit {
  //contains machine status and name
  MachineArray:machineModel[]=[
    {MachineName:"machine1",Active:"yes"},{MachineName:"machine2",Active:"yes"},{MachineName:"machine3",Active:"yes"},
    {MachineName:"machine4",Active:"yes"},{MachineName:"machine5",Active:"yes"},{MachineName:"machine6",Active:"yes"},
    {MachineName:"machine7",Active:"yes"},{MachineName:"machine8",Active:"yes"},{MachineName:"machine9",Active:"no"},
    {MachineName:"machine10",Active:"no"},{MachineName:"machine11",Active:"no"},{MachineName:"machine12",Active:"no"},
    {MachineName:"machine13",Active:"no"},{MachineName:"machine14",Active:"no"},{MachineName:"machine15",Active:"no"}
    
  ];

  //AssemblyLineArray contains obj of 
  AssemblyLineObjArray=[
    {
      MachineArr:["machine1","machine2","machine3","machine4"],
      AssemblyLineName:'1',
      ProductCount:99,
      Timer:240
    },
    {
      MachineArr:["machine4","machine5","machine6","machine7","machine8"],
      AssemblyLineName:'2',
      ProductCount:99,
      Timer:240
    }
  ];
  constructor() { }

  ngOnInit(): void {
  }

}
