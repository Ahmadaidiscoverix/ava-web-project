import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatIcon } from '@angular/material/icon';
import {MatListModule} from '@angular/material/list';
import { MatTableModule } from '@angular/material/table';
import {MatSidenavModule} from '@angular/material/sidenav';
import { MatFormFieldModule, MatLabel } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatIconModule } from '@angular/material/icon';
import { MatCheckboxModule } from '@angular/material/checkbox';

const material = [
  MatButtonModule,
  MatCardModule,
  MatIconModule,
  MatListModule,  
  MatToolbarModule,
  MatTableModule,
  MatSidenavModule,
  MatInputModule,
  MatFormFieldModule,
  MatIcon,
  MatLabel,
  MatCheckboxModule
];


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    material
  ],
   exports:[material]
})
export class MatModule { }
