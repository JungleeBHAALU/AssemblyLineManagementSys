

import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SettingsAssemblyLineComponent } from './settings/settings-assembly-line/settings-assembly-line.component';
import { SettingsEditAssemblyLineComponent } from './settings/settings-edit-assembly-line/settings-edit-assembly-line.component';
import { SettingsLayoutComponent } from './settings/settings-layout/settings-layout.component';


const routes: Routes = [
  {path:'SettingsEditAssemblyLine',component:SettingsEditAssemblyLineComponent},
  {path:'SettingsAssemblyLine',component:SettingsAssemblyLineComponent},
  {path:'SettingsLayout',component:SettingsLayoutComponent}
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

export const routingComponents =[SettingsLayoutComponent,SettingsAssemblyLineComponent,SettingsEditAssemblyLineComponent]