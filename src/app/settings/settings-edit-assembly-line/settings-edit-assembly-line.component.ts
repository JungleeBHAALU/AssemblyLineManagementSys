import { SettingsServiceService } from './../../services/settings-service.service';
import { machineModel } from './../../models/machine-model';
import { AssemblyLine } from 'src/app/models/assemblyLine-model';
import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import * as jquery from 'jquery';

import {BrowserModule} from '@angular/platform-browser';
import {FormControl, FormGroup, ReactiveFormsModule, FormsModule} from '@angular/forms';
import {NgSelectModule, NgOption} from '@ng-select/ng-select';


@Component({
  selector: 'app-settings-edit-assembly-line',
  templateUrl: './settings-edit-assembly-line.component.html',
  styleUrls: ['./settings-edit-assembly-line.component.css']
})
export class SettingsEditAssemblyLineComponent implements OnInit {

  AssemblyLineObj:AssemblyLine;
  machineArray:machineModel[]; 
  machineArrOfobj:string[];
  AssemblyLineName:number;
  ProductCount:number;
  filterdMachineObjArr:machineModel[] ;
  constructor(private router:ActivatedRoute,private settingsService:SettingsServiceService) { }
  machineFlag:number=0; // this variable is used for determining whether it to add new machine or replace machine
  action:string; //method replace on click event;
  ngOnInit(): void {
    
    //this.machineArray = JSON.parse(this.router.snapshot.queryParamMap.get('machineArray'));
   // this.AssemblyLineObj=JSON.parse(this.router.snapshot.queryParamMap.get('AssemblyLineObj'));
   this.AssemblyLineObj=this.settingsService.retrieveAssemblyLineObj();
   this.machineArray=this.settingsService.retrieveMachineArray();
    this.machineArrOfobj=this.AssemblyLineObj.MachineArr;
    this.AssemblyLineName=this.AssemblyLineObj.AssemblyLineName;
    this.ProductCount=this.AssemblyLineObj.ProductCount;
    this.filterdMachineObjArr=this.machineArray.filter(x => x.Active === 'no');
    //console.log('hi')
    //console.log(this.machineArrOfobj);
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
   // console.log(machine);
    this.machineFlag=flag;
    if(this.machineFlag=0){
      this.action="addMachine";
    }
    else{
      this.action="replaceMachine";
    }
   }
   addMachine(){
     console.log('add machine');
   }
   replaceMachine(){
    console.log('replace machine');
   }
   chooseMachinefunction(){
    if(this.machineFlag=0){
      this.addMachine();
    }
    else{
     this.replaceMachine();
    }
   }
}
