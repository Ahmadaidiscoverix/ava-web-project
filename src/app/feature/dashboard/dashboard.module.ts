import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardHomeComponent } from './pages/dashboard-home/dashboard-home.component';
import { MatModule } from '../../module/mat/mat.module';
import { DashboardRoutingModule } from './dashboard-routing.module';
import { AppCardComponent } from './components/app-card/app-card.component';

@NgModule({
  declarations: [
    DashboardHomeComponent,
    AppCardComponent
  ],
  imports: [
    CommonModule,
    MatModule,
    DashboardRoutingModule,
  ]
})
export class DashboardModule { }
