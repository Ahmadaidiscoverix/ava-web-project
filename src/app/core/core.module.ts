import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MatModule } from '../module/mat/mat.module';
import { LayoutComponent } from './layout/layout.component';
import { HeaderComponent } from './header/header.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { RouterModule, RouterOutlet } from '@angular/router';



@NgModule({
  declarations: [
    HeaderComponent,
    SidebarComponent,
    LayoutComponent
  ],
  imports: [
    CommonModule,
    MatModule,
    RouterModule
  ],
  exports: [
    LayoutComponent
  ],
})
export class CoreModule { }
