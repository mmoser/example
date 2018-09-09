import { IDependent } from "./dependent";
import { IPerson } from "./person";

export interface IEmployee extends IPerson {
  id: number,
  lastFourOfSocial: string,
  dependents: Array<IDependent>,
}
