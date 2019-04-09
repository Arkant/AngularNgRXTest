import { MatTableModule } from '@angular/material/table';
import { UserProfileComponent } from './user-profile.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatInputModule } from '@angular/material/input'; 
import { MatCardModule } from '@angular/material/card';
import { MatMenuModule } from '@angular/material/menu'; 
import { MatButtonModule } from '@angular/material/button'; 
import { MatGridListModule } from '@angular/material/grid-list'; 
import { FormsModule } from '@angular/forms';
import { MatListModule } from '@angular/material/list';


@NgModule({
  declarations: [
    UserProfileComponent,
  ],
  imports: [
    CommonModule,
    MatInputModule,
    MatCardModule,
    MatMenuModule,
    MatButtonModule,
    MatGridListModule,
    FormsModule,
    MatListModule,
    MatTableModule
  ],
  exports: [UserProfileComponent],
  providers: [],
})
export class UserProfileModule { }
