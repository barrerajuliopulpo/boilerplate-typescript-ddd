export interface ISpecification {
  and(right: ISpecification): ISpecification;
  or(left: ISpecification): ISpecification;
  getConditions(): any;
}
