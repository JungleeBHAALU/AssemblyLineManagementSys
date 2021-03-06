import { FormsModule } from '@angular/forms';
import { NgSelectModule } from '@ng-select/ng-select';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule,routingComponents } from './app-routing.module';
import { AppComponent } from './app.component';
import { SettingsLayoutComponent } from './settings/settings-layout/settings-layout.component';
import { SettingsAssemblyLineComponent } from './settings/settings-assembly-line/settings-assembly-line.component';
import { SettingsEditAssemblyLineComponent } from './settings/settings-edit-assembly-line/settings-edit-assembly-line.component';
import { MainAppLayoutPageComponent } from './main-app-layout-page/main-app-layout-page.component';
import { TopNavbarComponent } from './main-app-layout-page/top-navbar/top-navbar.component';
import {AssemblyLineService} from 'src/app/services/assembly-line.service';
import { SettingsComponent } from './settings/settings.component';

@NgModule({
  declarations: [
    AppComponent,
    SettingsLayoutComponent,
    SettingsAssemblyLineComponent,
    SettingsEditAssemblyLineComponent,
    MainAppLayoutPageComponent,
    TopNavbarComponent,
    SettingsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgSelectModule,
    FormsModule
  ],
  providers: [AssemblyLineService],
  bootstrap: [AppComponent]
})
export class AppModule { }
