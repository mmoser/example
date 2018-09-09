import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PreviewComponent } from './preview/preview.component';
import { EmployeeCardComponent } from './preview/employee-card/employee-card.component';
import { SharedModule } from '../shared/shared.module';
import { TotalFooterComponent } from './preview/total-footer/total-footer.component';
import { DeductionsActions } from './redux/deductions.actions';
import { OverviewComponent } from './preview/overview/overview.component';
import { RouterModule } from '@angular/router';
import { DeductionsEpics } from './redux/deductions.epics';
import { ReactiveFormsModule } from '@angular/forms';
import { ModifyEmployeeComponent } from './preview/modify-employee/modify-employee.component';

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    RouterModule,
    SharedModule
  ],
  declarations: [
    EmployeeCardComponent,
    ModifyEmployeeComponent,
    OverviewComponent,
    PreviewComponent,
    TotalFooterComponent,
  ],
  providers: [
    DeductionsActions,
    DeductionsEpics
  ]
})
export class DeductionsModule { }
