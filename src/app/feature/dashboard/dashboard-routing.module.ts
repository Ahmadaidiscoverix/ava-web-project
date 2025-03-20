import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardHomeComponent } from './pages/dashboard-home/dashboard-home.component';
import { LayoutComponent } from '../../core/layout/layout.component';
import { AuthGuard } from '../../core/guards/auth.guard';

const routes: Routes = [
  {
    path: '',
    component: LayoutComponent, // Use LayoutComponent
    children: [
      { path: '', component: DashboardHomeComponent, canActivate: [AuthGuard] },
      { path: 'guides', loadChildren: () => import('../guides/guides.module').then(m => m.GuidesModule) },
      { path: 'equest-features', loadChildren: () => import('../request-features/request-features.module').then(m => m.RequestFeaturesModule) }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardRoutingModule { }
