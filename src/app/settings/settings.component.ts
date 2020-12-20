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
  MachineArray:machineModel[];
  //AssemblyLineArray contains obj of 
  AssemblyLineObjArray:AssemblyLine[];
  constructor(private router:Router,private settingsService:SettingsServiceService) { }

  ngOnInit(): void {
   // jquery('.js-example-basic-single').select2(); //initialize select2 to particular input

  //  this.router.navigate(['/SettingsLayout'],{queryParams: {MachineArray: this.MachineArray,AssemblyLineObjArray:this.AssemblyLineObjArray }});
  this.router.navigate(['/SettingsLayout']);
  // this.settingsService.saveMachineArray(this.MachineArray);
  // this.settingsService.saveAssemblyLineObjArray(this.AssemblyLineObjArray);
  this.MachineArray =this.settingsService.retrieveMachineArray();
  this.AssemblyLineObjArray=this.settingsService.retrieveAssemblyLineObjArray();
}
  createNewAssemblyLine(MachineArray){
    // this.router.navigate(['/SettingsEditAssemblyLine',MachineArray]);
    // this.router.navigate(['/SettingsEditAssemblyLine'], {queryParams: {MachineArray: this.MachineArray,AssemblyLineObj:{
    //   MachineArr:[],
    //   AssemblyLineName:'',
    //   ProductCount:0,
    //   Timer:240
    // } }});
    //console.log("yo");
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
