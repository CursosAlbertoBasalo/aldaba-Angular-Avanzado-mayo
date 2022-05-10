import { BehaviorSubject, Observable } from "rxjs";
import { distinctUntilChanged, map } from "rxjs/operators";

export type Action = { type: string; payload: unknown };
export type Reducer<T> = (state: T, payload: unknown) => T;
export type Selector<T, K> = (state: T) => K;

// export type Change<T> = { action: Action; current: T; next: T };
// export type Effect<T> = (change: Change<T>) => void;
// export type Filter<T> = (change: Change<T>) => boolean;

export class AtomicStore<T> {
  private state$: BehaviorSubject<T>;
  // private state: T;

  constructor(initialValue: T, private reducers: Map<string, Reducer<T>>) {
    this.state$ = new BehaviorSubject(initialValue);
  }

  public get(): T {
    const current = this.state$.getValue();
    return this.clone(current);
  }

  public set(value: Partial<T>) {
    const current = this.get();
    const next = { ...current, ...value };
    this.state$.next(next);
  }

  public dispatch(action: Action): void {
    const reducer = this.reducers.get(action.type);
    if (reducer == null) throw Error("No reducer found for action type " + action.type);
    const current = this.get();
    const next = reducer(current, action.payload);
    this.state$.next(next);
  }

  public get$(): Observable<T> {
    return this.state$.asObservable();
  }

  public select$<K>(selector: Selector<T, K>): Observable<K> {
    return this.get$().pipe(map(selector), distinctUntilChanged());
  }

  private clone(state: T) {
    return JSON.parse(JSON.stringify(state));
  }
}
