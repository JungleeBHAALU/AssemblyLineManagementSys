import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AssemblyLine } from '../models/assemblyLine-model';
import { machineModel } from '../models/machine-model';
import { SettingsServiceService } from '../services/settings-service.service';

@Component({
  selector: 'app-main-app-layout-page',
  templateUrl: './main-app-layout-page.component.html',
  styleUrls: ['./main-app-layout-page.component.css']
})
export class MainAppLayoutPageComponent implements OnInit {


  MachineArray:machineModel[]=[
    {MachineName:"machine1",Active:"yes"},{MachineName:"machine2",Active:"yes"},{MachineName:"machine3",Active:"yes"},
    {MachineName:"machine4",Active:"yes"},{MachineName:"machine5",Active:"yes"},{MachineName:"machine6",Active:"yes"},
    {MachineName:"machine7",Active:"yes"},{MachineName:"machine8",Active:"yes"},{MachineName:"machine9",Active:"no"},
    {MachineName:"machine10",Active:"no"},{MachineName:"machine11",Active:"no"},{MachineName:"machine12",Active:"no"},
    {MachineName:"machine13",Active:"no"},{MachineName:"machine14",Active:"no"},{MachineName:"machine15",Active:"no"}
  ];

  //AssemblyLineArray contains obj of 
  AssemblyLineObjArray:AssemblyLine[]=[
    {
      MachineArr:["machine1","machine2","machine3","machine4"],
      AssemblyLineName:1,
      ProductCount:99,
      Timer:240
    },
    {
      MachineArr:["machine4","machine5","machine6","machine7","machine8"],
      AssemblyLineName:2,
      ProductCount:99,
      Timer:240
    }
  ];

  constructor(private router:Router,private settingsService:SettingsServiceService) { }
  ngOnInit(): void {
    this.settingsService.saveMachineArray(this.MachineArray);
  this.settingsService.saveAssemblyLineObjArray(this.AssemblyLineObjArray);
  }

}
