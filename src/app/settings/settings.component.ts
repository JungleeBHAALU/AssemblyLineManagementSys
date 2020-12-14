import { SettingsServiceService } from './../services/settings-service.service';
import { machineModel } from './../models/machine-model';
import { AssemblyLine } from './../models/assemblyLine-model';
import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import * as jquery from 'jquery';




@Component({
  selector: 'app-settings',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.css']
})
export class SettingsComponent implements OnInit {
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
   // jquery('.js-example-basic-single').select2(); //initialize select2 to particular input

  //  this.router.navigate(['/SettingsLayout'],{queryParams: {MachineArray: this.MachineArray,AssemblyLineObjArray:this.AssemblyLineObjArray }});
  this.router.navigate(['/SettingsLayout']);
  this.settingsService.saveMachineArray(this.MachineArray);
  this.settingsService.saveAssemblyLineObjArray(this.AssemblyLineObjArray);
}
  createNewAssemblyLine(MachineArray){
    // this.router.navigate(['/SettingsEditAssemblyLine',MachineArray]);
    // this.router.navigate(['/SettingsEditAssemblyLine'], {queryParams: {MachineArray: this.MachineArray,AssemblyLineObj:{
    //   MachineArr:[],
    //   AssemblyLineName:'',
    //   ProductCount:0,
    //   Timer:240
    // } }});
    console.log("yo");
    this.router.navigate(['/SettingsEditAssemblyLine']);
    this.settingsService.saveMachineArray(this.MachineArray);
    this.settingsService.saveAssemblyLineObj({
      MachineArr:[],
      AssemblyLineName:0,
      ProductCount:0,
      Timer:240
    });
  }

  editAssemblyLine(line:AssemblyLine){
    // this.router.navigate(['/SettingsEditAssemblyLine',MachineArray]);
    this.router.navigate(['/SettingsEditAssemblyLine']);
    this.settingsService.saveMachineArray(this.MachineArray);
    this.settingsService.saveAssemblyLineObj(line);
   //this.settingsService.saveAssemblyLineObjArray(this.AssemblyLineObjArray);
  }


  

}
