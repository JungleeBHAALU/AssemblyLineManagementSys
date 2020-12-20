import { SettingsServiceService } from './../../services/settings-service.service';
import { machineModel } from './../../models/machine-model';
import { AssemblyLine } from 'src/app/models/assemblyLine-model';
import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import * as jquery from 'jquery';

import {BrowserModule} from '@angular/platform-browser';
import {FormControl, FormGroup, ReactiveFormsModule, FormsModule} from '@angular/forms';
import {NgSelectModule, NgOption} from '@ng-select/ng-select';
import { global } from '@angular/compiler/src/util';


@Component({
  selector: 'app-settings-edit-assembly-line',
  templateUrl: './settings-edit-assembly-line.component.html',
  styleUrls: ['./settings-edit-assembly-line.component.css']
})
export class SettingsEditAssemblyLineComponent implements OnInit {

  AssemblyLineObj:AssemblyLine; //single machine data obj
  machineArray:machineModel[];  // array of machine's data
  machineArrOfobj:string[];     //array of machinenames 
  AssemblyLineName:number;
  GlobalsaveAssemblyLineObjArray:AssemblyLine[]; //global array of assemblyline obj's
 // ProductCount:number;
  filterdMachineObjArr:machineModel[] ;
  constructor(private router:ActivatedRoute,private settingsService:SettingsServiceService) { }
  machineFlag:number=0; // this variable is used for determining whether it to add new machine or replace machine
  action:string; //method replace on click event;
  replaceMachineVar:string;//stores replace machine name
  selectedMachineName :string; //stores select box value of machine name
  ngOnInit(): void {
    
    //this.machineArray = JSON.parse(this.router.snapshot.queryParamMap.get('machineArray'));
   // this.AssemblyLineObj=JSON.parse(this.router.snapshot.queryParamMap.get('AssemblyLineObj'));
   this.GlobalsaveAssemblyLineObjArray=this.settingsService.retrieveAssemblyLineObjArray();
   this.AssemblyLineObj=this.settingsService.retrieveAssemblyLineObj();
   this.machineArray=this.settingsService.retrieveMachineArray();
    this.machineArrOfobj=this.AssemblyLineObj.MachineArr;
    this.AssemblyLineName=this.AssemblyLineObj.AssemblyLineName;
   // this.ProductCount=this.AssemblyLineObj.ProductCount;
    this.filterdMachineObjArr=this.machineArray.filter(x => x.Active === 'no');
    //console.log('hi')
    //console.log(this.machineArrOfobj);
  }

  ngOnDestroy(): void {
    this.updateGlobalMachineArrayObj();
  }

//   filterInactiveMachines(){
//     return this.machineArray.filter(x => x.Active === 'no');
//  }


  selectedSimpleItem = []

  customSearchFn(term: string, item: any) {
    term = term.toLocaleLowerCase();
    return item.MachineName.toLocaleLowerCase().indexOf(term) > -1;
   }

   //this function is trigger when you click on machine button in edit
   AddReplaceMachine(machine:string,flag:number){
    console.log(machine);
    this.machineFlag=flag;
    if(this.machineFlag===0){
      this.action="addMachine";
      console.log(this.machineFlag);

    }
    else{
      this.action="replaceMachine";
      this.replaceMachineVar=machine;
      console.log(this.replaceMachineVar);
    }
   }
   addMachine(){
     console.log('add machine');
     console.log("Dropdown selection:", this.selectedMachineName);
     this.AssemblyLineObj.MachineArr.push(this.selectedMachineName);
     this.setActiveMachineStatusYesInMachineArray(this.selectedMachineName);
     this.updateGlobalMachineArrayObj();
     this.filterdMachineObjArr=this.machineArray.filter(x => x.Active === 'no');
     this.selectedMachineName='';
   }
   replaceMachine(){
    console.log('replace machine');
    console.log(this.replaceMachineVar);
    console.log("Dropdown selection:", this.selectedMachineName);
   }
   chooseMachinefunction(){
    if(this.machineFlag===0){
      this.addMachine();
    }
    else{
     this.replaceMachine();
    }
   }

   //sets machine status active="yes"
   setActiveMachineStatusYesInMachineArray(machine_name:string){
    this.machineArray.forEach(element => {
      if(element.MachineName===machine_name){
        element.Active='yes';
      }
    });
   }

   //sets machine status active="no"
   setActiveMachineStatusNoInMachineArray(machine_name:string){
    this.machineArray.forEach(element => {
      if(element.MachineName===machine_name){
        element.Active='no';
      }
    });
   }

   //updates Global array of assemblyline obj's
   updateGlobalMachineArrayObj(){
      this.GlobalsaveAssemblyLineObjArray.forEach(element => {
        if(element.AssemblyLineName=this.AssemblyLineName){
          element=this.AssemblyLineObj;
        }
      });
      console.log(this.GlobalsaveAssemblyLineObjArray);
      this.settingsService.saveAssemblyLineObjArray(this.GlobalsaveAssemblyLineObjArray);
   }


//    //select box function to capture Machine name
//    changeFn(val) {
//     console.log("Dropdown selection:", this.selection);
// }
}
