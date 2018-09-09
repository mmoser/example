import { Injectable } from "@angular/core";
import { IEmployeeCost } from "../../model/employee-cost";
import { IEmployee } from "../../model/employee";
import { IPerson } from "../../model/person";

@Injectable()
export class DeductionsActions {
  static REMOVE_EMPLOYEE_REQUESTED = 'DEDUCTIONS_REMOVE_EMPLOYEE_REQUESTED';
  static REMOVE_EMPLOYEE_REQUESTED_CONFIRMED = 'DEDUCTIONS_REMOVE_EMPLOYEE_CONFIRMED';
  static REMOVE_EMPLOYEE_REQUESTED_CANCELLED = 'DEDUCTIONS_REMOVE_EMPLOYEE_CANCELLED';
  static EDIT_EMPLOYEE = 'DEDUCTIONS_EDIT_EMPLOYEE';
  static ADD_EMPLOYEE = 'DEDUCTIONS_ADD_EMPLOYEE';
  static EDIT_EMPLOYEE_CANCELLED = 'DEDUCTIONS_EDIT_EMPLOYEE_CANCELLED';
  static EDIT_EMPLOYEE_SAVED = 'DEDUCTIONS_EDIT_EMPLOYEE_SAVED';
  static ADD_DEPENDENT = 'DEDUCTIONS_ADD_DEPENDENT';
  static REMOVE_DEPENDENT = 'REMOVE_DEPENDENT';

  removeEmployeeRequested(employeeCost: IEmployeeCost) {
    return {
      type: DeductionsActions.REMOVE_EMPLOYEE_REQUESTED,
      payload: { employeeCost: employeeCost }
    };
  }

  removeEmployeeConfirmed() {
    return {
      type: DeductionsActions.REMOVE_EMPLOYEE_REQUESTED_CONFIRMED
    };
  }

  removeEmployeeCancelled() {
    return {
      type: DeductionsActions.REMOVE_EMPLOYEE_REQUESTED_CANCELLED
    };
  }

  addEmployee(employee: IEmployee) {
    return {
      type: DeductionsActions.ADD_EMPLOYEE,
      payload: { employee: employee }
    }
  }

  editEmployee(employee: IEmployee) {
    return {
      type: DeductionsActions.EDIT_EMPLOYEE,
      payload: { employee: employee }
    }
  }

  editEmployeeCancelled() {
    return {
      type: DeductionsActions.EDIT_EMPLOYEE_CANCELLED
    };
  }

  editEmployeeSaved() {
    return {
      type: DeductionsActions.EDIT_EMPLOYEE_SAVED
    };
  }

  addDependent() {
    return {
      type: DeductionsActions.ADD_DEPENDENT
    };
  }

  removeDependent(index: number) {
    return {
      type: DeductionsActions.REMOVE_DEPENDENT,
      payload: { index: index }
    };
  }
}
