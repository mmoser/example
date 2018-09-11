import { Injectable } from "@angular/core";
import { Router } from "@angular/router";
import { DeductionsActions } from "./deductions.actions";
import { ofType } from 'redux-observable';
import { map, mergeMap } from 'rxjs/operators';
import { BenefitsCostService } from "../../core/benefits-cost.service";
import { IEmployeeCost } from "../../model/employee-cost";

@Injectable()
export class DeductionsEpics {
  constructor(private router: Router, private deductionsActions: DeductionsActions, private benefitsCostService: BenefitsCostService) { }

  empty = () => { return { type: 'EMPTY' }; };

  editEmployee = (action$, store$) => {
    return action$.pipe(
      ofType(DeductionsActions.EDIT_EMPLOYEE),
      map(() => {
        this.router.navigate(['deductions/preview/edit-employee']);
        return this.empty(); 
      }));
  };

  addEmployee = (action$, store$) => {
    return action$.pipe(
      ofType(DeductionsActions.ADD_EMPLOYEE),
      map(() => {
        this.router.navigate(['deductions/preview/add-employee']);
        return this.empty();
      }));
  };

  saveEmployee = (action$, store$) => {
    return action$.pipe(
      ofType(DeductionsActions.EDIT_EMPLOYEE_SAVED),
      mergeMap(() => {
        const employee = store$.value.deductionsState.deductionsPreview.employeeBeingEdited;
        return this.benefitsCostService.getEmployeeCost(employee)
          .pipe(map((response: IEmployeeCost) => {
            return this.deductionsActions.editEmployeeCostReceived(response);
          }));
      }));
  };

  employeeCostReceived = (action$, store$) => {
    return action$.pipe(
      ofType(DeductionsActions.EDIT_EMPLOYEE_COST_RECEIVED),
      map(() => {
        this.router.navigate(['deductions/preview/overview']);
        return this.empty();
      }));
  };
}
