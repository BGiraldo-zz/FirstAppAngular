import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProfileComponentComponent } from './profile-component/profile-component.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    ProfileComponentComponent
  ],
  exports: [
    ProfileComponentComponent
  ]
})
export class BootcampModule { }
