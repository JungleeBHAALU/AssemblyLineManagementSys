import { AssemblyLine } from './../models/assemblyLine-model';
import { machineModel } from './../models/machine-model';
import { Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root'
})
export class SettingsServiceService {

  MachineArray:Array<machineModel>=[];
  AssemblyLineObjArray:Array<AssemblyLine>=[];
  AssemblyLineObj:AssemblyLine;

  constructor() { }

  //for MachineArray getter and setter
  saveMachineArray(mArr:machineModel[]){
    this.MachineArray=mArr;
  }
  retrieveMachineArray(){
    return this.MachineArray;
  }

  //for AssemblyLineObjArray getter and setter
  saveAssemblyLineObjArray(aLOArr:AssemblyLine[]){
    this.AssemblyLineObjArray=aLOArr;
  }
  retrieveAssemblyLineObjArray(){
   return this.AssemblyLineObjArray;
  }

  //for AssemclyLineObj getter setter
  saveAssemblyLineObj(line){
    this.AssemblyLineObj=line;
  }
  retrieveAssemblyLineObj(){
   return this.AssemblyLineObj;
  }
}
