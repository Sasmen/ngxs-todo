export class ListAction {
  public static readonly type = '[List] Add item';
  constructor(public payload: string) { }
}