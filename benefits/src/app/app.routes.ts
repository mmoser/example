import { Routes } from "@angular/router";
import { PreviewComponent } from "src/app/deductions/preview/preview.component";
import { OverviewComponent } from "./deductions/preview/overview/overview.component";
import { ModifyEmployeeComponent } from "./deductions/preview/modify-employee/modify-employee.component";

export const appRoutes: Routes = [
  {
    path: 'deductions/preview', component: PreviewComponent,
    children: [
      { path: '', redirectTo: 'overview', pathMatch: 'full' },
      { path: 'overview', component: OverviewComponent },
      { path: 'add-employee', component: ModifyEmployeeComponent },
      { path: 'edit-employee', component: ModifyEmployeeComponent }
    ]
  },
  { path: '', redirectTo: '/deductions/preview/overview', pathMatch: 'full' }
];
