export interface ISpecification {
  and(right: ISpecification): ISpecification;
  or(left: IsSpecification): ISpecification;
  getConditions(): any;
}
