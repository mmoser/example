import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavigationModule } from './navigation/navigation.module';
 
@NgModule({
  imports: [
    CommonModule
  ],
  exports: [
    NavigationModule
  ],
  declarations: []
})
export class CoreModule { }
