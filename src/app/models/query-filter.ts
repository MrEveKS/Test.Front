export class QueryFilter<TFilter> {

  take?: number;
  skip?: number;
  withCount?: boolean;

  filter: TFilter;

  constructor(params?: {}) {
    // tslint:disable-next-line: no-unused-expression
    params && Object.assign(this, params);
  }
}
