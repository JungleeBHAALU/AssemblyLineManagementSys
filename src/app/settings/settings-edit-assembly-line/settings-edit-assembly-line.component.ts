import { SettingsServiceService } from './../../services/settings-service.service';
import { machineModel } from './../../models/machine-model';
import { AssemblyLine } from 'src/app/models/assemblyLine-model';
import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';


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
  constructor(private router:ActivatedRoute,private settingsService:SettingsServiceService) { }

  ngOnInit(): void {
    //this.machineArray = JSON.parse(this.router.snapshot.queryParamMap.get('machineArray'));
   // this.AssemblyLineObj=JSON.parse(this.router.snapshot.queryParamMap.get('AssemblyLineObj'));
   this.AssemblyLineObj=this.settingsService.retrieveAssemblyLineObj();
   this.machineArray=this.settingsService.retrieveMachineArray();
    this.machineArrOfobj=this.AssemblyLineObj.MachineArr;
    this.AssemblyLineName=this.AssemblyLineObj.AssemblyLineName;
    this.ProductCount=this.AssemblyLineObj.ProductCount;
  }

  filterInactiveMachines(type:string){
    return this.machineArray.filter(x => x.Active === type);
 }
}
