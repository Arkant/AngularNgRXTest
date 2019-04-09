import { CommonModule } from '@angular/common';
import { HomeModule } from '../components/home/home.module';
import { NgModule } from '@angular/core';
import { UserProfileModule } from '../components/user-profile/user-profile.module';

@NgModule({
  imports: [
    CommonModule,
    HomeModule,
    UserProfileModule,
  ],
  declarations: [
  ],
  exports: [HomeModule, UserProfileModule]
})

export class CoreModule { }