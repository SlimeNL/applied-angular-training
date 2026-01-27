import { patchState, signalStore, withMethods, withState } from '@ngrx/signals';
import { R } from 'node_modules/msw/lib/core/HttpResponse-Cw4ELwIN.mjs';

type CounterState = {
  current: number;
};

export const counterStore = signalStore(
  withState<CounterState>({ current: 0 }),
  withMethods((store) => {
    // spoiler - this is a an injection context!
    return {
      increment: () => patchState(store, { current: store.current() + 1 }),
      decrement: () => patchState(store, { current: store.current() - 1 }),
      reset: () => patchState(store, { current: 0 }),
    };
  }),
);
