import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavigationModule } from './navigation/navigation.module';
import { HttpClientModule} from '@angular/common/http';
import { BenefitsCostService } from './benefits-cost.service';

@NgModule({
  imports: [
    CommonModule,
    HttpClientModule
  ],
  exports: [
    NavigationModule
  ],
  declarations: [],
  providers: [
    BenefitsCostService
  ]
})
export class CoreModule { }
