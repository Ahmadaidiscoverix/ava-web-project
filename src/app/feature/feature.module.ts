import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './dashboard/dashboard.component';
import { GuidesComponent } from './guides/guides.component';
import { SettingsComponent } from './settings/settings.component';
import { RequestFeatureComponent } from './request-feature/request-feature.component';
import { MatModule } from '../module/mat/mat.module';
import { ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    DashboardComponent,
    GuidesComponent,
    SettingsComponent,
    RequestFeatureComponent
  ],
  imports: [
    CommonModule,
    MatModule,
    ReactiveFormsModule
  ]
})
export class FeatureModule { }
