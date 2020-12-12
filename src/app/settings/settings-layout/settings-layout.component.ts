import { SettingsComponent } from './../settings.component';
import { SettingsServiceService } from './../../services/settings-service.service';
import { AssemblyLine } from './../../models/assemblyLine-model';
import { Component, OnInit, Input } from '@angular/core';
import {machineModel} from 'src/app/models/machine-model'
import {Router} from '@angular/router';
import { ActivatedRoute } from '@angular/router';



@Component({
  selector: 'app-settings-layout',
  templateUrl: './settings-layout.component.html',
  styleUrls: ['./settings-layout.component.css']
})
export class SettingsLayoutComponent implements OnInit {
  //contains machine status and name
   MachineArray:machineModel[];

  //AssemblyLineArray contains obj of 
  AssemblyLineObjArray:AssemblyLine[];
  constructor(private router:ActivatedRoute,private settingsService:SettingsServiceService,private settingsComponent:SettingsComponent) { }
  
  ngOnInit(): void {
    //debugger;
    // this.MachineArray = JSON.parse(this.router.snapshot.queryParamMap.get('MachineArray'));
    // const queryParamMap = this.router.snapshot["queryParamMap"];
    // this.AssemblyLineObjArray=JSON.parse(this.router.snapshot.queryParamMap.get('AssemblyLineObjArray'));
   // console.log(queryParamMap);
  //  this.MachineArray =JSON.parse(JSON.stringify(queryParamMap.get('MachineArray')));
  this.MachineArray =this.settingsService.retrieveMachineArray();
    //this.AssemblyLineObjArray=JSON.parse(JSON.stringify(queryParamMap.get('AssemblyLineObjArray')));
     console.log(this.MachineArray);
     this.AssemblyLineObjArray=this.settingsService.retrieveAssemblyLineObjArray();
     console.log(this.AssemblyLineObjArray);
  }
  
  editAssemblyLine(line:AssemblyLine){
    this.settingsComponent.editAssemblyLine(line);
  }
  
}
