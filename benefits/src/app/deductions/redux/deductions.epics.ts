import { Injectable } from "@angular/core";
import { Router } from "@angular/router";
import { DeductionsActions } from "./deductions.actions";
import { ofType } from 'redux-observable';
import { map } from 'rxjs/operators';

@Injectable()
export class DeductionsEpics {
  constructor(private router: Router, deductionsActions: DeductionsActions) { }

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
}
