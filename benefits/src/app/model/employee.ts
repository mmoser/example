import { IDependent } from "./dependent";
import { IPerson } from "./person";

export interface IEmployee extends IPerson {
  id: string,
  lastFourOfSocial: string,
  dependents: Array<IDependent>,
}
