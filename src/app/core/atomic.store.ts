import { BehaviorSubject, Observable } from "rxjs";

export type Action = { type: string; payload: unknown };

export type Change<T> = { action: Action; current: T; next: T };
export type Effect<T> = (change: Change<T>) => void;
export type Filter<T> = (change: Change<T>) => boolean;

export class AtomicStore<T> {
  private state$: BehaviorSubject<T>;
  // private state: T;

  constructor(private initialValue: T, private reducers: any[]) {
    this.state$ = new BehaviorSubject(initialValue);
  }

  public get$(): Observable<T> {
    return this.state$.asObservable();
  }

  public get(): T {
    //return this.clone(this.state);
    const current = this.state$.getValue();
    return this.clone(current);
  }

  public set(value: Partial<T>) {
    // this.state = this.clone(value);
    // this.state$.next(this.state);
    const current = this.get();
    const next = { ...current, ...value };
    this.state$.next(next);
  }

  public dispatch(action: Action): void {
    const current = this.get();
    const payload = action.payload;
    const reducer = this.reducers.find((r) => r.type === action.type);
    if (reducer == null) throw Error();
    const next = reducer(current, payload);
    this.state$.next(next);
  }

  protected clone(state: T) {
    // return state;
    // return { ...state };
    return JSON.parse(JSON.stringify(state));
  }
}
