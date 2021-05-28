import { useCallback } from "react";
import { shallowEqual, useDispatch, useSelector } from "react-redux";
// types
import type { RootState, AppDispatch } from "stores";
import { State, slice } from "./slice";
import { User } from "api/types";

export default function useAuthRedux() {
  const dispatch = useDispatch<AppDispatch>();
  const state: State = useSelector(
    (store: RootState) => store.auth,
    shallowEqual
  );

  const initialize = useCallback(
    (user: User) => dispatch(slice.actions.initialize(user)),
    [dispatch]
  );

  const setUser = useCallback(
    (user: User) => dispatch(slice.actions.setUser(user)),
    [dispatch]
  );

  return {
    state,
    authDispatch: {
      initialize,
      setUser,
    },
  };
}
